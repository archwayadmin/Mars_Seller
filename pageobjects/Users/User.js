
var tdata = require('./../../json/user.json');


var users;

users = function() {
	
	//var val=tdata.testdata.UserGroup;
	

	var userIcon = element(by.xpath("//a[contains(text(),'Users')]"));
	

	var newUserIcon = element(by
			.xpath("//button[@class='btn btn-primary float-right mt-3']"));

	var fname = element(by
			.xpath("//div[@id='userFormNew']//input[@id='FirstName']"));

	var sname = element(by
			.xpath("//div[@id='userFormNew']//input[@id='LastName']"));
	


	var emailFields = element(by
			.xpath("//div[@id='userFormNew']//input[@id='Email']"));

	var usernameField = element(by
			.xpath("//div[@id='userFormNew']//input[@id='Username']"));

	var phoneField = element(by
			.xpath("//div[@id='userFormNew']//input[@id='Phone']"));

	var activeChkbox = element(by.xpath("//div[@id='userFormNew']//label[contains(text(),'Active')]"));

	var group = element(by
			.xpath("//div[@id='userFormNew']//form[@name='UserForm']//div[@class='col-sm-12']//div[@class='form-group row']//div[@class='col-sm-6']//ng-multiselect-dropdown[@id='UserGroups']//div[@class='multiselect-dropdown']//div//span[@class='dropdown-btn']"));
	
	var selectall=  element(by.xpath("//div[@id='userFormNew']//div[contains(text(),'Select All')]"));
	
	var createIcon= element(by.xpath("//button[contains(text(),'Create')]"));
	
	var yesIcon= element(by.xpath("//shared-modal[3]/div[1]/div[1]/div[3]/div[1]/button[1]"));
	
	var noIcon= element(by.xpath("//shared-modal[3]/div[1]/div[1]/div[3]/div[1]/button[2]"));
	
	var successmessage= element(by.xpath("//div[@id='toast-container']"));
	
      var search=element(by.xpath("//div[@id='userFormNew']//input[@placeholder='Search']"));
      
     var ele= element(by.xpath("//shared-modal[1]/div[1]/div[1]/user-form[1]/ngb-accordion[1]/div[1]/div[2]/form[1]/div[1]/div[3]/div[1]/ng-multiselect-dropdown[1]/div[1]/div[2]/ul[2]/li[1]/div[1]"));
	
	this.clickOnYesIcon= function(){
		
		yesIcon.click();
		
	};
	
	this.getMessage= function(){
		
	successmessage.getText().then(function(text){
		
		console.log(text);
			
			
			
		})	;
		
	};
	
	this.getSuccessmessage= function(){
		
		return successmessage;
		
		
	};
	
	this.clickOnNoIcon= function(){
		
		noIcon.click();
		
	};

	this.clickOnUserIcon = function() {

		userIcon.click();

	};

	this.clickOnNewUserIcon = function() {

		newUserIcon.click();

	};

	this.enterFirstName = function(value) {

		fname.sendKeys(value);

	};

	this.enterSecondName = function(value) {

		sname.sendKeys(value)
	};

	this.enterEmail = function(value) {

		emailFields.sendKeys(value);

	};

	this.enterUsername = function(value) {

		usernameField.sendKeys(value);
	};
	
	this.clickOnUserGroup= function(){
		
		group.click();
		
	};
	
	this.selectValueFromUserGroup= function(){
		
		ele.click();
		
		
		
	};
	
	this.clickOnSelectAll= function(){
		
		
		selectall.click();
		
		
	};

	this.enterphonenumber = function(value) {

		phoneField.sendKeys(value)

	 };

	this.clickonCheckbox = function() {

		activeChkbox.click();

	};
	
	this.clickOnCreateButton= function(){
		
		
		createIcon.click();
		
		
		
	};
	
	
	
	

};

module.exports = new users();