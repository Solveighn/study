const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "z15gx8",
  e2e: {
    viewportWidth: 1366,
    viewportHeight: 768,
    pageLoadTimeout: 120000,
    baseUrl: "https://staging.lpitko.ru",
    testIsolation: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
