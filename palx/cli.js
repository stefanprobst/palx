#!/usr/bin/env node
const palx = require('./dist');
const color = process.argv[2];

if (!color) {
  console.log('Please provide a hex color.');
} else {
  console.log(JSON.stringify(palx(color), null, 2));
}
