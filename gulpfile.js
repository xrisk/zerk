var gulp = require('gulp'),
    nano = require('gulp-cssnano'),
    minhtml = require('gulp-minify-html'),
    gulpIf = require('gulp-if'), 
    uglify = require('gulp-uglify'), 
    del = require('del'), 
    autoprefixer = require('gulp-autoprefixer');

gulp.task('clean', function() {
	del('*.gzip');
	del('dist');
});

gulp.task('default', ['clean'], function() {
    gulp.src('app/**/*')
      .pipe(gulpIf('*.css',  nano(autoprefixer())))
      .pipe(gulpIf('*.html', minhtml()))
      .pipe(gulpIf('*.js', uglify()))
      .pipe(gulp.dest('public/'));
});