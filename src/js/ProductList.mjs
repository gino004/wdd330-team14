import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product) {
	return `
			<li class="product-card">
					<a href="product_pages/?products=${product.Id}">
							<img src="${product.Image}" alt="${product.Name}">
							<h2>${product.Brand.Name}</h2>
							<h3>${product.Name}</h3>
							<p class="product-card__price">$${product.FinalPrice}</p>
					</a>
			</li>
			`;
}

export default class ProductList {
	constructor(category, dataSource, listElement) {
		this.category = category;
		this.dataSource = dataSource;
		this.listElement = listElement;
	}

	async init() {
		const list = await this.dataSource.getData();
		// Filtra productos con imagen válida (y opcionalmente verifica que la imagen exista)
		const filteredList = list.filter(product => product.Image && product.Image !== "");
		// Solo los primeros 4 productos
		const topProducts = filteredList.slice(0, 4);
		this.renderList(topProducts);
	}

	renderList(list) {
		// const htmlStrings = list.map(productCardTemplate);
		// this.listElement.insertAdjacentHTML("afterbegin", htmlStrings.join(""));

		// apply use new utility function instead of the commented code above
		renderListWithTemplate(productCardTemplate, this.listElement, list);

	}
}

