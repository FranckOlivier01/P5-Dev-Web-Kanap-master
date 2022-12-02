// FONCTIONS DE GESTION DU PANIER

// AJOUTER 

const localStorageAccess = localStorage

/*
* Fonction pour Récupérer tous  les produits dans le localstorage
*/
function getALLProductsFromLocalStorage(){
    const products = localStorageAccess.getItem("canapProducts")
    if(!products){
        return {}
    }
        return JSON.parse(products)
}

/* 
* Fonction pour mettre a jour les produits dans le localstorage
*/
function updateProductsInLocalStorage(products){
    localStorageAccess.setItem("canapProducts",JSON.stringify(products))
}


/* 
* Fonction pour ajouter un produit dans le localstorage (dans le panier)
* @param {id,color,quantity}
*/
function addToCart(id,color,quantity){
    let products = getALLProductsFromLocalStorage()

    if(products[id]){
        if(products[id][color]){
            if(parseInt(products[id][color]) + parseInt(quantity)<100){
                products[id][color] = parseInt(products[id][color]) + parseInt(quantity)
            }else{
                alert("Veuillez mettre une quantité inférieure à 100!")
            }
        }else{
            products[id][color] = parseInt(quantity)
        }

    }

    if(!products[id]){
        products[id] = {
            [color]: parseInt(quantity)
        }
    }

    updateProductsInLocalStorage(products)
}

// Fonction pour supprimer un produit du localstorage

 function deleteProductFromlocalStorage(id,color){
    let products = getALLProductsFromLocalStorage()
    if(products[id][color]){
        if(Object.keys(products[id]).length > 1){
            delete products[id][color]
        }else{
            delete products[id]
        }
    }

    updateProductsInLocalStorage(products)
    alert('Produit bien supprimer du panier')
    location.reload()
 }

 // Fonction pour modifier la quantité