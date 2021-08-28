# Development
> Notes on how this template was created and how to use it

- It is better to set state through a method rather than by changing state directly.
- The [Toggle](/src/components/Toggle.jsx) component is based on part of this video: [Get started with React in under 10 minutes](https://youtu.be/K02AkMbV1HM).
- This project uses 3 main dependencies (they all came with the React CLI quickstart app).
    - `react` - for the core application.
    - `react-dom` - for using `ReactDom` in [App.jsx](/src/App.jsx).
    - `react-scripts` - used to setup the `script` commands in [package.json](/package.json).
- There are 3 testing libraries - these were moved to dev dependencies.
- The dependency versions are based on the create-react-app ones. Despite this, there still many errors and warnings, which I will not bother to resolve because the app works fine without fixing these and the package versions are determined externally.
	```sh
	$ yarn check
	```
	```
	...
	info Found 46 warnings.
	error Found 12 errors.
	```
- When running the `build` command, the `NODE_ENV` value will be set to `production` by React - see [React docs - Adding custom env variables](https://create-react-app.dev/docs/adding-custom-environment-variables/).
- Homepage
    - The `homepage` value is set in [package.json](/package.json).
    - Customize this value for your repo. Or remove it if not needed.
    - This value not just metadata but actually gets used on the build. The `index.html` in the output includes `src="/react-quickstart/static/js/..."` for example.
    - For a remote environment, this project is serving on GH Pages on a subpath. Therefore if you omit the `homepage` value, this site will build **incorrectly**. Assets will be looked up like `/manifest.json`, instead of `/react-quickstart/manifest.json`.
    - Based on my testing, the build doesn't seem to care whether the value is just a path (`/react-quickstart/`) or the full URL (`https://michaelcurrin.github.io/react-quickstart/`). Which means that this approach works outside of GH Pages too.
- I renamed the `App.js` file to `App.jsx`. Same for the `Foo` component. No imports were affected.
