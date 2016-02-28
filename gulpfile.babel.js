import gulp from 'gulp';
import rimraf from 'gulp-rimraf';
import * as tasks from 'gulp-modern-tasks';

const sassOpts = {
    source: './src/sass/main.scss',
    outFile: 'timepicker.css',
    outPath: './build/css',
    watch: './src/sass/**/*.scss',
};

const jsOpts = {
    entries: ['./src/js/timepicker.js'],
    outFile: 'timepicker.js',
    outPath: './build/js',

    testOpts: {
        entries: ['./test/src/tests.js'],
        outFile: 'tests.js',
        outPath: './test/build',
        runner: './test/runner.html',
    },
};

gulp.task('compile:sass', () => tasks.compileSASS(sassOpts));
gulp.task('compile:js', () => tasks.compileJS(jsOpts));
gulp.task('test:js', () => tasks.testJS(jsOpts.testOpts));
gulp.task('lint:js', () => tasks.lintJS('./src/js/*.js'));
gulp.task('default', ['lint:js', 'test:js', 'compile:sass', 'compile:js']);

gulp.task('dist:app', ['compile:sass', 'compile:js'], () => {
    gulp.src('./build/js/timepicker.js').pipe(gulp.dest('./dist'));
    gulp.src('./build/css/timepicker.css').pipe(gulp.dest('./dist'));
});

gulp.task('clean:ghpages', () => {
    gulp.src('./ghpages/scripts/*', {read: false}).pipe(rimraf());
    gulp.src('./ghpages/stylesheets/*', {read: false}).pipe(rimraf());
});

gulp.task('dist:ghpages', ['clean:ghpages'], () => {
    gulp.src('./node_modules/mocha/mocha.css').pipe(gulp.dest('./ghpages/stylesheets'));
    gulp.src('./build/css/timepicker.css').pipe(gulp.dest('./ghpages/stylesheets'));

    gulp.src('./node_modules/mocha/mocha.js').pipe(gulp.dest('./ghpages/scripts'));
    gulp.src('./node_modules/chai/chai.js').pipe(gulp.dest('./ghpages/scripts'));
    gulp.src('./node_modules/sinon/pkg/sinon.js').pipe(gulp.dest('./ghpages/scripts'));
    gulp.src('./build/js/timepicker.js').pipe(gulp.dest('./ghpages/scripts'));
    gulp.src('./test/build/tests.js').pipe(gulp.dest('./ghpages/scripts'));
});

gulp.task('watch', () => {
    global.watch = true;
    tasks.compileJS(jsOpts);
    tasks.testJS(jsOpts.testOpts);
    gulp.watch(sassOpts.watch, ['compile:sass']);
});
