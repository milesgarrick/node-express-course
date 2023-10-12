const { writeFileSync, readFileSync} = require("fs");

writeFileSync('.\\temporary\\fileA.txt', 'line1\nline2\nline3', {flag: 'a'});
console.log(readFileSync('.\\temporary\\fileA.txt', 'utf-8'));