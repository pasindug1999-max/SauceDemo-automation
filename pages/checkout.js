class Checkout {

    constructor(page){
        this.page = page;
        this.checkout = page.getByRole("Button",{name:"Checkout"});
        this.firstname = page.locator("#first-name");
        this.lastname = page.getByPlaceholder("Last Name")
        this.zipcode = page.locator("#postal-code");
        this.continue = page.locator("//input[@id='continue']");
        this.finish = page.getByRole("Button", {name:"Finish"})
    }


    async clickCheckout(){

        await this.checkout.click();
    }

    async addCheckoutDetails(firstname,lastname,zipcode){

        await this.firstname.fill(firstname);
        await this.lastname.fill(lastname);
        await this.zipcode.fill(zipcode);

    }

    async clickContinue(){

        await this.continue.click();
    }

    async clickFinish(){

        await this.finish.click();
    }



    
}


module.exports = Checkout;