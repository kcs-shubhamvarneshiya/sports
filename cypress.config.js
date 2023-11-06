const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8001',
    specPattern : "cypress/e2e/**/*.js",
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
  },
})