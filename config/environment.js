/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'my-app',
    environment: environment,
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-eval' 'unsafe-inline' https://*.googleapis.com https://*.gstatic.com",
      'font-src': "'self' https://*.gstatic.com",
      'connect-src': "'self' http://intense-bastion-3210.herokuapp.com https://api.github.com",
      'img-src': "'self' https://*.googleapis.com https://*.gstatic.com data:",
      'style-src': "'self' 'unsafe-inline' https://*.googleapis.com",
      'media-src': "'self'"
    },
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
