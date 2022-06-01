import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import scss from 'rollup-plugin-scss';
import copy from 'rollup-plugin-copy-merge';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';
import autoprefixer from 'autoprefixer'

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const vendorStyles = [
  "node_modules/froala-editor/css/froala_style.min.css",
  "node_modules/froala-editor/css/froala_editor.pkgd.min.css",
  "node_modules/froala-editor/css/plugins.pkgd.min.css",
  "node_modules/froala-editor/css/plugins/code_view.min.css",
];

/**
 * config
 */
export default {
  input: './src/index.ts',
  external: ['react', 'react-dom'],
  plugins: [
    scss({
      processor: () => postcss([autoprefixer()]),
      includePaths: ['src', 'node_modules']
    }), // will output compiled styles to output.css
    copy({
      targets: [{ src: [...vendorStyles, 'src/styles/editor.css'], file: 'dist/index.css' }]
    }),
    resolve({ extensions }),
    commonjs(),
    babel({
      extensions,
      babelHelpers: 'runtime',
      include: ['src/**/*'],
    }),
    terser({
      output: { comments: false },
      compress: { drop_console: true },
    }),
  ],
  output: {
    format: 'umd',
    name: pkg.name,
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      crypto: "CryptoBrowserify"
    },
    intro: `exports.version = '${pkg.version}';`,
  },
};
