const {test, expect} = require("@playwright/test");

import Login from "../pages/loginpage";
import Navigation from "../pages/navigation";

const user = "standard_user";
const password = "secret_sauce";

test.describe("Navigation Tests", function(){
    

    test.beforeEach(async function({page}){

        const loginpage = new Login(page);
        const navigation = new Navigation(page);

        await page.goto("https://www.saucedemo.com/");

        await loginpage.loginToApplication(user,password);

        
    })


    test("Verify the Menu bar", async function({page}){

        const navigation = new Navigation(page);

        await navigation.openMenu();

        await expect(navigation.about).toBeVisible();
        await expect(navigation.logout).toBeVisible();
        await expect(navigation.resetApp).toBeVisible();

        await page.waitForTimeout(3000);
    });

    test("Verify whether user can Logout", async function({page}){

        const navigation = new Navigation(page);

        await navigation.openMenu();

        await navigation.logOutFromApp();

        await expect(page).toHaveURL("https://www.saucedemo.com/");

        await page.waitForTimeout(3000);


    });

    test("Verify whether user can navigate to About page", async function({page}){

        const navigation = new Navigation(page);

        await navigation.openMenu();

        await navigation.goToAbout();

        await expect(page).toHaveURL(/saucelabs.com/);

        await page.waitForTimeout(3000);
    });

    test("Verify the App Reset state", async function({page}){

        const navigation = new Navigation(page);

        await navigation.openMenu();

        await navigation.resetApp();

        

    })



})