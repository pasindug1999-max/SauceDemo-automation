const {test,expect} = require("playwright/test");

import Login from "../pages/loginpage";
import Cart from "../pages/addtocartpage";

const user = "standard_user";
const password = "secret_sauce";


test.beforeEach(async ({page})=>{

    const loginpage = new Login(page);

    await page.goto("https://www.saucedemo.com/");

    await loginpage.loginToApplication(user,password);

});


// Add a single product to cart

test("Add a single product to cart", async function({page}){

    const cartpage = new Cart(page);

    await cartpage.addToCart();

    await expect(page.locator("//span[@class='shopping_cart_badge']")).toHaveCount(1);

    //await page.waitForTimeout(3000);

});

// Remove a product from cart

test("Remove a product added to cart", async function({page}){

    const cartpage = new Cart(page);

    await cartpage.addToCart();

    await cartpage.removeFromCart();

    //await  page.waitForTimeout(3000);

    await expect(page.locator("//span[@class='shopping_cart_badge']")).toHaveCount(0);
});


test("Add multiple products to cart", async function({page}){

    const cartpage = new Cart(page);

    await cartpage.addMultipleProducts();

    await expect(page.locator("//span[@class='shopping_cart_badge']")).toHaveText("3");

});