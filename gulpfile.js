const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCss = require("gulp-clean-css");
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
  return gulp.src([`${srcDir}/**/*.html`]).pipe(gulp.dest("./docs"));
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
