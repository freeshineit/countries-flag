const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
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
    .pipe(gulp.dest("./lib"));
}

function copyAssets() {
  return gulp
    .src([`${srcDir}/**/*.png`, `${srcDir}/**/*.html`, `${srcDir}/**/*.scss`])
    .pipe(gulp.dest("./lib"))
    .pipe(gulp.dest("./docs"));
}

function generateDocs() {
  return gulp.src([`./lib/**/*`]).pipe(gulp.dest("./docs"));
}

exports.default = gulp.series(clean, buildStyle, copyAssets, generateDocs);
