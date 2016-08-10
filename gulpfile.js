var gulp = require('gulp');
var fs = require('fs');
var webpack = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');
var pkg = require('./package.json');

gulp.task('buildLib', () => {
  gulp.src('lib/index.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('dist/lib'));
});

gulp.task('copyDependencies', () => {
  delete pkg.devDependencies
  delete pkg.scripts;

  !fs.statSync('dist').isDirectory() && fs.mkdirSync('dist');
  fs.writeFileSync('dist/package.json', JSON.stringify(pkg, null, '  '), 'utf8');
});

gulp.task('copyEntryPoint', () => {
  !fs.statSync('dist').isDirectory() && fs.mkdirSync('dist');
  fs.writeFileSync('dist/index.js', `module.exports = require('./lib/index.js');`);
});

gulp.task('build', ['copyDependencies', 'copyEntryPoint', 'buildLib']);