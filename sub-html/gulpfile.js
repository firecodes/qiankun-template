const gulp = require('gulp')
const startServer = require('./server.js')
const fse = require('fs-extra');
const replace = require('gulp-replace');
const publicPath = `/qiankun-template/sub-html/` //--path=`/apps/sub-html/`
// const publicPath = `/apps/sub-html/` //--path=``

function existsFile(dist = 'dist', callback) {
  fse.exists(dist, (exists) => {
    if (exists) {
      callback && callback()
    } else {
      shell.echo(`please run build first`)
    }
  })
}
gulp.task('update-html-paths', async function () {
  // 假设你想把所有的"/old-path/"替换为"/new-path/"
  await gulp.src('./public/**/*.html')
    .pipe(replace(/<%=publicPath>/g, publicPath))
    // .pipe(replace('publicPath', publicPath))
    .pipe(gulp.dest('dist'));
});

async function copyAssets() {
  existsFile('public', async function () {
    await fse.emptyDir('dist')
    await gulp.src('./public/**/*.html')
      .pipe(replace(/<%=publicPath>/g, publicPath))
      .pipe(gulp.dest('dist'));
    // await gulp.src('./public/**', { nodir: true }).pipe(gulp.dest('dist'))
    await gulp.src('./js/**', { nodir: true }).pipe(gulp.dest('dist/js/'))
    // await gulp
    //   .src('./dist/**', { nodir: true })
    //   .pipe(gulp.dest('dist-examples/libs/sdk/'))
  })
}

gulp.task('server', gulp.series((done) => {
  startServer()
  done();
}));

gulp.task('build',
  gulp.series((done) => {
    copyAssets()
    done();
  }) //, 'update-html-paths'
);