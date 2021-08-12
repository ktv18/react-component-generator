### How to create a component

Recomendation is use functional components, so use hooks when needed.
Keep component code in one file wherever possible, and if you find your file is
becoming too large, consider breaking it into smaller components and move hooks to separate files. Smaller
components and separated hooks are easier to read, and result in more reusability.

Below you can find a rough outline of a component structure:

```sh
[ComponentName]/
├── [ComponentName].js           # The raw component
├── [ComponentName].module.css   # Scoped styles for the component (can be less)
├── [ComponentName].utils.js     # Utils when needed
├── index.js                     # For the export
├── hooks/                       # Hooks when needed
└─┬ components/                  # Additional scoped components when needed
  ├── [ComponentName]/
  ├── [ComponentName2]/
  ├── ...
  └── index.js                  # For the export
```

Component hooks

```sh
hooks/
├── use[HookName].js
├── use[HookName2].js
└── index.js                  # For the export
```
