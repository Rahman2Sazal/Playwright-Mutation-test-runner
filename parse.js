const fs = require('fs');
const { parse } = require('@babel/parser');

// 1. Read our calculator.js file as plain text
const code = fs.readFileSync('./calculator.js', 'utf8');

// 2. Use Babel to parse the text into an AST (Abstract Syntax Tree)
const ast = parse(code);

// 3. Print out the tree so we can inspect it
console.log(JSON.stringify(ast, null, 2));