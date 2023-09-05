const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  env: {
    base_url: "https://bstackdemo.com",
    access_key: "d26891d4e22bae416bd3fbb4260be6ee",
  },
});
