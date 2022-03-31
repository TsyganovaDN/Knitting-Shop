class Products {
    constructor(){
        this.classNameActive ='products-element__btn_active';
        this.lableAdd = 'Добавить в корзину';
        this.lableRemove = 'Удалить из корзины';
    }
    handleSetLocationStorage(element,id){
        const {pushProduct,products} = localStorageUtil.putProducts(id);

        if (pushProduct){
            element.classList.add(this.classNameActive);
            element.innerHTML = this.lableRemove;
        } else {
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.lableAdd;
        }
        headerPage.render(products.length);
    }
    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';

        CATALOG.forEach(({ id, name, price, img }) => {
            let activeClass = '';
            let activeText = '';  
            if (productsStore.indexOf(id) === -1){
                activeText = this.lableAdd;
            } else {
                activeClass = ' '+this.classNameActive;
                activeText = this.lableRemove;
            }
            htmlCatalog += `
                <li class="products-element">
                    <span class="products-element__name">${name}</span>
                    <img class="products-element__img" src="${img}" />
                    <span class="products-element__price">
                         ${price.toLocaleString()} руб.
                    </span>
                    <button class="products-element__btn${activeClass}" onclick="productsPage.handleSetLocationStorage(this,'${id}');">
                    ${activeText}
                    </button>
                </li>
            `;
        });

        const html = `
        <ul class="products-container">
                ${htmlCatalog}
            </ul>
        `;

        ROOT_PRODUCTS.innerHTML = html;
    }

    render_price(MinPrice,MaxPrice) {
       
       
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';

        CATALOG.forEach(({ id, name, price, img }) => {
            console.log(price);
            if (price>MinPrice){
                if (price < MaxPrice){
            let activeClass = '';
            let activeText = '';  
            if (productsStore.indexOf(id) === -1){
                activeText = this.lableAdd;
            } else {
                activeClass = ' '+this.classNameActive;
                activeText = this.lableRemove;
            }
            
            htmlCatalog += `
                <li class="products-element">
                    <span class="products-element__name">${name}</span>
                    <img class="products-element__img" src="${img}" />
                    <span class="products-element__price">
                         ${price.toLocaleString()} руб.
                    </span>
                    <button class="products-element__btn${activeClass}" onclick="productsPage.handleSetLocationStorage(this,'${id}');">
                    ${activeText}
                    </button>
                </li>
            `;
        
        }}});

        const html = `
        <ul class="products-container">
                ${htmlCatalog}
            </ul>
        `;

        ROOT_PRODUCTS.innerHTML = html;
    
    }
}

const productsPage = new Products();
productsPage.render();
