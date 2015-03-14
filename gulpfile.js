var gulp = require('gulp');
var babel = require('gulp-babel');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

// WITHOUT modules
gulp.task("default", function () {
  return gulp.src("source/*.js")
    .pipe(babel())
    .pipe(gulp.dest("transpiled"));
});

gulp.task("watch", function(){
    gulp.watch('source/*.js', ['default'])
});

// WITH modules
gulp.task('modules', function() {
    browserify({
    entries: './source/main.js',
    debug: true
    })
    .transform(babelify)
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./transpiled'));
});
