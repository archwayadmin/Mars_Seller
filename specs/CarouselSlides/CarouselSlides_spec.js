var loginPageObj = require('./../../pageobjects/LoginPage/LoginPage.js');

var addProduct= require('./../../pageobjects/AddProduct/AddProduct.js');

var page = require('./../../pageobjects/BasePage/BasePage.js');

var Carouseobj = require('./../../pageobjects/CarouselSlides/CarouselSlides.js');

var tdata = require('./../../json/carousel.json');

var logger= require('./../../log');

var selectwraper= require('./../../Select-Wrapper.js');

var myselect= new selectwraper(by.xpath("//select[@id='DefaultPriceScheduleID']"));

// use path module 

var path= require('path');


describe("CarouselSlides Addition", function() {
	
	
beforeEach(function() {
		

        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 200000;
     });

     afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
     });
     
     browser.ignoreSynchronization = true;
	
	
	it("CarouselSlides should be Added successfully", function() {
		
		// click on new slide icon
		
        var ele=element(by.xpath("//label[@class='btn btn-primary float-right']"));
        
        
        
        // focus the element
        
  
        browser.executeScript("arguments[0].scrollIntoView();",ele);
		
		var fileToUpload = tdata.testdata.fileuploadpath;
		
	    absolutePath = path.resolve(__dirname, fileToUpload);
		

       element(by.css('input[type="file"]')).sendKeys(absolutePath);  
       
       
   
   
		
		
	//Carouseobj.clickOnNewSlide();
//		
//		logger.log('info', 'Click on new slide');
//		
//		
		
		
		
	});
	
	
	
	
	
	it(" Verify Recomened IMage size Message  ", function() {
		
		var size=element(by.xpath("//div[@class='GrayFont']"));
		
		size.getText().then(function(size){
			
			console.log("text is:"+size);
			
			expect(size).toContain(tdata.testdata.recommendedsizetext);
			
		});
		
		
		
			  
		  });
	
	
	
	
	
	xit("Verify Image change", function() {
		
		Carouseobj.enterTitle();
	
		logger.log('info', 'Enter title');
		
		Carouseobj.entervalueInBody();
		
	    logger.log('info', 'Enter value in Body');
		
		
	});
			
	
	

	
it("verify success message  ", function() {
		
	  var messge= element(by.xpath("//div[@id='toast-container']"));
	  
	  messge.getText().then(function(text){
		  
		 console.log("Success Message is :"+text);
		 
		 expect(text).toContain(tdata.testdata.successmsg);
		  
		  
	  });
		
		
	});
	
	
	
	
});