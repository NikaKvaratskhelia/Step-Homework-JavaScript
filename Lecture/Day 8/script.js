let section = document.querySelector("section");

let h4Total = document.querySelector(".total");

function getAllRooms() {
  fetch("https://hotelbooking.stepprojects.ge/api/Rooms/GetAll")
    .then((res) => res.json())
    .then((data) => {
      section.innerHTML = "";

      data.forEach((item) => (section.innerHTML += rooms(item)));

      let totalPrices = data.reduce(
        (prev, current) => prev + current.pricePerNight,
        0
      );

      h4Total.innerHTML = `Total price is $${totalPrices}`;
    })
    .catch(() => {
      section.innerHTML = "connection Error";
    });
}

getAllRooms();

function rooms(item) {
  return `
    <div class="card">
        <div class="inner-area">
            <img src="${item.images[0].source}" alt="${item.name}">
            <h2>${item.name}</h2>
            <p>Price:${item.pricePerNight}</p>
            <button>View Detials</button>
        </div>
    </div>
    `;
}



function filterRooms(e) {
    e.preventDefault()

    let formData = new FormData(e.target)
    let filteInfo = Object.fromEntries(formData)

    fetch("https://hotelbooking.stepprojects.ge/api/Rooms/GetFiltered",
    {
       method: "POST",
       headers: {
        accept:"text/plain",
        "Content-Type":"application/json"
       },
       body:JSON.stringify(filteInfo)
    })
    .then(res=> res.json())
    .then(data => {
        console.log(data)
        section.innerHTML = ""
        data.forEach(item=>section.innerHTML+=rooms(item))
    })
}