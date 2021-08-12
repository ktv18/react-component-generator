### How to create a component

Recomendation is use functional components, so use hooks when needed.
Keep component code in one file wherever possible, and if you find your file is
becoming too large, consider breaking it into smaller components and move hooks to separate files. Smaller
components and separated hooks are easier to read, and result in more reusability.

Below you can find a rough outline of a component structure:

```sh
[ComponentName]/
├── [ComponentName].tsx           # The raw component
├── [ComponentName].test.tsx      # The component tests
├── [ComponentName].module.css    # Scoped styles for the component (can be scss)
├── [ComponentName].utils.ts      # Utils when needed
├── index.ts                      # For the export
├── hooks/                        # Hooks when needed
└─┬ components/                   # Additional scoped components when needed
  ├── [ComponentName]/
  ├── [ComponentName2]/
  ├── ...
  └── index.ts                    # For the export
```

Component hooks

```sh
hooks/
├── use[HookName].ts
├── use[HookName2].ts
└── index.ts                      # For the export
```
