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

