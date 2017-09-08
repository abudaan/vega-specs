import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import gutil from 'gulp-util';
import rename from 'gulp-rename';
import babili from 'gulp-babili';
import sass from 'gulp-sass';
import concat from 'gulp-concat';
import autoprefixer from 'gulp-autoprefixer';
import buffer from 'vinyl-buffer';
import source from 'vinyl-source-stream';
import browserify from 'browserify';
import watchify from 'watchify';
import babelify from 'babelify';
import es from 'event-stream';
import glob from 'glob';
import path from 'path';

const sources = {
    js: './src/js/**/*.js',
    main_js: './src/js/index.js',
};

const targets = {
    // js: './public/js/app2.js',
    js: './public/js/',
};

const logBrowserifyError = (e) => {
    gutil.log(gutil.colors.red(e.message));
    // if(e.codeFrame){
    //   if(_.startsWith(e.codeFrame, 'false')){
    //     console.log(e.codeFrame.substr(5))
    //   }else{
    //     console.log(e.codeFrame)
    //   }
    // }
};

const rebundle = (b, target) => b.bundle()
    .on('error', logBrowserifyError)
    .pipe(source('app.bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest(target));


gulp.task('build_all', (done) => {
    glob('./experiments/**/app.js', (err, files) => {
        if (err) {
            done(err);
        }
        const tasks = files.map((file) => {
            gutil.log(gutil.colors.blue('building', file));
            const b = browserify({ entries: file, debug: true });
            b.transform(babelify.configure({
                compact: true,
            }));

            return b.bundle()
                .pipe(source(file))
                .pipe(rename({
                    extname: '.bundle.js',
                }))
                .pipe(gulp.dest('./'));
        });
        es.merge(tasks).on('end', done);
    });
});


gulp.task('watch_all', (done) => {
    glob('./experiments/**/app.js', (err, files) => {
        if (err) {
            done(err);
        }
        const tasks = files.map((file) => {
            gutil.log(gutil.colors.blue('watching', file));
            const b = watchify(browserify({ entries: file, debug: true }));
            const dir = path.dirname(file);
            b.transform(babelify.configure({
                compact: true,
            }));
            b.on('update', () => {
                gutil.log(gutil.colors.blue('update js bundle', file));
                rebundle(b, dir);
            });
            return rebundle(b, dir);
        });
        es.merge(tasks).on('end', done);
    });
});


gulp.task('watch_js', () => {
    const opts = {
        debug: true,
        paths: sources.js,
    };

    opts.cache = {};
    opts.packageCache = {};

    const b = watchify(browserify(opts));
    b.add(sources.main_js);
    b.transform(babelify.configure({
        compact: true,
    }));

    b.on('update', () => {
        gutil.log('update js bundle');
        rebundle(b);
    });

    return rebundle(b);
});


gulp.task('build_js', () => {
    const opts = {
        debug: true,
        path: sources.js,
    };
    const b = browserify(opts);
    b.add(sources.main_js);
    b.transform(babelify.configure({
        compact: true,
    }));

    return b.bundle()
        .on('error', logBrowserifyError)
        .pipe(source('index.js'))
        .pipe(buffer())
        // .pipe(sourcemaps.init({
        //     loadMaps: true,
        // }))
        // .pipe(sourcemaps.write(path.join(targets.js, 'js')))
        // .pipe(gulp.dest(targets.js))
        .pipe(babili({
            mangle: {
                keepClassName: true,
            },
        }))
        .pipe(gulp.dest(targets.js));
});


// gulp.task('build_css', () => gulp.src(sources.css)
//     .pipe(sass().on('error', sass.logError))
//     .pipe(autoprefixer())
//     .pipe(concat('main.css'))
//     .pipe(gulp.dest(targets.css)));
