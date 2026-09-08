const {test, expect} = require("@playwright/test");

import Login  from "../pages/loginpage";
import Cart from "../pages/addtocartpage";
import Checkout from "../pages/checkout";

const checkoutData = JSON.parse(JSON.stringify(require("../data/checkout.json")));


const user = "standard_user";
const password = "secret_sauce";

test.describe("Checkout Tests",  function(){

    test.beforeEach(async function({page}){

        const loginpage = new Login(page);
        const cartpage = new Cart(page);

        await page.goto("https://www.saucedemo.com/");

        await loginpage.loginToApplication(user,password);

        await cartpage.addToCart();
        await cartpage.selectcart();


    })


    test(`Valid Checkout - ${checkoutData[0].id}`, async function({page}){

        const checkoutpage = new Checkout(page);

        const data = checkoutData[0];

        await checkoutpage.clickCheckout();

        await checkoutpage.addCheckoutDetails(data.firstname,data.lastname,data.zipcode);

        await checkoutpage.clickContinue();

        await checkoutpage.clickFinish();

        await expect(page.getByText("Thank you for your order!")).toBeVisible();

        

        
    });


    test(`Enter checkout details wihout lastname - ${checkoutData[1].id}`, async function({page}){

        const checkoutpage = new Checkout(page);

        const data = checkoutData[1];

        await checkoutpage.clickCheckout();

        await checkoutpage.addCheckoutDetails(data.firstname,data.lastname,data.zipcode);

        await checkoutpage.clickContinue();

        await expect(page.locator("[data-test='error']")).toHaveText("Error: Last Name is required");

        

    });

    test(`Enter checkout details without firstname - ${checkoutData[2].id}`, async function({page}){

        const checkoutpage = new Checkout(page);

        const data = checkoutData[2];

        await checkoutpage.clickCheckout();

        await checkoutpage.addCheckoutDetails(data.firstname, data.lastname, data.zipcode);

        await checkoutpage.clickContinue();

        await expect(page.locator("[data-test='error']")).toHaveText("Error: First Name is required")

        


    });

    test(`Enter checkout details without zipcode - ${checkoutData[3].id}`, async function({page}){

        const checkoutpage = new Checkout(page);
        const data = checkoutData[3];

        await checkoutpage.clickCheckout();

        await checkoutpage.addCheckoutDetails(data.firstname, data.lastname, data.zipcode);

        await checkoutpage.clickContinue();

        await expect(page.locator("[data-test='error']")).toHaveText("Error: Postal Code is required");

        

    })

    test(`Keep the Checkout details fields empty - ${checkoutData[4].id}`, async function({page}){

        const checkoutpage = new Checkout(page);
        const data = checkoutData[4];

        await checkoutpage.clickCheckout();

        await checkoutpage.addCheckoutDetails(data.firstname, data.lastname, data.zipcode);

        await checkoutpage.clickContinue();

        await expect(page.locator("[data-test='error']")).toHaveText("Error: First Name is required");

        



    });


    // Bug / Defect
    test(`Enter an invalid zipcode - ${checkoutData[5].id}`, async function({page}){

        const checkoutpage = new Checkout(page);

        const data = checkoutData[5];

        await checkoutpage.clickCheckout();

        await checkoutpage.addCheckoutDetails(data.firstname, data.lastname, data.zipcode);

        await checkoutpage.clickContinue();

        const errorMessage = page.locator('[data-test="error"]');

        await expect(errorMessage).toBeVisible();


        
    })


});

// Bug / Defect
test.describe("Empty Cart Checkout", function() {

    test("Checkout with empty cart", async ({page}) => {

        const loginpage = new Login(page);
        const cartpage = new Cart(page);
        const checkoutpage = new Checkout(page);

        

        await page.goto("https://www.saucedemo.com/");

        await loginpage.loginToApplication(user, password);

        
        await cartpage.selectcart();

        await expect(page.locator(".cart_item")).toHaveCount(0);

        await checkoutpage.clickCheckout();

        await expect(page.getByText("Your cart is empty please add some products")).toBeVisible();

        await expect(page).not.toHaveURL("https://www.saucedemo.com/checkout-step-one.html");

        

        // await page.waitForTimeout(3000);
    });

});


