const uiCreation = (data) => {
    console.log(data ,'========');
    // console.log(data, "==>> uiCreation function")

    // const {title, image, description} = data
    const imageUi = document.querySelector('#image')
    const cardTitle = document.querySelector('.card-title')
    const cardText = document.querySelector('.card-text')
    const mainDiv = document.querySelector('.mainDiv')
    
   
    
    const mapData = data.map((item)=>{
        
        const singleData = `<div class="contentMain col-6"><img id="image" src="${item.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">${item.description}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>`

        return singleData

        


    })
    
    mainDiv.innerHTML = mapData.join('');
    


    
        // // imageUi.src = data.image
        // imageUi.src = item.image
        // // cardTitle.textContent = data.title
        // cardTitle.textContent = item.title
        // // cardText.textContent = data.description
        // cardText.textContent =  item.description



}


const getCountryData = () => {
    fetch(`https://fakestoreapi.com/products/`)
        .then(function (response) {
            console.log(response, "==>> response of fetch")
            return response.json()
        }).then(function(data){
            console.log(data, "==>> my data as json")
            uiCreation(data)
        })
}

getCountryData()


const getAllProducts = () => {
    fetch(`https://catfact.ninja/fact/`)
        .then(resp => resp.json())
        .then(data => console.log(data, "==>>allProducts"))
}

getAllProducts()


