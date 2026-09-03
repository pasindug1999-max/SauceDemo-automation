const {test, expect} = require("@playwright/test");

import Login from "../pages/loginpage";
import Products from "../pages/productspage";


test("Sort products by price low to high", async function({page}){

    const loginpage = new Login(page);
    const productsort = new Products(page);

    await page.goto("https://www.saucedemo.com/");

    await loginpage.loginToApplication("standard_user","secret_sauce");

    await productsort.selectPriceLowHigh();

    await expect (productsort.dropdown).toHaveValue("lohi");



});



test("Sort products by price high to low", async function({page}){

    const loginpage = new Login(page);
    const productsort = new Products(page);

    await page.goto("https://www.saucedemo.com/");

    await loginpage.loginToApplication("standard_user","secret_sauce");

    await productsort.selectPriceHighLow();

    await expect (productsort.dropdown).toHaveValue("hilo");


    
});



test("Sort products by A-Z", async function({page}){

    const loginpage = new Login(page);
    const productsort = new Products(page);

    await page.goto("https://www.saucedemo.com/");

    await loginpage.loginToApplication("standard_user","secret_sauce");

    await productsort.selectAscending();

    await expect (productsort.dropdown).toHaveValue("az");

    
});



test("Sort products by price Z-A", async function({page}){

    const loginpage = new Login(page);
    const productsort = new Products(page);

    await page.goto("https://www.saucedemo.com/");

    await loginpage.loginToApplication("standard_user","secret_sauce");

    await productsort.selectDescending();

    await expect (productsort.dropdown).toHaveValue("za");

    
});
