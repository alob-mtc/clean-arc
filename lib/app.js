#!/usr/bin/env node
const pbar = require("progress");
const copydir = require("copy-dir");
const path = require("path");

const dir = path.resolve(__dirname,"..","./clean-arc");
console.log(dir)
module.exports = function() {
  copydir.sync(dir, process.cwd(), {
    utimes: true,
    node: true,
    cover: true
  });

  var bar = new pbar(" Loading...[:bar]", {
    total: 10,
    complete: "=",
    incomplete: " ",
    width: 30
  });
  var timer = setInterval(() => {
    bar.tick();
    if (bar.complete) {
      clearInterval(timer);
    }
  }, 100);
};
