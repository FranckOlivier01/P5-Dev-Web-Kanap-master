const items = document.getElementById("items");

fetch('http://localhost:3000/api/products')
    .then(function(response){
        if(response.ok){
            response.json()
            .then(function(products){
                console.log(products)
                //Continuer ici l'injection    
            })
            .catch(function(error){
                console.log(error)
            })
        }
    })
    .catch(function(error){
        console.log(error)
    })