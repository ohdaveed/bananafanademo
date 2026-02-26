# Bananafana Preschool Landing Page

## Project Overview
This project is a single-file frontend web prototype for the "Bananafana Preschool" landing page. It is designed as a modern, responsive website for a Spanish immersion preschool. 

The architecture is entirely self-contained within a single HTML file, utilizing external libraries via CDNs. 

**Main Technologies:**
*   **React 18:** Used for UI components and state management (loaded via CDN).
*   **Babel (Standalone):** Compiles JSX to JavaScript in the browser at runtime.
*   **Tailwind CSS:** Used for styling, with a custom configuration embedded directly in the HTML `<head>` (loaded via CDN).
*   **Fonts:** Google Fonts (Fraunces and Work Sans).

## Building and Running
This project does not require a traditional build process or package manager (like npm or yarn).

**To run the project:**
1.  **Directly in a Browser:** Simply open the `bananafana-standalone.html` file in any modern web browser.
2.  **Using VS Code:** If you are using Visual Studio Code, the workspace is configured to use the [Live Preview](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) extension. You can right-click the file and select "Show Preview" or start the Live Preview server.

*Note: The page contains an `<img src="bananafana-screenshot.png" ...>` tag. For the screenshot to display correctly, ensure a file named `bananafana-screenshot.png` is placed in the same directory.*

## Development Conventions
*   **Self-Contained Architecture:** All React components (`ProgramCard`, `ValueCard`, `BananafanaLandingPage`), custom CSS styling, and Tailwind configuration are located within the `bananafana-standalone.html` file. 
*   **Styling:** Utility-first styling with Tailwind CSS is the primary convention. Custom colors (`banana`, `lagoon`, `berry`) and fonts are defined in the `tailwind.config` script block. A small set of custom CSS classes (e.g., `.hero-grid`, `.floaty`, `.glass`) are defined in the `<style>` block for specific animations and background effects.
*   **Component Structure:** The UI is broken down into functional React components defined within the `<script type="text/babel">` tag. Data for the page (programs, values, steps) is defined as arrays within the main component and rendered by mapping over them.
