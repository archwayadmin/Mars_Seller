describe("Verify Edit and Delete Product Limits", function() {
	
	
beforeEach(function() {
		

        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 200000;
     });

     afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
     });
     
     browser.ignoreSynchronization = true;
	
	
	
	
	it("Verify Add BUtton", function() {
		
		
	var buttontext=	element(by.xpath("//button[@class='btn btn-primary float-right mt-3']"));
	
	
		
	expect(buttontext.isDisplayed()).toBeTruthy();
	
	
		
	});
	
	
	
	it("Verify ID text", function() {
		
	var idtext=	element(by.xpath("//th[@class='ng-star-inserted']"));
	
	idtext.getText().then(function(text){
		
		console.log("text val is :"+text);
		
		expect(text).toContain("ID");
		
	});
	
	
		
		
		
		
	});
	
	
	it("Verify Limit Type text", function() {
		
		
		var LimitType=	element(by.xpath("//th[contains(text(),'Limit Type')]"));
		
		LimitType.getText().then(function(text){
			
			console.log("text val is :"+text);
			
			expect(text).toContain("Limit Type");
			
		});
		
		
		
		
		
	});
	
	
	
	
	it("Verify Max Qty", function() {
		
		
		
		var maxqty=	element(by.xpath("//th[contains(text(),'Max Qty')]"));
		
		maxqty.getText().then(function(text){
			
			console.log("text val is :"+text);
			
			expect(text).toContain("Max Qty");
			
		});
		
		
		
		
		
		
		
	});
	
	
	
	
	
	
	
	it("Verify Edit of Product Limit", function() {
		
		
	var editicon=element(by.xpath("//table[1]/tbody[1]/tr[1]/td[4]/button[1]/span[1]"));
	
	editicon.click();
	
	// select limit type
	
	
	
	
	// Enter qty 
	
  var maxqty=  element(by.xpath("//input[@class='form-control ng-touched ng-dirty ng-invalid']"));
	
  maxqty.clear();
  
  maxqty.sendKeys("2");
	
		
	
		
		
		
		
		
		
	});
	
	
	
	it("Verify Delete of Product Limit", function() {
		
	var deletebtn=	 element(by.xpath("//tr[1]//td[4]//button[2]//span[1]"));
	
	
	if(deletebtn.isPresent()){
		
		
		deletebtn.click();
		
		
	}
	else{
		
		//
	}
	
var confdel=element(by.xpath("//shared-modal[1]//button[2]"));
		
		
		
		
		
		
		
		
		
	});
	
	
	
});