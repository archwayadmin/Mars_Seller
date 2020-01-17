
var loginPageObj = require('./../../pageobjects/LoginPage/LoginPage.js');

var addProduct= require('./../../pageobjects/AddProduct/AddProduct.js');

var page = require('./../../pageobjects/BasePage/BasePage.js');

var userObj = require('./../../pageobjects/Users/User.js');

var OR = require('./../../json/objects.json');

var tdata = require('./../../json/usergroup.json');

var logger= require('./../../log');

var userGroupObj = require('./../../pageobjects/UserGroups/UserGroups.js');



describe("verify by ProductID", function() {
	
	
beforeEach(function() {
		

        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 200000;
     });

     afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
     });
     
     browser.ignoreSynchronization = true;
	
	
	
	it("Product limit by P ", function() {
		
		
	 var productlimit=element(by.xpath("//a[@id='specialLimit']"));	
	 
	  productlimit.click();
	  
	 var addbuttn= element(by.xpath("//button[@class='btn btn-primary float-right mt-3']"));
	 
	 addbuttn.click();
	 
	 var prodid= element(by.xpath("//li[contains(text(),'Product Id')]"));
	 
	 prodid.click();
	 
	 // enter catalog id
	 
     element(by.xpath("//input[@id='typeahead-basic']")).sendKeys("test");
     
     //select limit type
     
     element(by.xpath("//select[@class='form-control ng-pristine ng-invalid ng-touched']")).click();
     
     // enter max qty
     
   var maxqty=  element(by.xpath("//div[@class='col-8']//input[@class='form-control ng-pristine ng-invalid ng-touched']"));
     
   maxqty.sendKeys("2");
   
    var savebtn=  element(by.xpath("//button[@class='btn btn-primary mt-4 w-100']"));
 
     savebtn.click();
 
		
		
	});
	
	
	
	   it("should have correct message when product limit is added", function() {
	    	
		    var msg=userObj.getSuccessmessage();
		    
		    msg.getText().then(function(text){
		    	
		    	console.log("message is:"+text);
		    	
		    	expect(text).toContain("UserGroup has been updated successfully.");
		    	
		    });
		    
	
		
	});
	   
	   
	   
	   
	   
	   
	   it("Veriy ID label present", function() {
		   
		 var idtext=  element(by.xpath("//th[@class='ng-star-inserted']"));
		 
		 idtext.getText().then(function(text){
			 
			 console.log("id lable is :"+text);
			 
			 expect(text).toContain("ID");
			 
		 });
		 
		 
	   	
	   });
	   
	   
	   
	   it("Veriy ID Limit Type present", function() {
		   
			 var limittext=  element(by.xpath("//th[contains(text(),'Limit Type')]"));
			 
			 limittext.getText().then(function(text){
				 
				 console.log("limit type  lable is :"+text);
				 
				 expect(text).toContain("Limit Type");
				 
			 });
			 
			 
		   	
		   });
	   
	   
	   
	   
	   it("Veriy  Max Qty present", function() {
		   
			 var maxqty=  element(by.xpath("//th[contains(text(),'Max Qty')]"));
			 
			 maxqty.getText().then(function(text){
				 
				 console.log("max qty lable is :"+text);
				 
				 expect(text).toContain("Max Qty");
				 
			 });
			 
			 
		   	
		   });
	   
	   
	   
	   it("verify Edit button presence", function() {
		   
		   
			 var editbtn=  element(by.xpath("//span[contains(text(),'Edit')]"));
			 
			 expect(editbtn).toBeTruthy();
		   	
		   });
		   
		   
		   it("verify delete button presence", function() {
			   
			   
				 var deltebtn=  element(by.xpath("//span[contains(text(),'Delete')]"));
				 
				 expect(deltebtn).toBeTruthy();
			   	
			   });
	   
	
	
});