/**
 * Created by stephen on 2016/3/24.
 */

// An example configuration file
exports.config = {
  
      allScriptsTimeout: 11000,
  
      baseUrl: 'http://localhost:4200',
  
      // Capabilities to be passed to the webdriver instance.
      capabilities: {
          'browserName': 'chrome'
      },
  
      framework: 'jasmine',
  
      // Spec patterns are relative to the configuration file location passed
      // to protractor (in this example conf.js).
      // They may include glob patterns.
      specs: ['./*.e2e-spec.ts'],
  
      // Options to be passed to Jasmine-node.
      jasmineNodeOpts: {
          showColors: true, // Use colors in the command line report.
      },
  
      defaultTimeoutInterval: 30000
  };