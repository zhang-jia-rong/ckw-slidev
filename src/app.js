import fs from 'fs';
import path from 'path';
import inquirer from 'inquirer';
import chalk from 'chalk';

const pagesDir = path.join(process.cwd(), 'pages');
const rootSlidesPath = path.join(process.cwd(), 'slides.md');

// Function to recursively read directory structure and count .md files
function getDirectoryStructure(dir) {
  const structure = [];
  const items = fs.readdirSync(dir);

  items.forEach((item) => {
    const fullPath = path.join(dir, item);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      const subStructure = getDirectoryStructure(fullPath);
      const mdFileCount = subStructure.reduce(
        (count, subItem) => count + (subItem.type === 'file' ? 1 : 0),
        0,
      );
      structure.push({
        name: item,
        type: 'directory',
        path: fullPath,
        mdFileCount,
        children: subStructure,
      });
    } else if (stats.isFile() && item.endsWith('.md')) {
      structure.push({ name: item, type: 'file', path: fullPath });
    }
  });

  return structure;
}

// Function to display the directory structure
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
function createSymbolicLink(target) {
  try {
    if (fs.existsSync(rootSlidesPath)) {
      fs.unlinkSync(rootSlidesPath);
    }
    fs.symlinkSync(target, rootSlidesPath);
    console.log(
      chalk.green(`Symbolic link created: ${rootSlidesPath} -> ${target}`),
    );
  } catch (error) {
    console.error(
      chalk.red(`Failed to create symbolic link: ${error.message}`),
    );
  }
}

// Function to navigate directories and select a file
async function navigateDirectories(structure, currentPath = []) {
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
async function runApp() {
  const structure = getDirectoryStructure(pagesDir);

  console.log(chalk.yellow('Directory structure under "pages":'));
  displayStructure(structure);

  const selectedFile = await navigateDirectories(structure);

  createSymbolicLink(selectedFile);
}

// Run the app
runApp();
