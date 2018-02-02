import commonjs from 'rollup-plugin-commonjs'

export default {
  input: 'src/lib.js',
  plugins: [
      commonjs()
  ],
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    exports: 'named'
  }
}
