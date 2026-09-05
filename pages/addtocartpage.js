class Cart{

    constructor(page){

        this.page = page;
        this.addToCartButton = page.locator("//button[@id='add-to-cart-sauce-labs-backpack']");
        this.removeProduct = page.locator("//button[@name='remove-sauce-labs-backpack']");
        this.addButton = page.locator("button[id^='add-to-cart']");
        this.cart = page.locator("//a[@class='shopping_cart_link']");
        this.cartItem = page.locator("//div[@class='cart_item']")


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


    async selectcart(){

        await this.cart.click();
    }
}


module.exports = Cart;

