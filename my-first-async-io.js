const fs = require('fs');
const file = process.argv[2];

const content = fs.readFile(file, 'utf8',function(err,data){ 
    if(err){
        console.log('error');
    }
    const lines=data.toString().split('\n').length-1;
    console.log(lines);
});