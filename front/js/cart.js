const productsInCart = getALLProductsFromLocalStorage()
const sectionCartItems = document.getElementById('cart__items')

let totalOfProducts = 0
let totalCartPrice = 0

const totalQuantity = document.getElementById('totalQuantity')
const totalPrice = document.getElementById('totalPrice')
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
              
              //Gestion quantité total des produits

              totalOfProducts += parseInt(quantity)
              totalQuantity.innerHTML += parseInt(totalOfProducts)

              //Gestion prix total du panier

              totalCartPrice += parseInt(product.price)*parseInt(quantity)
              totalPrice.innerHTML = totalCartPrice

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

let formBtnOrder = document.getElementById('order')

let firstName = document.getElementById('firstName')
let firstNameErrorMsg = document.getElementById('firstNameErrorMsg')
let nameRegex = /^[0-9a-zA-Z\s{2,}]/i
let emailRegex = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/g

let lastName = document.getElementById('lastName')
let lastNameErrorMsg = document.getElementById('lastNameErrorMsg')

let address = document.getElementById('address')
let addressErrorMsg = document.getElementById('addressErrorMsg')

let city = document.getElementById('city')
let cityErrorMsg = document.getElementById('cityErrorMsg')

let email = document.getElementById('email')
let emailErrorMsg = document.getElementById('emailErrorMsg')


formBtnOrder.addEventListener("click", function(e){
  e.preventDefault()
  let countCheckForm = 0  

  if (firstName.value ===""){
    firstName.style.border = "red 1px solid"
    firstNameErrorMsg.innerHTML = "Ce champ ne doit pas être vide"
  }else if(firstName.value.length < 3){
    firstName.style.border = "red 1px solid"
    firstNameErrorMsg.innerHTML = "Ce champ doit comporter au moins 3 caractères"
  } else if(firstName.value.match(nameRegex) === null){
    firstName.style.border = "red 1px solid"
    firstNameErrorMsg.innerHTML = "Ce champ n'est pas valide"
  } else{ 
    firstName.style.border = "green 1px solid"
    firstNameErrorMsg.innerHTML = ""
    countCheckForm++
  }

  if (lastName.value ===""){
    lastName.style.border = "red 1px solid"
    lastNameErrorMsg.innerHTML = "Ce champ ne doit pas être vide"
  }else if(lastName.value.length < 3){
    lastName.style.border = "red 1px solid"
    lastNameErrorMsg.innerHTML = "Ce champ doit comporter au moins 3 caractères"
  } else if(lastName.value.match(nameRegex) === null){
    lastName.style.border = "red 1px solid"
    lastNameErrorMsg.innerHTML = "Ce champ n'est pas valide"
  } else{ 
    lastName.style.border = "green 1px solid"
    lastNameErrorMsg.innerHTML = ""
    countCheckForm++
  }
// ajouter les autres tests des champs adresse ville et email
  if (address.value ===""){
    address.style.border = "red 1px solid"
    addressErrorMsg.innerHTML = "Ce champ ne doit pas être vide"
  }else if(address.value.length < 3){
    address.style.border = "red 1px solid"
    addressErrorMsg.innerHTML = "Ce champ doit comporter au moins 3 caractères"
  } else if(address.value.match(nameRegex) === null){
    address.style.border = "red 1px solid"
    addressErrorMsg.innerHTML = "Ce champ n'est pas valide"
  } else{ 
    address.style.border = "green 1px solid"
    addressErrorMsg.innerHTML = ""
    countCheckForm++
  }

  if (city.value ===""){
    city.style.border = "red 1px solid"
    cityErrorMsg.innerHTML = "Ce champ ne doit pas être vide"
  }else if(city.value.length < 3){
    city.style.border = "red 1px solid"
    cityErrorMsg.innerHTML = "Ce champ doit comporter au moins 3 caractères"
  } else if(city.value.match(nameRegex) === null){
    city.style.border = "red 1px solid"
    cityErrorMsg.innerHTML = "Ce champ n'est pas valide"
  } else{ 
    city.style.border = "green 1px solid"
    cityErrorMsg.innerHTML = ""
    countCheckForm++
  }

  if (email.value ===""){
    email.style.border = "red 1px solid"
    emailErrorMsg.innerHTML = "Ce champ ne doit pas être vide"
  }else if(email.value.length < 3){
    email.style.border = "red 1px solid"
    emailErrorMsg.innerHTML = "Ce champ doit comporter au moins 3 caractères"
  } else if(email.value.match(emailRegex) === null){
    email.style.border = "red 1px solid"
    emailErrorMsg.innerHTML = "Ce champ n'est pas valide"
  } else{ 
    email.style.border = "green 1px solid"
    emailErrorMsg.innerHTML = ""
    countCheckForm++
  }


  if(countCheckForm === 5 && Object.keys(productsInCart).length > 0){
    const contact = {
      firstName:firstName.value,
      lastName:lastName.value,
      // compléter les autres à la suite
      address:address.value,
      city:city.value,
      email:email.value,
    }
    const products = []
    for(let [id] of Object.entries(productsInCart)){
      products.push([id])
    }

    fetch('http://localhost:3000/api/products/order',{
      method:"POST",
      headers:{"Content-type":"application/json; charset=UTF-8"},
      body:JSON.stringify({contact,products})
    })
    .then(function(response){
      response.json()
      .then(function(orderResponse){
        alert('Nous avons bien reçu votre commande')
        location.replace(`confirmation.html?id=${orderResponse.orderId}`)
      })
      .catch((errorResponse)=>{
        console.log(errorResponse)      
      }) 
    })
    .catch((errorOrder)=>{
      console.log(errorOrder)      
    }) 
  }
})