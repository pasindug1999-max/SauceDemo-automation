class Products {

    constructor(page){

        this.page = page;
        this.dropdown = page.locator("//select[@class='product_sort_container']");
        

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




   

}

module.exports = Products;