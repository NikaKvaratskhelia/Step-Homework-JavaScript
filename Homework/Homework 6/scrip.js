const section = document.querySelector("section");

fetch("https://hotelbooking.stepprojects.ge/api/Hotels/GetAll")
  .then((response) => response.json())
  .then((data) => {
    for (i of data) {
        console.log(i)
        section.innerHTML += `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${i.name}</h5>
      <p class="card-text">$${i.address}</p>
      <p class="card-text">$${i.city}</p>
      <img src="${i.featuredImage}" class="img" alt="...">
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`;
    }
  });
