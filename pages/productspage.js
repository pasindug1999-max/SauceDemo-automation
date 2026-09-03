class Products {

    constructor(page){

        this.page = page;
        this.dropdown = page.locator("//select[@class='product_sort_container']");
        this.pricelow = page.getByLabel("Price (low to high)");
        this.pricehight = page.getByLabel("Price (high to low)");
        this.nameascending = page.locator("//option[@value='az']");
        this.namedescending = page.locator("//option[@value='za']");

    }

    async selectdropdown(){

        await this.dropdown.click();
        await this.pricelow.click();
        await this.pricehight.click();
        await this.nameascending.click();
        await this.namedescending.click();


    }


}

module.exports = Products;