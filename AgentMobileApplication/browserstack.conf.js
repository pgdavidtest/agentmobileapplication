exports.config = {
    user: process.env.BROWSERSTACK_USERNAME || 'davidpeluola_RvIcqF',
    key: process.env.BROWSERSTACK_ACCESS_KEY || '6FhWjosCq1wXv5QiTpsT',

    specs: ['./features/tests/Demo.feature'],
    exclude: [],

    capabilities: [
        {
            project: 'First Webdriverio iOS Project',
            build: 'Webdriverio iOS',
            name: 'single_test',
            device: 'iPhone 11 Pro',
            os_version: '15',
            app: 'bs://516511de53f930ee80cbc156d9943d479e266bf0',
            'browserstack.debug': true,
        },
    ],

    logLevel: 'info',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'cucumber',

    cucumberOpts: {
        // <string[]> (file/dir) require files before executing features
        require: ['./features/step-definitions/*.steps.js'],
        // <boolean> show full backtrace for errors
        backtrace: false,
        // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        requireModule: ['@babel/register'],
        // <boolean> invoke formatters without executing steps
        dryRun: false,
        // <boolean> abort the run on first failure
        failFast: false,
        // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        format: ['pretty'],
        // <boolean> hide step definition snippets for pending steps
        snippets: true,
        // <boolean> hide source uris
        source: true,
        // <string[]> (name) specify the profile to use
        profile: [],
        // <boolean> fail if there are any undefined or pending steps
        strict: false,
        // <string> (expression) only execute the features or scenarios with tags matching the expression
        tagExpression: '',
        // <number> timeout for step definitions
        timeout: 5000000,
        // <boolean> Enable this config to treat undefined definitions as warnings.
        ignoreUndefinedDefinitions: false,
    },
};
