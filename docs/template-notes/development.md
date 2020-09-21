# Development
> Notes on how this template was created and how to use it

- It is better to set state through a method rather than by changing state directly.
- The Foo component is based on part of this video: [Get started with React in under 10 minutes](https://youtu.be/K02AkMbV1HM).
- This project uses 3 main dependencies (they all came with the React CLI quickstart app).
    - `react` - for the core application.
    - `react-dom` - for using `ReactDom` in [App.js](/src/App.js).
    - `react-scripts` - used to setup the `script` commands in [package.json](/package.json).
- There are 3 testing libraries - these were moved to dev dependencies.
- When running the `build` command, the `NODE_ENV` value will be set to `production` by React - see [React docs - Adding custom env variables](https://create-react-app.dev/docs/adding-custom-environment-variables/).
- Homepage
    - The `homepage` value is set in [package.json](/package.json) and is used on the build. The `index.html` in the output includes `src="/react-quickstart/static/js/..."` for example.
    - This is necessary for GH Pages build to work correctly on a subpath.
    - It doesn't seem to matter whether the value is just a path (`/react-quickstart/`) or the full URL (`https://michaelcurrin.github.io/react-quickstart/`).
    - Customize this value for your repo.
- The `App.js` file was renamed to `App.jsx`. Same for the `Foo` component. No imports were affected.
