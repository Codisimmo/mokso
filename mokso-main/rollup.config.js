import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import autoprefixer from 'autoprefixer'
import postcss from 'rollup-plugin-postcss'
import copy from 'rollup-plugin-copy';
import { babel } from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import serve from 'rollup-plugin-serve';

const isDev = process.env.ROLLUP_WATCH;

export default [
    {
        input: 'src/js/main.js',
        output: {
            file: 'dist/js/custom.js',
            sourcemap: true,
        },
        plugins: [
            resolve(),
            commonjs(),
            babel({
                babelHelpers: 'bundled',
                exclude: './node_modules/**',
            }),
            !isDev && terser(),
            isDev && serve({
                contentBase: 'dist',
                port: 8081,
            }),
        ]
    },
    {
        input: 'src/scss/main.scss',
        output: {
            file: 'dist/css/custom.css',
        },
        plugins: [
            postcss({
                sourceMap: true,
                minimize: true,
                extract: true,
                plugins: [
                    autoprefixer,
                ],
            }),

            copy({
                targets: [
                    // { src: './img/**/*', dest: 'dist/img' },
                    { src: './pdf/**/*', dest: 'dist/pdf' }
                ]
            }),
        ],
    },
];
