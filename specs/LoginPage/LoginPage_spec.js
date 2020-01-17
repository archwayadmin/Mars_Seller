var loginPageObj = require('./../../pageobjects/LoginPage/LoginPage.js');

var page = require('./../../pageobjects/BasePage/BasePage.js');

var OR = require('./../../json/objects.json');

var tdata = require('./../../json/login.json');

var logger= require('./../../log');

var xl=require('./../../util/ReadExcel.js');
 
//var dataReaderObj=require('./../../util/DataReader.js');


browser.manage().timeouts().implicitlyWait(4000);

describe('Login Page - ', function () {
	


   
    
    
    it('should login the user', function () {
    	
    
    	loginPageObj.openurl(tdata.testdata.url);
		
		logger.log('info','navigating to the web site');
		
		
		browser.driver.manage().window().maximize();
		
		logger.log('info','Maximize the Window');
		

		loginPageObj.EnterUsername(tdata.testdata.username);
		
		logger.log('info','Enter Username');
		

		loginPageObj.EnterPassword(tdata.testdata.password);
		
		logger.log('info','Enter Password');
		
		var flag = true
		

		loginPageObj.ClickLoginButton().then(null, function(err){
			
			flag = false
			
			//code
			
			
			
			
		})
		.then(function(asdf){
			
			if(flag){
				
				
				
				
			    it("veriy all links present on page", function() {
			    	
			    	element.all(by.tagName("a")).getText().then(function(text){
			    		
			    		for(var i=0; i<text.length; i++){
			    			
			    			
			    			console.log(text[i]);
			    		}
			    		
			    		
			    		
			    	});
			    	
			    	
			    	
			    	
			    });
			    
			  
			   
			   it("Verify User has looged successfully", function() {
				   
				 var url=  browser.getCurrentUrl();
				 
				 expect(url).toContain("https://archway-forduaw-seller-qa.azurewebsites.net/home");
			   	
				   
				   
				   
				   
				   
			   });

				
				
				
				
				
				
				
			}
			
			
			
			
			
			
			
			
		});
		
		/*logger.log('info','Click on Submit Button');
		

		browser.sleep(8000);
		
		logger.log('info','Application hold for some second');*/
		

            
            
        
    });
    
  
    



	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/*testData.forEach(function(data){
		
		
		it("login", function() {
			
			console.log(data.username+data.password+data.url);
			
			
		});
		
		
		
	});*/
	

	//var actualTitle="https://archway-premiernutrition-qa.azurewebsites.net/home";

	/*it("should login the user successfully", function() {

		

	

	});*/

});