# Coditor

## Description

This project is a lightweight, responsive, and customizable code editor built with monacod and react.

Author: Udit Sen (https://aedit.me)

This is a simple implementation of the Monaco Editor interface.

## Features

- **Directory Tree**: Lists all the files and folders in the directory tree.
- **Light/Dark Themes**: Light and dark themes are supported.
- **Multiple Worksheet Tabs**: Open and edit multiple worksheets.
- **Worksheets restore**: Option to close worksheets. Worksheets get saved in the user's local storage.
- **Add worksheets**: New worksheets are created when the user clicks on add worksheets button.
- **Branch switching**: Switch between different branches.
- **Git Status**: See the git status of file with highlighted name.
- **File Icons**: Different files have different icons.



## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/aedit/coditor.git
    ```

2. Navigate into project directory
    ```bash
    cd code-editor
    ```

3. Install the necessary dependencies
    ```bash
    npm install
    ```

4. Run the development server
    ```bash
    npm run dev
    ```

5. Run lint command
    ```bash
    npm run lint
    ```

6. Run format command
    ```bash
    npm run format
    ```

## Project Structure

```plaintext
.
├── public
│   └── ...
├── src
│   ├── components
│   ├── configs
│   ├── utilities
│   ├── contexts
│   ├── hooks
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── tailwind.config.js
├── tsconfig.app.json
├── package.json
├── README.md
└── ...

- **public/**: Contains static assets like app logo.
- **src/**: Contains the core logic of the code editor.
- **components/**: React components for the editor interface.
- **configs/**: Mock data for files, branches and worksheets response.
- **contexts/**: React contexts for the editor interface.
- **hooks/**: React hooks for the editor interface
- **utilities/**: Utility functions and helpers.