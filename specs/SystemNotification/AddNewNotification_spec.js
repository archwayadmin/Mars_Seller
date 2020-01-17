
var selectwraper= require('./../../Select-Wrapper.js');

var myselecttype= new selectwraper(by.xpath("//select[@id='Type']"));

var myselectRecipients= new selectwraper(by.xpath("//select[@id='RecipientType']"));


describe("Add a new Notification", function() {
	
beforeEach(function() {
		

        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 200000;
     });

     afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
     });
     
     browser.ignoreSynchronization = true;
	
	
	
	it("Create a New Notification", function() {
		
		
		//select type
		myselecttype.selectByText("");
		
		//select receipents
		
		myselectRecipients.selectByText("");
		
		// subject
		
	var subject=element(by.xpath("//input[@id='Subject']"));
	
	subject.clear();
	
	subject.sendKeys("");
	
	// message
	
	var textarea=element(by.xpath("//textarea[@id='Message']"));
	
	textarea.clear();
	
	textarea.sendKeys("");
		
		
		

	});
	
	it("Alert display", function() {
		
		var value= "";// will take value from jason file
		
	
		var radioele=element(by.xpath("//input[@id='"+value+"']"));
		
		if(radioele.isSelected()){
			
			//
			
			
		}
		
		else{
			
			radioele.click();
			
		}
		
		
		
		
		
		
		
	});
	
	it("Enter Date", function() {
		
		// enter start date	
	var startdate=element(by.xpath("//input[@placeholder='Select start date']"));
	
	startdate.clear();
	
	startdate.sendKeys(""); 
	
	
	// enter end date
	
var enddate=element(by.xpath("//input[@placeholder='Select expiry date']"));
		
		
enddate.clear();

enddate.sendKeys("");





});
	
	it("Click on Create", function() {
		
		
		var createbtn=velement(by.xpath("//button[contains(@class,'mt-3 mr-2 form-group w-40')]"));
		
		if(createbtn.isPresent()){
			
			
			createbtn.click();
			
			
			
		}
		
		
	});
	
	it("Verify notify success message", function() {
		
	var successmsg=	element(by.xpath("//div[@id='toast-container']"));
	
	successmsg.getText().then(function(text){
		
	console.log("Error msg is"+text);
	
	expect(text).toBeTruthy();
		
		
	});
	
	
	
		
	});
	
	
	
	
});