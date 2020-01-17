var HomePage;

HomePage= function(){
	
	var adminicon= element(by.xpath("//button[contains(text(),'Admin')]"));
	
	var faqicon= element(by.xpath("//a[contains(text(),'FAQ')]"));
	
	var newfaqicon= element(by.xpath("//button[@class='btn btn-primary float-right mt-3']"));
	
	var language= element(by.xpath("//select[@id='languageid']"));
	
	var  question= element(by.xpath("//input[@id='question']"));
	
	var answer= element(by.xpath("//textarea[@id='answer']"));
	
	var createIcon= element(by.xpath("//button[@class='btn btn-primary mt-4 w-100']"));
	
	
	this.clickOnadmin= function(){
		
		adminicon.click();
		
	};
	
	this.clickonFaqIcon= function(){
		
		faqicon.click();
		
	};
	
	this.clickOnNewfaqIcon= function(){
		
		newfaqicon.click();
		
	};
	
	this.enterQuestion= function(value){
		
		question.sendKeys(value);
		
		
	};
	
	this.enterAnswer= function(value){
		
		answer.sendKeys(value);
		
	};
	
	this.clickOnCreate= function(){
		
		createIcon.click();
		
	};
	
	
	
	
	
};

module.exports= new HomePage();