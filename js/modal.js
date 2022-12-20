'use strict';

// getting the modal for sexgraph and close button for it
const modalSex = document.getElementById('modalSex');
const modalSexClose = document.getElementById('modalSexClose');

// toggles the class u-hidden on the selected modal
const modalToggle = function (modal, close) {
	modal.classList.remove('u-hidden');

	close.addEventListener('click', function () {
		modal.classList.add('u-hidden');
	});
};

// listens to all graphs for their clicks
const listenToGraphs = function () {
	const sexGraph = document.querySelector('.js-sex');

	// listens to sexgraph to display modal
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
