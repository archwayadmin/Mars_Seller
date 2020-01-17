var selectwraper= require('./../../Select-Wrapper.js');

var myselecttype= new selectwraper(by.xpath("//select[@id='Type']"));

var myselectStatus= new selectwraper(by.xpath("//select[@id='Status']"));


var myselectRecipients= new selectwraper(by.xpath("//select[@id='Recipients']"));

describe("Verify search Notification", function() {
	
beforeEach(function() {
		

        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 200000;
     });

     afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
     });
     
     browser.ignoreSynchronization = true;
	
	
	
	it("Verify if user search and update ", function() {
		
		
		//select Type
		
		myselecttype.selectByText("");
		
		
		// select status
		
		myselectStatus.selectByText("");
		
		//select recipets
		
		myselectRecipients.selectByText("");
		
		//select users
		
		
	var users=	element(by.xpath("//system-notification[1]/div[1]/div[2]/form[1]/div[4]/div[2]/ng-multiselect-dropdown[1]/div[1]/div[1]/span[1]"));
	
	
	users.click();
	
	// enter item into search
	
	var search= element(by.xpath("//ng-multiselect-dropdown[@class='dropdownSingleSelect ng-untouched ng-valid ng-dirty']//input[@placeholder='Search']"));
		
	search.clear();
	
	search.sendKeys("");
	
	// click on first search item
	
	 var clickonfirstsearch=element(by.xpath("//form[1]/div[4]/div[2]/ng-multiselect-dropdown[1]/div[1]/div[2]/ul[2]/li[1]/div[1]"));
	
	 
	 clickonfirstsearch.click();
		
	});
	
	
	
	
});