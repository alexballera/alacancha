import gulp from 'gulp'
import browserSync from 'browser-sync'

gulp.watch([
  './src/**/*.html',
  './src/styles/scss/**/*.scss',
  './src/components/**/*.scss',
  './src/views/**/*.scss',
  './src/index.scss',
  './src/scripts/index.js',
  './src/scripts/Webfont.js',
  './src/scripts/lib/*.js',
  './src/components/**/*.js',
  './src/views/**/*.js'
]).on('change', browserSync.reload)
