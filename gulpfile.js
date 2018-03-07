var gulp = require('gulp');
var gutil = require("gulp-util");
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");
var browserSync = require('browser-sync');
var historyApiFallback = require('connect-history-api-fallback');

var PATHS = {
  input: './src',
  output: './dist',
};

var webpackBuild = function (callback) {
  var myConfig = Object.create(webpackConfig);  // 設定ファイルを読み込み

  webpack(myConfig, function (err, stats) {
    if (err) throw new gutil.PluginError("webpack:build", err);
    gutil.log("[webpack:build]", stats.toString({
      colors: true
    }));
    callback();
  });
};

var gulpSass = function (callback) {
  var processors = [
    autoprefixer({
      browsers: ['IE 9', 'IE 10', 'IE 11', 'last 2 versions']
    }),
    cssnano(),
  ];
  var task = gulp.src(PATHS.input + '/scss/styles.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(postcss(processors))
    .pipe(gulp.dest(PATHS.output + '/css/'));

  task.on('end', callback);
};

/** browser sync */
gulp.task('browser-sync', function () {
  browserSync({
    server: {
      baseDir: PATHS.output,      //対象ディレクトリ
      index: "index.html",       //インデックスファイル
      middleware: [historyApiFallback()]
    },
  });
});

// reload browser
gulp.task('bs-reload', function () {
  browserSync.reload();
});


/** webpack */
gulp.task("build", ["webpack:build"]);
gulp.task("webpack:build", webpackBuild);

// webpack build & reload
gulp.task("webpack:build-sync", function () {
  webpackBuild(browserSync.reload);
});


/** sass **/
gulp.task('scss', gulpSass);

// sass & reload
gulp.task('scss-sync', function () {
  gulpSass(browserSync.reload);
});


/** default & watch */
gulp.task('default', ['browser-sync'], function () {
  gulp.watch(PATHS.input + '/scss/**/*.scss',     ['scss-sync']);           // sass
  gulp.watch(PATHS.input + '/js/**/*.js',         ['webpack:build-sync']);  // js
  gulp.watch(PATHS.output + '/*.html',            ['bs-reload']);           // html
  gulp.watch(PATHS.input + '/template/**/*.vue',  ['webpack:build-sync']);  // vue template
});