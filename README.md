# Project Name

## Overview
This project is set up using Webpack and TypeScript to bundle and manage the assets of your web application. It incorporates various Webpack plugins to streamline the development process and ensure clean and efficient builds.

The project uses the following key plugins:
- **HtmlWebpackPlugin**: Generates an HTML file for your bundle automatically.
- **CleanWebpackPlugin**: Ensures that the `dist` folder is cleaned before every build, removing any old files.
- **ForkTsCheckerWebpackPlugin**: Speeds up the build process by running TypeScript type checking in a separate process.

## Table of Contents

1. [Installation](#installation)
2. [Scripts](#scripts)
3. [Webpack Configuration](#webpack-configuration)
4. [File Structure](#file-structure)
5. [Development](#development)
6. [Build](#build)
7. [Plugins Overview](#plugins-overview)
8. [Contributing](#contributing)
9. [License](#license)

---

## Installation

Before starting, make sure you have [Node.js](https://nodejs.org/) installed on your machine.

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>


Scripts
The following scripts are available for use during development and production:

Start Development Server:
bash
Copier le code
npm start
This script runs the Webpack Dev Server with hot-reloading enabled, allowing you to see changes in real-time.

Build for Production:
bash
Copier le code
npm run build
This creates a production build, optimized and ready to be deployed.

Webpack Configuration
The Webpack configuration is set up to handle TypeScript compilation, file cleaning, and HTML file generation. Key parts of the configuration include:

Entry: Points to the main.ts file as the entry point of the application.
Output: Bundles files into the dist folder as bundle.js.
Plugins:
HtmlWebpackPlugin for automatic HTML file generation.
CleanWebpackPlugin for cleaning up the output folder.
ForkTsCheckerWebpackPlugin for type checking without slowing down the build process.
File Structure
Here is an overview of the key files and folders in the project:

graphql
Copier le code
├── js/
│   ├── main.ts        # Main TypeScript entry point
├── dist/              # Output folder for the bundled code
├── webpack.config.js  # Webpack configuration file
├── tsconfig.json      # TypeScript configuration file
├── package.json       # Project metadata and dependencies
└── README.md          # This documentation file
Development
To start developing, run the following command to launch the development server:

bash
Copier le code
npm start
Webpack Dev Server will serve your app and reload the page whenever changes are made.

Build
For a production-ready build, use:

bash
Copier le code
npm run build
This will generate an optimized version of the application in the dist folder.

Plugins Overview
HtmlWebpackPlugin: This plugin generates an HTML file that automatically includes the output JavaScript file.
CleanWebpackPlugin: Clears out the dist folder before every build to ensure that no old or unnecessary files remain.
ForkTsCheckerWebpackPlugin: Allows type checking for TypeScript in a separate process, which speeds up the build process.
