const localStorageAccess = localStorage

function getALLProductsFromLocalStorage(){
    const products = localStorageAccess.getItem("canapProducts")
    if(!products){
        return {}
    }
        return JSON.parse(products)
}

function updateProductsInLocalStorage(products){
    localStorageAccess.setItem("canapProducts",JSON.stringify(products))
}

function addToCart(id,color,quantity){
    let products = getALLProductsFromLocalStorage()

    if(products[id]){

    }

    if(!products[id]){
        products[id] = {
            [color]: parseInt(quantity)
        }
    }

    updateProductsInLocalStorage(products)
}