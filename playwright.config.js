// @ts-check
const {devices, expect } = require('@playwright/test');

const config = {
  testDir : './tests',
  /* Maximum time the script will wait for before failing */
  timeout: 150 * 1000., //15 secs
  expect: {
    timeout:5000
  },
  reporter: 'html',
  use: {
    browserName: 'chromium',
    headless:   false
  },
};
//config object needs to be exported for all properties to be used in execution else default it to chromium
module.exports=config;


