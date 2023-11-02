const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
        require("@cypress/code-coverage/task")(on, config);
        on("file:preprocessor", require("@cypress/code-coverage/use-babelrc"));
        return config;
      },
    baseUrl: 'http://localhost:8001',
    specPattern: "cypress/e2e/**/*.js",
    nodeVersion: "system",
    screenshotOnRunFailure: false,
    chromeWebSecurity: false,
    video: false,
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "cypress/reports",
      charts: true,
      quite: true,
      overwrite: false,
      html: false,
      json: true,
  },
}
})
  