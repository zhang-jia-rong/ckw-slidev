# ckw-slidev (Cheung Ka Wing's Slidev)

Welcome to [ckw-slidev](https://github.com/zhang-jia-rong/ckw-slidev) (Cheung Ka Wing's Slidev) project! 🎉 This project leverages [Slidev](https://sli.dev/) to create interactive and engaging presentations. "CKW" stands for [Cheung Ka Wing](https://github.com/zhang-jia-rong), the creator of this project.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Introduction

`ckw-slidev` is my personal presentation tool that combines the power of [Markdown](https://daringfireball.net/projects/markdown/) with the flexibility of [Vue.js](https://vuejs.org/). It allows me to create beautiful presentations with elegance. 🎨

## Features

Our presentation tool comes packed with powerful capabilities to help you create stunning presentations. ✨ We combine the simplicity of Markdown with the interactivity of modern web technologies to deliver an exceptional authoring experience.

- **Interactive Presentations**: Create dynamic slides with animations and click handlers
- **Markdown Support**: Write your content in familiar Markdown syntax
- **Custom Themes**: Personalize your presentations with custom styling
- **Live Reload**: Watch your changes appear instantly as you work 🔄
- **Custom Fonts**: Enhance typography with Maple Mono, Resource Han Rounded, and Source Han Serif
- **Code Quality Tools**: Keep your code clean with integrated tools
- **Automated Releases**: Streamline deployments with CalVer support
- **Git Hooks**: Maintain quality standards with pre-commit checks

## Getting Started

To get started, clone the repository and install the dependencies:

```sh
git clone https://github.com/your-username/ckw-slidev.git
cd ckw-slidev
npm install
```

To start the development server and view your presentation:

```sh
npm run dev
```

This will start a local server and open your presentation in the default web browser. 🌐

## Project Structure

We've organized the codebase to be intuitive and maintainable 🏗️. Each directory serves a specific purpose, making it easy to find and modify components as needed:

```text
ckw-slidev/
├── .trunk/         # Quality tools setup
├── components/     # Vue components for slides
├── pages/          # Your presentation content
├── public/         # Static assets and fonts
├── src/            # Core application logic
└── styles/         # Theme configurations
```

## Development

Writing presentations should be enjoyable and efficient 🚀. Our development workflow is designed to get you up and running quickly while maintaining high code quality standards.

### Available Scripts

These carefully selected commands help streamline your development process ⚡:

- `npm run dev` - Launch local development server
- `npm run fmt` - Format your code beautifully
- `npm run lint` - Check for code quality issues
- `npm run commitlint` - Ensure proper commit messages
- `npm run release` - Package and publish new versions

### Code Quality Tools

We believe in maintaining the highest standards for our code 🛠️. Our toolchain includes:

- **[Trunk](https://trunk.io)**: Coordinates our code quality pipeline
- **[Codespell](https://github.com/codespell-project/codespell)**: Catches those pesky typos
- **[ESLint](https://eslint.org/)**: Ensures clean JavaScript/TypeScript
- **[Prettier](https://prettier.io/)**: Maintains consistent formatting
- **[Stylelint](https://stylelint.io/)**: Keeps CSS organized and efficient

## Contributing

We welcome contributions! 🤝 Please read our [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to contribute to this project.

We use [commitlint](https://commitlint.js.org/) to ensure consistent commit messages. To commit your changes, use:

```sh
npm run commitlint
```

We use [Husky](https://typicode.github.io/husky/#/) to manage Git hooks. To install Husky:

```sh
npm run prepare
```

We use [release-it](https://github.com/release-it/release-it) for automated releases. To create a new release:

```sh
npm run release
```

## License

This project is licensed under the [Attribution-NonCommercial-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/) (CC BY-NC-SA 4.0) License. 📜 You are free to share and adapt the material for non-commercial purposes, provided you give appropriate credit, link to the license, and indicate if changes were made. If you remix, transform, or build upon the material, you must distribute your contributions under the same license as the original. For more details, see the [LICENSE](LICENSE) file.

### Dependencies

This project uses third-party libraries that are licensed under their respective licenses. 📦 Please review the licenses of both `"dependencies"` and `"devDependencies"` to ensure compliance.

Even though `"devDependencies"` are not used in the production environment, their licenses can still impose legal obligations during development, testing, and distribution. Therefore, it's important to consider the licenses of all third-party libraries used in the project.

<p
  xmlns:cc="http://creativecommons.org/ns#"
  xmlns:dct="http://purl.org/dc/terms/"
>
  <a
    property="dct:title"
    rel="cc:attributionURL"
    href="https://github.com/zhang-jia-rong/ckw-slidev"
    >ckw-slidev</a
  >
  by
  <a
    rel="cc:attributionURL dct:creator"
    property="cc:attributionName"
    href="https://github.com/zhang-jia-rong"
    >Zhang Jia Rong</a
  >
  is licensed under
  <a
    href="https://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1"
    target="_blank"
    rel="license noopener noreferrer"
    style="display:inline-block;"
    >Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International<img
      style="height:22px!important;margin-left:3px;vertical-align:text-bottom;"
      src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"
      alt="" /><img
      style="height:22px!important;margin-left:3px;vertical-align:text-bottom;"
      src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"
      alt="" /><img
      style="height:22px!important;margin-left:3px;vertical-align:text-bottom;"
      src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"
      alt="" /><img
      style="height:22px!important;margin-left:3px;vertical-align:text-bottom;"
      src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1"
      alt=""
  /></a>
</p>
