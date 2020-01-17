
var path= require('path');
var BasePage;

BasePage= function(){
	
	
	
	
	this.uploadfile= function(fileToUpload,value,absolutePath){
		
		
		  absolutePath = path.resolve(__dirname, fileToUpload);

		  element(by.css('input[type="file"]')).sendKeys(absolutePath);    

		  element(by.xpath(value)).click();
			
		
	};
	
	

	

    this.getPageTitle=function(){
    	
    	
    	
    	return browser.getTitle();
    		
    	
    };
    
    this.refreshThePage= function(){
    	
    	browser.executeScript("history.go(0)")
    	
    };
    
    
    this.ScrollTheViewElementAndClick= function(element){
    	
    	browser.executeScript("arguments[0].scrollIntoView();",element);
    	
    };
    
    
    
    
    
   this.highlightElement = function(el){
	   
	   console.log("highlight--");

	   console.log("locator---:"+el.locator());

	   return browser.driver.executeScript("arguments[0].setAttribute('style', arguments[1]);",el.getWebElement(), "color: Red; border: 2px solid red;").
	   then(function(resp){
	     browser.sleep(2000);
	     return el;
	   },function(err){
	     console.log("error is :"+err);
	   });
	 };
	   
   };
    	
    
    this.logOut= function(){
    	
    element(by.xpath("//span[@class='d-md-inline']")).click();
    
    element(by.xpath("//a[contains(text(),'Logout')]")).click();
    	
    	
    	
    	
    	
    };
    
    this.searchValueAndClick= function(text, value ){
    
    	var ele=element(by.xpath("aasda"));
    	
    	ele.sendKeys(text);
    	
    	element(by.xpath("//div[@id='userFormNew']//div[contains(text(),'APPROVER')]")).getText().then(function(val){
    		
    		if(val==""){
    			
    			ele.click();
    		}
    		
    	});
    	
    	
    };
    
    
    this.CheckElementIsPresent = function (ele, callback) {
        if (ele == undefined) {
            callback(false);
        } else {
            ele.isPresent().then(function (isPresent) {
                callback(isPresent);
            });
        }
    
	
	

};

module.exports= new BasePage();