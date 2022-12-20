'use strict';

// 
const modalSex = document.getElementById('modalSex');
const modalSexClose = document.getElementById('modalSexClose');

const modalToggle = function (modal, close) {
	modal.classList.remove('u-hidden');

	close.addEventListener('click', function () {
		modal.classList.add('u-hidden');
	});
};

const listenToGraphs = function () {
	const sexGraph = document.querySelector('.js-sex');

	if (sexGraph) {
		sexGraph.addEventListener('click', function () {
			console.log('pressed sex graph');
			modalToggle(modalSex, modalSexClose);
		});
		// console.log('can press sex graph');
	} else {
		console.log('no sex graph to press');
	}
};

document.addEventListener('DOMContentLoaded', listenToGraphs());
