const cucumber=require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");
//const { defineConfig } = require('cypress')
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor',cucumber());
      on('task', {downloadFile});
      
    },
    specPattern:'cypress/integration/featurefile/*.feature',
  },
});

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//          on('task', {downloadFile})
//       }
//     }
// });
