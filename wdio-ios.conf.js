exports.config = {
    
    specs: [
        './features/**/*.feature'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,

    capabilities: [{
        maxInstances: 1,
        platformName: "iOS",
        platformVersion: "14.4",
        deviceName: "iPhone 8",
        automationName: "XCUITest",
        bundleId: "id.bundleId",
        autoGrantPermissions: true,
        locationServicesAuthorized: true,
        autoAcceptAlerts: true,
        locationServicesEnabled: true,
        noReset: true,
        fullReset: false,
        "appium:app": join(process.cwd(), "./filepath.app")
    }],
    
    logLevel: 'info',
    
    bail: 0,
    
    baseUrl: 'http://localhost',
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,
    //
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 120000,
    //
    // Default request retries count
    connectionRetryCount: 3,

    services: ['chromedriver'],
    
    framework: 'cucumber',

    reporters: ['spec'],

    //
    // If you are using Cucumber you need to specify the location of your step definitions.
    cucumberOpts: {
        // <string[]> (file/dir) require files before executing features
        require: ['./features/step-definitions/*-steps.js'],
        // <boolean> show full backtrace for errors
        backtrace: false,
        // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        requireModule: [],
        // <boolean> invoke formatters without executing steps
        dryRun: false,
        // <boolean> abort the run on first failure
        failFast: false,
        // <boolean> hide step definition snippets for pending steps
        snippets: true,
        // <boolean> hide source uris
        source: true,
        // <boolean> fail if there are any undefined or pending steps
        strict: false,
        // <string> (expression) only execute the features or scenarios with tags matching the expression
        tagExpression: '',
        // <number> timeout for step definitions
        timeout: 60000,
        // <boolean> Enable this config to treat undefined definitions as warnings.
        ignoreUndefinedDefinitions: false
    },
}