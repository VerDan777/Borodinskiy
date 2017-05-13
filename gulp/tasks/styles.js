const gulp =require('gulp');
    styles=require('gulp-sass');
    sassModuleImporter= require('sass-module-importer');

gulp.task('styles',function(){
    return gulp.src('./src/sass/**/*.scss')
    .pipe(styles({import:sassModuleImporter()}))
    .on('error',function(errorInfo){
        console.log(errorInfo.toString())
        this.emit('end');
    })
    .pipe(gulp.dest('./build/'))
});