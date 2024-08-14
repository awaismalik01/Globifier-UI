import { defineConfig } from 'cypress';
const dotenvPlugin = require('cypress-dotenv');

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      config = dotenvPlugin(config);
      return config;
    },
  },
});
