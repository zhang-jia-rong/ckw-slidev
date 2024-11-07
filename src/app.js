import fs from 'fs';
import path from 'path';
import inquirer from 'inquirer';
import chalk from 'chalk';

const pagesDir = path.resolve(process.cwd(), 'pages');
const rootSlidesPath = path.resolve(process.cwd(), 'slides.md');

class SecurePath {
  // Updated regex to allow more valid path characters
  static #allowedCharsRegex = /^[\w\-.][\w\-.]*$/;

  static #sanitizePath(component) {
    if (!component || typeof component !== 'string') {
      return false;
    }

    // Remove any truly dangerous characters but keep valid path chars
    const sanitized = component.replace(/[^\w\-.]|[/\\]/g, '');
    return sanitized === component ? sanitized : false;
  }

  static #isValidComponent(component) {
    const sanitized = this.#sanitizePath(component);
    if (!sanitized) return false;

    // Only check for dangerous traversal components
    const dangerous = ['', '.', '..'];
    return !dangerous.includes(sanitized);
  }

  static #safeJoinPaths(base, target) {
    // Pre-validate components
    const components = target.split(path.sep).filter(Boolean);
    const validComponents = components.every((c) => this.#isValidComponent(c));
    if (!validComponents) {
      throw new Error('Invalid path components detected');
    }

    return path.normalize(base + path.sep + components.join(path.sep));
  }

  static #validateBasePath(basePath) {
    if (typeof basePath !== 'string') {
      throw new TypeError('Base path must be a string');
    }

    // Special handling for root-level directories
    const normalizedBase = path.normalize(basePath);
    const currentDir = process.cwd();

    // Safe path joining for absolute base path
    const absoluteBase = path.isAbsolute(normalizedBase)
      ? normalizedBase
      : this.#safeJoinPaths(currentDir, normalizedBase);

    if (!fs.existsSync(absoluteBase)) {
      throw new Error('Base path does not exist');
    }

    const realBase = fs.realpathSync(absoluteBase);
    const realCwd = fs.realpathSync(currentDir);

    if (!realBase.startsWith(realCwd)) {
      throw new Error('Base path must be within current working directory');
    }

    return realBase;
  }

  static resolve(basePath, ...paths) {
    // Validate base path
    const validatedBase = this.#validateBasePath(basePath);

    // Early return for no additional paths
    if (paths.length === 0) {
      return validatedBase;
    }

    // Use safeJoinPaths for consistent path joining
    const safePath = this.#safeJoinPaths(validatedBase, paths.join(path.sep));

    // Final security check
    const realPath = fs.realpathSync(safePath);
    if (!realPath.startsWith(validatedBase)) {
      throw new Error('Path traversal detected');
    }

    return safePath;
  }
}

// Modified directory structure function
function getDirectoryStructure(dir) {
  const structure = [];
  try {
    // Simplified directory handling
    const items = fs.readdirSync(dir);

    for (const item of items) {
      try {
        // Use SecurePath.resolve instead of path.join
        const fullPath = SecurePath.resolve(dir, item);
        const stats = fs.statSync(fullPath);

        if (stats.isDirectory()) {
          const subStructure = getDirectoryStructure(fullPath);
          const mdFileCount = subStructure.filter(
            (i) => i.type === 'file',
          ).length;
          structure.push({
            name: item,
            type: 'directory',
            path: fullPath,
            mdFileCount,
            children: subStructure,
          });
        } else if (stats.isFile() && item.endsWith('.md')) {
          structure.push({
            name: item,
            type: 'file',
            path: fullPath,
          });
        }
      } catch (error) {
        // Improve error handling for invalid paths
        if (error.message.includes('Invalid path')) {
          console.error(chalk.yellow(`Skipping invalid path: ${item}`));
          continue;
        }
        console.error(chalk.red(`Error processing ${item}: ${error.message}`));
      }
    }
  } catch (error) {
    console.error(chalk.red(`Error reading directory: ${error.message}`));
  }

  return structure;
}

// Function to display the directory structure
// Add error handling for empty structure
function displayStructure(structure, indent = 0) {
  structure.forEach((item) => {
    const prefix = ' '.repeat(indent);
    if (item.type === 'directory') {
      console.log(
        chalk.blue.bold(
          `${prefix}${item.name}/ (${item.mdFileCount} .md files)`,
        ),
      );
      displayStructure(item.children, indent + 2);
    } else {
      console.log(chalk.green(`${prefix}${item.name}`));
    }
  });
}

// Function to create a symbolic link
// Update createSymbolicLink to use SecurePath
function createSymbolicLink(target) {
  try {
    const secureTarget = SecurePath.resolve(target);
    if (fs.existsSync(rootSlidesPath)) {
      fs.unlinkSync(rootSlidesPath);
    }
    fs.symlinkSync(secureTarget, rootSlidesPath);
    console.log(
      chalk.green(
        `Symbolic link created: ${rootSlidesPath} -> ${secureTarget}`,
      ),
    );
  } catch (error) {
    console.error(
      chalk.red(`Failed to create symbolic link: ${error.message}`),
    );
  }
}

// Function to navigate directories and select a file
async function navigateDirectories(structure, currentPath = []) {
  if (!structure || structure.length === 0) {
    console.log(chalk.yellow('No markdown files found in this directory.'));
    return null;
  }

  const choices = structure.map((item) => ({
    name:
      item.type === 'directory'
        ? `${item.name}/ (${item.mdFileCount} .md files)`
        : item.name,
    value: item,
  }));

  if (currentPath.length > 0) {
    choices.unshift({ name: 'Go back', value: 'back' });
  }

  const { selected } = await inquirer.prompt([
    {
      type: 'list',
      name: 'selected',
      message: 'Select a category or file:',
      choices,
    },
  ]);

  if (selected === 'back') {
    currentPath.pop();
    return navigateDirectories(structure, currentPath);
  }

  if (selected.type === 'directory') {
    currentPath.push(selected);
    return navigateDirectories(selected.children, currentPath);
  }

  return selected.path;
}

// Main function to run the interactive terminal app
// Add null check in main function
async function runApp() {
  const structure = getDirectoryStructure(pagesDir);

  console.log(chalk.yellow('Directory structure under "pages":'));
  displayStructure(structure);

  const selectedFile = await navigateDirectories(structure);

  if (selectedFile) {
    createSymbolicLink(selectedFile);
  } else {
    console.log(chalk.red('No file selected. Exiting...'));
  }
}

// Run the app
runApp();
