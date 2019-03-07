var gulp = require('gulp'),
  connect = require('gulp-connect'),
  copy = require('gulp-contrib-copy'),
  pug = require('gulp-pug'),
  scss = require('gulp-sass'),
  csslint = require('gulp-csslint'),
  jshint = require('gulp-jshint'),
  stylish = require('jshint-stylish'),
  concat = require("gulp-concat");

var config = {
  views: 'app/views/',
  components: 'app/views/components',
  /*componentTemplates: 'app/views/component-templates',*/
  styles: 'app/styles/',
  scripts: 'app/scripts/',
  assets: 'app/assets/',
  build: 'static/'
};

// build pug

gulp.task('pug', function(){
  gulp.src(config.views + '/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest(config.build))
});

gulp.task('components', function(){
  gulp.src(config.components + '/*.pug' && config.components + '/**/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest(config.build  + '/components'))
});

// build connect
gulp.task('connect', function(){
  connect.server({
    root: config.build,
    livereload: true,
    port: 8000
  });
});

// concat js libs
gulp.task('js:libs', function() {
  return gulp.src([config.scripts +'libs/jquery-3.3.1.min.js', config.scripts +'libs/handlebars-v4.1.0.js', config.scripts +'libs/plugins/*.js'])
    .pipe(concat('libs.js'))
    .pipe(gulp.dest(config.build + '/js'));
});

// concat js script
gulp.task('js:script', function() {
  return gulp.src([config.scripts +'site.js', config.scripts +'components/*.js'])
    .pipe(concat('script.js'))
    .pipe(gulp.dest(config.build + '/js'));
});

// concat moderniz
gulp.task('js:modernizr-detectizr', function(){
  return gulp.src([config.scripts +'/libs/modernizr-detectizr.min.js'])
    .pipe(concat('modernizr-detectizr.js'))
    .pipe(gulp.dest(config.build + '/js'))
});

// js hint
gulp.task('js:lint', function() {
  return gulp.src([config.scripts +'site.js', config.scripts +'l10n.js', config.scripts +'components/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

// copy fonts
gulp.task('fonts', function(){
  return gulp.src(config.assets + '/fonts/**')
    .pipe(copy())
    .pipe(gulp.dest(config.build + '/fonts'))
});

// copy image
gulp.task('image', function(){
  return gulp.src(config.assets + '/images/**')
    .pipe(copy())
    .pipe(gulp.dest(config.build + '/images'))
});

// copy favicon
gulp.task('favicon', function(){
  return gulp.src(config.assets + '/icons/**')
    .pipe(copy())
    .pipe(gulp.dest(config.build))
});

// copy data
gulp.task('data', function(){
  return gulp.src(config.views + '/data/**')
    .pipe(copy())
    .pipe(gulp.dest(config.build + '/data'))
});


// copy l10n
gulp.task('l10n', function(){
  return gulp.src(config.scripts +'l10n.js')
    .pipe(copy())
    .pipe(gulp.dest(config.build + '/js'))
});
// copy config

gulp.task('config', function(){
  return gulp.src(config.scripts +'config.js')
    .pipe(copy())
    .pipe(gulp.dest(config.build + '/js'))
});

// css
gulp.task('scss:styles', function () {
  return gulp.src(config.styles + '/style.scss')
    .pipe(scss())
    .pipe(gulp.dest(config.build + '/css'));
});
gulp.task('scss:libs', function () {
  return gulp.src(config.styles + '/libs/libs.scss')
    .pipe(scss())
    .pipe(gulp.dest(config.build + '/css'));
});

gulp.task('csslint', function() {
  gulp.src(config.build + '/css/*.css')
    .pipe(csslint('.csslintrc'))
    .pipe(csslint.formatter());
});

// watch
gulp.task('watch', function(){
  gulp.watch(config.styles + '/**/*.scss', ['css']);
  gulp.watch(config.views + '/**/*.pug', ['pug']);
  gulp.watch(config.scripts + '/**/*.js', ['js:script']);
});


//concat
gulp.task('concat', ['js:lint', 'js:script', 'js:libs','l10n', 'config']);
// css
gulp.task('css', ['scss:libs', 'scss:styles']);
// copy
gulp.task('copy', ['js:modernizr-detectizr', 'fonts', 'image', 'favicon', 'data', 'components']);
// default
gulp.task('default', ['pug', 'copy', 'concat', 'css', 'connect', 'watch']);