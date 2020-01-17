var loginPageObj = require('./../../pageobjects/LoginPage/LoginPage.js');

var addCategory= require('./../../pageobjects/AddCategory/AddCategory.js');

var addProduct= require('./../../pageobjects/AddProduct/AddProduct.js');

var addressobj= require('./../../pageobjects/Addresses/Address.js');

var page = require('./../../pageobjects/BasePage/BasePage.js');

var tdata = require('./../../json/address.json');

var logger= require('./../../log');

var selectwraper= require('./../../Select-Wrapper.js');

var myselect= new selectwraper(by.xpath("//shared-modal[1]//div[2]//select[1]"));

var myselect1= new selectwraper(by.xpath("//shared-modal[1]//div[10]//select[1]"));

describe("verify address", function() {
	
beforeEach(function() {
		

        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 200000;
     });

     afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
     });
     
     browser.ignoreSynchronization = true;
	
	
	
	it("click on Address successfully", function() {
		
		
		addCategory.clickOnMasterMenu();
		
		addressobj.clickonaddressicon();
		
		
	});
	
	
	it("Verify New Address Button Presence", function() {
		
	var newaddress=	element(by.xpath("//button[@class='btn btn-primary float-right mt-3']"));
	
	expect(newaddress.isDisplayed()).toBeTruthy();
	
	expect(newaddress.isPresent()).toBeTruthy();
			
			
			
		});
	
	it("Verify URL", function() {
		
	var url=	browser.getCurrentUrl();
	
	expect(url).toContain("addresses");
		
		
		
		
	});
	
	


	
	it("Verify name Text present on Address page", function() {
		
		
		var name=element(by.xpath("//button[contains(text(),'Name')]"));
		
		
		name.getText().then(function(text){
			
			console.log("name text"+text);
			
			expect(text).toContain("Name");
			
		});
		
		

			
			
			
		});
	
	
	
	
	
	it("Verify Address link in header present on Address page", function() {
		
		
		var address_link=element(by.xpath("//button[@class='btn btn-link font-weight-bold'][contains(text(),'Address')]"));
		
		
		address_link.getText().then(function(text){
			
			console.log("address_link text"+text);
			
			expect(text).toContain("Address");
			
		});
		
		

			
		});
	
	
	
	
	it("Verify Creation of New Address", function() {
		
		
		addressobj.clickonnewaddress();
		
		// countrty
		
		browser.sleep(3000);
		
		myselect.getOptions().getText().then(function(text){
		
			console.log(text);
			
		});
		
		
		myselect.selectByText(tdata.testdata.selectcountry);
		
		//fname
		
		addressobj.enterfname(tdata.testdata.firstname);
		
		
		// lanme
		addressobj.enterlname(tdata.testdata.LastName);
		
		
		// Company Name
		
		addressobj.entercompanyname(tdata.testdata.companyName);
		
		//Address 1
		
		addressobj.enteradd1(tdata.testdata.address1);
		
		
		//Address 2
		
		addressobj.enteradd2(tdata.testdata.address2);
		
		
		//City
		addressobj.entercity(tdata.testdata.CityName);
		
		// state
		
		browser.sleep(3000);
		
		myselect1.getOptions().getText().then(function(text){
			
			console.log(text);
		});
		
		
		
		
		myselect1.selectByText(tdata.testdata.selectstate);
		
		
	// zipcode
		
		addressobj.enterzipcode(tdata.testdata.zipCod);
		
		
		
		// phone number
		
		
		addressobj.enterphone(tdata.testdata.phoneNumber);
		
		
		// click on create button
		
		var flag = true;
		
	
		addressobj.clickonCreatebutton();
		
		
			
	
});
			
		

	
});