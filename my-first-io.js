const fs = require('fs');
const res = fs.readFileSync(process.argv[2],'utf8').split('\n').length -1;
console.log(res);