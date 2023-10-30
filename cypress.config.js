const { defineConfig } = require("cypress");


module.exports = defineConfig({
  videoCompression: false,
  video: true,
  chromeWebSecurity:false,
  defaultCommandTimeout: 300000,
  pageLoadTimeout: 300000,
  viewportWidth: 1344,
  viewportHeight: 768,
  numTestsKeptInMemory: 50,
  "retries": {
    "runMode": 0,
    "openMode": 0
  },

  e2e: {
    setupNodeEvents(on, config) {
      
    }

  },
});



