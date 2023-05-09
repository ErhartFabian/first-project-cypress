const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'uri2vv',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  e2e: {
    experimentalStudio: true
  }
});

module.exports = {
  projectId: "uri2vv",
  // The rest of the Cypress config options go here...
}