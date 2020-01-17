var loginPageObj = require('./../../pageobjects/LoginPage/LoginPage.js');

var addProduct= require('./../../pageobjects/AddProduct/AddProduct.js');

var page = require('./../../pageobjects/BasePage/BasePage.js');

var homepageobj = require('./../../pageobjects/HomePage/HomePage.js');

var OR = require('./../../json/objects.json');

//var logger= require('./../../log');

var selectwraper= require('./../../Select-Wrapper.js');

var myselect= new selectwraper(by.xpath("//select[@id='languageid']"));


describe("Verify Home Page", function() {
	
beforeEach(function() {
		

        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 200000;
     });

     afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
     });
     
     browser.ignoreSynchronization = true;
	
	
	
	it("Presence of Mars", function() {
		
	var ele=element(by.xpath("//a[@class='navbar-brand']//img[@class='img-fluid']"));
	
	expect(ele).toBeTruthy();
		
		
		
		
		
	});
	
	
it("Presence of Master Menu", function() {
	
	var mastermenu=element(by.xpath("//button[contains(text(),'Master Menu')]"));
	
	expect(mastermenu).toBeTruthy();
		
		
		
	});
	


it("Presence Admin", function() {
	
var admin=	element(by.xpath("//button[contains(text(),'Admin')]"));

expect(admin).toBeTruthy();
	
	
	
});




it("Presence of  Mars Admin Seller text", function() {
	
	var ele=element(by.xpath("//h1[@class='display-4']"));
	
	
	expect(ele).toContain("Premier Nutrition Seller");
	
	
	
});


it("Presence of  Logout", function() {
	
	var logout= logelement(by.xpath("//a[contains(text(),'Logout')]"));
	
	expect(logout).toBeTruthy();
	
	
});

});




describe("Verify Announcement", function() {
	
	var announcement=element(by.xpath("//h1[contains(text(),'Announcements')]"));
	
	announcement.getText().then(function(text){
		
		console.log(text);
		
		expect(text).toContain("Announcements");
		
	});
	
	
	
	
	
	
	
	
});



describe("Verify Carousel Slides", function() {
	
	
	var carosal=element(by.xpath("//h2[contains(text(),'Carousel Slides')]"));
	
	carosal.getText().then(function(text){
		
		console.log(text);
		
		expect(text).toContain("Carousel Slides");
		
	});
	
	
	
	
});












