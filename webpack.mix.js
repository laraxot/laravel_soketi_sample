const mix = require('laravel-mix');
const path = require('path');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js');
    //.postCss('resources/css/app.css', 'public/css')
    //.minify('public/js/app.js')
    //.minify('public/css/app.css')
    ;
mix.sass('resources/sass/app.scss', 'css');
/*
mix.browserSync({
    proxy: 'localhost:8000',
    notify: true
});
*/

mix.extract();

mix.webpackConfig({
    resolve: {
        modules: [
            path.resolve(__dirname, 'node_modules')
        ]
    },

});

mix.version();
mix.sourceMaps();
