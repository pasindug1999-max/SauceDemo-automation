class Products {

    constructor(page){

        this.page = page;
        this.dropdown = page.locator("//select[@class='product_sort_container']");
        

    }

    async selectdropdown(option) {

        await this.dropdown.selectOption(option);


    }


}

module.exports = Products;