const {test, expect} = require("@playwright/test");

import Login from "../pages/loginpage";
import Products from "../pages/productspage";


test("Sort products by price low to high", async function({page}){

    const loginpage = new Login(page);
    const productsort = new Products(page);

    await page.goto("https://www.saucedemo.com/");

    await loginpage.loginToApplication("standard_user","secret_sauce");

    await productsort.selectPriceLowHigh();



});



test("Sort products by price high to low", async function({page}){

    const loginpage = new Login(page);
    const productsort = new Products(page);

    await page.goto("https://www.saucedemo.com/");

    await loginpage.loginToApplication("standard_user","secret_sauce");

    await productsort.selectPriceHighLow();


    
});



test("Sort products by A-Z", async function({page}){

    const loginpage = new Login(page);
    const productsort = new Products(page);

    await page.goto("https://www.saucedemo.com/");

    await loginpage.loginToApplication("standard_user","secret_sauce");

    await productsort.selectAscending();

    
});



test("Sort products by price Z-A", async function({page}){

    const loginpage = new Login(page);
    const productsort = new Products(page);

    await page.goto("https://www.saucedemo.com/");

    await loginpage.loginToApplication("standard_user","secret_sauce");

    await productsort.selectDescending();

    
});
