class Navigation {

    constructor(page) {

        this.page = page;
        this.menu = page.getByRole("Button", {name:"Open Menu"});
        this.logout = page.locator("(//a[normalize-space()='Logout'])[1]");
        this.about = page.getByRole("link", {name:"About"});
        this.resetApp = page.getByRole("link",{name: "Reset App State"});
        
    }

    async openMenu(){

        await this.menu.click();
    }

    async logOutFromApp(){

        await this.logout.click();
    }

    async goToAbout(){

        await this.about.click();
    }

    async resetAppState(){

        await this.resetApp.click();
    }
    



}

module.exports = Navigation;
