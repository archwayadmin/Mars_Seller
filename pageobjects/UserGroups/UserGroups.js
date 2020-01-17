var usergroup;

usergroup= function(){
	
	

	var masterMenuOption=element(by.xpath("//button[contains(text(),'Master Menu')]"));
	
	var userGroupIcon= element(by.xpath("//a[contains(text(),'User Groups')]"));
	
	var newUserGroupIcon= element(by.xpath("//button[contains(text(),' New User Group ')]"));
	
	var userGroupId= element(by.xpath("//input[@id='ID']"));
	
	var userGroupName= element(by.xpath("//input[@id='name']"));
	
	var userGroupDescription= element(by.xpath("//textarea[@id='description']"));
	
	   var namelink=element(by.css(" tr.ng-star-inserted:nth-child(1) td:nth-child(2) > a:nth-child(1)"));
	
	
	var createIcon= element(by.xpath("//button[@class='btn btn-primary mt-4 w-100']"));
	
	
    this.SelectDropdown = function (value) {
        var optionToSelect;
        var list = element.all(by.className('form-control ng-pristine ng-invalid ng-touched'));
        list.get(0).all(by.tagName('option')).then(function (options) {
            options.some(function (option) {
                option.getText().then(function (text) {
                    if (value === text) {
                        optionToSelect = option;
                        return true;
                    }
                });
            });
        }).then(function () {
            if (optionToSelect) {
                optionToSelect.click();
            }
        });
    }

	
	
	
	
	
	
	this.clikcOnNameAfterSearch= function(){
		
		
		namelink.click();
		
	};
	
	
	
     this.clickOnMastermenu= function(){
		
		//page.highlightElement(masterMenuOption);
		
		masterMenuOption.click();
	
	
	this.clickOnUserGroupIcon= function(){
		
		userGroupIcon.click();
		
	} ;
	
	browser.sleep(3000);
	
	
	this.clickOnNewUserGroupIcon= function(){
		
		newUserGroupIcon.click();
		
	};
	
	
	this.enterId= function(value){
		
		userGroupId.clear();
		
		userGroupId.sendKeys(value);
		
	};
	
	this.enterUserGroupName= function(value){
		
		userGroupName.clear();
		
		userGroupName.sendKeys(value);
		
	};
	
	this.enterUserGroupDescription= function(value){
		
		userGroupDescription.clear();
		
		userGroupDescription.sendKeys(value);
		
	};
	
	
	this.clickOnCreate= function(){
		
		createIcon.click();
		
	};
	
	
	
	
};
};

module.exports= new usergroup();
