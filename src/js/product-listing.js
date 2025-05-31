import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { loadHeaderFooter, getParam } from "./utils.mjs";

loadHeaderFooter();

const category = getParam("category");
const dataSource = new ProductData();
const listElement = document.querySelector(".product-list");
const myList = new ProductList(category, dataSource, listElement);
myList.init();

const titleElement = document.getElementById("product-list-title");
if (category && titleElement) {
	// Capitaliza la primera letra y reemplaza guiones por espacios
	const formattedCategory = category
		.split("-")
		.map(word => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");
	titleElement.textContent = `Top Products: ${formattedCategory}`;
}