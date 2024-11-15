import { products } from "../../Data/data.js";

document.addEventListener("DOMContentLoaded", function () {
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
});

const productTableBody = document.querySelector("#productTableBody tbody");
products.forEach((product) => {
  const row = document.createElement("tr");
  row.classList.add("hover:bg-gray-50");

  const nameCell = document.createElement("td");
  nameCell.classList.add("border-b", "bg-[#3090BF]", "text-white");
  nameCell.innerHTML = product.name;

  const priceCell = document.createElement("td");
  priceCell.classList.add("border-b", "bg-[#3D7F66]", "text-white");
  priceCell.innerHTML = `$${product.price}`;

  const descriptionCell = document.createElement("td");
  descriptionCell.classList.add("border-b", "bg-[#CF9F61]", "text-white");
  descriptionCell.innerHTML = product.description;

  const categoryCell = document.createElement("td");
  categoryCell.classList.add("border-b", "bg-[#5A9413]", "text-white");
  categoryCell.innerHTML = product.category;

  const quantityCell = document.createElement("td");
  quantityCell.classList.add("border-b", "bg-[#AD1D97]", "text-white");
  quantityCell.innerHTML = product.quantity;

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

  const updateButton = document.createElement("button");
  updateButton.classList.add(
    "bg-yellow-600",
    "hover:bg-yellow-500",
    "text-white",
    "py-1",
    "px-3",
    "rounded",
    "shadow-md",
    "font-semibold"
  );
  updateButton.textContent = "Update";

  const deleteButton = document.createElement("button");
  deleteButton.classList.add(
    "bg-red-600",
    "hover:bg-red-500",
    "text-white",
    "py-1",
    "px-3",
    "rounded",
    "shadow-md",
    "font-semibold"
  );
  deleteButton.textContent = "Delete";

  actionsCell.appendChild(updateButton);
  actionsCell.appendChild(deleteButton);

  row.appendChild(nameCell);
  row.appendChild(priceCell);
  row.appendChild(descriptionCell);
  row.appendChild(categoryCell);
  row.appendChild(quantityCell);
  row.appendChild(actionsCell);

  productTableBody.appendChild(row);
});
