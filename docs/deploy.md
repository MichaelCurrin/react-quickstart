# Deploy


## Build

Do a production build of the the React app, either locally or as part of a CI-CI flow as below.

- Yarn
    ```sh
    $ yarn build
    ```
- NPM
    ```sh
    $ npm run build
    ```

Note that the `homepage` value is read from [package.json](/package.json) and React sets `NODE_ENV='production'` for you.


## Github Pages

This project is setup to automatically build and deploy to the `gh-pages` branch on Github. That branch is used to run the Github Pages site, managed in repo settings.

Push or merge a Pull Request on master to trigger the CI/CD build.

See the [workflow](/.github/workflows/main.yml) file to manage this.
