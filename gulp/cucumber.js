'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var cucumber = require('gulp-cucumber');

gulp.task('cucumber', function () {
    return gulp.src(path.join(conf.paths.acceptance, 'features/*')).pipe(cucumber({
        'steps': path.join(conf.paths.acceptance, 'step_definitions/*.js'),
        'support': path.join(conf.paths.acceptance, 'support/*.js')
    }));
});
