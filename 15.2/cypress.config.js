const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "yy73dz",
  e2e: {
    baseUrl: "https://staging.lpitko.ru/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
