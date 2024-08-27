exports.config = {

    runner: 'local',

    specs: [
        './test/specs/**/*.js'
    ],
    
    exclude: [
    ],
  
    maxInstances: 10,
  
    capabilities: [{
        browserName: 'firefox'
    }],

    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'error',
 
    bail: 0,
 
    baseUrl: 'https://4smile.pro',
   
    waitforTimeout: 10000,
  
    connectionRetryTimeout: 120000,
   
    connectionRetryCount: 3,
   
    services: ['firefox-profile'],

    framework: 'mocha',

    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

 
}
