var loginPageObj = require('./../../pageobjects/LoginPage/LoginPage.js');

var addProduct = require('./../../pageobjects/AddProduct/AddProduct.js');

var page = require('./../../pageobjects/BasePage/BasePage.js');

var tdata = require('./../../json/product.json');

var logger = require('./../../log');

var selectwraper = require('./../../Select-Wrapper.js');

var myselect = new selectwraper(by
		.xpath("//select[@id='DefaultPriceScheduleID']"));

describe("Addition of the Product", function() {
	
beforeEach(function() {
		

        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 200000;
     });

     afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
     });
     
     browser.ignoreSynchronization = true;
	
	

	it("product should be added successfully", function() {

		addProduct.clickOnMastermenu();

		logger.log('info', 'Click on MasterMenu');

		addProduct.clickOnProduct();

		logger.log('info', 'Click on Product Icon');

		addProduct.clickOnNewProductIcon();
	

		logger.log('info', 'Click on New ProductIcon');

		
		


	});
	
	
	
it("Verify Create A New Product - Basic Info text", function() {
	
	
	var basicinfotext=element(by.xpath("//h5[contains(text(),'Create A New Product - Basic Info')]"));
		
	
	basicinfotext.getText().then(function(text){
		
		console.log(text);
		
		expect(text).toContain(tdata.testdata.ProductBasicInfotext);
		
	});
	
	
		
		
		
		
	});





it("Verify Product ID Label", function() {
	
	
	var productidlabel=element(by.xpath("//label[contains(text(),'Product ID')]"));
		
	
	productidlabel.getText().then(function(text){
		
		console.log(text);
		
		expect(text).toContain(tdata.testdata.ProductIDlabel);
		
	});
	
	
	
	
	
	
});




it("Verify Product Name Label", function() {
	
	
	var produceltnamelabel=element(by.xpath("//label[contains(text(),'Product Name')]"));
		
	
	produceltnamelabel.getText().then(function(text){
		
		console.log(text);
		
		expect(text).toContain(tdata.testdata.ProductNameLabel);
		
	});
	
	
	
	
	
	
});

it("VerifyProduct Description Label", function() {
	
	
	
	
	var proddeslabel=element(by.xpath("//label[contains(text(),'Product Description')]"));
		
	
	proddeslabel.getText().then(function(text){
		
		console.log(text);
		
		expect(text).toContain(tdata.testdata.ProductDescriptionLabel);
		
	});
	
	
	
	
});


it("VerifyDefault Price Schedule ID label", function() {
	
	
	
	
	var defaultpricelabl=element(by.xpath("//label[contains(text(),'Default Price Schedule ID')]"));
		
	
	defaultpricelabl.getText().then(function(text){
		
		console.log(text);
		
		expect(text).toContain(tdata.testdata.DefaultPriceScheduleIDLabel);
		
	});
	
	
	
	
	
});


it("Verify Effective Date label", function() {
	
	
	var effectivedate=element(by.xpath("//label[contains(text(),'Effective Date')]"));
		
	
	effectivedate.getText().then(function(text){
		
		console.log(text);
		
		expect(text).toContain(tdata.testdata.EffectiveDateLabel);
		
	});
	
	
	
});


it("Verify Expiry Date Label", function() {
	
	var expirydate=element(by.xpath("//label[contains(text(),'Expiry Date')]"));
		
	
	expirydate.getText().then(function(text){
		
		console.log(text);
		
		expect(text).toContain(tdata.testdata.ExpiryDatelabel);
		
	});
	
	
	

	
	
});
	
	
	
	it("Add a Product Successfully", function() {
		
		addProduct.enterProductId(tdata.testdata.ProductID);

		logger.log('info', 'Enter Product ID');

		addProduct.enterProductName(tdata.testdata.ProductName);

		logger.log('info', 'Enter Product Name');

		addProduct.enterProductDescription(tdata.testdata.ProductDescription);

		logger.log('info', 'Enter Product Description');

		browser.sleep(4000);

		myselect.selectByValue(tdata.testdata.DefaultPriceScheduleID);

		logger.log('info', 'Select value from dropdown');

		addProduct.enterEffectiveDate(tdata.testdata.EffectiveDate);

		logger.log('info', 'Enter effctive Date');

		addProduct.enterExpirDate(tdata.testdata.ExpiryDate);

		logger.log('info', 'Enter Expiray Date');


		browser.sleep(4000);
		
		var EC = protractor.ExpectedConditions;
		
		// Waits for the element with id 'abc' to be clickable.
		browser.wait(EC.elementToBeClickable($('#featured')), 5000);


	var activechkbox=element(by.xpath("//input[@id='featured']"));
	
	activechkbox.click();
	
	
	
	// Waits for the element with id 'abc' to be clickable.
	
	
	addProduct.clickOnSaveButton();
	
	  browser.sleep(4000);
	    
	
	
	});
	
	
	
	
	
it("Verify Title of the ProductPage", function() {
    
    	browser.getTitle().then(function(expTitle){
    		
    		var actualTtile="Premier Nutrition Seller";
    		
    		if(expTitle==actualTtile){
    			
    			console.log("Title is correct");
    			
    		}
    		
    		else{
    			
    			console.log("Title is not correct");
    		}
    		
    	});
    	
    	
    });
    
    it("Veriy  links present on ProductPage", function() {
    	
    	element.all(by.tagName("a")).getText().then(function(text){
    		
    		for(var i=0; i<text.length; i++){
    			
    			
    			console.log(text[i]);
    		}
    		
    		
    		
    	});
    	
    	
    	
    	
    });
    
    
    
	it("Verify successfull Message that Product has been added", function() {
		
		var msg=element(by.xpath("//div[@id='toast-container']"));
		
		expect(msg.isDisplayed()).toBeTruthy();
		
		msg.getText().then(function(text){
			
			console.log("success message is:"+text);
			
			expect(text).toContain(tdata.testdata.successmsg);
			
			
		});
		
	

	});

	

    

    

    

	
	

});