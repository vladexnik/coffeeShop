const {src, dest}=require('gulp');
const sass=require('gulp-sass');
const csso=require('gulp-csso');
const include=require('gulp-file-include');
const htmlmin=require('gulp-htmlmin');
const sync=require('browser-sync').create();
const htmlmin=require('gulp-htmlmin');

function html(){
    src('/**.html')
    .pipe(include({
        pefix: '@@'
    }))
    .pipe(dest('dist'))
}

exports.html=html;


