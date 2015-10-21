'use strict';

var consolidate = require('consolidate');
var extend = require('extend-shallow');

exports.name = 'consolidate';
exports.inputFormats = Object.keys(consolidate);
exports.outputFormat = 'html';

/**
 * Returns the name of the engine from the given options.
 */
function getEngineName(options) {
  if (typeof options == "string" || options instanceof String) {
    return options;
  }
  else if (typeof options == "object" && options.engine) {
    return options.engine;
  }
  else {
    throw new Error("options.engine not found.");
  }
};

exports.renderAsync = function (str, options, locals) {
  var name = getEngineName(options);
  return consolidate[name].render(str, extend({}, options, locals));
};

exports.renderFileAsync = function (file, options, locals) {
  var name = getEngineName(options);
  return consolidate[name](file, extend({}, options, locals));
};
