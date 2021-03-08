# Package locking

The `package-lock.json` file is deliberately left out of this template project.

Adding it in does mean that Dependabot and Snyk can provide better checks and PRs.

But, React has _so many_ packages and subdependencies and there are frequent vulnerabilities that come up, such as for a package used 5 levels down.

I'm not actively using this template, so I'd rather let those vulnerabilities get handled in a separate project. One that is used by people and that uses this template but has its own lockfile.

If you want to see the most recent code that `create-react-app` command provides without running, see this:

- [template](https://github.com/facebook/create-react-app/tree/master/packages/cra-template/template) directory in `facebook/create-react-app` repo.
