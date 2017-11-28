# ReactJS ToDo List App

## What does this app contain?

Contains a To-Do application build with ReactJS library. Basic component application with the state management.

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

# Where to look
The application entry point is in `./app/index.js`. The todo's list is rendered and managed by the `./app/components/toDoList.jsx` component.
The list component maintain and update its state based on it's component events.

### Serving the content
To run the HTTP server, it will refresh automatically on content change
```
$ npm run start
```
This will make the app accessible from [http://localhost:8081/](http://localhost:8081/)

### Building the project
To build the project run
```
$ npm run build
```
To build the project on any file change, is useful for the development mode:
```
$ npm run watch
```
