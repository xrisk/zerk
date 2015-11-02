var gulp = require('gulp'),
    mincss = require('gulp-minify-css'), 
    minhtml = require('gulp-minify-html'),
    gulpIf = require('gulp-if'), 
    uglify = require('gulp-uglify'), 
    del = require('del');

gulp.task('clean', function() {
	del('*.gzip');
	del('dist');
});
gulp.task('default', ['clean'], function() {
	// gulp.run('clean');
    gulp.src('app/*')
      .pipe(gulpIf('*.css',  mincss()))
      .pipe(gulpIf('*.html', minhtml()))
      .pipe(gulpIf('*.js', uglify()))
      .pipe(gulp.dest('dist/'));
});