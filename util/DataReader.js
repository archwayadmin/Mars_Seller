/**
 * Created by sunny.bhatia on 09-10-2017.
 */

var DataReader;
resultSet = {};
DataReader = function () {

    this.ReadDataFromFile = function (filename, worksheetname) {

        var promiseObj = new Promise(function (fulfill, reject){
            var XLSX = require('xlsx');
            var workbook = XLSX.readFile('./testdata/' + filename + '.xlsx');
            var sheetData = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[worksheetname]);
            fulfill(sheetData);

        });
        return promiseObj;
    };
};

module.exports = new DataReader();