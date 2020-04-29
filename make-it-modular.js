const myModule = require('./mymodule.js');
const dir = process.argv[2];
const filterString = process.argv[3];

myModule(dir, filterString, function(err, list) {
	if (err)
		return console.error('Error: ', err)
	list.forEach(function (file) {
		console.log(file)
	})
})