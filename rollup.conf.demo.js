import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import postcss from 'rollup-plugin-postcss';
import scss from 'rollup-plugin-scss';
import serve from "rollup-plugin-serve";
import copy from "rollup-plugin-copy-merge";
import autoprefixer from 'autoprefixer'

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  input: "demo/src/index.tsx",
  output: {
    file: "demo/dist/js/bundle.js",
    format: "iife",
    sourcemap: true,
  },
  plugins: [
    scss({
      processor: () => postcss([autoprefixer()]),
    }), // will output compiled styles to output.css
    copy({
      targets: [{ src: ['dist/index.css'], file: 'demo/dist/style/index.css' }]
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'development' )
    }),
    resolve({ extensions }),
    babel({
      presets: ["@babel/preset-react"],
      extensions,
      babelHelpers: 'runtime',
      include: ['demo/src/**/*'],
    }),
    commonjs(),
    serve({
      open: true,
      verbose: true,
      contentBase: ["demo"],
      host: "localhost",
      port: 3000,
    }),
  ]
};

