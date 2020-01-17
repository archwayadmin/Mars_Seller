
var loginPageObj = require('./../../pageobjects/LoginPage/LoginPage.js');

var addProduct= require('./../../pageobjects/AddProduct/AddProduct.js');

var page = require('./../../pageobjects/BasePage/BasePage.js');

var userObj = require('./../../pageobjects/Users/User.js');

var OR = require('./../../json/objects.json');

var tdata = require('./../../json/usergroup.json');

var logger= require('./../../log');

var userGroupObj = require('./../../pageobjects/UserGroups/UserGroups.js');


var selectwraper= require('./../../Select-Wrapper.js');

var myselect= new selectwraper(by.xpath("//special-limit-form[1]/div[1]/form[1]/div[4]/div[2]/select[1]"));



describe("Add Product Limit Catalog", function() { 
	
	
beforeEach(function() {
		

        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 200000;
     });

     afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
     });
     
     browser.ignoreSynchronization = true;
	
	
	
	
	
	it("  Add Product Limit Catalog", function() {
		
		
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
		
	
		
		
		// clikc on the name
		
	  userGroupObj.clikcOnNameAfterSearch();
	  
	  browser.sleep(5000);
	  
	  // click on product link
	  
	  var productlimit=element(by.xpath("//a[@id='specialLimit']"));	
	  	 
	  	 productlimit.click();
	  	  
	  
	  	   it("Veriy ID label present", function() {
	  		   
	  		 var idtext=  element(by.xpath("//th[@class='ng-star-inserted']"));
	  		 
	  		 idtext.getText().then(function(text){
	  			 
	  			 console.log("id lable is :"+text);
	  			 
	  			 expect(text).toContain("ID");
	  			 
	  		 });
	  		 
	  		 
	  	   	
	  	   });
	  	   
	  	   
	  	   
	  	   it("Veriy Limit Type   present", function() {
	  		   
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
	  	  
	  	  
	  	  // click on Add 
	  	   
	  	   
	  	 var addbuttn= element(by.xpath("//button[@class='btn btn-primary float-right mt-3']"));
	  	 
	  	 addbuttn.click();
  		   	
  		
	  	 
	  	it("verify Add Product Limit text is  presence", function() {
	  		   
	  		   
 			 var addprotext=  element(by.xpath("//h5[contains(text(),'Add Product Limit')]"));
 			 
 			 expect(addprotext).toBeTruthy();
 			 
 			addprotext.getText().then(function(text){
 				
 				console.log(text);
 				
 				expect(text).toContain("Add Product Limit");
 				
 			});
 			
 			
 			 
 			
 		   	
 		   });
	  	
	  	
		it("verify Assign label is  presence", function() {
	  		   
	  		   
	 var assigntext=  element(by.xpath("//label[@class='col-4 control-label font-weight-bold mt-1']"));
 			 
 			 expect(assigntext).toBeTruthy();
 			 
 			assigntext.getText().then(function(text){
 				
 				console.log(text);
 				
 				expect(text).toContain("Assign");
 				
 			});
 			
		   	
		   });
		
		it("verify User Group label is  presence", function() {
	  		   
	  		   
	 var usergrpuptext=  element(by.xpath("//label[contains(text(),'User Group')]"));
 			 
 			 expect(usergrpuptext).toBeTruthy();
 			 
 			usergrpuptext.getText().then(function(text){
 				
 				console.log(text);
 				
 				expect(text).toContain("User Group");
 				
 			});
		   	
		   });
		
		
		it("verify Select Limit Type lebel is  presence", function() {
	  		   
	  		   
			 var selectlimittype=  element(by.xpath("//label[contains(text(),'Select Limit Type')]"));
		 			 
		 			 expect(selectlimittype).toBeTruthy();
		 			 
		 			selectlimittype.getText().then(function(text){
		 				
		 				console.log(text);
		 				
		 				expect(text).toContain("Select Limit Type");
		 				
		 			});
		   	
		   });
		
		
		it("verify Max Qty label is  presence", function() {
	  		   
	  		   
			 var maxqty=  element(by.xpath("//label[contains(text(),'Max Qty')]"));
 			 
 			 expect(maxqty).toBeTruthy();
 			 
 			maxqty.getText().then(function(text){
 				
 				console.log(text);
 				
 				expect(text).toContain("Max Qty");
 				
 			});
		   	
		   });
 	 
	  	 
	  	 var catalog= element(by.xpath("//*[@type='radio'][@ng-reflect-value='ProductID']"));
	  	 
	  	 catalog.click();
	  	 
	       element(by.xpath("//input[@id='typeahead-basic']")).sendKeys("test");
	       
	       // click on first auto suggestion
	       
	   var fistele=  element(by.xpath("//div[2]/div[2]/ngb-typeahead-window[1]/button[1]/ngb-highlight[1]"));
	   
	       fistele.click();
	   
	     browser.sleep(6000);
	       
	       // selection of Limit type
	     
	  var list=   myselect.getOptions();
	  
	  list.count().then(function(text){
		  
		  if(text>0){
			  
			for(var i=0; i<text; i++){
				
				if(text[i]=="Weekly")
				
				list.get(i).click();
				
				break;
				
				
			}
			    
			  
		  }
		  else{
			  
			  
			  
		  }
		  
		  
		  
	  })
	  
	  
	  
	     
	   
	    
	     
	  //  ends here selection of Limit type
	     

	      // element(by.xpath("//select[@class='form-control ng-pristine ng-invalid ng-touched']")).click();
	       
	     var maxqty=  element(by.xpath("//input[@class='form-control ng-pristine ng-invalid ng-touched']"));
	       
	     maxqty.sendKeys("2");
	     
	     browser.sleep(2000);
	     
	      var savebtn=  element(by.xpath("//button[@class='btn btn-primary mt-4 w-100']"));
	   
	       savebtn.click();
	       
	       browser.sleep(5000);
	   
	  		
	  		
	  	
	  	   it("should have correct message when product limited is added", function() {
	  	    	
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