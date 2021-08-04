# Usage


## Run
> How to start the app locally

- Yarn
    ```sh
    $ yarn start
    ```
- NPM
    ```sh
    $ npm start
    ```

Open in the browser:

- [localhost:3000/react-quickstart](http://localhost:3000/react-quickstart)

The subpath is derived from a value in [package.json](/package.json) and allows the site to work properly on a subpath on GitHub Pages.

If you make changes in the app, the browser will update to show the latest page.

See more commands covered in the CLI-generated [Bootstrapped Readme](bootstrapped-readme.md).


## Run tests

Run tests in watch mode - only files that are changed are tested and the command stays running ready to rerun tests.

- Yarn
    ```sh
    $ yarn test
    ```
- NPM
    ```sh
    $ npm test
    ```

Sample output:

```
 PASS  src/App.test.js
  ✓ renders Hello world (36ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        4.116s
Ran all test suites related to changed files.
```

Or using `make`.

```sh
$ make test
```


## Format

Prettier is not included as a direct dependency of this project. But, you can apply Prettier formatting by running this. This will download Prettier or use a globally-installed Prettier.

```sh
$ yarn fmt:fix
```

The single quotes option is configured there, to keep inline with the original `create-react-app`.


## Lint

Hopefully you can still get the linting you need from the `react-scripts` commands.

Unfortunately, this app does **not** supporting running ESLint alone. Here is what happens if you try:

```sh
$ npx eslint .
```
```
Oops! Something went wrong! :(
...
```

ESLint has been configured, but if you try to use it, you get warnings about packages which are missing. The idea is not to diverge from the original `create-react-app` packages, so this template does not add extra parts for linting.
