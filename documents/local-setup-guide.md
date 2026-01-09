# Local Development Setup Guide

This guide provides step-by-step instructions to set up and run the sgCorpUni website locally for development.

## Prerequisites

- **Node.js**: Version 18 or higher (recommended: latest LTS).
- **npm**: Comes with Node.js (version 8 or higher).
- **Git**: For cloning the repository (if not already cloned).

Verify installations:
```bash
node --version
npm --version
```

## Project Setup

1. **Navigate to the project directory**:
   ```bash
   cd /Users/sivakumarsaminathan/Desktop/GIT_PROJECTS_URGENT/sgCorpUni
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   This installs all required packages from `package.json`.

## Running the Application

1. **Start the development server**:
   ```bash
   npm run dev
   ```
   - This launches Next.js in development mode.
   - The server runs on `http://localhost:3000` by default.
   - Hot reloading is enabled for code changes.

2. **Access the site**:
   - Open your browser and go to `http://localhost:3000`.
   - Navigate through pages: Home (`/`), How It Works (`/how-it-works`), Contact (`/contact`), etc.

## Available Scripts

- `npm run dev`: Start development server.
- `npm run build`: Build for production.
- `npm run start`: Start production server (after build).
- `npm run lint`: Run ESLint for code quality.
- `npm test`: Run Jest tests.

## Running Tests

To verify functionality:
```bash
npm test
```
- Runs unit and integration tests.
- Tests cover component rendering and form submissions.

## Development Workflow

1. Make changes to code (e.g., edit `.tsx` files).
2. Save files; the dev server auto-reloads.
3. Check browser for updates.
4. Run tests to ensure no regressions: `npm test`.

## Troubleshooting

- **Port in use**: If 3000 is occupied, Next.js may use 3001, etc.
- **Dependencies issues**: Delete `node_modules` and `npm install` again.
- **Tests failing**: Ensure `npm install` completed successfully.
- **Lint errors**: Run `npm run lint` and fix issues.

## Project Structure

- `app/`: Next.js App Router pages.
- `components/`: Reusable UI components.
- `lib/`: Utilities (e.g., `utils.ts`).
- `documents/`: Guides and architecture docs.
- `jest.config.js`: Test configuration.
- `tailwind.config.js`: Styling config.

For more details, refer to `documents/technical-architecture.md`.
