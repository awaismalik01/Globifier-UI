# GlobifierUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.4 and leverages [Angular Material UI](https://material.angular.io/) version 18.1.4 for its design components. End-to-end testing is implemented with [Cypress](https://www.cypress.io/) version 13.13.2. The project is integrated with a CI/CD pipeline on [GitHub Actions](https://github.com/features/actions) that automates unit testing, build verification, end-to-end testing, deployment on [Vercel](https://vercel.com/docs), and generating [SonarQube](https://github.com/marketplace/actions/official-sonarqube-scan) reports to ensure code quality.

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `npm run cy:open` to execute the end-to-end tests via Cypress `headed` mode.

Run `npm run cy:run` to execute the end-to-end tests via Cypress `headless` mode.
