var XLSX = require('xlsx');

var readFromExcel;

readFromExcel = function() {
	
	

	try {
			this.readFromExcel = function(sheetName, filepath) {

		var workbook = XLSX.readFile(filepath);

		var worksheet = workbook.Sheets[sheetName];

		return XLSX.utils.sheet_to_json(worksheet);

	};
	} catch (e) {
		 
		console.log("please enter valid value");
	}

};

module.exports = new readFromExcel();