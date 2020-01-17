var announcement;


announcement= function(){
	
	var masterMenuOption=element(by.xpath("//button[contains(text(),'Master Menu')]"));
	
	
	var announcementIcon= element(by.xpath("//button[@class='btn btn-primary float-right mt-3 mb-2']"));
	
	var announcementValue=element(by.xpath("//div[@class='ngx-editor-textarea']"));
	
	var userGroup;
	
	var startdate= element(by.xpath("//input[@id='startDate']"));
	
	var endDate=element(by.xpath("//input[@id='endDate']"));
	
	var createIcon= element(by.xpath("//button[@class='btn btn-primary btn-block']"));
	

	 this.clickOnMastermenu= function(){
			
			
	masterMenuOption.click();
		
	 };
	
	
	this.clickOnNewIcon= function(){
		
		announcementIcon.click();
		
	};
	
	
	this.enterAnnouncementValue= function(value){
		
		announcementValue.clear();
		
		
		announcementValue.sendKeys(value)
		
		
	};
	
	this.enterStartdate= function(value){
		
		endDate.clear();
		
		endDate.sendKeys(value);
		
	};
	
   this.enterEnddate= function(value){
	   
	   endDate.clear();
		
	endDate.sendKeys(value);
		
	};
	
	
	this.clickOnCreateIcon= function(){
		
		createIcon.click();
		
	};
	 
	 
	
	
	
	
	
};

module.exports= new announcement();