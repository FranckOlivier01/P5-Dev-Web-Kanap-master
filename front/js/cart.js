const productsInCart = getALLProductsFromLocalStorage()
const sectionCartItems = document.getElementById('cart__items')

//Récupérer tous les produits du panier avec la boucleci-desous

for(let [id,colors] of Object.entries(productsInCart)){
    for(let [color,quantity] of Object.entries(colors)){
        fetch('http://localhost:3000/api/products/'+ id)
        .then(function(response){
            response.json()
            .then(function(product){
                sectionCartItems.innerHTML += `<article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
                <div class="cart__item__img">
                  <img src="../images/product01.jpg" alt="Photographie d'un canapé">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__description">
                    <h2>Nom du produit</h2>
                    <p>Vert</p>
                    <p>42,00 €</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Qté : </p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem">Supprimer</p>
                    </div>
                  </div>
                </div>
              </article>`
            
            })
            .catch(function(error){
                console.log(error)
            })
        })
        .catch(function(error){
            console.log(error)
        })
    }
}