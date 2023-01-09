let urlParams= (new URL(location)).searchParams
const productId= urlParams.get('id')


fetch('http://localhost:3000/api/products/'+productId)
.then(function(response){
    response.json()
        .then(function(product){
          //  console.log(product)
            const itemImg = document.getElementsByClassName('item__img')[0]
          //  console.log(itemImg)
            let img = document.createElement('img')
            img.src = product.imageUrl
            img.alt = product.altTxt
            itemImg.appendChild(img)

            const title = document.getElementById('title')
            title.innerHTML = product.name

            const price = document.getElementById('price')
            price.innerHTML = product.price

            const description = document.getElementById('description')
            description.innerHTML = product.description

            let color = document.getElementById('colors')
             for (i = 0; i < product.colors.length; i++ ){
                 color.innerHTML += `<option value="${product.colors[i]}">${product.colors[i]}</option>` 
             }
           
           
           //récupéer input de la quantité et de la couleur

           let userQuantity = document.getElementById("quantity")
        
           let userColor = document.getElementById('colors')

           // detection du panier
           document.getElementById('addToCart').addEventListener("click", (e)=>{
            e.preventDefault()
            alert("formulaire envoyé")

            if (userQuantity.value >=1 && userQuantity.value<=100){
                if (userColor.value === ""){
                    alert("Veuillez sélectionner une couleur!")
                } else {
                    addToCart(productId,userColor.value,userQuantity.value)
                }
            } else {
                alert("Veuillez selectionner une quantité valide!")
            }
        })
        })
        .catch(function(error){
            console.log(error)
        })
})
.catch(function(error){
    console.log(error)
})

