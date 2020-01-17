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


describe("User Group Addition", function() {
	
	
beforeEach(function() {
		

        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 200000;
     });

     afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
     });
     
     browser.ignoreSynchronization = true;
	
	
	it(" User Group should be added successfully", function() {
		
		
		
		userGroupObj.clickOnMastermenu();
		
		logger.log('info', 'Click on MasterMenu');
		
		userGroupObj.clickOnUserGroupIcon();
		
		logger.log('info', 'Click on UserGroupIcon');

		
		
		
	});
	
	
	it("Verify url if user on UserGroup Page", function() {
		
		var url=browser.getCurrentUrl();
		
		expect(url).toContain("usergroups");
		
	});
	
	
	it("Verify User Groups Text", function() {
		
	var usergrptext=element(by.xpath("//h1[contains(text(),'User Groups')]"));
	
	expect(usergrptext.getText()).toContain("User Groups");
		
	});
	
	
	it("Verify ID Text", function() {
		
		var idtext=element(by.xpath("//button[contains(text(),'ID')]"));
		
		expect(idtext.getText()).toContain("ID");
		
		expect(idtext.getText()).toBeTruthy();
			
		});
	
	it("Verify Name Text", function() {
		
		var nametext=element(by.xpath("//button[contains(text(),'Name')]"));
		
		expect(nametext.getText()).toContain("Name");
			
		});
	
	
	
	it("Verify Description Text", function() {
		
		var desctext=element(by.xpath("//th[contains(text(),'Description')]"));
		
		expect(desctext.getText()).toContain("Description");
		
			
		});
	
	
	
	
	
	it("Cretae  a new Group successfully", function() {
		
		
       userGroupObj.clickOnNewUserGroupIcon();
		
		logger.log('info', 'Click on New User Icon');
		
		userGroupObj.enterId(tdata.testdata.ID);
		
		logger.log('info', 'Enter ID');
		
		userGroupObj.enterUserGroupName(tdata.testdata.Name);
		
		logger.log('info', 'Enter user group Name');
		
		userGroupObj.enterUserGroupDescription(tdata.testdata.Description);
		
		logger.log('info', 'Enter Group description');
		
		
		myselect.selectByText(tdata.testdata.Type);
		
		logger.log('info', 'Select Type');
		
		
		
		userGroupObj.clickOnCreate();
		
		logger.log('info', 'Click on Create icon');
		
		browser.sleep(4000);
		
	
	});
	
	
	 it("should have correct message when user is added", function() {
	    	
	    	
		    var msg=userObj.getSuccessmessage();
		    
		    msg.getText().then(function(text){
		    	
		    	console.log("message is:"+text);
		    	
		    	expect(text).toContain("UserGroup has been created successfully.");
		    	
		    });
		    
		    
		    	
		    	
		    });
	
	
	
	
	
	
	
	
	
	
	
	
});