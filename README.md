# SBS Code Challenge

## Overview - Building Blocks of the Solution

This automation solution for Frontend and Backend is developed in Typescript/Javascript combo using CodeceptJS with Playwright helper. The tests are written in BDD format - gherkin style. The solution has only one branch - Master. The solution gets build with Github Actions workflow on every push in Master branch.

The solution has following dependencies:

| 1) [CodeceptJS](https://www.npmjs.com/package/codeceptjs)                                               | Preferred tool for Automation                             |
| ------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| 2) [Playwright](https://www.npmjs.com/package/playwright)                                               | Preferred helper - supports chromimum, firefox and webkit |
| 3) [CodeceptJS-Chai](https://www.npmjs.com/package/codeceptjs-chai)                                     | Assertions can be within CodeceptJS namespace             |
| 4) [Ts-node](https://www.npmjs.com/package/ts-node)                                                     | Typescript node support                                   |
| 5) [Typescript](https://www.npmjs.com/package/typescript)                                               | Typescript support                                        |
| 6) [CodeceptJS-cucumber-json-reporter](https://www.npmjs.com/package/codeceptjs-cucumber-json-reporter) | Create cucumber test report in JSON format                |
| 7) [cucumber-html-reporter](https://www.npmjs.com/package/cucumber-html-reporter)                       | Create HTML report from JSON report                       |
| 8) [Jsmediatags](https://www.npmjs.com/package/jsmediatags)                                             | Read MP3 tags from HTTP Link                              |
| 9) [Eslint](https://www.npmjs.com/package/eslint)                                                       | Preferred Linting Tool                                    |

### Code Structure

```markdown
## Root Directory

package.json - dev dependencies, version, description and npm scripts.
package-lock.json - resolved dependencies for the solution.
jsconfig.json and tsconfig.json - compiling options.
.eslintignore - all the ignore files/folders for linting.
.eslintrrc.json - linting configuration.
README.md - read me file for the solution.
steps_file.js - default file to create custom steps
steps.d.ts - typescript file to declare CodecepJS nampespace and provide Playwright method extenstion.
.\_config.yml - was trying out github pages - contains theme for the page

## .github\workflows

main.yml - Github actions workflow file.

## configs

codecept.conf.js - codeceptjs configuration file for local run.
codecept.github.conf.js - codeceptjs configuration file for github actions run.

## endpointschemas

endpoint.json - json schema file for the api response.

## features

backend.feature - feature file for backend test scenario.
frontend.feature - feature file for frontend test scenario.

## step_definitions

backend_steps.ts - step definitions for backend scenario gherkin steps.
frontend_steps.ts - step definitions for frontend scenario gherkin steps.

## pages

sbsHindiLockdownPage.ts - page object - contains locators and verification methods for SBS Hindi Lockdown Page.

## report_generator

index.js - file to create HTML report from json report.

## utils

backEndTestHelper.ts - back end test helper - contains method for getting Tags from MP3 links
contants.ts - constants for solution like test url, audio player progress bar width style update for 20 secs, MP3 tags.
frontEndTestHelper.ts - front end test helper - methods for adding/subtracting seconds for time elapsed calculations, and calculate style width progress for audio player progress bar
```

### Running the tests locally

> ### Steps to run the solution locally:

    1) Make sure node is installed locally - preferred version atleast v12.18.3.
    2) Git clone repository - https://github.com/parth153/sbs-test.git
    3) Run the command to install dependencies:
          npm install
    4) Run the command to execute both frontend and backend tests:
          npm run test-local
    5) Run the command to execute only frontend:
          npm run test-local-frontend
    6) Run the command to execute only backend:
          npm run test-local-backend
    7) After the command execution, artifacts are generated in output directory.
          Test results in JSON format.
          Video and Trace in case of test failure.
    8) Run the command to generate HTML report:
          npm run generate-report

## GitHub Actions

Workflow has been created to build the solution with every push in Master branch.

The build can be manually triggered from - (https://github.com/parth153/sbs-test/actions)

Once the build completes - artifacts of the build can be accessed via accessing the build - like for example - https://github.com/parth153/sbs-test/actions/runs/1299844387
