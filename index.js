'use strict'

const path = require('path')
const consolidate = require('consolidate')
const extend = require('extend-shallow')

exports.name = 'consolidate'
exports.outputFormat = 'html'

// Add all the inputFormats.
exports.inputFormats = []
Object.keys(consolidate).forEach(item => {
  if (['clearCache', 'requireReact', 'requires'].indexOf(item) <= -1) {
    exports.inputFormats.push(item)
  }
})

/**
 * Returns the name of the engine from the given options.
 */
function getEngineName(options) {
  if (typeof options === 'string' || options instanceof String) {
    return options
  }

  if (typeof options === 'object' && options.engine) {
    return options.engine
  }

  if (typeof options === 'object' && options.filename) {
    const ext = path.extname(options.filename)
    if (ext.slice(0, 1) === '.') {
      return ext.slice(1)
    }
  }

  throw new Error('options.engine not found.')
}

/**
 * Returns an engine from the given options object.
 */
function getEngine(options) {
  const name = getEngineName(options)
  if (consolidate[name]) {
    return consolidate[name]
  }

  throw new Error('options.engine is not a supported engine')
}

exports.renderAsync = function (str, options, locals) {
  return getEngine(options).render(str, extend({}, options, locals))
}

exports.renderFileAsync = function (file, options, locals) {
  return getEngine(options)(file, extend({}, options, locals))
}
