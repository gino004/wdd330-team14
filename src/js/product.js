import { getParam, loadHeaderFooter } from "./utils.mjs"; // getLocalStorage, setLocalStorage removed
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";

loadHeaderFooter();

const dataSource = new ProductData("tents");
const productID = getParam("products"); //new URLSearchParams(window.location.search).get("product");//getParam("product");
console.log("Product ID from URL:", productID);

const product = new ProductDetails(productID, dataSource);
product.init();

//function addProductToCart(product) {
//	const cartItems = getLocalStorage("so-cart") || []; // get cart array of items from local storage if null set to empty array
//	cartItems.push(product);
//	setLocalStorage("so-cart", cartItems);
//}
// add to cart button event handler
//async function addToCartHandler(e) {
//	const product = await dataSource.findProductById(e.target.dataset.id);
//	addProductToCart(product);
//}

// add listener to Add to Cart button
//document
//	.getElementById("addToCart")
//	.addEventListener("click", addToCartHandler);
