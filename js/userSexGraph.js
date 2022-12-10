'use strict';
import Chart from '/node_modules/chart.js/auto/auto.js';

const ctx = document.getElementById('myChart');

const dataset = {
	labels: ['Man', 'Vrouw', 'Non-binair'],
	datasets: [
		{
			label: 'User Sex',
			data: [300, 300, 10],
			backgroundColor: ['#14191E', '#00f0c8', '#dcdcdc'],
			hoverOffset: 4,
		},
	],
};

const createChart = function () {
	new Chart(ctx, {
		type: 'doughnut',
		data: dataset,
	});
};

const init = function () {
	console.log('initialized');
	createChart();
};

document.addEventListener('DOMContentLoaded', init);
