module.exports = {
    // Inputs
        // for BookCall
    emailField: '#subscr_email12',
        // for Account
    newEmailField: '//*[@id="email"]',
    newPassword: '#password1',
    passwordConfirmation: '#password2',
    enterEmail: '//*[@id="login_main_login"]',
    enterPassword: '//*[@id="psw_main_login"]',
        //for order
    customerName: '#elm_15',
    customerSurname: '#elm_17',
    customerEmailField: '#elm_33',
    customerPhone: '#elm_31',
    customerCity: '#elm_23',
    userLogin: '#login_checkout_login',
    userPassword: '#psw_checkout_login',

    // Buttons
        //for BookCall
    citySelector: '#select_city1',
    subscribeToNews: '#tygh_footer > div > div:nth-child(1) > div > div > div > div > form > div.ty-footer-form-block__form.ty-control-group.right-sbs-block > div.ty-footer-form-block__button > button',
        //for Account
    myAccountButton: '//*[@id="sw_dropdown_130"]/a/span',
    newProfileButton: '#account_info_links_140 > li:nth-child(2) > a',
    registrationButton: '#tygh_main_container > div.tygh-content.clearfix > div > div:nth-child(2) > div.span8.main-content-grid > div > div > div > form > div.ty-profile-field__buttons.buttons-container > button',
    enterAccountButton: '#account_info_links_140 > li:nth-child(1) > a',
    enterButton: '//*[@id="tygh_main_container"]/div[3]/div/div[2]/div[1]/div/div/div/form/div[3]/div[1]/button',
        //for order
    toCartButton: '//*[@id="button_cart_332"]',
    cartButton: '#sw_dropdown_134 > a',
    checkOutButton: '#dropdown_134 > div > div.cm-cart-buttons.ty-cart-content__buttons.buttons-container.full-cart > div.ty-float-right > a',
    nextFirstButton: '#step_two_body > form > div.ty-checkout-buttons > button',
    deliveryMethod: '#sw_dropdown_137 > a',
    userEnterButton: '#step_one_login > div > div.ty-checkout__login > div > form > div.buttons-container.clearfix > div.ty-float-right > button',

    // Others
        //for BookCall
    subscribeSuccess: '//*[@id="tygh_container"]/div[3]/div',
        //for Account
    successRegistrationText: '#tygh_main_container > div.tygh-content.clearfix > div > div > div > div.ty-mainbox-container.clearfix > div > span',
    successSignInText: '//*[@id="tygh_container"]/div[3]/div',
        //for order
    remarsGel: '#scroll_list_24 > div.owl-wrapper-outer > div > div:nth-child(1) > div > div > form > div.ty-grid-list__item-name > bdi > a',
    checkOutGuest: '#checkout_type_guest',
    withoutRegistration: '#anonymous_checkout > form > div > button',

}