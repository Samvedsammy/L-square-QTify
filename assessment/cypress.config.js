const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    browser: "chrome",
    chromeWebSecurity: false,
    defaultCommandTimeout: 8000,
    video: false,
    viewportWidth: 1280,
    viewportHeight: 720,
  },
  env: {
    ELECTRON_DISABLE_SANDBOX: true,
  }
});
