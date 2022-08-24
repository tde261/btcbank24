import gulp from "gulp";
import gulpCopy from 'gulp-copy'

export const copyhtaccess = () => {
    return gulp.src(`./src/.htaccess`)
    .pipe(gulp.dest('./dist'));
}