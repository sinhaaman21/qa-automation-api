/// <reference types="cypress" />
/// <reference types="@shelex/cypress-allure-plugin" />

const postgreSQL = require('cypress-postgresql');
const pg = require('pg');
const dbConfig = require('../../cypress.json');

// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = (on, config) => {
    allureWriter(on, config);
    return config;
};

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on('before:browser:launch', (browser, launchOptions) => {
    if (browser.name === 'chrome' && browser.isHeadless) {
      launchOptions.args.push('--disable-gpu');
      return launchOptions
    }
  });
}

module.exports = on => {
  on("task", {
      dbQuery:(query)=> require("cypress-postgres")(query.query,query.connection)
  });
};

var Xvfb = require('xvfb');
var options = {}; // optional
var xvfb = new Xvfb(options);
xvfb.start(function(err, xvfbProcess) {
  // code that uses the virtual frame buffer here
  xvfb.stop(function(err) {
    // the Xvfb is stopped
  });
});
