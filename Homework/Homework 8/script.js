const section = document.getElementById("productsSection");
const apiUrl = "https://68137244129f6313e2114929.mockapi.io/Products";

function get() {
  section.innerHTML = "";
  fetch(apiUrl)
    .then((res) => res.json())
    .then((dataArray) => {
      console.log(dataArray);
      dataArray.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("products");
        productDiv.innerHTML = `
          <img src="${product.avatar}" alt="product image" />
          <div>
            <p>Product Id: ${product.id}</p>
            <p>Price: ${product.price}$</p>
          </div>
          <p>Name: ${product.name}</p>
          <div>
            <button class="edit-btn">Edit Product Price</button>
            <button class="delete-btn">Delete Product</button>
          </div>  
          <input type="number" class="productNewPrice" placeholder="Product New Price">
        `;

        productDiv
          .querySelector(".delete-btn")
          .addEventListener("click", () => deleteProduct(product.id));
        productDiv
          .querySelector(".edit-btn")
          .addEventListener("click", () => editProduct(product, productDiv.querySelector(".productNewPrice").value.trim()));
        section.appendChild(productDiv);
      });
    });
}

get();
const addBtn = document.querySelector(".submitProduct");

addBtn.addEventListener("click", function () {
  const productName = document.querySelector(".productName").value.trim();
  const productImg = document.querySelector(".productImg").value.trim();
  const productPrice = document.querySelector(".productPrice").value.trim();

  const newProduct = {
    name: productName,
    avatar: productImg,
    price: productPrice,
  };

  fetch(apiUrl, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(newProduct),
  }).then(() => get());
});

function deleteProduct(id) {
  fetch(`${apiUrl}/${id}`, {
    method: "DELETE",
  }).then(() => get());
}

const editBtns = document.querySelectorAll(".edit-btn");
const newPrices = document.querySelectorAll(".productNewPrice");

function editProduct(product, newPrice) {

  if (!newPrice) {
    alert("Please enter a new price.");
    return;
  }

  const edited = {
    name: product.name,
    avatar: product.avatar,
    price: newPrice,
  };

  fetch(`${apiUrl}/${product.id}`, {
    method: "PUT",
    headers: {"Content-type": "application/json"},
    body: JSON.stringify(edited),
  }).then(() => get());
}
