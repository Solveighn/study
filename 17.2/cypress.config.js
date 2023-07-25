const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "qncci3",
  pageLoadTimeout: 120000,
  e2e: {
    baseUrl: "https://staging.lpitko.ru/api/box",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
