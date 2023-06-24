const mainDiv = document.querySelector(".mainDiv");
const uiCreation = (data) => {
  console.log(data, "========");
  // console.log(data, "==>> uiCreation function")

  // const {title, image, description} = data
  const imageUi = document.querySelector("#image");
  const cardTitle = document.querySelector(".card-title");
  const cardText = document.querySelector(".card-text");

  const textArea = document.querySelector(".textArea");
  const dropdownData = document.querySelector("#cars");

  const mapData = data.map((item) => {
    const singleData = `<div class="contentMain col-6"><img id="image" src="${item.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title titleheading">${item.title}</h5>
            <p class="card-text textArea">${item.description}</p>
            <a href="#" class="btn btn-primary">${item.price}$</a>
        </div>
        </div>`;

    return singleData;
  });

  mainDiv.innerHTML = mapData.join("");

  let categoriesArray = [];
  for (let i = 0; i < data.length; i++) {
    // console.log(data[i].category)
    if (!categoriesArray.includes(data[i].category)) {
      categoriesArray.push(data[i].category);
    }
  }
  dropdownData.innerHTML = `<option value="All" ">All</option>`;
  const filterDataShow = categoriesArray.map((item) => {
    const singleData = ` <option value="${item}"">${item}</option>`;
    return singleData;
  });
  dropdownData.innerHTML += filterDataShow.join();
};

function filterData() {
  const dropdownData = document.querySelector("#cars").value;
  fetch(`https://fakestoreapi.com/products/`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        if(dropdownData == 'All'){
            uiCreation(data);
        }else{

      
      const filteredData = data
        .filter((item) => item.category == dropdownData)
        .map((item) => {
          const singleData = `<div class="contentMain col-6"><img id="image" src="${item.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title titleheading">${item.title}</h5>
                <p class="card-text textArea">${item.description}</p>
                <a href="#" class="btn btn-primary">${item.price}$</a>
            </div>
            </div>`;

          return singleData;
        });

      const mainDiv = document.querySelector(".mainDiv");
      mainDiv.innerHTML = filteredData.join("");
    }
    });
}

const carsDropdown = document.querySelector("#cars");
carsDropdown.addEventListener("change", filterData);



const getCountryData = () => {
  fetch(`https://fakestoreapi.com/products/`)
    .then(function (response) {
      // console.log(response, "==>> response of fetch")
      return response.json();
    })
    .then(function (data) {
      // console.log(data, "==>> my data as json")
      uiCreation(data);
    });
};

getCountryData();

// const getAllProducts = () => {
//     fetch(`https://catfact.ninja/fact/`)
//         .then(resp => resp.json())
//         .then(data => console.log(data, "==>>allProducts"))
// }

// getAllProducts()
