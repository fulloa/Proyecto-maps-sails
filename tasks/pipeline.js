/**
 * grunt/pipeline.js
 *
 * The order in which your css, javascript, and template files should be
 * compiled and linked from your views and static HTML files.
 *
 * (Note that you can take advantage of Grunt-style wildcard/glob/splat expressions
 * for matching multiple files.)
 *
 * For more information see:
 *   https://github.com/balderdashy/sails-docs/blob/master/anatomy/myApp/tasks/pipeline.js.md
 */

// Default path for public folder (see documentation for more information)
var tmpPath = '.tmp/public/';

// CSS files to inject in order
//
// (if you're using LESS with the built-in default config, you'll want
//  to change `assets/styles/importer.less` instead.)
var cssFilesToInject = [
    'styles/**/*.css',
    '/bower_components/bootstrap/dist/css/bootstrap.min.css',
    '/bower_components/bootstrap/dist/css/bootstrap-theme.min.css',
];
// Client-side javascript files to inject in order
// (uses Grunt-style wildcard/glob/splat expressions)
var jsFilesToInject = [
  // Load sails.io before everything else
  'js/dependencies/sails.io.js',
  // Dependencies like jQuery, or Angular are brought in here
  'js/dependencies/**/*.js',
    "/bower_components/lodash/dist/lodash.min.js",
    "/bower_components/angular/angular.min.js",
    "/bower_components/angular-simple-logger/dist/angular-simple-logger.min.js",
    "/bower_components/angular-google-maps/dist/angular-google-maps.min.js",
    "//maps.googleapis.com/maps/api/js?sensor=false",
    "https://maps.googleapis.com/maps/api/js?key=AIzaSyCzfBhwFxsYaRjmaXWHsaVM03_aXRJ712g",
    "/bower_components/angular-route/angular-route.min.js",
    "/bower_components/jquery/dist/jquery.min.js",
    "/bower_components/bootstrap/dist/js/bootstrap.min.js",
    "/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js",
  // All of the rest of your client-side js files
  // will be injected here in no particular order.
  'js/**/*.js'
];


// Client-side HTML templates are injected using the sources below
// The ordering of these templates shouldn't matter.
// (uses Grunt-style wildcard/glob/splat expressions)
//
// By default, Sails uses JST templates and precompiles them into
// functions for you.  If you want to use jade, handlebars, dust, etc.,
// with the linker, no problem-- you'll just want to make sure the precompiled
// templates get spit out to the same file.  Be sure and check out `tasks/README.md`
// for information on customizing and installing new tasks.
var templateFilesToInject = [
  'templates/**/*.html'
];







// Prefix relative paths to source files so they point to the proper locations
// (i.e. where the other Grunt tasks spit them out, or in some cases, where
// they reside in the first place)
// module.exports.cssFilesToInject = cssFilesToInject.map(function(cssPath) {
//   return require('path').join('.tmp/public/', cssPath);
// });
// module.exports.jsFilesToInject = jsFilesToInject.map(function(jsPath) {
//   return require('path').join('.tmp/public/', jsPath);
// });
// module.exports.templateFilesToInject = templateFilesToInject.map(function(tplPath) {
//   return require('path').join('assets/',tplPath);
// });
module.exports.cssFilesToInject = cssFilesToInject.map(transformPath);
module.exports.jsFilesToInject = jsFilesToInject.map(transformPath);
module.exports.templateFilesToInject = templateFilesToInject.map(transformPath);

// Transform paths relative to the "assets" folder to be relative to the public
// folder, preserving "exclude" operators.
function transformPath(path) {
    return (path.substring(0, 1) == '!') ? ('!' + tmpPath + path.substring(1)) : (tmpPath + path);
}


