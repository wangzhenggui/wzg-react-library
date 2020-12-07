import babel from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss'

import simplevars from 'postcss-simple-vars'
import nested from 'postcss-nested'
import cssnext from 'postcss-cssnext'
import cssnano from 'cssnano'

export default {
  input: './src/index.js',
  output: {
    file: './lib/bundle.js',
    format: 'cjs'
  },
  plugins: [
    postcss({
      plugins: [
        simplevars(),
        nested(),
        cssnext(),
        cssnano(),
      ],
      extensions: ['.css']
    }),
    babel()
  ],
  external: ['react']
}