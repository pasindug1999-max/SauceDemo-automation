class Navigation {

    constructor(page) {

        this.page = page;
        this.menu = page.getByRole("Button", {name:"Open Menu"});
        this.allItems = page.getByRole("link", {name: "All Items"});
        this.logout = page.locator("(//a[normalize-space()='Logout'])[1]");
        this.about = page.getByRole("link", {name:"About"});
        this.resetApp = page.getByRole("link",{name: "Reset App State"});
        this.closeMenu = page.geyByRole("button", {name: "Close Menu"});
        
    }

    async openMenu(){

        await this.menu.click();
    }

    async cliclAllItems(){

        await this.allItems.click();
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

    async closesideMenu(){

        await this.closeMenu.click();
    }
    


}

module.exports = Navigation;
