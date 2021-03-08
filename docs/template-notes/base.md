# Base
> How to view the files for the base project that this template was created from


## Files

Links to `facebook/create-react-app` repo.

If you want to see the most recent code that `create-react-app` command provides without running, see these files.

- Basic
    - Dependencies: [packages/cra-template/template.json](https://github.com/facebook/create-react-app/blob/master/packages/cra-template/template.json) directory.
    - Scripts: [packages/cra-template/template](https://github.com/facebook/create-react-app/tree/master/packages/cra-template/template).
- With TypeScript
    - Dependencies: [packages/cra-template-typescript/template.json](https://github.com/facebook/create-react-app/blob/master/packages/cra-template-typescript/template.json).
    - Scripts: [cra-template-typescript/template)](https://github.com/facebook/create-react-app/tree/master/packages/cra-template-typescript/template) directory.


## Package versions

The `package.json` file in this template might also go out of date. See the links above to see the latest values.

Or use `latest` to install/upgrade the packages used by this project's [package.json](/package.json) file.

e.g.

```sh
$ npm add react@latest react-dom@latest react-scripts@latest web-vitals@latest
```


## Package lockfile

The `package-lock.json` file is deliberately left out of this template project.

Adding it in does mean that Dependabot and Snyk can provide better checks and PRs.

But, React has _so many_ packages and subdependencies and there are frequent vulnerabilities that come up, such as for a package used 5 levels down.

I'm not actively using this template, so I'd rather let those vulnerabilities get handled in a separate project. One that is used by people and that uses this template but has its own lockfile.
