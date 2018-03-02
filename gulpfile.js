var gulp=require('gulp');
var BrowserSync=require('browser-sync');
gulp.task('style',function(){
  BrowserSync.reload();
})
gulp.task('hxjs',function(){
  BrowserSync.reload();
})
gulp.task('html_ys',function(){
  BrowserSync.reload();
})
gulp.task('serve',function(){
  BrowserSync({
    server:{baseDir:'./'}
  });
  gulp.watch('css/*.css',['style']);
  gulp.watch('js/*.js',['hxjs']);
  gulp.watch('*.html',['html_ys']);

})
