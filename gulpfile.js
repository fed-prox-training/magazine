/* File: gulpfile.js */

// grab our gulp packages
var gulp = require('gulp'),
    gutil = require('gulp-util');
var sass = require('gulp-sass');
var pug = require('gulp-pug');


// create a default task and just log a message
gulp.task('default', ['sass', 'sass:watch', 'pug', 'pug:watch'], function() {
    return gutil.log('Gulp is running!')

});

gulp.task('sass', function() {
    return gulp.src('./sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function() {
    gulp.watch('./sass/*.scss', ['sass']);
});


gulp.task('pug', function buildHTML() {
    return gulp.src('pug/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('./'));
});

gulp.task('pug:watch', function() {
    gulp.watch('./pug/*.pug', ['pug']);
});