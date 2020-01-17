var catalog;

catalog= function(){
	
	var masterMenuOption=element(by.xpath("//button[contains(text(),'Master Menu')]"));
	
	var catalogIcon= element(by.xpath("//a[contains(text(),'Catalogs')]"));
	
	var addIcon= element(by.xpath("//button[contains(text(),'Add')]"));
	
	var catalogId= element(by.xpath("//input[@id='ID']"));
	
	var catalogName= element(by.xpath("//input[@id='name']"));
	
	
	
	var saveIcon= element(by.xpath("//button[@class='btn btn-primary mt-4 w-100']"));
	
	
	
	 this.clickOnMastermenu= function(){
		
			
	masterMenuOption.click();
		
	 };
	 
	 this.clickOnCatalogIcon= function(){
		 
		 catalogIcon.click();
		 
	 };
	 
	 this.clickOnAddBtn=function(){
		 
		 addIcon.click();
	 };
	 
	 this.entercatalogIdValue= function(value){
		 
		 catalogId.clear();
		 
		 catalogId.sendKeys(value);
		 
		 
	 };
	 
	 this.enterCatalogName= function(value){
		 
		catalogName.clear();
		 
	catalogName.sendKeys(value)
		 
	 };
	 
	 
	 this.clickOnSaveBtn= function(){
		 
		 saveIcon.click();
		 
	 };
	 
	 

	
	
};

module.exports= new catalog();