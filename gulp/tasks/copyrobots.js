import gulp from "gulp";
import gulpCopy from 'gulp-copy'

export const copyrobots = () => {
    return gulp.src(`./src/*.txt`)
    .pipe(gulp.dest('./dist'));
}