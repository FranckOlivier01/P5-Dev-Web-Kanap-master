let urlParams= (new URL(location)).searchParams
const productId= urlParams.get('id')
console.log(productId) 

fetch('http://localhost:3000/api/products/'+productId)
.then(function(response){
    response.json()
        .then(function(product){
            console.log(product)
            const itemImg = document.getElementsByClassName('item__img')[0]
            console.log(itemImg)
            let img = document.createElement('img')
            img.src = product.imageUrl
            img.alt = product.altTxt
            itemImg.appendChild(img)

            const title = document.getElementById('title')
            title.innerHTML = product.name

        })
        .catch(function(error){
            console.log(error)
        })
})
.catch(function(error){
    console.log(error)
})
