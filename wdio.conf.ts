import type {Options} from "@wdio/types";

export const config: Options.Testrunner = {

    runner: "local",
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            project: "./tsconfig.json",
            transpileOnly: true
        }
    },

    suites: {
        adminSuites: [
            "./test/specs/web/admin/autoReconciliationGroup.test.ts",
        ],

        //Admin
        authorization: ["./test/specs/web/admin/authorization.test.ts"],
    },

    maxInstances: 10,

    injectGlobals: false,

    capabilities: [{

        maxInstances: 4,

        browserName: "chrome",
        "goog:chromeOptions": {
            args: ["--headless", "--window-size=1920,1080", " --no-sandbox"], //for Jenkins
            //args: ["--window-size=1920,1080"], //for Debug
        },
        acceptInsecureCerts: true
    }],

    logLevel: "error",

    bail: 0,
    baseUrl: "https://enotes.pointschool.ru/login",
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    services: ["chromedriver"],
    framework: "mocha",

    reporters: [
        [
            "spec",
            {
                showPreface: false
            }
        ],
        [
            "allure",
            {
                outputDir: 'allure-results'
            }
        ]
    ],

    mochaOpts: {
        ui: "bdd",
        timeout: 60000
    },
};