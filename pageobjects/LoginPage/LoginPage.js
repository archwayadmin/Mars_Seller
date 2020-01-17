
var OR= require('./../../json/objects.json');

var page = require('./../../pageobjects/BasePage/BasePage.js');
var LoginPage;
LoginPage = function () {

    var usernameTxtBx = element(by.xpath(OR.locators.Loginpage.username));
    
    var userNameLable= element(by.xpath("//label[contains(text(),'User Name')]"));
    
    var passwordTxtBx = element(by.xpath(OR.locators.Loginpage.password));
    
    var passwordLable= element(by.xpath("//label[contains(text(),'Password')]"));
   
    var loginBtn = element(by.xpath(OR.locators.Loginpage.submitBtn));
    
    var errorMessage= element(by.xpath("//div[@id='toast-container']"));
    
  
    	
    this.getUserNameLable= function(){
    	
    	return userNameLable;
    	
    };
    
 	
    this.getPasswordLable= function(){
    	
    	return passwordLable;
    	
    };
    
 this.getloginBtnLable= function(){
    	
    	return loginBtn;
    	
    };
    
    this.getErrorMessage= function(){
    	
    	
    	return errorMessage;
    	
    	
    };
    
    this.openurl= function(value){
    	
    	browser.get(value);
    	
    };
    

    
    this.EnterUsername = function (value) {
    	
    	page.highlightElement(usernameTxtBx);
    	
        usernameTxtBx.sendKeys(value);
    };

    this.EnterPassword = function (value) {
    	
    	page.highlightElement(passwordTxtBx);
    	
        passwordTxtBx.sendKeys(value);
    };

   

    this.ClickLoginButton = function () {
    	
    	page.highlightElement(loginBtn);
    	
        loginBtn.click();
    };
    
    this.getAllLinks= function(){
    	
      element.all(by.tagName("a")).getText().then(function(text){
			
			for(var i=0; i<text.length; i++){
				
				
				console.log(text[i]);
			}
			
			
			
		});
    	

};

};

module.exports = new LoginPage();


