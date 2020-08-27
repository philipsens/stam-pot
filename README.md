## Project Details

## Technical Details

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Code Organization

```
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── svgs/
│   ├── components/
│   │   └── __tests__/
│   │      
│   ├── pages/
│   ├── contexts/
│   ├── helpers/
│   ├── styles/
│   ├── App.js
│   ├── index.js
```

|                                         | Description                                                                                                                                                                                |
| --------------------------------------- | ------------------------------------------------------------------------ |
| public                                  | contains static assets to be deployed alongside the react application
| src                                     | main source directory for the application
| src/assets                              | contains the main static files that are accessed by the React source code
| src/components                          | the source files for reusable components developed for this application
| src/components/`__tests__`              | tests used for different components within the application
| src/pages                               | the components that act as the different pages to the application
| src/contexts                            | (not included) contains multiple different context providers
| src/helpers                             | (not included) contains common JS functions for multiple file applications
| src/styles                              | stores any application styling, use can vary per application
| index.tsx                               | the entry point into the react app

* While this template is designed to use this structure, this is not a strict requirement.
  * Keep in mind, it still needs the basic files for React to work.

### Dependencies

Below is a list of the primary libraries used to support this application. See package.json for the complete list.

| Dependency                                                                             | Description                                                 |
| -------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| react-router-dom                                                                       | Application level routing
| node-sass                                                                              | Compiler for `scss`, `less`, and `sass`
| prettier                                                                               | Sophisticated linter

### Local Development

#### Installation / Setup

- `git clone <repository-url>` this repository
- `cd project-directory`
- `yarn install`

#### Local Development

|                                 | Description                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `yarn start`                    | Runs application in development mode with hot reload support<br/>Open [http://localhost:3000](http://localhost:3000) to view it in the browser |
| `yarn lint`<br/>`yarn lint:fix` | Runs ESLint to ensure proper styling and formatting as well as static code analysis for typescript/javascript files                            |

#### Testing

This application leverages a number of tools for test coverage

1. **jest** is used for unit test coverage
2. **jest-axe** is a jest addon to allow unit tests to validate accessibility of components

|                      | Description                                                                                                                                     |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `yarn test`          | Executes the unit test suite using jest in watch mode. This differs from `yarn test:watch` in that it will execute tests based on git revisions |
| `yarn test:watch`    | Executes the unit test suite using jest in watch mode                                                                                           |
 
#### Building

|                | Description                                             |
| -------------- | ------------------------------------------------------- |
| `yarn clean`   | Cleans build directories                                |
| `yarn build`   | Builds the application for deployment (production mdoe) |
| `yarn analyze` | Analyzes build bundle sizes (run `yarn build` first)    |

### Credits

The DeveloperTown CRA template inspired this template:
[DeveloperTown CRA Template](https://github.com/developertown/frontend/tree/master/react/cra-template/template)