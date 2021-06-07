"use strict";

// Важно, чтобы в папках все кратинки назывались одинаково
// (И в одинаковой последовательсноти)
let bodiesArr = ["1.png", "2.png", "3.png", "4.png"];

// храним пути до нужных моделей в виде словаря
let path = {
	default: "model/",
	shirt: "model/shirt/",
	jeans: "model/jeans/",
	full: "model/full/"
};

let index = 1;

window.addEventListener("load", ()=> {
	let bodyImg = document.querySelector(".model__img");
	let shirtImg = document.querySelector(".model__shirt");

	let rightBtn = document.querySelector(".right");
	let leftBtn = document.querySelector(".left");

	let jeansBtn = document.querySelector(".jeans")
	let shirtBtn = document.querySelector(".shirt")

	let currentPath = path['default'];

	bodyImg.src = currentPath + bodiesArr[index];

	rightBtn.addEventListener("click", () => {
		
		changePath();

		if (index == bodiesArr.length - 1)
			index = 0;
		else
			index++;
		bodyImg.src = currentPath + bodiesArr[index];
	});

	leftBtn.addEventListener("click", () => {
		
		changePath();

		if (index == 0)
			index = bodiesArr.length - 1;
		else
			index--;
		bodyImg.src = currentPath + bodiesArr[index];
	});

	// меняем модели при нажатии на чекбоксы

	jeansBtn.addEventListener("change", () => {
		changePath();
		bodyImg.src = currentPath + bodiesArr[index]
	});

	shirtBtn.addEventListener("change", () => {
		changePath();
		bodyImg.src = currentPath + bodiesArr[index]
	});

	// меняет путь до папки, из которой берем картинку
	function changePath() {
		if (jeansBtn.checked && shirtBtn.checked) {
			currentPath = path['full'];
		}
		else if (jeansBtn.checked) {
			currentPath = path['jeans'];
		}
		else if (shirtBtn.checked) {
			currentPath = path['shirt'];
		}
		else
			currentPath = path['default'];
	}
});