# 4smile-pro

Item, functionality and end to end tests for a digital shop of dental appliances 4Smile Pro.
Tests executed using WebdriverIO framework on Node.js, browser Firefox.

Customer needed to test following functionality:
 1. User should be able to subscribe to Newsletter from Main Page, receive confirmation pop-up window.
 2. User should be able to register a new account, receive confirmation of registration pop-up window. 
 3. User should be able to sign in with existing account, receive confirmation of successful sign in.

 Following E2E tests were executed:
 1. Create a new order without creating account as a guest - execution interrupted by crucial bug: user cannot proceed to step 3 of order process "Delivery method".
 2. Create a new order as an existing user - execution interrupted by crucial bug: user cannot proceed to step 3 of order process "Delivery method".

 Bugs found:
 1. User is not able to process to Step 3 (Delivery method) when creating order as a guest. 
 2. User is not able to process to Step 3 (Delivery method) when creating order as an existing user. 
