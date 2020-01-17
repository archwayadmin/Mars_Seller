var loginPageObj = require('./../../pageobjects/LoginPage/LoginPage.js');

var addProduct = require('./../../pageobjects/AddProduct/AddProduct.js');

var userObj = require('./../../pageobjects/Users/User.js');

//import {userIcon} from "./../../pageobjects/Users/User.js"



var page = require('./../../pageobjects/BasePage/BasePage.js');

//var helperobj=require('./../../pageobjects/util/Helper.js');


var OR = require('./../../json/objects.json');

var tdata = require('./../../json/user.json');

var logger = require('./../../log');

var selectwraper = require('./../../Select-Wrapper.js');

var myselect = new selectwraper(by
		.xpath("//select[@id='Department']"));

describe("User creation", function() {
	
	
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
      
     
     

	it("user should be added successfully", function() {
	

		userObj.clickOnUserIcon();
		
		logger.log('info','click on User Icon');

		

	});
	
	
it("Verify URl if user on user's page", function() {
		
		
       var url=browser.getCurrentUrl();
       
       expect(url).toContain("users");

		

	});


it("Verify ID  text/lable presence user's table in Header", function() {
	
	
   var id=element(by.xpath("//button[contains(text(),'ID')]"));
   
   id.getText().then(function(text){
	   
	   console.log("value is:"+text);
	   
	   expect(text).toContain("ID");
	   
	   
   });
   
   

		

	});




it("Verify username  text/lable presence user's table in Header", function() {
	
	
	
	   var username=element(by.xpath("//button[contains(text(),'Username')]"));
	   
	   username.getText().then(function(text){
		   
		   console.log("value is:"+text);
		   
		   expect(text).toContain("Username");
		   
		   
	   });
	   

		

	});




it("Verify fname  text/lable presence user's table in Header", function() {
	
	   var fname=element(by.xpath("//button[contains(text(),'First Name')]"));
	   
	   fname.getText().then(function(text){
		   
		   console.log("value is:"+text);
		   
		   expect(text).toContain("First Name");
		   
		   
	   });
	   

		

	});



it("Verify lname  text/lable presence user's table in Header", function() {
	
	
	 var lname=element(by.xpath("//button[contains(text(),'Last Name')]"));
	   
	 lname.getText().then(function(text){
		   
		   console.log("value is:"+text);
		   
		   expect(text).toContain("Last Name");
		   
		   
	   });
	   

		

	});




it("Verify email  text/lable presence user's table in Header", function() {
	
	
	 var email=element(by.xpath("//button[contains(text(),'Email')]"));
	   
	 email.getText().then(function(text){
		   
		   console.log("value is:"+text);
		   
		   expect(text).toContain("Email");
		   
		   
	   });
	   

		

	});




it("Verify Active  presence user's table in Heade", function() {
	
	
	 var active=element(by.xpath("//th[contains(text(),'Active')]"));
	   
	 active.getText().then(function(text){
		   
		   console.log("value is:"+text);
		   
		   expect(text).toContain("Active");
		   
		   
	   });
	   

		

	});
	
	
	
	
	
	
	
	it("Veriy Add a New User successfully", function() {
		
          userObj.clickOnNewUserIcon();
		
		logger.log('info','click on New User Icon');
		
          userObj.enterFirstName(tdata.testdata.FirstName);
		
		logger.log('info','Enter FirstName');
		
		userObj.enterSecondName(tdata.testdata.LastName);
		
		logger.log('info','Enter Second Name');
		
		userObj.enterEmail(tdata.testdata.Email);
		
		logger.log('info','Enter Email');
		
		userObj.enterUsername(tdata.testdata.Username);
		
		logger.log('info','Enter username');
	
		
		userObj.clickOnUserGroup();
		
		
		logger.log('info','click on User Group Icon');
		
		
	var search=	element(by.xpath("//div[@id='userFormNew']//input[contains(@placeholder,'Search')]"));
		
	
	search.sendKeys(tdata.testdata.UserGroup);
	
	
	
		
		userObj.selectValueFromUserGroup(tdata.testdata.UserGroup);
		
		logger.log('info','select anything from dropdown');
		
		
		//userObj.clickOnSelectAll();
		
		logger.log('info','click on select all option');
		
		
		
		userObj.enterphonenumber(tdata.testdata.PhoneNumber);
		
		logger.log('info','Enter Phone Number');
		
		// select department
		
		 myselect.selectByText(tdata.testdata.Department);
		 
		 logger.log('info','selects the department');
		 
		 
		
		userObj.clickonCheckbox();
		
		logger.log('info','click on checkbox');
		
		browser.sleep(10000);
		
		userObj.clickOnCreateButton();
		
		logger.log('info','click create Button');
		
		userObj.clickOnNoIcon();
		
		// Here user has 2 option to click yes OR No...
		
		logger.log('info','click on No icon');
		
	
		
	});
	
	
	
	
	
it("verify the URL of the User Page", function() {
	
	var url=browser.getCurrentUrl();
	
	expect(url).toContain("users");
    	

    	
    });
    
    it("veriy links present on User Page", function() {
    	
    
    	
    	element.all(by.tagName("a")).getText().then(function(text){
    		
    		for(var i=0; i<text.length; i++){
    			
    			
    			console.log(text[i]);
    		}
    		
    		
    		
    	});
    	
    	
    	
    it("should have correct message when user is added", function() {
    	
    	
    var msg=userObj.getSuccessmessage();
    
    msg.getText().then(function(text){
    	
    	console.log("message is:"+text);
    	
    	expect(text).toContain("'UserGroup has been created successfully.");
    	
    });
    
    
    	
    	
    });
    

    
    	
    	
    	
    	
    	
    });
    

    
   
    
    

});