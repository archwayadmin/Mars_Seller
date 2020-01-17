var CarouselSlide;

CarouselSlide = function() {

	
	
	var newslideIcon = element(by
			.xpath("//label[@class='btn btn-primary float-right']"));

	var title = element(by
			.xpath("//shared-carousel-slide-display[1]//div[1]//div[1]//div[2]//form[1]//div[2]//input[1]"));

	var body = element(by
			.xpath("//shared-carousel-slide-display[1]//div[1]//div[1]//div[2]//form[1]//div[3]//input[1]"));

	var chnageImage = element(by
			.xpath("//shared-carousel-slide-display[1]//div[1]//div[1]//div[2]//form[2]//label[1]"));

	
	
	this.scrollView= function(element){
		
		browser.executeScript("arguments[0].scrollIntoView();",element);
		
	};

	this.clickOnSlide = function() {

		slideIcon.click();

	};
	


	this.clickOnNewSlide = function() {

		newslideIcon.click();

	};

	this.enterTitle = function(value) {

		title.clear();

		title.sendKeys(value)

	 };

	this.entervalueInBody = function(value) {

		body.clear();

		body.sendKeys(value)

       };

};

module.exports = new CarouselSlide();