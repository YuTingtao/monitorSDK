import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import { babel } from '@rollup/plugin-babel';
import deletePlugin from 'rollup-plugin-delete';
import progress from 'rollup-plugin-progress';

export default {
  input: './src/index.js',
  output: [
    {
      file: './dist/monitorSDK.js',
      format: 'umd',
      name: 'MonitorSDK'
    },
    {
      file: './dist/monitorSDK.min.js',
      format: 'umd',
      name: 'MonitorSDK',
      plugins: [terser()]
    }
  ],
  plugins: [
    deletePlugin({ targets: ['dist/*'] }),
    progress(),
    resolve(),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**'
    })
  ]
};
