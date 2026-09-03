const {test, expect} = require("@playwright/test");

const logindata = JSON.parse(JSON.stringify(require("..//data/login.json")));

import Login from "../pages/loginpage";



for (const data of logindata) {

    test(`User login ${data.id}`, async ({page})=>{

        const loginpage = new Login(page);

        await page.goto("https://www.saucedemo.com/");

        await loginpage.loginToApplication(data.username,data.password);

        if (data.valid) {

            await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

        } else {

            await expect(page.locator('[data-test="error"]')).toBeVisible();
        }
    })

        
    

}

