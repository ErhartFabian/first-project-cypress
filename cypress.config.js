const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '431k6r',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  e2e: {
    experimentalStudio: true
  }
  
});
