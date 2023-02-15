# 3D Interactivity Lab

## Setup

Download [Node.js](https://nodejs.org/en/download/).
Run the following commands:

```bash
# Install dependencies (only the first time)
npm install

# Run the local server at localhost:8080
npm run dev

# Build for production in the dist/ directory
npm run build
```

## Starter Template vs. Final Examples

The [main branch](https://github.com/s3ththompson/3d-interactivity-lab/tree/main) of this repository is a series of templates for different lessons.

The [final examples](https://github.com/s3ththompson/3d-interactivity-lab/tree/final) can be found on the final branch.

## Lessons

1. Introduction to React (`src/1-react.jsx`)
1. Building With Components (`src/2-components.jsx`)
1. Three.js in React (`src/3-three.jsx`)
1. Building a Scene with Models (`src/4-model.jsx`)
1. Debugging in 3D Space (`src/5-debug.jsx`)

## References

- [React Beta Docs](https://beta.reactjs.org/learn)
- [Three.js docs](https://threejs.org/docs/index.html#manual/introduction/Creating-a-scene)
- [React Three Fiber docs](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
- [Drei: Useful Helpers for React Three Fiber](https://github.com/pmndrs/drei)
- [React Three Fiber examples](https://docs.pmnd.rs/react-three-fiber/getting-started/examples)
- [JavaScript.info](https://javascript.info/)

## Exporting Models from Rhino

1. Organize model materials into separate Rhino layers
1. Select desired objects for export
1. File > Export Selected > Save as OBJ (\*.obj)
1. In the OBJ Export Options, check the following settings to ensure that layers are exported as separate parts of the model

- Naming
  - Export Rhino object names: Do not export object names
  - Export Rhino layer/group names: Layers as OBJ groups
- Mesh
  - Use render meshes
