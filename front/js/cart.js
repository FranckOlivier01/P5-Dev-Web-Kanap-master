const productsInCart = getALLProductsFromLocalStorage()
const sectionCartItems = document.getElementById('cart__items')

//Récupérer tous les produits du panier avec la boucle ci-desous

for(let [id,colors] of Object.entries(productsInCart)){
    for(let [color,quantity] of Object.entries(colors)){
        fetch('http://localhost:3000/api/products/'+ id)
        .then(function(response){
            response.json()
            .then(function(product){
                sectionCartItems.innerHTML += `<article class="cart__item" data-id="${id}" data-color="${color}">
                <div class="cart__item__img">
                  <img src="${product.imageUrl}" alt="${product.altTxt}">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__description">
                    <h2>${product.name}</h2>
                    <p>${color}</p>
                    <p>${product.price}</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Qté : </p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${quantity}">
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem">Supprimer</p>
                    </div>
                  </div>
                </div>
              </article>`
              
              //Gestion suppression d'un produit
              let deleteButtons = document.getElementsByClassName('deleteItem')
              Object.values(deleteButtons).forEach(deleteButton =>{
                deleteButton.addEventListener("click", function(e){
                  const article = deleteButton.closest("article")
                  const productId = article.getAttribute("data-id")
                  const productColor = article.getAttribute("data-color")
                  deleteProductFromlocalStorage(productId,productColor)

                })
              })

              // Fonction pour modifier la quantité
              let changeQuantities = document.getElementsByClassName('itemQuantity')
              Object.values(changeQuantities).forEach(changeQuantity =>{
                changeQuantity.addEventListener("change",function(e){
                  const userQuantity = changeQuantity.value
                  const article = changeQuantity.closest("article")
                  const productId = article.getAttribute("data-id")
                  const productColor = article.getAttribute("data-color")
                  changeQuantityFromLocalStorage(productId,productColor,userQuantity)
                })
              })
              
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