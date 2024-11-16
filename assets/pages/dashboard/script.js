import { productsData } from "../../Data/data.js";
let productCounter=36;
const productsArray = JSON.parse(localStorage.getItem('products')) || productsData;

document.addEventListener("DOMContentLoaded", function () {
  updateStatistics();
});

function updateStatistics() {
  const total = document.querySelector("#totalProduct");
  const totalPrices = document.querySelector("#totalPrices");
  const totalQuantity = document.querySelector("#totalQuantity");
  const stockEpuise = document.querySelector("#stockEpuise");

  total.innerHTML = `${productsArray.length}`;
  let pr = JSON.parse(localStorage.getItem('products'));

  const sumPrices = pr.reduce(
    (accumulator, product) => accumulator + product.price,
    0
  );
  totalPrices.innerHTML = `$${sumPrices.toFixed(2)}`;

  const sumQuantity = pr.reduce(
    (accumulator, product) => accumulator + product.quantity,
    0
  );
  totalQuantity.innerHTML = `${sumQuantity}`;

  const outOfStockProducts = pr.filter(
    (product) => product.quantity == 0
  );
  const outOfStockCount = outOfStockProducts.length;
  stockEpuise.innerHTML = `${outOfStockCount}`;
}

function createRow(product) {
  const row = document.createElement("tr");
  row.classList.add("hover:bg-gray-50");

  const nameCell = createCell(product.name, "bg-[#3090BF]");
  const priceCell = createCell(`$${product.price}`, "bg-[#3D7F66]");
  const descriptionCell = createCell(product.description, "bg-[#CF9F61]");
  const categoryCell = createCell(product.category, "bg-[#5A9413]");
  const quantityCell = createCell(product.quantity, "bg-[#AD1D97]");

  const actionsCell = document.createElement("td");
  actionsCell.classList.add(
    "py-2",
    "px-4",
    "border-b",
    "flex",
    "space-x-2",
    "justify-evenly",
    "bg-[#FAC0B4]"
  );

  const updateButton = createButton(
    "Update",
    "bg-yellow-600",
    "hover:bg-yellow-500",
    product.id
  );
  const deleteButton = createButton("Delete", "bg-red-600", "hover:bg-red-500");

  deleteButton.onclick = function () {
    deleteProduct(product.id);
  };
  // update product

  updateButton.onclick=function () {

    const up=document.getElementById('updatepopUp');
    up.classList.remove('hidden');
    up.role=product.id;
    
  }


  actionsCell.appendChild(updateButton);
  actionsCell.appendChild(deleteButton);

  row.appendChild(nameCell);
  row.appendChild(priceCell);
  row.appendChild(descriptionCell);
  row.appendChild(categoryCell);
  row.appendChild(quantityCell);
  row.appendChild(actionsCell);

  return row;
}

function createCell(content, bgColor) {
  const cell = document.createElement("td");
  cell.classList.add("border-b", "text-white", bgColor);
  cell.innerHTML = content;
  return cell;
}

function createButton(text, bgColor, hoverColor , ID) {
  const button = document.createElement("button");
  button.classList.add(
    bgColor,
    hoverColor,
    "text-white",
    "py-1",
    "px-3",
    "rounded",
    "shadow-md",
    "font-semibold"
  );
  button.textContent = text;
  button.id=ID;
  return button;
}

function deleteProduct(productId) {
  const index = productsArray.findIndex((product) => product.id == productId);
  if (index > -1) {
    productsArray.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(productsArray));
  
    renderTable();
    updateStatistics();
  }
}



function addProduct() {



  renderTable();
}


function renderTable() {
  const productTableBody = document.querySelector("#productTableBody tbody");
  let pr = productsArray ; 
  productTableBody.innerHTML = "";
  pr.forEach((product) => {
    const row = createRow(product);
    productTableBody.appendChild(row);
  });
}

document.getElementById('updateProduct').addEventListener('click' , function updateProduct() {

  const productId=document.getElementById('updatepopUp').role;


  
  

  let q=document.getElementById('PQuantity').value;
  let p=document.getElementById('Pprice').value;

  if (p==0 ) {
    alert('price field is empty')
    return;
  }
  // console.log(p ,q);

  const index = productsArray.find((product) =>{ 
    if(product.id == productId)
    {
      product.price= +p;
      product.quantity= +q;
    }
  });

  localStorage.setItem('products', JSON.stringify(productsArray));
  
  
  document.getElementById('updatepopUp').classList.add('hidden');
  // console.log(index);

  
  
  updateStatistics();
  renderTable();
  
})


document.getElementById('showForm').addEventListener('click' , ()=>{
  document.getElementById('addForm').classList.remove('hidden');

})

document.getElementById('addProduct').addEventListener('click', () => {
  const product = {
    id:productCounter++,
    name: document.getElementById('nameAdd').value.trim(),
    price: Number(document.getElementById('priceAdd').value.trim()),
    img: document.getElementById('imgAdd').value.trim(),
    gallerie: document.getElementById('gallerieAdd').value.trim().split(',').map(img => img.trim()),
    description: document.getElementById('descriptionAdd').value.trim(),
    category: document.getElementById('categoryAdd').value.trim(), // Get selected category
    quantity: Number(document.getElementById('quantityAdd').value.trim()),
    colors: document.getElementById('colorsAdd').value.trim().split(',').map(color => color.trim()),
    details: document.getElementById('detailsAdd').value.trim(),
    rating: Number(document.getElementById('ratingAdd').value.trim()),
    dateOfAdd: document.getElementById('dateOfAdd').value.trim(),
  };

  // const products = JSON.parse(localStorage.getItem('products')) ;
  
  // Add new product
  productsArray.push(product);
  
  // Save updated array back to localStorage
  localStorage.setItem('products', JSON.stringify(productsArray));
  
  // console.log(JSON.parse(localStorage.getItem('products')));
  
  document.getElementById('addForm').classList.add('hidden');

  updateStatistics();
  renderTable();
});

document.getElementById('closeForm').addEventListener('click', () => {
  document.getElementById('addForm').classList.add('hidden');
});
// closeupdatepopUp

document.getElementById('closeupdatepopUp').addEventListener('click', () => {
  document.getElementById('updatepopUp').classList.add('hidden');
});


renderTable();
