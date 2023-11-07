const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "7qguxw",
  e2e: {
    setupNodeEvents(on, config) {
      return config;
    },
    baseUrl: "http://localhost:8001",
    specPattern: "cypress/e2e/**/*spec.js",
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
  env: {
    codeCoverage: {
      url: "http://localhost:3000/api/__coverage__",
    },
  },
});
