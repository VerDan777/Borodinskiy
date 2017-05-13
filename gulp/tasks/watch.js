const gulp =require('gulp');
    watch=require('gulp-watch');
    BrowserSync=require('browser-sync').create();

gulp.task('watch',function(){
    BrowserSync.init({
        server:{
            baseDir:'build'
        }
    })

    //pug
    watch('./src/*.pug',function(){
        gulp.start('pugRender');
    })
    //html 
    watch('./build/*.html',function(){
        BrowserSync.reload();
    })
    //styles
    watch('./src/sass/**/*.scss',function(){
        gulp.start('cssInject');
    })
    //
});
gulp.task('cssInject',['styles'],function(){
    gulp.src('./build/styles.css')
    .pipe(BrowserSync.stream());
})