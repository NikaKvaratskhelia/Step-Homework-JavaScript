const nav = document.getElementById("nav");
const section = document.getElementById("section");

function getAll() {
  fetch("https://restaurant.stepprojects.ge/api/Products/GetAll")
    .then((response) => response.json())
    .then((data) => {
      section.innerHTML = "";
      data.forEach((item) => {
        section.innerHTML += cartPrint(item);
      });
    });
}

function cartPrint(product) {
  return `<div class="card" style="width: 18rem;" data-id=${product.id} "data-price"=${product.price}>
    <img src="${product.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${product.name}</h5>
      <p class="card-text">$${product.price}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`;
}

fetch("https://restaurant.stepprojects.ge/api/Categories/GetAll")
.then(response =>response.json())
.then(catergories=>{
    catergories.forEach(category=>{
        nav.innerHTML+=`
        <button onclick="filterCategory(${category.id})">${category.name} </button>
        `
    })
})

function filterCategory(id) {
  fetch(`https://restaurant.stepprojects.ge/api/Categories/GetCategory/${id}`)
    .then((response) => response.json())
    .then(some => {
        section.innerHTML = ""
        some.products.forEach(item => {
            section.innerHTML+=cartPrint(item)
        })
    })
}

getAll()