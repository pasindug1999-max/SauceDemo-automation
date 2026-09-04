const {test,expect} = require("playwright/test");

import Login from "../pages/loginpage";
import Cart from "../pages/addtocartpage";

const user = "standard_user";
const password = "secret_sauce";

test("Add to Cart", async ({page})=>{

    const Loginpage = new Login(page);
    const cartpage = new Cart(page);

    await page.goto("https://www.saucedemo.com/");


    await Loginpage.loginToApplication(user,password);

    await cartpage.addToCart();

    await page.waitForTimeout(3000);


})