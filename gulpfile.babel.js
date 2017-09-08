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

gulp.task('build', (done) => {
    glob('./experiments/**/app.js', (err, files) => {
        if (err) {
            done(err);
        }
        console.log(files);
        done();
        // const tasks = files.map(entry => browserify({ entries: [entry] })
        //     .bundle()
        //     .pipe(source(entry))
        //     .pipe(rename({
        //         extname: '.bundle.js',
        //     }))
        //     .pipe(gulp.dest('./dist')));
        // es.merge(tasks).on('end', done);
    });
});


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

const rebundle = b => b.bundle()
    .on('error', logBrowserifyError)
    .pipe(source('index.js'))
    .pipe(buffer())
    .pipe(gulp.dest(path.join(targets.js)))
    .pipe(gulp.dest(targets.js));


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
        .pipe(sourcemaps.init({
            loadMaps: true,
        }))
        .pipe(sourcemaps.write(path.join(targets.dist, 'js')))
        .pipe(gulp.dest(targets.js))
        .pipe(babili({
            mangle: {
                keepClassName: true,
            },
        }))
        .pipe(gulp.dest(targets.js));
});
