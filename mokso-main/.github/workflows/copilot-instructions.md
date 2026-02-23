# Copilot Instructions

## Context Overview

This repository, **new assets**, is designed for editing and managing Shoptet frontend assets. It includes SCSS, JavaScript, and other resources for building and deploying Shoptet projects.

### Key Files and Directories

- **SCSS**: Located in `src/css/` and `assetsold/css/`.
- **JavaScript**: Found in `src/js/` and `assets/js/`.
- **GitHub Actions Workflow**: `.github/workflows/production.yml` handles build and deployment.
- **Context File**: `context.json` stores repository metadata, tasks, and notes.

## Usage Guidelines

1. **Context File**: Always update `context.json` with new tasks, notes, or repository changes.
2. **SCSS Compilation**: Ensure paths in `package.json` and GitHub Actions workflow are consistent.
3. **JavaScript Build**: Use `esbuild` for bundling and minification.
4. **Deployment**: Verify the SFTP upload configuration in the workflow.
5. **Pravidelná aktualizace**: Pravidelně aktualizujte kontext a odpovídejte česky, komentáře v programu pište anglicky.

## Notes

- Keep this file updated with any new instructions or changes to the repository structure.
- Use `context.json` as the primary source for dynamic updates and tracking.
