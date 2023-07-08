const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "b1db4g",
  pageLoadTimeout: 120000,
  e2e: {
    baseUrl: "https://staging.lpitko.ru/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
