const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '431k6r',
  e2e: {
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      // cypress-mcp runs as a standalone MCP server, not as a plugin
      // See: https://github.com/jams4code/cypress-mcp

      // Puedes implementar otros listeners aquí si los necesitas
      return config;
    },
    // Mantienes tus variables de entorno para el viewport
    viewportWidth: process.env.VIEWPORT_WIDTH ? Number(process.env.VIEWPORT_WIDTH) : 1900,
    viewportHeight: process.env.VIEWPORT_HEIGHT ? Number(process.env.VIEWPORT_HEIGHT) : 1100,
  },  
});
