import gulp from "gulp";
import gulpCopy from 'gulp-copy'

export const copyfavicon = () => {
    return gulp.src(`./src/*.ico`)
    .pipe(gulp.dest('./dist'));
}