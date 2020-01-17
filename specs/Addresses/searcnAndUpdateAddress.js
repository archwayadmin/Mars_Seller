describe("Verify Search and Update address", function() {
	
	
beforeEach(function() {
		

        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 200000;
     });

     afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
     });
     
     browser.ignoreSynchronization = true;
	
	
	
	it("search address", function() {
		
		
	var search=	element(by.xpath("//input[@id='search-addon']"));
	
	search.clear();
	
	search.sendKeys("test");
		
	});
	
	it("select  address ", function() {
		
		
		
	});
	
	
	
	it("Update address", function() {
		
		
// countrty
		
		myselect.selectByText(" Albania");
		
		//fname
		
		element(by.xpath("//shared-modal[1]//div[3]//input[1]")).sendKeys("test");
		
		
		// lanme
		element(by.xpath("//shared-modal[1]//div[4]//input[1]")).sendKeys("test");
		
		
		// Company Name
		
		element(by.xpath("//shared-modal[1]//div[5]//input[1]")).sendKeys("test");
		
		//Address 1
		
		element(by.xpath("//shared-modal[1]//div[6]//input[1]")).sendKeys("test");
		
		
		//Address 2
		
		element(by.xpath("//shared-modal[1]//div[8]//input[1]")).sendKeys("test");
		
		
		//City
		element(by.xpath("//shared-modal[1]//div[9]//input[1]")).sendKeys("test");
		
		// state
		
		myselect1.selectByText("Arizona");
		
		
	// zipcode
		
		element(by.xpath("//shared-modal[1]//div[11]//input[1]")).sendKeys("test");
		
		
		
		// phone number
		
		
		element(by.xpath("//shared-modal[1]//div[12]//input[1]")).sendKeys("test");
		
		
		// click on save button
		
		
		element(by.xpath("//button[contains(text(),'Save')]")).click();

			
			
		
		
		
		
		
		
	});
	
	
	
	
	
	
	
	
	
	
});