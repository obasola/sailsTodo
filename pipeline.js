var cssFilesToInject = [
'bower_components/bootswatch/dist/css/bootstrap.css',
'styles/**/*.css'
];
var jsFilesToInject = [
  'js/dependencies/sails.io.js',
  '/bower_components/jquery/dist/jquery.js',
  '/bower_components/angular/angular.js',
  '/bower_components/angular-route/angular-route.js',
  '/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
  '/bower_components/bootstrap/dist/js/boostrap.js',

  '/bower_components/angular-aria/angular-aria.js',
  '/bower_components/angular-mocks/angular-mocks.js',
  '/bower_components/cookies/angular-cookies.js',
  '/bower_components/angular-animate/angular-animate.js',
  '/bower_components/angular-sanitize/angular-sanitize.js',
  '/bower_components/angular-resources/angular-resource.js',
  '/bower_components/angular-material-icons/angular-material-icons.js',
  '/bower_components/angular-messages/angular-messages.js',
  '/bower_components/angular-material/angular-material.js',
  '/bower_components/angular-ui-router/angular-ui-router.js'
  'js/dependencies/**/*.js',

  'js/**/*.js'
  ];

var templateFilesToInject = [
'templates/*.html'
];

module.exports.cssFilesToInject = cssFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.jsFilesToInject = jsFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.templateFilesToInject = templateFilesToInject.map(function(path) {
  return 'assets/' + path;
});
