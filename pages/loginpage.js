class Login {

    constructor(page){

        this.page = page;
        this.username = page.locator("//input[@id='user-name']");
        this.password = page.locator("#password");
        this.loginButton = page.locator("//input[@type='submit']");
    }


    async loginToApplication(username,password){

        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }
}

module.exports = Login;