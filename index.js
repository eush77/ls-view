'use strict';

var chalk = require('chalk'),
    cmpby = require('cmpby'),
    stableSort = require('stable');


var lsView = function (files, opt) {
  opt = opt || {};
  ['color', 'suffixes', 'sort', 'groupDirectoriesFirst'].forEach(function (key) {
    if (opt[key] == null) {
      opt[key] = true;
    }
  });

  if (opt.sort || opt.groupDirectoriesFirst) {
    // Clone input array to protect it from modifications.
    files = files.slice();
  }

  if (opt.sort) {
    files.sort(cmpby(function (file) { return file.name }));
  }

  if (opt.groupDirectoriesFirst) {
    stableSort.inplace(files, cmpby(function (file) {
      return file.type != 'directory';
    }));
  }

  return files
    .map(function (file) {
      var color = opt.color && lsView.colors[file.type];
      var path = color ? color(file.name) : file.name;
      var suffix = (opt.suffixes && lsView.suffixes[file.type]) || '';
      return path + suffix;
    })
    .join('\n');
};


lsView.suffixes = {
  directory: '/',
  symlink: '@',
  executable: '*',
  fifo: '|',
  socket: '='
};


lsView.colors = {
  directory: chalk.bold.blue,
  symlink: chalk.bold.cyan,
  executable: chalk.bold.green,
  fifo: chalk.bgBlack.yellow,
  socket: chalk.bold.magenta
};


module.exports = lsView;
