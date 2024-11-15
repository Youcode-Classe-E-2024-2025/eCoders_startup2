import { products } from "../../Data/data.js";

document.addEventListener("DOMContentLoaded", function () {
  updateStatistics();
});

function updateStatistics() {
  const total = document.querySelector("#totalProduct");
  const totalPrices = document.querySelector("#totalPrices");
  const totalQuantity = document.querySelector("#totalQuantity");
  const stockEpuise = document.querySelector("#stockEpuise");

  total.innerHTML = `${products.length}`;

  const sumPrices = products.reduce(
    (accumulator, product) => accumulator + product.price,
    0
  );
  totalPrices.innerHTML = `$${sumPrices.toFixed(2)}`;

  const sumQuantity = products.reduce(
    (accumulator, product) => accumulator + product.quantity,
    0
  );
  totalQuantity.innerHTML = `${sumQuantity}`;

  const outOfStockProducts = products.filter(
    (product) => product.quantity === 0
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
    "hover:bg-yellow-500"
  );
  const deleteButton = createButton("Delete", "bg-red-600", "hover:bg-red-500");

  deleteButton.onclick = function () {
    deleteProduct(product.id);
  };

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

function createButton(text, bgColor, hoverColor) {
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
  return button;
}

function deleteProduct(productId) {
  const index = products.findIndex((product) => product.id === productId);
  if (index > -1) {
    products.splice(index, 1);
    renderTable();
    updateStatistics();
  }
}

function renderTable() {
  const productTableBody = document.querySelector("#productTableBody tbody");
  productTableBody.innerHTML = "";
  products.forEach((product) => {
    const row = createRow(product);
    productTableBody.appendChild(row);
  });
}

renderTable();
