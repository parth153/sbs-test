const reporter = require("cucumber-html-reporter");

const options = {
    theme: "bootstrap",
    jsonFile: "output/cucumber_output.json",
    output: "output/cucumber_report.html",
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
};

reporter.generate(options);
