const page = require('../../page.js');
const helper = require('../../helper.js')


it('should create a new account', async () => {
    await browser.url(`/`)
    const citySelector = await $(page.citySelector);
    await citySelector.waitForDisplayed();
    await citySelector.click();
    const newProfile = await $(page.newProfileButton);
    await newProfile.click();
    await browser.pause(3000);
    await citySelector.waitForDisplayed();
    citySelector.click();
    await browser.pause(3000);
    const newEmailField = await $(page.newEmailField);
    await newEmailField.waitForDisplayed();
    const newEmail = helper.getNewEmail();
    await newEmailField.setValue('Test'+newEmail+'@mail.ru');
    await browser.keys('Tab');
    const newPassword = await $(page.newPassword);
    newPassword.setValue('1234');
    await browser.keys('Tab');
    const passwordConfirmation = await $(page.passwordConfirmation);
    await passwordConfirmation.setValue('1234');
    await browser.keys('Tab');
    const registrationButton = await $(page.registrationButton);
    registrationButton.click();
    await browser.pause(3000);
    const successRegistrationText = await $(page.successRegistrationText);
    expect(successRegistrationText).toBeExisting();

  
})  
