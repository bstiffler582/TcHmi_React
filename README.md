## TcHmi_React

This repository illustrates React component compatibility with Beckhoff's TwinCAT HMI.

The React component `Faceplate.jsx` is bundled into a JavaScript file using webpack, and then imported into a TcHmi framework control. React is referenced via UMD `<script>` elements.

Make your own:

1. Load dependencies
    - `npm install react react-dom @babel/core babel-loader @babel/preset-react webpack webpack-cli --save-dev`
2. Create your React app / components
    - I started from scratch with `npx create-rsbuild --template react`
3. Bundle component(s) with Webpack (see [webpack config](./react-app/webpack.config.js))
    - `npx webpack --mode production`
4. Create an empty framework project in TwinCAT HMI
5. Add references to React and ReactDOM UMD files in the framework project
    - E.g. download from [here](https://unpkg.com/react@18/umd/react.production.min.js) and [here](https://unpkg.com/react-dom@18/umd/react-dom.production.min.js)
    - Add the files somewhere in the project
    - Point to the files as resources in the `Manifest.json` file **before** the control entry:

    ```
    ...
    {
      "type": "Resource",
      "path": "./React/react.development.js"
    },
    {
      "type": "Resource",
      "path": "./React/react-dom.development.js"
    },
    {
      "type": "Control",
    ...
    ```
6. Add a framework control to the framework project
7. Reference the bundled component in the control's `Description.json` file:
    ```
    "dependencyFiles": [
        ...
        {
            "name": "../../my-react-app/bundled/MyComponent.js",
            "type": "JavaScript",
            "description": "Bundled component"
        }
    ]
    ```
8. If the above `name` path is not directly referenced in your framework or HMI project, add a virtual directory entry in the HMI project's `TcHmiSrv` config.
9. In the control's main JS file, use `ReactDOM.createRoot` and `React.createElement` functions to attach the component, render/re-render, and pass in props.

### Runtime Versions
- React 18
- TwinCAT HMI 14.3
- TwinCAT 4026.15