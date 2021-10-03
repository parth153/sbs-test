## SBS Code Challenge

### Overview - Building Blocks of the Solution

This automation solution for Frontend and Backend is developed in Typescript/Javascript combo using CodeceptJS with Playwright helper. The tests are written in BDD format - gherkin style. The solution has only one branch - Master. The solution gets build with Github Actions workflow on every push in Master branch.

The solution has following dependencies:
  1) [CodeceptJS](https://www.npmjs.com/package/codeceptjs) - preferred tool for Automation.
  2) [Playwright](https://www.npmjs.com/package/playwright) - preferred helper - supports chromimum, firefox and webkit.
  3) [CodeceptJS-Chai](https://www.npmjs.com/package/codeceptjs-chai) - assertions can be within CodeceptJS namespace.
  4) [Ts-node](https://www.npmjs.com/package/ts-node) - for Typescript node support
  5) [Typescript](https://www.npmjs.com/package/typescript) - Typescript support
  6) [CodeceptJS-cucumber-json-reporter](https://www.npmjs.com/package/codeceptjs-cucumber-json-reporter) - to create test reports in JSON format
  7) [cucumber-html-reporter](https://www.npmjs.com/package/cucumber-html-reporter) - to create HTML report from JSON reports
  8) [Jsmediatags](https://www.npmjs.com/package/jsmediatags) - to read mp3 file tags
  9) [Eslint](https://www.npmjs.com/package/eslint) - preferred linting tool
And three typescript typings.

#### Code Structure
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
_config.yml - was trying out github pages - contains theme for the page

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
