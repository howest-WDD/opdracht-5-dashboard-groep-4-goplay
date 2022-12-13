'use strict';
// importing plotly
import 'https://cdn.plot.ly/plotly-2.16.4.min.js';

// Creating the data used by the graph
var data = [
	{
		x: ['jan', 'feb', 'maart', 'apr', 'mei', 'jun', 'jul'],
		y: [20, 18, 23, 25, 26, 24, 26, 28],
		type: 'bar',
		marker: {
			color: ['#00f0c8', '#FF8D90', '#00f0c8', '#00f0c8', '#00f0c8', '#FF8D90', '#00f0c8'],
		},
	},
];

// creating the layout for the graph
var layout = {
	// margins to put it off the sides
	margin: {
		l: 5,
		r: 5,
		b: 5,
		t: 5,
		pad: 4,
	},
	// width and height of chart
	height: 150,
	width: 250,
	// disable legend (we create custom)
	showlegend: false,
	// adjust background color to transparent so it is always the color of the actual background
	paper_bgcolor: 'transparent',
	plot_bgcolor: 'transparent',
	yaxis: {
		tickangle: -45,
		showline: false,
		showgrid: false,
	},
	xaxis: {
		showticklabels: true,
		tickangle: 'auto',
		tickfont: {
			family: 'Old Standard TT, serif',
			size: 14,
			color: 'black',
		},
	},
	colorscale: {
		sequential: ['#14191e'],
		sequentialminus: ['#14191e'],
	},
	modebar: {
		color: ['#14191e'],
	},
};

const createGrowthGraph = function () {
	// first checks if growth-graph exists
	if (document.getElementById('growth-graph')) {
		console.log('yes user growth graph');
		// create the graph
		Plotly.newPlot('growth-graph', data, layout);
	} else {
		console.log('no user growth graph');
	}
};

document.addEventListener('DOMContentLoaded', createGrowthGraph());
