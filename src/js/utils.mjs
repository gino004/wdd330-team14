// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
	return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
	return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
	localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
	qs(selector).addEventListener("touchend", (event) => {
		event.preventDefault();
		callback();
	});
	qs(selector).addEventListener("click", callback);
}

export function getParam(param) {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const product = urlParams.get(param);
	return product
}

export function renderListWithTemplate(template, parentElement, list, position = "beforeend", clear = true) {
	const htmlStrings = list.map(template);
	// if clear is true we need to clear out the contents of the parent.
	if (clear) {
		parentElement.innerHTML = "";
	}
	parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
}

export function renderWithTemplate(template, parentElement, data, callback) {
	// Limpia el contenido del elemento padre antes de insertar
	parentElement.innerHTML = "";
	// Genera el HTML usando el template y los datos
	const htmlString = template(data);
	// Inserta el HTML en el elemento padre
	parentElement.insertAdjacentHTML("beforeend", htmlString);
	// Si hay callback, lo ejecuta con el nuevo elemento insertado
	if (callback) {
		callback(parentElement.firstElementChild);
	}

}

export async function loadTemplate(path) {
	const response = await fetch(path);
	if (!response.ok) {
		throw new Error(`The template could not be loaded: ${path}`);
	}
	const html = await response.text();
	return html;
}

export async function loadHeaderFooter() {
	// Carga los templates de header y footer
	const headerHtml = await loadTemplate("/partials/header.html");
	const footerHtml = await loadTemplate("/partials/footer.html");

	// Obtiene los elementos placeholder del DOM
	const headerElement = document.getElementById("main-header");
	const footerElement = document.getElementById("main-footer");

	// Renderiza el header y footer usando renderWithTemplate
	renderWithTemplate(data => headerHtml, headerElement, null);
	renderWithTemplate(data => footerHtml, footerElement, null);
}