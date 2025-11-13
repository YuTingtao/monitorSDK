import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import { babel } from '@rollup/plugin-babel';
import del from 'rollup-plugin-delete';
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
      file: './dist/monitorSDK.esm.js',
      format: 'esm',
      name: 'MonitorSDK'
    }
  ],
  plugins: [
    del({ targets: ['dist/*'] }),
    progress(),
    resolve(),
    commonjs(),
    babel({ babelHelpers: 'bundled' }),
    terser({
      compress: { drop_console: true, dead_code: true }
    })
  ]
};
