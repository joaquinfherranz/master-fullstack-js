var gulp = require('gulp'), 
    browserify = require('browserify'), 
    watchify = require('watchify'), 
    source = require('vinyl-source-stream'); 

var entry = './script.js'; //Script de entrada 
var args = watchify.args; 
args.debug = true; //Genera el sourcemap para debuguear
args.fullPaths = false; //Evita el uso de paths absolutos 

var bundler = watchify(browserify(entry, args)); 

function createBundle(){ 
    console.log('Now building...'); 
    return bundler.bundle() 
        .pipe(source('bundle.js')) //Nombre del bundle final
        //.pipe(gulp.dest('./build')); //Directorio de destino
        .pipe(gulp.dest('.')); //Directorio de destino
} 

gulp.task('dev', createBundle); 
bundler.on('update', createBundle); //A cada modificación generamos un nuevo bundle 

//Proporcionamos algo de información al generar el bundle
bundler.on('time', function(time){ 
    console.log('Done at ' + (time/1000)); 
});