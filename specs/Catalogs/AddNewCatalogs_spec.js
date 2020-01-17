var loginPageObj = require('./../../pageobjects/LoginPage/LoginPage.js');

var addProduct= require('./../../pageobjects/AddProduct/AddProduct.js');

var page = require('./../../pageobjects/BasePage/BasePage.js');

var catalogObject = require('./../../pageobjects/Catalogs/Catalogs.js');

var OR = require('./../../json/objects.json');

var logger= require('./../../log');

var selectwraper= require('./../../Select-Wrapper.js');

var myselect= new selectwraper(by.xpath("//select[@id='DefaultPriceScheduleID']"));


describe("Addition of  Catelog", function() {
	
beforeEach(function() {
		

        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 200000;
     });

     afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
     });
     
     browser.ignoreSynchronization = true;
	
	
	it("Catelog should be addedd successfully", function() {
		
		
		catalogObject.clickOnMastermenu();
		
		
		logger.log('info', 'Click on MasterMenu');

		
		catalogObject.clickOnCatalogIcon();
		
		logger.log('info', 'Click on Catalog Icon');

		
		catalogObject.clickOnAddBtn();
		
		logger.log('info', 'Click on Add Button');

		
		catalogObject.entercatalogIdValue("demo123");
		
		logger.log('info', 'Enter Catalog id ');

		
		catalogObject.enterCatalogName("demo_test");
		
		logger.log('info', 'Enter catalog name');

		
		catalogObject.clickOnSaveBtn();
		
		logger.log('info', 'Click on save button');
		
		browser.sleep(4000);

		
		
	
		
		
	});
	
	it("user should be able to update Catalog successfully", function() {
		
		
		
		
		
		
		
	});
	
	
it("user should be able to delete Catalog successfully", function() {
		
		
		
		
		
	});
	
	
	
});