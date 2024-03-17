const gulp = require('gulp')
const startServer = require('./server.js')
const fse = require('fs-extra');

function existsFile(dist = 'dist', callback) {
  fse.exists(dist, (exists) => {
    if (exists) {
      callback && callback()
    } else {
      shell.echo(`please run build first`)
    }
  })
}

async function copyAssets() {
  existsFile('public', async function () {
    await fse.emptyDir('dist')
    await gulp.src('./public/**', { nodir: true }).pipe(gulp.dest('dist'))
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

gulp.task('build', gulp.series((done) => {
  copyAssets()
  done();
}));
