const { defineConfig } = require('cypress')
const allureWriter = require('@shelex/cypress-allure-plugin/writer')
const grepTags = require('cypress-grep/src/plugin')

module.exports = defineConfig({
  viewportWidth: 1140,
  viewportHeight: 768,
  defaultCommandTimeout: 10000,
  projectId: 'idProject',
  e2e: {
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    
    setupNodeEvents(on, config) {
      allureWriter(on, config)
      grepTags(config)

      // if version not defined, use local
      const version = config.env.version || 'prd'

      // load env from json
      config.env = require(`./cypress/config/${version}.json`);

      // change baseUrl
      config.baseUrl = config.env.baseUrl
      return config
    },
  },
})
