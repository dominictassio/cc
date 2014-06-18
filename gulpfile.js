var gulp   = require('gulp'),
    sass   = require('gulp-ruby-sass'),
    gutil  = require('gulp-util'),
    watch  = require('gulp-watch');

gulp.task('sass', function() {
    return gulp.src('./sass/*.sass')
        .pipe(sass({sourcemap: true,
                    style: 'compact',
                    lineNumbers: true}))
        .pipe(gulp.dest('./css/'))
});

gulp.task('watch', function() {
    gulp.src('./sass/**/*.sass')
        .pipe(watch(function(files) {
            return files.pipe(sass({sourcemap: true,
                                    style: 'compact',
                                    lineNumbers: true}))
                        .pipe(gulp.dest('./css/'))
        }));
});