const {test,expect} = require("playwright/test");

import Login from "../pages/loginpage";
import Cart from "../pages/addtocartpage";

const user = "standard_user";
const password = "secret_sauce";


test.describe("Add to Cart Tests", function(){



    test.beforeEach(async ({page})=>{

        const loginpage = new Login(page);

        await page.goto("https://www.saucedemo.com/");

        await loginpage.loginToApplication(user,password);

    });


    

    test("Add a single product to cart", async function({page}){

        const cartpage = new Cart(page);

        await cartpage.addToCart();

        await expect(page.locator("//span[@class='shopping_cart_badge']")).toHaveCount(1);

    //await page.waitForTimeout(3000);

    });

    

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

    
    test("Verify the product price in cart", async function({page}){

        const cartpage = new Cart(page);

        await cartpage.addToCart();
    
        await cartpage.selectcart();

        await expect(page.locator("//div[@class='inventory_item_price']")).toHaveText("$29.99");

    });

    
    test("Verify the product is displayed in the cart", async function({page}){
    
        const cartpage = new Cart(page);

        await cartpage.addToCart();

        await cartpage.selectcart();

        await expect(page.locator("//div[@class='cart_item']")).toHaveCount(1);

        await expect(page.locator("//div[@class='inventory_item_name']")).toHaveText("Sauce Labs Backpack");

    });

    

});