var loginPageObj = require('./../../pageobjects/LoginPage/LoginPage.js');

var addCategory= require('./../../pageobjects/AddCategory/AddCategory.js');

var page = require('./../../pageobjects/BasePage/BasePage.js');

var tdata = require('./../../json/category.json');

var logger= require('./../../log');

var selectwraper= require('./../../Select-Wrapper.js');

var myselect= new selectwraper(by.xpath("//select[@id='DefaultPriceScheduleID']"));

// will select value in selectwarpper later


describe("New category addition", function() {
	
beforeEach(function() {
		

        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 200000;
     });

     afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
     });
     
     browser.ignoreSynchronization = true;
     
     
     
     it('Mouse Operations on Master menu on Home Page', function() {
    	 
 	
 		
 		// mouse hover on a submenu
    	 
 
 		browser.actions().mouseMove(element(by.css(" li.nav-item:nth-child(1) div.dropdown > button.dropbtn.nav-link.text-color"))).perform();
     
 	});
     
     
     
	
	
	it("Verify user is on Category Page", function() {
		
		
		addCategory.clickOnCategoryLink();
		
		logger.log('info','Click on Category');
		
		
	 var cataegory=element(by.xpath("//a[contains(text(),'Categories')]"));
	
	 cataegory.getText().then(function(text){
		
		console.log("category value is :"+text);
		
		expect(text).toContain(tdata.testdata.CategoriesText);
		
	});
	
	
		
		
		
		
		
	});
	
	
	
	it("Verify URl if user is on Category Page", function() {
		
		expect(browser.getCurrentUrl()).toContain(tdata.testdata.categoryurl);
		
		
	});
	
	
	
	
	it("Verify New Category icon is present", function() {
		
		var newctaegorybtn=element(by.xpath("//button[@class='btn btn-primary float-right mt-3']"));
		
		expect(newctaegorybtn.isDisplayed()).toBeTruthy();
		
		expect(newctaegorybtn.isDisplayed()).toBeTruthy();
		
		
		
		
	});
	
	
	
	
	
	
	it("user should be able to add new category successfully", function() {
		
		
		
       addCategory.clickOnNewCategoryLink();
		
		logger.log('info','Click on new  Category icon');
		
		
		
		
		
	});
	
	
	it("Verify Create A New Category lable  presence", function() {
		
	var newcatg=element(by.xpath("//h5[contains(text(),'Create A New Category')]"));
	
	expect(newcatg.isDisplayed()).toBeTruthy();
	
	newcatg.getText().then(function(text){
		
		console.log("new category val is:"+text);
		
		expect(text).toContain(tdata.testdata.categorylable);
		
		
	});
	
	
	
	
		
	});
	
	
	
	
	it("Verify Category ID lable presence", function() {
		
		
		
		var CategoryId =element(by.xpath("//label[contains(text(),'Category ID')]"));
		
		expect(CategoryId.isDisplayed()).toBeTruthy();
		
		CategoryId.getText().then(function(text){
			
			console.log("new category val is:"+text);
			
			expect(text).toContain(tdata.testdata.CategoryIDlabel);
			
			
		});
		
		

		
	});
	
it("Verify Category Name presence", function() {
	
	
	var Categoryname =element(by.xpath("//label[contains(text(),'Category Name')]"));
	
	expect(Categoryname.isDisplayed()).toBeTruthy();
	
	Categoryname.getText().then(function(text){
		
		console.log("new category val is:"+text);
		
		expect(text).toContain(tdata.testdata.CategoryNamelabel);
		
		
	});
	
	

		
		
	});

it("Verify Category Descriptionpresence", function() {
	
	
	var Categorydesc  =element(by.xpath("//label[contains(text(),'Category Description')]"));
	
	expect(Categorydesc.isDisplayed()).toBeTruthy();
	
	Categorydesc.getText().then(function(text){
		
		console.log("new category val is:"+text);
		
		expect(text).toContain(tdata.testdata.CategoryDescriptionlabel);
		
		
	});
	
	
	

});



	
	it("verify user is able to create a new Category", function() {
		
		
		
       addCategory.enterValueInCategoryId(tdata.testdata.CategoryID);
		
		logger.log('info','Enter Category ID');
		
		
		addCategory.enterValueInCategoryName(tdata.testdata.CategoryName);
		
		logger.log('info','Enter Category name');
		
		
		addCategory.enterValueInDescription(tdata.testdata.CategoryDescription);
		
		logger.log('info','Enter Category Description');
		
		
		addCategory.clickOnCreateButton();
				
		logger.log('info','Click on Create ');
		
		
		var nameerror=element(by.xpath("//span[@class='error-message']"));
		
			var msg=element(by.xpath("//div[@id='toast-container']"));
			
			msg.isDisplayed().then(function(text){
				
				
				if(text){
					
					
					msg.getText().then(function(text){
						
						console.log("success message is:"+text);
						
						expect(text).toContain(tdata.testdata.successmsg);
						
						
					});
					
					
					
				}
				 
				else{
					
					
					console.log("no present");
				}
				
				
			});
			
			
			
			
	
				
	
			
		});
		
		
		
				
	

	
	xit("Verify successfull Message that category has been added", function() {
		
		var msg=element(by.xpath("//div[@id='toast-container']"));
		
		expect(msg.isDisplayed()).toBeTruthy();
		
		msg.getText().then(function(text){
			
			console.log("success message is:"+text);
			
			expect(text).toContain("Category has been added");
			
			
		});
		
	

	});

	
	
	
	
	
	
});