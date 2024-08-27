const page = require('../../page.js');
const helper = require('../../helper.js')


it('should sign up to existing account', async () => {
    await browser.url(`/`)
    const citySelector = await $(page.citySelector);
    await citySelector.waitForDisplayed();
    await citySelector.click();
    const enterAccount = await $(page.enterAccountButton);
    await enterAccount.click();
    await browser.pause(3000);
    await citySelector.waitForDisplayed();
    citySelector.click();
    await browser.pause(3000);
    const enterEmailField = await $(page.enterEmail);
    enterEmailField.setValue('Test1@mail.ru');
    await browser.keys('Tab');
    const enterPassword = await $(page.enterPassword);
    enterPassword.setValue('1234');
    await browser.keys('Tab');
    const enterButton = await $(page.enterButton);
    enterButton.click();
    await browser.pause(3000);
    await citySelector.waitForDisplayed();
    await citySelector.click();
    const successSignInText = await $(page.successSignInText);
    expect(successSignInText).toBeExisting();

  
})  
