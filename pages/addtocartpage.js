class Cart{

    constructor(page){

        this.page = page;
        this.addToCartButton = page.locator("//button[@id='add-to-cart-sauce-labs-backpack']");
        this.removeProduct = page.locator("//button[@name='remove-sauce-labs-backpack']");
        this.addButton = page.locator("button[id^='add-to-cart']");


    }


    async addToCart(){

        await this.addToCartButton.click(); 
    }

    async removeFromCart(){

        await this.removeProduct.click();

    }

    async addMultipleProducts(){

        await this.addButton.nth(0).click();
        await this.addButton.nth(1).click();
        await this.addButton.nth(2).click();
    }
}


module.exports = Cart;

