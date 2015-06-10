#!/usr/bin/env node
'use strict';

// Bust process.argv sniffing.
require('chalk').enabled = true;

var lsView = require('..');

var minimist = require('minimist'),
    camelCaseKeys = require('camelcase-keys');


(function (opts) {
  console.log(lsView([
    { name: 'file1' },
    { name: 'symlink', type: 'symlink' },
    { name: 'file2' },
    { name: 'dir', type: 'directory' },
    { name: 'file3' },
    { name: 'a.out', type: 'executable' },
    { name: 'file4' },
    { name: 'file5' },
    { name: 'file6' },
    { name: 'fifo', type: 'fifo' },
    { name: 'socket', type: 'socket' }
  ], opts));
}(camelCaseKeys(minimist(process.argv.slice(2)))));
