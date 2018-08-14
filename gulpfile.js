
const path = require('path');

const gulp = require('gulp');
const clean = require('gulp-clean');
const sass = require('gulp-sass');

const distPath = './dist/';
const srcPath = './src/';
const sassSrcPath = path.join(srcPath, 'scss/**/*.scss');



// Clean
gulp.task('clean', () => {
  return gulp.src(distPath, {read: false})
    .pipe(clean());
});


// Copy HTML, JS and assets into "/dist" (exclude Sass files)
gulp.task('copy', () => {
  return gulp.src([
      path.join(srcPath, '**/*'),
      '!' + path.join(srcPath, '**/scss/**')
    ])
    .pipe(gulp.dest(distPath));
});


// Sass compile files to CSS on "/dist"
gulp.task('sass', () => {
  return gulp.src(sassSrcPath)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(`${distPath}/css`));
});

gulp.task('sass:watch', () => {
  gulp.watch(sassSrcPath, ['sass']);
});


// Compound tasks

// Build
gulp.task('build', ['copy', 'sass']);

// Default
gulp.task('default', ['clean'], () => {
  gulp.start('build');
});
