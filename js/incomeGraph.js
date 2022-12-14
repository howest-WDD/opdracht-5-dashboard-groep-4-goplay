'use strict';
// importing plotly
import 'https://cdn.plot.ly/plotly-2.16.4.min.js';

// creating the layout for the chart
var layout = {
	// margins to put it off the sides
	margin: {
		l: 0,
		r: 0,
		b: 5,
		t: 5,
		pad: 4,
	},
	// width and height of chart
	height: 100,
	width: 500,
	// disable legend (we create custom)
	showlegend: false,
	xaxis: {
		autorange: true,
		showgrid: false,
		zeroline: false,
		showline: false,
		autotick: true,
		ticks: '',
		showticklabels: false,
	},
	yaxis: {
		autorange: true,
		showgrid: false,
		zeroline: false,
		showline: false,
		autotick: true,
		ticks: '',
		showticklabels: false,
	},
	showgrid: false,
	// adjust background color to transparent so it is always the color of the actual background
	paper_bgcolor: 'transparent',
	plot_bgcolor: 'transparent',
	colorway: ['#00f0c8'],
};

var traces = [{ x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], y: [2, 1, 4, 5, 2, 4, 8, 6, 9, 3, 4], fill: 'tozeroy', type: 'scatter', line: { shape: 'spline' }, mode: 'lines' }];

var config = { responsive: true };

const createIncomeGraph = function () {
	// first checks if income-graph exists
	if (document.getElementById('income-graph')) {
		console.log('yes user income graph');
		// create the chart
		Plotly.newPlot('income-graph', traces, layout, config);
	} else {
		console.log('no user income graph');
	}
};

document.addEventListener('DOMContentLoaded', createIncomeGraph());
