const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCss = require("gulp-clean-css");
const htmlMin = require("gulp-htmlmin"); //引入html压缩模块
const del = require("del");

const srcDir = "./src";

function clean() {
  return del(["./lib/**", "./docs/**"]);
}

function buildStyle() {
  return gulp
    .src([`${srcDir}/**/*.scss`], {
      base: srcDir,
      ignore: ["**/demos/**/*", "**/tests/**/*"]
    })
    .pipe(sass().on("error", sass.logError))
    .pipe(cleanCss())
    .pipe(gulp.dest("./lib"));
}

function copyPng2Lib() {
  return gulp
    .src([`${srcDir}/**/*.png`, `${srcDir}/**/*.scss`])
    .pipe(gulp.dest("./lib"));
}

function copyHtml2Docs() {
  return gulp
    .src([`${srcDir}/**/*.html`])
    .pipe(
      htmlMin({
        removeComments: true, //清除HTML注释
        collapseWhitespace: true, //压缩HTML
        collapseBooleanAttributes: true, //省略布尔属性的值 <input checked="true"/> ==> <input checked />
        // removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
        // removeScriptTypeAttributes: false, //删除<script>的type="text/javascript"
        // removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
        minifyJS: true, //压缩页面JS
        minifyCSS: true //压缩页面CSS
      })
    )
    .pipe(gulp.dest("./docs"));
}

function generateDocs() {
  return gulp
    .src([`./lib/**/*.css`, `./lib/**/*.png`])
    .pipe(gulp.dest("./docs"));
}

exports.default = gulp.series(
  clean,
  buildStyle,
  copyPng2Lib,
  copyHtml2Docs,
  generateDocs
);
