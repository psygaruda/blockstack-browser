import gulp from 'gulp'
var shell = require('gulp-shell')


gulp.task('compileCorsProxyForMac', shell.task([
  './node_modules/.bin/nexe -i ./node_modules/.bin/corsproxy -o ./native/macos/Blockstack/corsproxy'
]))
