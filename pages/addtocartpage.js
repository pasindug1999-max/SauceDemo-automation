class Cart{

    constructor(page){

        this.page = page;
        this.addToCartButton = page.locator("//button[@id='add-to-cart-sauce-labs-backpack']");


    }


    async addToCart(){

        await this.addToCartButton.click(); 
    }
}


module.exports = Cart;

