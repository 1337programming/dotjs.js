#! /usr/bin/env node

var fs = require('fs-extra');
var shell = require('shelljs');

console.log(process.argv);

var userArgs = process.argv.slice(2);

var inputFile = userArgs[0];
var outputFile = inputFile + '.TEMP';

fs.readFileSync(inputFile).toString().split('\n').forEach(function (unLine) {
  var line = unLine.toString();
  var words = line.split(' ');
  words.forEach(function (word) {
    fs.appendFileSync(outputFile, 'dotjs.js.');
  });
  fs.appendFileSync(outputFile, '\n');
});

shell.rm('-rf', inputFile);
shell.mv('-f', outputFile, inputFile);
