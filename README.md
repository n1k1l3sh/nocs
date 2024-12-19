# Contributing to NANI Documentation

Welcome! This guide will help you contribute to NANI's documentation. We use [Vocs](https://vocs.dev) as our documentation framework, which makes it easy to write and maintain documentation in MDX format.

## Getting Started

1. Make sure you have [Bun](https://bun.sh) installed on your system. If not, you can install it with:
```bash
curl -fsSL https://bun.sh/install | bash
```

2. Clone the repository and install dependencies:
```bash
git clone https://github.com/NaniDAO/nocs.git
cd nocs
bun install
```

3. Start the development server:
```bash
bun run dev
```

This will start a local server, typically at `http://localhost:5173`, where you can preview your changes in real-time.

## Project Structure

```
docs/
├── pages/          # Documentation content (MDX files)
│   ├── docs/       # Main documentation pages
│   └── blog/       # Blog posts (optional)
├── public/         # Static assets like images
├── vocs.config.ts  # Vocs configuration
└── package.json    # Project dependencies
```

## Adding New Documentation

1. Create a new `.mdx` file in the appropriate directory under `pages/docs/`.
2. Add your document's route to the sidebar in `vocs.config.ts`:

```typescript
sidebar: [
  // ... existing entries
  {
    text: "Your New Page",
    link: "/docs/your-new-page"
  }
]
```

### MDX File Format

Your MDX files should start with a title:

```mdx
# Your Page Title

Content goes here...
```

You can use all standard Markdown features plus React components.

### Key MDX Features

- Headers: Use `#`, `##`, `###`, etc.
- Code blocks: Use triple backticks with optional language specification
- Links: `[Link Text](URL)`
- Images: `![Alt Text](image-path)`
- React components: Import and use them directly in MDX

Example:
```mdx
# Getting Started

This is a paragraph with **bold** and *italic* text.

## Code Example
```solidity
contract Example {
    // Your code here
}
\```

## Running Locally

Development server (with hot reload):
```bash
bun run dev
```

Build for production:
```bash
bun run build
```

Preview production build:
```bash
bun run preview
```

## Making a Pull Request

1. Create a new branch with a descriptive name:
```bash
git checkout -b docs/add-new-section
```

2. Make your changes and commit them with clear messages:
```bash
git add .
git commit -m "docs: add section about XYZ"
```

3. Push your changes:
```bash
git push origin docs/add-new-section
```

4. Create a Pull Request on GitHub:
   - Use a clear and descriptive title (e.g., "docs: add guide for smart contract integration")
   - Include a detailed description of your changes
   - Reference any related issues
   - Add labels if applicable (e.g., "documentation")
   - Request reviewers if you know who should review your changes

### PR Guidelines

- **Title Format**: Use conventional commit format
  - `docs: add X` for new documentation
  - `docs: update X` for documentation updates
  - `docs: fix X` for documentation fixes
- **Description**: Explain what changes you are making and why
- **Breaking Changes**: Clearly mark any breaking changes
- **Documentation**: Make sure your documentation follows our style guidelines

## Style Guidelines

1. Use clear, concise language
2. Include code examples where relevant
3. Use proper heading hierarchy (don't skip levels)
4. Add links to related documentation
5. Include diagrams or images for complex concepts

## Need Help?

Join our [Discord](https://discord.gg/PFHZa7KPPc) for support and discussions about documentation.
