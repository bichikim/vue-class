import typescript from 'rollup-plugin-typescript2'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import uglify  from 'rollup-plugin-uglify'
import packageJson from '../package.json'

export default {
  input: 'src/index.ts',
  output: {
    name: packageJson.name,
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
