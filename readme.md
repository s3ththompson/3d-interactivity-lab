# 3D Lab Starter

## Setup
Download [Node.js](https://nodejs.org/en/download/).
Run the following commands:

``` bash
# Install dependencies (only the first time)
npm install

# Run the local server at localhost:8080
npm run dev

# Build for production in the dist/ directory
npm run build
```
## Exporting Models from Rhino

1. Organize model materials into separate Rhino layers
1. Select desired objects for export
1. File > Export Selected > Save as OBJ (*.obj)
1. In the OBJ Export Options, check the following settings to ensure that layers are exported as separate parts of the model
  - Naming
    - Export Rhino object names: Do not export object names
    - Export Rhino layer/group names: Layers as OBJ groups
  - Mesh
    - Use render meshes