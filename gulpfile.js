
const path = require('path');

const gulp = require('gulp');
const clean = require('gulp-clean');
const sass = require('gulp-sass');

const distPath = './dist/';
const srcPath = './src/';
const sassSrcPath = path.join(srcPath, 'scss/**/*.{scss,sass}');


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


// Compound tasks --------------------------------

gulp.task('watch', () => {
  // Styles
  gulp.watch([sassSrcPath], ['sass']);

  // Copy
  gulp.watch([
    path.join(srcPath, '**/*'),
    '!' + path.join(srcPath, '**/scss/**')
  ], ['copy']);
});

// Build
gulp.task('build', ['copy', 'sass']);

// Default. Cleans "/dist" and builds
gulp.task('default', ['clean'], () => {
  gulp.start('build');
});
