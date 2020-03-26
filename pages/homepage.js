
let homepage = function () {

    let firstNumber_input = element(by.model('first'));
    let secondNumber_input = element(by.model('second'));
    let goButton = element(by.css('[ng-click="doAddition()"]'));

    this.get = function (url) {
        browser.get(url);
    };

    this.enterFirstNumber = function (firstnumber) {
        firstNumber_input.sendKeys(firstnumber);
    };

    this.enterSecondNumber = function (secondnumber) {
        secondNumber_input.sendKeys(secondnumber);
    };

    this.clickGo = function () {
        goButton.click();
    };

    this.verifyResult = function (result) {

        let output = element(by.cssContainingText('.ng-binding', result));
        expect(output.getText()).toEqual(result);
    };
};

module.exports = new homepage();
