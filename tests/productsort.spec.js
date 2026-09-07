const {test, expect} = require("@playwright/test");

import Login from "../pages/loginpage";
import Products from "../pages/productspage";

const user = "standard_user";
const password = "secret_sauce";

test.describe("Product Sort tests", function(){

    test.beforeEach(async function({page}){

        const loginpage = new Login(page);

        await page.goto("https://www.saucedemo.com/");

        await loginpage.loginToApplication(user,password);




    })

    test("Sort products by price low to high", async function({page}){

   
        const productsort = new Products(page);

        await productsort.selectPriceLowHigh();

        await expect(productsort.dropdown).toHaveValue("lohi");



    });


    test("Sort products by price High to low", async function({page}){


        const productsort = new Products(page);

        await productsort.selectPriceHighLow();

        await expect(productsort.dropdown).toHaveValue("hilo");
    })

    test("Sort products by A-Z", async function({page}){

    
        const productsort = new Products(page);

    
        await productsort.selectAscending();

        await expect (productsort.dropdown).toHaveValue("az");

    
    });

    test("Sort products by price Z-A", async function({page}){

   
        const productsort = new Products(page);


        await productsort.selectDescending();

        await expect (productsort.dropdown).toHaveValue("za");

    
    });

    // Bug/Defect
    test.only("Verify whether the selected sorted order is saved", async function({page}){

        const productsort = new Products(page);

        await productsort.selectDescending();

        await page.waitForTimeout(3000);

        await productsort.checkSortOrder();


    });






})













