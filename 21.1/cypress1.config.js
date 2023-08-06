const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "z15gx8",
  viewportWidth: 1366,
  viewportHeight: 768,
  pageLoadTimeout: 120000,
  video: true,
  e2e: {
    baseUrl: "https://staging.lpitko.ru",
    testIsolation: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
