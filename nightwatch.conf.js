require('dotenv').config();
const percy = require('@percy/nightwatch')

// Refer to the online docs for more details:
// https://nightwatchjs.org/gettingstarted/configuration/
//

//  _   _  _         _      _                     _          _
// | \ | |(_)       | |    | |                   | |        | |
// |  \| | _   __ _ | |__  | |_ __      __  __ _ | |_   ___ | |__
// | . ` || | / _` || '_ \ | __|\ \ /\ / / / _` || __| / __|| '_ \
// | |\  || || (_| || | | || |_  \ V  V / | (_| || |_ | (__ | | | |
// \_| \_/|_| \__, ||_| |_| \__|  \_/\_/   \__,_| \__| \___||_| |_|
//             __/ |
//            |___/

module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: ['test_suite'],

  // See https://nightwatchjs.org/guide/concepts/page-object-model.html
  page_objects_path: ['page_objects'],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-commands.html
  custom_commands_path: [],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-assertions.html
  custom_assertions_path: [],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-plugins.html
  plugins: ["@nightwatch/browserstack"],
  
  // See https://nightwatchjs.org/guide/concepts/test-globals.html
  globals_path: 'globals.js',
  
  webdriver: {},

  test_workers: {
    enabled: true
  },

  test_settings: {
    default: {
      disable_error_log: false,
      launch_url: 'https://app-stg.rubiktest.com/auth/login',

      screenshots: {
        enabled: false,
        path: 'screens',
        on_failure: true
      },

      desiredCapabilities: {
        browserName: 'chrome'
      },
      
      webdriver: {
        start_process: true,
        server_path: 'node_modules/.bin/chromedriver'
      },
      
    },
    
    safari: {
      desiredCapabilities: {
        browserName: 'safari',
        alwaysMatch: {
          acceptInsecureCerts: false
        }
      },
      webdriver: {
        start_process: true,
        server_path: '/usr/bin/safaridriver'
      }
    },
    
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        alwaysMatch: {
          acceptInsecureCerts: true,
          'moz:firefoxOptions': {
            args: [
              // '-headless',
              // '-verbose'
            ]
          }
        }
      },
      webdriver: {
        start_process: true,
        server_path: require('geckodriver').path,
        cli_args: [
          // very verbose geckodriver logs
          // '-vv'
        ]
      }
    },
    
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          // More info on Chromedriver: https://sites.google.com/a/chromium.org/chromedriver/
          //
          // w3c:false tells Chromedriver to run using the legacy JSONWire protocol (not required in Chrome 78)
          w3c: true,
          args: [
            //'--no-sandbox',
            //'--ignore-certificate-errors',
            //'--allow-insecure-localhost',
            //'--headless'
          ]
        }
      },

      webdriver: {
        start_process: true,
        server_path: 'node_modules/.bin/chromedriver',
        cli_args: [
          // --verbose
        ]
      }
    },
    
    edge: {
      desiredCapabilities: {
        browserName: 'MicrosoftEdge',
        'ms:edgeOptions': {
          w3c: true,
          // More info on EdgeDriver: https://docs.microsoft.com/en-us/microsoft-edge/webdriver-chromium/capabilities-edge-options
          args: [
            //'--headless'
          ]
        }
      },

      webdriver: {
        start_process: true,
        // Follow https://docs.microsoft.com/en-us/microsoft-edge/webdriver-chromium/?tabs=c-sharp#download-microsoft-edge-webdriver
        // to download the Edge WebDriver and set the location of extracted `msedgedriver` below:
        server_path: '/Users/franciscodiaz/Desktop/Nightwatch/edgedriver_mac64/msedgedriver',
        cli_args: [
          // --verbose
        ]
      }
    },
    
    //////////////////////////////////////////////////////////////////////////////////
    // Configuration for using the browserstack.com cloud service                    |
    //                                                                               |
    // Please set the username and access key by setting the environment variables:  |
    // - BROWSERSTACK_USERNAME                                                       |
    // - BROWSERSTACK_ACCESS_KEY                                                     |
    // .env files are supported                                                      |
    //////////////////////////////////////////////////////////////////////////////////
    browserstack: {
      selenium: {
        host: 'hub.browserstack.com',
        port: 443
      },
      // More info on configuring capabilities can be found on:
      // https://www.browserstack.com/automate/capabilities?tag=selenium-4
      desiredCapabilities: {
        'bstack:options': {
          userName: '${BROWSERSTACK_USERNAME}',
          accessKey: '${BROWSERSTACK_ACCESS_KEY}',
          projectName: "Rubik  Automation",
          buildName: "rubik-build-001"
        }
      },

      disable_error_log: true,
      webdriver: {
        timeout_options: {
          timeout: 15000,
          retry_attempts: 3
        },
        keep_alive: true,
        start_process: false
      }
    },

    // Desktop Browsers /////////////
    'browserstack.chrome': {
      extends: 'browserstack',
      desiredCapabilities: {
        os : 'Windows',
        os_version : '11',
        browserName: 'Chrome',
        browserVersion: 'latest',
        resolution : '1920x1200',
        build : '0.0.1',
        chromeOptions: {
          w3c: true
        }
      }
    },
    
    'browserstack.firefox': {
      extends: 'browserstack',
      desiredCapabilities: {
        os : 'Windows',
        os_version : '11',
        browserName: 'Firefox',
        browserVersion: 'latest',
        resolution : '1920x1200',
        build : '0.0.1',
      }
    },
    
    'browserstack.edge': {
      extends: 'browserstack',
      desiredCapabilities: {
        os : 'Windows',
        os_version : '11',
        browserName: 'Edge',
        browserVersion: 'latest',
        resolution : '1920x1200',
        build : '0.0.1',

      }
    },
    
    'browserstack.safari': {
      extends: 'browserstack',
      desiredCapabilities: {
        os : 'OS X',
        os_version : 'Monterey',
        browserName: 'Safari',
        browserVersion: '15.0',
        resolution : '2560x1440',
        build : '0.0.1',
      }
    },
    // LOCAL   /////////
    'browserstack.local': {
      extends: 'browserstack',
      desiredCapabilities: {
        'browserstack.local': true
      }
    },

    'browserstack.local_chrome': {
      extends: 'browserstack.local',
      desiredCapabilities: {
        browserName: 'chrome'
      }
    },
    
    'browserstack.local_firefox': {
      extends: 'browserstack.local',
      desiredCapabilities: {
        browserName: 'firefox'
      }
    },
    // Mobile Devices ///////////////////
    'browserstack.iphone_13_mini': {
      extends: 'browserstack',
      desiredCapabilities: {
        os_version: '15',
        device: 'iPhone 13 Mini',
        real_mobile: 'true',
        deviceOrientation : 'portrait',
        browserName : 'safari'
      }
    },
    
    'browserstack.iphone_xs': {
      extends: 'browserstack',
      desiredCapabilities: {
        os_version: '15',
        device: 'iPhone XS',
        real_mobile: 'true',
        deviceOrientation : 'portrait',
        browserName : 'safari'
      }
    }, 

    'browserstack.galaxy_s21': {
      extends: 'browserstack',
      desiredCapabilities: {
        os_version: '11.0',
        device: 'Samsung Galaxy S21',
        real_mobile: 'true',
        deviceOrientation : 'portrait',
        browserName : 'chrome'
      }
    }, 

    'browserstack.galaxy_s22_ultra': {
      extends: 'browserstack',
      desiredCapabilities: {
        os_version: '12.0',
        device: 'Samsung Galaxy S22 Ultra',
        real_mobile: 'true',
        deviceOrientation : 'portrait',
        browserName : 'chrome'
      }
    }, 
    // Tablets ///////
    'browserstack.ipad_9th': {
      extends: 'browserstack',
      desiredCapabilities: {
        os_version: '15',
        device: 'iPad 9th',
        real_mobile: 'true',
        deviceOrientation : 'portrait',
        browserName : 'safari'
      }
    }, 
    
    'browserstack.ipad_mini_2021': {
      extends: 'browserstack',
      desiredCapabilities: {
        os_version: '15',
        device: 'iPad Mini 2021',
        real_mobile: 'true',
        deviceOrientation : 'portrait',
        browserName : 'safari'
      }
    },
    
  },
  
};
