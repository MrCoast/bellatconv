#!/usr/bin/env node

const fs = require('fs');
const converter = require('./lib/BelLatConverter');

const args = process.argv.slice(2);

// Read either from command arguments or STDIN
let inputText = args[0];
if (!inputText) {
  inputText = fs.readFileSync('/dev/stdin', 'utf-8');
}

const convertedText = converter.convertFromCyrillicToLatin(inputText);

console.log("\nConverted text:\n", convertedText);

