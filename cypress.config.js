const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '431k6r',
  e2e: {
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // Usa variables de entorno para viewportWidth y viewportHeight
    viewportWidth: process.env.VIEWPORT_WIDTH ? Number(process.env.VIEWPORT_WIDTH) : 1900,
    viewportHeight: process.env.VIEWPORT_HEIGHT ? Number(process.env.VIEWPORT_HEIGHT) : 1100,
  },  
});
