const { devices } = require('@playwright/test');

/** @type {import('@playwright/test').PlaywrightTestConfig} */

const config = {

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  testMatch: /.*(spec1)\.(js|ts|mjs)/,

  use: {

    trace: 'on-first-retry',

  },

  projects: [

    {

      name: 'chromium',

      use: { ...devices['Desktop Chrome'] },

    },

  ],

};

module.exports = config;