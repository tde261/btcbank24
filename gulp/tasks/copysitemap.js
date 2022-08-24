import gulp from "gulp";
import gulpCopy from 'gulp-copy'

export const copysitemap = () => {
    return gulp.src(`./src/sitemap.xml`)
    .pipe(gulp.dest('./dist'));
}