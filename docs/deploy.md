# Deploy


## Build

Do a production build of the the React app, either locally or as part of a CI/CI flow as below.

- Yarn
    ```sh
    $ yarn build
    ```
- NPM
    ```sh
    $ npm run build
    ```

Note that the `homepage` value is read from [package.json](/package.json) and React sets `NODE_ENV='production'` for you.


## CI GitHub Actions

This project is setup to automatically build and deploy to the `gh-pages` branch on Github. That branch is used to run the GitHub Pages site, managed in repo settings.

Do a **push** to `master` or merge a **Pull Request** against `master` to trigger the CI/CD build.

A build will always happen, but the app will only deploy on a push to `master`, ignoring a Pull Request.

See the [workflow](/.github/workflows/main.yml) file to manage this.


## Configure GH Pages

After a successful build, you can configure your site to be served on GitHub Pages as follows:

1. Go to repo _Settings_.
2. Go to _GitHub Pages_ section.
3. Enable the site on `gh-pages` branch `root` directory.
4. Wait for your site to build.
5. Check the Actions tab on the repo for the status of the build.
6. Open the public URL when it is done. e.g. https://MichaelCurrin.github.io/react-quickstart
