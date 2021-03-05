# Commands

## Formatting

This project allows formatting using this command:

```sh
$ yarn fmt
```

This relies on Prettier to be downloaded each time.

This is done to avoid adding it to dependencies. Since it was not in the original Create React App packages setup.


## Linting

This project uses ESLint.

When you start or build the app, the `react-scripts` command will use ESLint internally and give you errors. That is a tool that comes with Create React App and manages things for you like linting and testing.

Note that ESLint is not installed directly. If you want to run `eslint` as a command, you need to install about 5 dependencies which are not already installed, relating to ESLint and one relating to TypeScript. This is not worthwhile for this project so those have been left out.

You could also use the React `eject` command (not covered here anymore) and that might give you the dependencies which `react-scripts` uses.
