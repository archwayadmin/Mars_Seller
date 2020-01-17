var loginPageObj = require('./../../pageobjects/LoginPage/LoginPage.js');

var addProduct= require('./../../pageobjects/AddProduct/AddProduct.js');

var page = require('./../../pageobjects/BasePage/BasePage.js');

var announcementObj = require('./../../pageobjects/Announcement/Announcement.js');

var tdata = require('./../../json/announcement.json');

var logger= require('./../../log');

var selectwraper= require('./../../Select-Wrapper.js');

var myselect= new selectwraper(by.xpath("//select[@id='DefaultPriceScheduleID']"));


describe("Announcement addition by the User", function() {
	
beforeEach(function() {
		

        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 200000;
     });

     afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
     });
     
     browser.ignoreSynchronization = true;
	
	
	
	it("Announcement should be added successfully by the User", function() {
		
		//page.refreshThePage();
		
		element(by.xpath("//a[@class='nav-link navbar-brand text-white']")).click();
		
		browser.sleep(4000);
		
		var ele= element(by.xpath("//button[@class='btn btn-primary float-right mt-3 mb-2']"));
		
		browser.executeScript("arguments[0].scrollIntoView();",ele);
		
		announcementObj.clickOnNewIcon();
		
		logger.log('info', 'Click on New Icon');
		
		browser.sleep(4000);
		
		announcementObj.enterAnnouncementValue(tdata.testdata.Announcement);
		
		logger.log('info', 'Enter Announcement here');
		
		// click on user group
		
      var usergrp=   element(by.xpath("//span[@class='ng-star-inserted']"));
        
      usergrp.click();
      
      // case 1 : click on select all
      
   var selectall=   element(by.xpath("//div[contains(text(),'Select All')]"));
   
   selectall.click();
   
   browser.sleep(6000);
   
   element(by.xpath("//ng-multiselect-dropdown[1]/div[1]/div[1]/span[1]/span[1]")).click();
   
 // var droplink= element(by.css(" span.dropdown-down"));
  
 // droplink.click();
   
   //browser.driver.findElement(By.xpath("//html")).click();
   
   // case 2 : if user want to be selective
   
  var list=  element.all(by.css("div>ul>li>div:nth-child(2)"));
 
  list.count().then(function(text){
	 
	console.log("total count is:"+text);
	
 });
  
  
 
 
 
 
 
 
 
 
 // // case 2 : if user want to be selective end here
 
 
		
		announcementObj.enterStartdate(tdata.testdata.StartDate);
		
		logger.log('info', 'Enter Start date');
		
		announcementObj.enterEnddate(tdata.testdata.EndDate);
		
		logger.log('info', 'Enter end date');
		
		announcementObj.clickOnCreateIcon();
			
		
		
	});
	
});