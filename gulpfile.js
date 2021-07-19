const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();
const del = require('del');
const srcmaps = require('gulp-sourcemaps');
const less = require('gulp-less');


const styleFiles = [
    './src/css/fontawesome.min.css',
    './src/css/fonts.less',
    './src/css/main.less',
    './src/css/sticky_header.less',
    './src/css/header.less',
    './src/css/booking.less',
    './src/css/specialities.less',
    './src/css/menu.less',
    './src/css/private_events.less'
]
const jsFiles = [
    './src/js/main.js',
    './src/js/smooth_scroll.js',
    './src/js/timer.js',
    './src/js/active_table.js',
    './src/js/slider.js'
]

gulp.task('styles', () => {
    //шаблон для поиска файлов стилей
    return gulp.src(styleFiles)
        .pipe(srcmaps.init())
        .pipe(less())
        //объеденение файлов в один
        .pipe(concat('style.css'))

        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cleanCSS({
            level: 2
        }))

        .pipe(srcmaps.write('./'))
        //выходная папка для стилей
        .pipe(gulp.dest('./build/css'))
        .pipe(browserSync.stream());
});

gulp.task('scripts', () => {
    return gulp.src(jsFiles)

        .pipe(concat('script.js'))

        .pipe(uglify({
            toplevel: true
        }))

        .pipe(gulp.dest('./build/js'))
        .pipe(browserSync.stream());
}
);


gulp.task('del', () => {
    return del(['build/*'])
});

gulp.task('watch', () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    //следить за изменением файлов
    gulp.watch('./src/css/**/*.less', gulp.series('styles'))
    gulp.watch('./src/js/**/*.js', gulp.series('scripts'))
    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('default', gulp.series('del', gulp.parallel('styles', 'scripts'), 'watch'));