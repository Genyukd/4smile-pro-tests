const page = require('../../page.js');
const helper = require('../../helper.js')


it('should subscribe to newsletter', async () => {
    await browser.url(`/`)
    const citySelector = await $(page.citySelector);
    await citySelector.waitForDisplayed();
    citySelector.click();
    const emailField = await $(page.emailField);
    await emailField.click();
    emailField.setValue('Test1@mail.ru');
    await browser.keys('Tab');
    const subscribeButton = await $(page.subscribeToNews);
    await subscribeButton.click();
    //await browser.pause(3000);
    const successContainer = await $(page.subscribeSuccess);
    await successContainer.waitForDisplayed();
    expect(successContainer).toBeExisting();
    })  
