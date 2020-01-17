

var OR= require('./../../json/objects.json');

var page = require('./../../pageobjects/BasePage/BasePage.js');

var addProduct;

addProduct= function(){
	
	var masterMenuOption=element(by.xpath("//button[contains(text(),'Master Menu')]"));
	
	var ProductOPtion=element(by.xpath("//a[contains(text(),'Products')]"));
	
	var newProduct=element(by.xpath("//button[@class='btn btn-primary float-right mt-3 ng-star-inserted']"));
	
	var productId=element(by.xpath("//input[@id='ID']"));
	
	var productName=element(by.xpath("//input[@id='name']"));
	
	var productDescription=element(by.xpath("//textarea[@id='description']"));
	
	var saveButton=element(by.xpath("//button[@class='btn btn-primary mt-4 w-100']"));
	
	var chkbox=element(by.xpath("//input[@id='active']"));
	
	var effectiveDate=element(by.xpath("//input[@placeholder='Effective date']"));
	
	var expiryDate=element(by.xpath("//input[@placeholder='Expiry date']"));
	

	
	
	
	
	
	this.enterDate=function(value){
		
		element(by.xpath("//input[@placeholder='Effective date']")).sendKeys(value);
		
	};
	
	this.clickOnMastermenu= function(){
		
		page.highlightElement(masterMenuOption);
		
		masterMenuOption.click();
		
	};
	
	this.clickOnProduct= function(){
		
		page.highlightElement(ProductOPtion);
		
		ProductOPtion.click();
		
	};
	
	this.clickOnNewProductIcon= function(){
		
		page.highlightElement(newProduct);
		
		newProduct.click();
		
	};
	
	this.enterProductId= function(value){
		
		page.highlightElement(productId);
		
		productId.sendKeys(value);
		
	};
	
	this.enterProductName= function(value){
		
		page.highlightElement(productName);
		
		productName.sendKeys(value);
		
	};
	
	this.enterProductDescription= function(value){
		
		page.highlightElement(productDescription);
		
		productDescription.sendKeys(value)
		
	};
	
	this.clickOnSaveButton= function(){
		
		page.highlightElement(saveButton);
		
		saveButton.click();
		
	};
	
	this.clickOnCheckbox= function(){
		
		page.highlightElement(chkbox);
		
		chkbox.click();
		
		
	};
	
	this.enterEffectiveDate= function(value){
		
		page.highlightElement(effectiveDate);
		
		effectiveDate.sendKeys(value);
		
	};
	
   this.enterExpirDate= function(value){
	   
	   page.highlightElement(expiryDate);
		
	expiryDate.sendKeys(value);
		
	};
	
	this.datePicker=function(){
		
		browser.executeScript("document.getElementsByName(name)")
		
	};
	
	
};

module.exports= new addProduct();