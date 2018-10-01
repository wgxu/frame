const gulp = require('gulp'),
      sass = require('gulp-sass'),
      uglify = require('gulp-uglify'),
      concat = require('gulp-concat'),
      autoprefixer = require('gulp-autoprefixer');


gulp.task('sass',function(){
    return gulp.src('./sass/*.scss')
        .pipe(sass())
        .pipe(concat('hm.css'))
        .pipe(gulp.dest('./build/css'))
        .pipe(autoprefixer({
            browsers:  [
                "> 1%",
                "last 7 versions",
                "not ie <= 8",
                "ios >= 4",
                "android >= 3.0"
            ],
            cascade: false,
            remove:true
        }))
});

gulp.task('default',function(){
    gulp.start('sass');
    gulp.watch('./sass/*.scss',['sass']);
});