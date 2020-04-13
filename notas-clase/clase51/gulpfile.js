// Importaciones
const gulp = require('gulp'),
jshint = require('gulp-jshint'),
concat = require('gulp-concat'),
uglify = require('gulp-uglify-es').default,
babel = require('gulp-babel'),
sourcemaps = require('gulp-sourcemaps'),
sass = require ('gulp-sass'),
autoprefixer = require('gulp-autoprefixer'),
cssnano = require('gulp-cssnano');

// Tareas
gulp.task('otra-default', () =>
  console.log("Estas en la tarea por defecto!")
);

// gulp.task('lint', () =>
//   gulp.src('./js/*.js')
//   .pipe(jshint({
//     esnext: true
//   }))
//   .pipe(jshint.reporter('default', {verbose: true}))
// );

gulp.task('concat-ugly', () =>
  //console.log("Estas en la tarea de concatenación!")  
  gulp.src('./js/*.js')
  .pipe(concat('resultado.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('dist'))
);

gulp.task('lint', gulp.series('concat-ugly', () =>
  gulp.src('./js/*.js')
  .pipe(jshint({
    esnext: true
  }))
  .pipe(jshint.reporter('default', {verbose: true}))
));

gulp.task('default', gulp.series('lint', 'concat-ugly', () =>
  // new Promise((resolve, reject) => {
  //   console.log('algo');
  //   resolve();
  // }) 
  gulp.watch('js/*.js', gulp.series('lint'))
));

function lintear() {
  return gulp.src('./js/*.js')
    .pipe(jshint({
      esnext: true
    }))
    .pipe(jshint.reporter('default', {verbose: true}))
}

// Watcher. Cuando lanzas gulp si tienes watcher también se ejecutan
//gulp.watch('js/*.js', lintear);


//https://stackoverflow.com/questions/52095228/gulp-v4-watch-task

// //Do everything once!
// gulp.task('default', function(){
//   gulp.watch('src/styles/*.css', gulp.series('css')),
//   gulp.watch('src/html/*.html', gulp.series('copyHTML')),
//   gulp.watch('src/js/*.js', gulp.series('scripts')),
//   gulp.watch('src/images/*', gulp.series('imageMIN'));
// return
// });

function scripts() {
  return gulp.src('js/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/env']
     }))
    .pipe(sourcemaps.write('.')) 
    .pipe(gulp.dest('compiled'));
}

gulp.task('compilar', scripts)

// gulp --tasks

gulp.task('mensaje', ()=>
  new Promise((resolve, reject) => {
     console.log('mensaje...');
     resolve();
  })
);

const build = gulp.series(scripts, gulp.parallel(lintear, 'mensaje'), 'lint');
gulp.task('build', build);

const files = {
  scssPath: "./app/scss/*.scss"
}

function scssTask() {
  return gulp.src(files.scssPath)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
}

gulp.task('scssTask', scssTask)