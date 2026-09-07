class Products {

    constructor(page){

        this.page = page;
        this.dropdown = page.locator("//select[@class='product_sort_container']");
        this.product = page.locator("//div[normalize-space()='Sauce Labs Fleece Jacket']");
        this.back = page.locator("//button[@id='back-to-products']");
        

    }

    async selectPriceLowHigh() {

        await this.dropdown.selectOption("lohi");
    }

    async selectPriceHighLow() {

        await this.dropdown.selectOption("hilo");
    }

    async selectAscending() {

        await this.dropdown.selectOption("az");
    }

    async selectDescending() {

        await this.dropdown.selectOption("za");
        
    }

    async checkSortOrder() {

        await this.product.click();

        await this.back.click();
    }




   

}

module.exports = Products;