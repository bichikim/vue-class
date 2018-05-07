import typescript from 'rollup-plugin-typescript2'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import uglify  from 'rollup-plugin-uglify'
const {name} = require('../package.json')

export default {
  input: 'src/index.ts',
  output: {
    name,
    file: './dist/app.js',
    format: 'umd',
    globals: {
      '_': 'lodash',
    },
    sourcemap: true,
  },
  plugins: [
    typescript(),
    resolve({jsnext: true}),
    commonjs(),
    uglify(),
  ],

  external: [
    'lodash',
  ],
}
