const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://trezor.io",
    scraping: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    requestTimeout: 20000,
    defaultCommandTimeout: 100000,
    collectResponse: 'https://sgtm.trezor.io/g/collect**',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
