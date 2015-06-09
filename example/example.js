#!/usr/bin/env node
'use strict';

var lsView = require('..');

var minimist = require('minimist');


(function (opts) {
  console.log(lsView([
    { name: 'file1' },
    { name: 'symlink', type: 'symlink' },
    { name: 'file2' },
    { name: 'dir', type: 'directory' },
    { name: 'file3' },
    { name: 'executable', type: 'executable' },
    { name: 'file4' },
    { name: 'file5' },
    { name: 'file6' },
    { name: 'fifo', type: 'fifo' },
    { name: 'socket', type: 'socket' }
  ], opts));
}(minimist(process.argv.slice(2))));
