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
    { name: 'link', type: 'symlink' },
    { name: 'file2' },
    { name: 'dir2', type: 'directory' },
    { name: 'dir1', type: 'directory' },
    { name: 'file3' },
    { name: 'a.out', type: 'executable' },
    { name: 'regular4' },
    { name: 'second-to-last5' },
    { name: 'the-last6' },
    { name: 'fifo', type: 'fifo' },
    { name: 's0cket', type: 'socket' }
  ], opts));
}(camelCaseKeys(minimist(process.argv.slice(2)))));
