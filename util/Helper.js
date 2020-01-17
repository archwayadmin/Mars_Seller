var Helper;
Helper = function () {

    this.IsNonAngularPage = function (value) {
        browser.ignoreSynchronization = value;
    };

    this.WaitTillElementIsEnabled = function (element) {
        browser.wait(function () {
            return element.isEnabled();
        });
    };

    this.WaitTillElementIsVisible = function (element) {
        browser.wait(function () {
            return element.elementIsVisible();
        });
    };


    this.ExecuteRawScript = function (selector, id, value) {
        if (selector == 'Id') {
            return browser.executeScript("document.getElementBy" + selector + "('" + id + "').value = '" + value + "'");
        } else {
            return browser.executeScript("document.getElementsBy" + selector + "('" + id + "').value = '" + value + "'");
        }
    };

    this.Select2Selector = function (id, value) {
        return element(by.cssContainingText(id, value)).click();
    };

    this.GetElementXpath = function (identifier, type) {
        var locator;
        switch (type) {
            case "text":
                locator = element(by.xpath("//input[@id='" + identifier + "']"));
                break;
            case "textarea":
                locator = element(by.xpath("//textarea[@id='" + identifier + "']"));
                break;
            case "list":
                locator = element(by.xpath("//div[@id='s2id_" + identifier + "']"));
                break;
        }
        return locator;
    };

    this.GetElementDefinationXpath = function (identifier, type) {
        var locator;
        var locator_1;
        switch (type) {
            case "text":
                locator = element(by.xpath("//input[@id='data" + identifier + "']"));
                break;
            case "textarea":
                locator = element(by.xpath("//textarea[@id='data" + identifier + "']"));
                break;
            case "float":
                locator = element(by.xpath("//input[@id='data" + identifier + "']"));
                locator_1 = element(by.xpath("//input[@id='data" + identifier + "_lmknjbhvgc']"));
                break;
            case "list":
                locator = element(by.xpath("//div[@id='s2id_data." + identifier + "']"));
                break;
            case "date":
                locator = element(by.xpath("//input[@id='" + identifier + "']"));
                break;
        }
        return {locator: locator, locator_1: locator_1};
    };

    

    this.GetElementXPIsXpath = function (identifier, type) {
        var locator;
        var locator_1;
        switch (type) {
            case "date":
                locator = element(by.xpath("(//input[@id='" + identifier + "'])[2]"));
                break;
            case "text":
                locator = element(by.xpath("//input[@ng-model='kpidata." + identifier + "']"));
                break;
            case "textarea":
                locator = element(by.xpath("//textarea[@ng-model='kpidata." + identifier + "']"));
                break;
            case "select":
                locator = element(by.xpath("(//div[@id='kpi-form']//span[@class='select2-chosen'])[" + identifier + "]"));
                break;
            case "numeric":
                locator = element(by.xpath("//input[@ng-model='kpidata." + identifier + "']"));
                locator_1 = element(by.xpath("//input[@id='kpidata" + identifier + "_lmknjbhvgc']"));
                break;
            case "float":
                locator = element(by.xpath("//input[@id='kpidata" + identifier + "']"));
                locator_1 = element(by.xpath("//input[@id='kpidata" + identifier + "_lmknjbhvgc']"));
                break;
            case "list":
                if (identifier == 'owner') {
                    locator = element(by.xpath("//*[@id='s2id_idea-" + identifier + "']"));
                    break;
                } else {
                    locator = element(by.xpath("//*[@id='s2id_kpidata." + identifier + "']"));
                    break;
                }

        }
        return {locator: locator, locator_1: locator_1};
    };

    this.SwtichToPopup = function () {
        browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[1]).then(function () {
                //do your stuff on the pop up window
            });
        });
    }


    this.SweetAlertText = function (TexttoVerfiy) {
        element(by.xpath('//div[@class="sweet-alert showSweetAlert visible"]/h2')).getText().then(function (PopupText) {
            allure.createStep(PopupText, function () {
            })();
            var r = PopupText;
            expect(r).toContain(TexttoVerfiy);
        });
    }

    this.WaitforSweetAlert = function () {
        var sweet = element(by.xpath('//div[@class="sweet-alert showSweetAlert visible"]/h2'));
        browser.wait(function () {
            return sweet.isPresent();
        });
    }
    
    this.searchAndClickOnElement= function(){
    	
    	var ele=element(by.xpath("test"));
    	
    	
    	
    	
    	
    };

    this.ExecuteRawScriptForDate = function (selector, id, value) {
        if (selector == 'Id') {
            return browser.executeScript("document.querySelectorAll('input#" + id + "')[1].value = '" + value + "'");
        } else {
            return browser.executeScript("document.querySelectorAll('input#" + id + "')[1].value = '" + value + "'");
        }
    }

    this.ClickOnButtonUsingText = function (buttonText) {
        element(by.buttonText(buttonText)).click();
    }



    this.getCurrentDDMMYYYY = function (callback) {
        var currentDate = new Date(Date.now());
        var dd = (currentDate.getDate() < 10 ? '0' : '') + currentDate.getDate();
        var MM = ((currentDate.getMonth() + 1) < 10 ? '0' : '') + (currentDate.getMonth() + 1);
        var yyyy = currentDate.getFullYear();
        var date = dd + "-" + MM + "-" + yyyy;
        //console.log(date);
        callback(date);
    }

    this.CheckElementIsPresent = function (ele, callback) {
        if (ele == undefined) {
            callback(false);
        } else {
            ele.isPresent().then(function (isPresent) {
                callback(isPresent);
            });
        }
    }

    this.getReportTitle = function (callback) {
        var reportTitle = element(by.xpath("//img[@src='theme/images/icons/iconExcel.svg']//preceding::div[@class='reportTitle'][1]"));
        reportTitle.getText().then(function (reportTitle1) {
            console.log("This is the Report Title" + reportTitle1);
            var a = reportTitle1;
            callback(a)
            return a;
        });
    }
};
module.exports = new Helper();