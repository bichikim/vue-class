const rollupPreprocessor = require('./rollup.config')
module.exports = function(config) {
  config.set({
    files: [
      {pattern: 'test/unit/**/*.spec.js'}
    ],
    preprocessors: {
      'test/unit/**/*.spec.js': ['rollup']
    },
    rollupPreprocessor,
  })
}