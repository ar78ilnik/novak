import fs from 'fs';
import ttf2towoff2 from 'gulp-ttf2woff2';

export const ttfToWoff = () => {
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf2`)
        .pipe(app.plugins.plumber(app.plugins.notify.onError({
            title: "FONTS",
            message: "Error: <%= error.message %>"
        })))
        .pipe(ttf2towoff2())
        .pipe(app.gulp.dest(`${app.path.build.fonts}`));
}
