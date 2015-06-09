'use strict';

var chalk = require('chalk');


var lsView = function (files, opt) {
  opt = opt || {};
  if (opt.color == null) {
    opt.color = true;
  }
  if (opt.suffixes == null) {
    opt.suffixes = true;
  }

  return files.map(function (file) {
    var color = opt.color && lsView.colors[file.type];
    var path = color ? color(file.name) : file.name;
    var suffix = (opt.suffixes && lsView.suffixes[file.type]) || '';
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
