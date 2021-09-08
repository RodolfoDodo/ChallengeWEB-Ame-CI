exports.config = {
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://automationpractice.com/ index.php',
      browser: 'chrome',
      windowSize: 'maximize',
      waitForTimeout: 10000,
      desiredCapabilities: {
        chromeOptions: {
          args: ["--headless" ]
        }
      }
    }
  },
  include: {
    I: './steps_file.js',
    login_page: './pages/login_page.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/login_page_steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    allure: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    }
  },
  tests: './*_test.js',
  name: 'ChallengeWEB-Ame'
}