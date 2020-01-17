
var loginPageObj = require('./../../pageobjects/LoginPage/LoginPage.js');

var addProduct= require('./../../pageobjects/AddProduct/AddProduct.js');

var page = require('./../../pageobjects/BasePage/BasePage.js');

var userObj = require('./../../pageobjects/Users/User.js');

var OR = require('./../../json/objects.json');

var tdata = require('./../../json/usergroup.json');

var logger= require('./../../log');

var userGroupObj = require('./../../pageobjects/UserGroups/UserGroups.js');


var selectwraper= require('./../../Select-Wrapper.js');

var myselect= new selectwraper(by.xpath("//select[@id='Type']"));


describe("Update User group", function() { 
	
	
beforeEach(function() {
		

        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 200000;
     });

     afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
     });
     
     browser.ignoreSynchronization = true;
	
	
	
	
	
	it("Update User group", function() {
		
		
          userGroupObj.clickOnMastermenu();
		
		 logger.log('info', 'Click on MasterMenu');
		
		 userGroupObj.clickOnUserGroupIcon();
		
		 logger.log('info', 'Click on UserGroupIcon');
		
		
		
		var search=element(by.xpath("//input[@id='search-addon']"));
		
		search.clear();
		
		
		// search by ID
	
		search.sendKeys(tdata.testdata.ID);
		
	
		// what if user no found so error message is below here
		
		var errmsg= element(by.xpath("//p[@class='mb-0']"));
		
		// if no user found than below code will run
	
      element(by.xpath("//input[@id='search-addon']")).element(by.xpath("//p[@class='mb-0']")).isPresent().then(function(text){
	
	     if(text){
		
		
		console.log("inside when error");
		
		errmsg.getText().then(function(text){
			
			console.log("Error is:"+text);
			
			expect(text).toContain("No user groups found");
			
		});
		
		
		
		
		
	}
	     
	     // if user found , than below code will run
	
	else{
		
	
		browser.sleep(7000);
		
		// clikc on the name
		
	  userGroupObj.clikcOnNameAfterSearch();
		
        //userGroupObj.enterId(tdata.testdata.ID);
        
        browser.sleep(4000);
		
		logger.log('info', 'Enter ID');
		
		userGroupObj.enterUserGroupName(tdata.testdata.Name);
		
		logger.log('info', 'Enter user group Name');
		
		userGroupObj.enterUserGroupDescription(tdata.testdata.Description);
		
		logger.log('info', 'Enter Group description');
		
		
		myselect.selectByText(tdata.testdata.Type);
		
		logger.log('info', 'Select Type');
		
		
		var clickonupdateusergroup=element(by.xpath("//button[@class='btn btn-primary mt-4 w-100']"));
		
		clickonupdateusergroup.click();
		
		browser.sleep(4000);
		
		
		
		
		
		   it("should have correct message when user is added", function() {
		    	
			    var msg=userObj.getSuccessmessage();
			    
			    msg.getText().then(function(text){
			    	
			    	console.log("message is:"+text);
			    	
			    	expect(text).toContain("UserGroup has been updated successfully.");
			    	
			    });
			    
			    
			    	
			    
		
		
			
		});
		
		
		
		
		
	}
	
	
	
	
});



		
		
	});		
		
	
	
	
});