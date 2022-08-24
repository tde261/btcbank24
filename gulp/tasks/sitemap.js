import gulp from "gulp";
import sitemap from 'gulp-sitemap';

export const sp = () => 
    gulp.src(`dist/*.html`, {
            read: false
        })
        .pipe(sitemap({
            siteUrl: `http://btcbank24.site`
        }))
        .pipe(gulp.dest('./dist'));

