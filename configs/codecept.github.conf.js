require("ts-node/register");

this.helpers;

exports.config = {
    output: "../output",
    helpers: {
        Playwright: {
            show: false,
            browser: "chromium",
            fullPageScreenshots: true,
            waitForNavigation: "domcontentloaded",
            waitForTimeout: 10000,
            windowSize: "1200x800",
            video: true,
            trace: true,
        },
        REST: {
            endpoint: "https://www.sbs.com.au/guide/ajax_radio_program_catchup_data/language/hindi/location/NSW/sublocation/Sydney",
            defaultHeaders: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
        },
        ChaiWrapper: {
            "require": "codeceptjs-chai",
        },
    },
    include: {
        I: "../steps_file.js",
    },
    mocha: {},
    bootstrap: null,
    teardown: null,
    hooks: [],
    gherkin: {
        features: "../features/*.feature",
        steps: ["../step_definitions/frontend_steps.ts",
            "../step_definitions/backend_steps.ts"],
    },
    plugins: {
        screenshotOnFail: {
            enabled: true,
        },
        pauseOnFail: {},
        retryFailedStep: {
            enabled: true,
        },
        tryTo: {
            enabled: true,
        },
        cucumberJsonReporter: {
            require: "codeceptjs-cucumber-json-reporter",
            enabled: true, // if false, pass --plugins cucumberJsonReporter
            attachScreenshots: true, // true by default
            attachComments: true, // true by default
            outputFile: "cucumber_output.json", // cucumber_output.json by default
            uniqueFileNames: false, // if true outputFile is ignored in favor of unique file names in the format of `cucumber_output_<UUID>.json`.  Useful for parallel test execution
            includeExampleValues: false, // if true incorporate actual values from Examples table along with variable placeholder when writing steps to the report
            timeMultiplier: 1000000, // Used when calculating duration of individual BDD steps.  Defaults to nanoseconds
        },
    },
    tests: "./*_test.ts",
    name: "sbs-test",
};
