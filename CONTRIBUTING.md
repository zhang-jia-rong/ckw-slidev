# Contributing to ckw-slidev

Thank you for considering contributing to ckw-slidev! 🎉 We welcome contributions from everyone. By participating in this project, you agree to abide by our [Code of Conduct](#code-of-conduct).

## Table of Contents

- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Enhancements](#suggesting-enhancements)
  - [Submitting Bug Fixes](#submitting-bug-fixes)
  - [Submitting Feature Requests](#submitting-feature-requests)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Code of Conduct](#code-of-conduct)

## Getting Started

1. Fork the repository on GitHub.
2. Clone your fork to your local machine:

   ```sh
   git clone https://github.com/your-username/ckw-slidev.git
   cd ckw-slidev
   ```

3. Install the dependencies:

   ```sh
   npm install
   ```

4. **Create an issue on GitHub if one does not already exist for your changes.** This helps in tracking and managing contributions effectively.

5. Create a new branch for your changes:

   ```sh
   git checkout -b pull/ISSUE_NUMBER  # Replace ISSUE_NUMBER with the actual issue number
   ```

## How to Contribute

### Reporting Bugs

If you find a bug, please open an issue on GitHub with the following information:

- A clear and descriptive title.
- A detailed description of the problem.
- Steps to reproduce the issue.
- Any relevant logs or screenshots. 📷

### Suggesting Enhancements

If you have an idea for a new feature or an improvement, please open an issue on GitHub with the following information:

- A clear and descriptive title.
- A detailed description of the enhancement.
- Any relevant examples or mockups. 💡

### Submitting Bug Fixes

1. Ensure your changes are consistent with the project's coding standards.
2. Run the tests to make sure your changes don't break anything:

   ```sh
   npm test
   ```

3. Commit your changes using a descriptive commit message. Follow the [Commit Message Guidelines](#commit-message-guidelines).
4. Push your branch to your fork on GitHub:

   ```sh
   git push origin pull/ISSUE_NUMBER  # Replace ISSUE_NUMBER with the actual issue number
   ```

5. Open a pull request on GitHub and provide a clear description of your changes, including the issue number that your fix addresses.

### Submitting Feature Requests

1. Ensure your changes are consistent with the project's coding standards.
2. Run the tests to make sure your changes don't break anything:

   ```sh
   npm test
   ```

3. Commit your changes using a descriptive commit message. Follow the [Commit Message Guidelines](#commit-message-guidelines).
4. Push your branch to your fork on GitHub:

   ```sh
   git push origin pull/ISSUE_NUMBER  # Replace ISSUE_NUMBER with the actual issue number
   ```

5. Open a pull request on GitHub and provide a clear description of your changes, including the issue number that your feature addresses. 🚀

## Commit Message Guidelines

We use [commitlint](https://commitlint.js.org/) to ensure consistent commit messages. Please follow these guidelines when writing commit messages:

- **Present Tense**: Use the present tense ("Add feature" not "Added feature").
- **Imperative Mood**: Use the imperative mood ("Move cursor to..." not "Moves cursor to...").
- **Character Limit**: Limit the first line to 72 characters or less. Note that if you use emojis, the emoji notation (e.g., `:art:`) counts towards the character limit.
- **References**: Reference issues and pull requests liberally after the first line.
- **Emojis**: Consider starting the commit message with an applicable emoji to convey the type of change. Emojis help to quickly identify the nature of the commit. Here are some examples:
  - 🎨 `:art:` for code structure/format improvements
  - 🐎 `:racehorse:` for performance enhancements
  - 🚱 `:non-potable_water:` for memory leak fixes
  - 📝 `:memo:` for documentation updates
  - 🐧 `:penguin:` for Linux-specific changes
  - 🍏 `:apple:` for macOS-specific changes
  - 🏁 `:checkered_flag:` for Windows-specific changes
  - 🐛 `:bug:` for bug fixes
  - 🔥 `:fire:` for code or file removals
  - 💚 `:green_heart:` for CI build fixes
  - ✅ `:white_check_mark:` for adding tests
  - 🔒 `:lock:` for security-related changes
  - ⬆️ `:arrow_up:` for dependency upgrades
  - ⬇️ `:arrow_down:` for dependency downgrades
  - 👕 `:shirt:` for removing linter warnings

If you are unsure which category your commit belongs to, consider looking at the existing commit history on the `develop` branch or other public branches for examples. You can also ask for help in the issues section for community answers and guidance.

To commit your changes, use:

```sh
npm run commitlint
```

## Code of Conduct

We expect all contributors to adhere to our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it to understand the standards of behavior we expect from everyone participating in the project.

Thank you for contributing! 🤝
