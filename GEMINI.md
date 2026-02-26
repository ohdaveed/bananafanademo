# Bananafana Preschool Landing Page

## Project Overview
This project is a lightweight frontend web prototype for the "Bananafana Preschool" landing page. It is designed as a modern, responsive website for a Spanish immersion preschool. 

The architecture uses a thin HTML shell with external CSS/JSX assets, while still relying on CDN libraries and no build tooling.

**Main Technologies:**
*   **React 18:** Used for UI components and state management (loaded via CDN).
*   **Babel (Standalone):** Compiles JSX to JavaScript in the browser at runtime.
*   **Tailwind CSS:** Used for styling, with a custom configuration embedded directly in the HTML `<head>` (loaded via CDN).
*   **Fonts:** Google Fonts (Fraunces and Work Sans).

## Building and Running
This project does not require a traditional build process or package manager (like npm or yarn).

**To run the project:**
1.  **Directly in a Browser:** Simply open the `index.html` file in any modern web browser.
2.  **Using VS Code:** If you are using Visual Studio Code, the workspace is configured to use the [Live Preview](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) extension. You can right-click the file and select "Show Preview" or start the Live Preview server.

*Note: The page contains an `<img src="bananafana-screenshot.png" ...>` tag. For the screenshot to display correctly, ensure a file named `bananafana-screenshot.png` is placed in the same directory.*

## Development Conventions
*   **Split Architecture:** The HTML shell is `index.html`, styles are in `assets/css/styles.css`, and React JSX app code is in `assets/js/app.jsx`.
*   **Styling:** Utility-first styling with Tailwind CSS is the primary convention, with supplemental custom CSS in `assets/css/styles.css`.
*   **Component Structure:** The UI is broken down into functional React components in `assets/js/app.jsx`, loaded by `<script type="text/babel" src="...">` from `index.html`.
