
var page = require('./../../pageobjects/BasePage/BasePage.js');

var AddCategory;

AddCategory= function(){
	
var masterMenuIcon=element(by.xpath("//button[contains(text(),'Master Menu')]"));

	
var categoryLink=	element(by.xpath("//a[contains(text(),'Categories')]"));

var newCategoryLink= element(by.xpath("//button[@class='btn btn-primary float-right mt-3']"));

var categoryId= element(by.xpath("//input[@id='ID']"));

var categoryName= element(by.xpath("//input[@id='name']"));

var categoryDescription= element(by.xpath("//textarea[@id='description']"));

var clickOnCreateBtn= element(by.xpath("//button[@class='btn btn-primary mt-4 w-100']"));

this.clickOnMasterMenu= function(){
	
 page.highlightElement(masterMenuIcon)
	
	masterMenuIcon.click();
}




this.clickOnCategoryLink= function(){
	
	page.highlightElement(categoryLink);
	
	categoryLink.click();
	
};

this.clickOnNewCategoryLink= function(){
	
	page.highlightElement(newCategoryLink);
	
	
	newCategoryLink.click();
	
};

this.enterValueInCategoryId= function(value){
	
	page.highlightElement(categoryId);
	
	categoryId.clear();
	
	categoryId.sendKeys(value);
	
};

this.enterValueInCategoryName= function(value){
	
	page.highlightElement(categoryName);
	
	categoryName.clear();
	
	categoryName.sendKeys(value);
	
};

this.enterValueInDescription= function(value){
	
	page.highlightElement(categoryDescription);
	
	categoryDescription.clear();
	
	categoryDescription.sendKeys(value);
	
};

this.clickOnCreateButton= function(){
	
	page.highlightElement(clickOnCreateBtn);
	
	clickOnCreateBtn.click();
	
};


	
	

	
};

module.exports= new AddCategory();
