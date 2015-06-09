'use strict';

var chalk = require('chalk');


var lsView = function (files, opt) {
  return files.map(function (file) {
    var color = lsView.colors[file.type];
    var path = color ? color(file.name) : file.name;
    var suffix = lsView.suffixes[file.type] || '';
    return path + suffix;
  }).join('\n');
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
