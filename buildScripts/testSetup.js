//This file isn't transpiled so must use CommonJs and ES5.

//Resiger babel to transpile before our tests run.
require('babel-register') ();

//Disable webpack features that mocha does not understand.
require.extensions['.css'] = function () {};
