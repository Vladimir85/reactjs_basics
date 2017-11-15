# ReactJS Dummy App

## What does this app contain?

This application is a basic PoC of working ReactJS front-end application.

# How to use
First copy the repo into your disk.

```
$ git clone git@ewegithub.sb.karmalab.net:vbanishevskii/reactjs_basics.git
```

## Installation
In oder to make the application work, dependencies must be downloaded.
To download the dependencies declared in `package.json` file run:
```
$ npm install
```
Once the process is completed, `node_modules` folder will appear.

### Webpack
[Webpack](https://webpack.github.io/) is a module bundling build tool for developing applications such as React, or those that otherwise rely heavily on NPM for dependencies.

*This module is downloaded with NPM in previous step.*

# Building the project
To build the project run
```
$ npm run build
```
To build the project on any file change, is useful for the development mode:
```
$ npm run watch
```

After the build is completed, compiled sources will be available in `build` folder. To run the application, simply double click the `./build/index.html` file.
