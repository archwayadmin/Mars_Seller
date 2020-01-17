var page = require('./../../pageobjects/BasePage/BasePage.js');


var Address;

Address= function(){
	
   var addressicon= element(by.xpath("//a[contains(text(),'Addresses')]"));
	
	
	var newaddress=	element(by.xpath("//button[@class='btn btn-primary float-right mt-3']"));
	
	
	
	//fname
	
	var fname=element(by.xpath("//shared-modal[1]//div[3]//input[1]"));
	
	//lname
	
	var lname=element(by.xpath("//shared-modal[1]//div[4]//input[1]"));
	
	//company name
	
	var companyname=element(by.xpath("//shared-modal[1]//div[5]//input[1]"));
	
	//Address 1
	
var add1=element(by.xpath("//shared-modal[1]//div[7]//input[1]"));


//Address 2

var add2=element(by.xpath("//shared-modal[1]//div[8]//input[1]"));


//City
var city=element(by.xpath("//shared-modal[1]//div[9]//input[1]"));


// zipcode

var zipcode=element(by.xpath("//shared-modal[1]//div[11]//input[1]"));


// phone number


var phone=element(by.xpath("//shared-modal[1]//div[12]//input[1]"));


// click on create button


var createbutton=element(by.xpath("//button[contains(text(),'Create')]"));



this.clickonaddressicon= function(){
	
	page.highlightElement(addressicon);
	
	addressicon.click();
	
};



this.clickonCreatebutton= function(){
	
	page.highlightElement(createbutton);
	
	createbutton.click();
	
};



this.clickonnewaddress= function(){
	
	page.highlightElement(newaddress);
	
	newaddress.click();
};


this.enterfname= function(value){
	
	page.highlightElement(fname);
	
	fname.clear();
	
	fname.sendKeys(value);
};



this.enterlname= function(value){
	
	page.highlightElement(lname);
	
	lname.clear();
	
	lname.sendKeys(value);
};


this.entercompanyname= function(value){
	
	page.highlightElement(companyname);
	
	companyname.clear();
	
	companyname.sendKeys(value);
};


this.enteradd1= function(value){
	
	page.highlightElement(add1);
	
	add1.clear();
	
	add1.sendKeys(value);
};

this.enteradd2= function(value){
	
	page.highlightElement(add2);
	
	add2.clear();
	
	add2.sendKeys(value);
};


this.entercity= function(value){
	
	page.highlightElement(city);
	
	city.clear();
	
	city.sendKeys(value);
};


this.enterzipcode= function(value){
	
	page.highlightElement(zipcode);
	
	zipcode.clear();
	
	zipcode.sendKeys(value);
};


this.enterphone= function(value){
	
	page.highlightElement(phone);
	
	phone.clear();
	
	phone.sendKeys(value);
};

this.CheckElementIsPresent = function (ele, callback) {
    if (ele == undefined) {
    	
        callback(false);
        
    } else {
    	
        ele.isPresent().then(function (isPresent) {
            console.log(isPresent);
        });
    }
};





};
module.exports= new Address();