const page = require('../../page.js');
const helper = require('../../helper.js')

describe('Should make an order', () => {
    it('should make an order as guest', async () => {
        await browser.url(`/`)
        const citySelector = await $(page.citySelector);
        await citySelector.waitForDisplayed();
        await citySelector.click();
        const validProduct = await $(page.remarsGel);
        validProduct.scrollIntoView();
        await validProduct.click();
        await citySelector.waitForDisplayed();
        await citySelector.click();
        const toCartButton = await $(page.toCartButton);
        toCartButton.click();
        await browser.pause(10000);
        const cartButton = await $(page.cartButton);
        cartButton.click();
        const checkOutButton = await $(page.checkOutButton);
        await checkOutButton.waitForDisplayed();
        checkOutButton.click();
        await citySelector.waitForDisplayed();
        await citySelector.click();
        await browser.pause(2000);
        const checkOutGuest = await $(page.checkOutGuest);
        await checkOutGuest.click();
        const withoutRegistration = await $(page.withoutRegistration);
        await withoutRegistration.click();
        await browser.pause(3000);
        const customerName = await $(page.customerName);
        await customerName.setValue('Alex');
        const customerSurname = await $(page.customerSurname);
        customerSurname.setValue('Smith');
        const customerEmailField = await $(page.customerEmailField);
        const customerEmail = helper.getNewEmail();
        await customerEmailField.setValue('Test'+customerEmail+'@mail.ru');
        const customerPhone = await $(page.customerPhone);
        const phoneNumber = helper.getPhoneNumber("+7");
        await customerPhone.setValue(phoneNumber);
        const customerCity = await $(page.customerCity);
        await customerCity.setValue('Москва');
        const firstNextButton = await $(page.nextFirstButton);
        await firstNextButton.click();
        await browser.pause(5000);
        const deliveryMethod = await $(page.deliveryMethod);
        await deliveryMethod.waitForDisplayed();
        expect(deliveryMethod).toBeExisting();
        await browser.reloadSession();

    })

    it('should make an order as existing user', async () => {
        await browser.url(`/`)
        const citySelector = await $(page.citySelector);
        await citySelector.waitForDisplayed();
        await citySelector.click();
        const validProduct = await $(page.remarsGel);
        validProduct.scrollIntoView();
        await validProduct.click();
        await citySelector.waitForDisplayed();
        await citySelector.click();
        const toCartButton = await $(page.toCartButton);
        toCartButton.click();
        await browser.pause(10000);
        const cartButton = await $(page.cartButton);
        cartButton.click();
        const checkOutButton = await $(page.checkOutButton);
        await checkOutButton.waitForDisplayed();
        checkOutButton.click();
        await citySelector.waitForDisplayed();
        await citySelector.click();
        await browser.pause(2000);
        const userLogin = await $(page.userLogin);
        await userLogin.setValue('Test1@mail.ru');
        const userPassword = await $(page.userPassword);
        await userPassword.setValue('1234');
        const userEnterButton = await $(page.userEnterButton);
        await userEnterButton.click();
        await browser.pause(2000);
        const customerCity = await $(page.customerCity);
        await customerCity.setValue('Москва');
        const firstNextButton = await $(page.nextFirstButton);
        await firstNextButton.click();
        await browser.pause(5000);
        const deliveryMethod = await $(page.deliveryMethod);
        await deliveryMethod.waitForDisplayed();
        expect(deliveryMethod).toBeExisting();


      
    })

})
