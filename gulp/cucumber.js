'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

var cucumber = require('gulp-cucumber');

gulp.task('cucumber', ['serve:cucumber'], function () {
    return gulp
        .src(path.join(conf.paths.acceptance, 'features/*'))
        .pipe(cucumber({
            'steps': path.join(conf.paths.acceptance, 'step_definitions/*.js'),
            'support': path.join(conf.paths.acceptance, 'support/*.js')
        }))
        .on('error', function (err) {
            throw err;
        })
        .on('end', function () {
            browserSync.exit();
        });
});
