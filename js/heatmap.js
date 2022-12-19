'use strict';
//see anychart.js

// drawing the map

const creatHeatmap = function () {
	// create map
	var map = anychart.map();

	// create data set
	var dataSet = anychart.data.set([
		// limburg
		{ id: 'BE.490', value: 220000, newUsers: 10000, returningUsers: 200000 },
		// brussel
		{ id: 'BE.BU', value: 210000, newUsers: 20000, returningUsers: 200000 },
		// vlaams brabant
		{ id: 'BE.VB', value: 250000, newUsers: 50000, returningUsers: 200000 },
		// oost vlaanderen
		{ id: 'BE.OV', value: 220000, newUsers: 20000 },
		// west vlaanderen
		{ id: 'BE.3534', value: 230000, newUsers: 30000, returningUsers: 200000 },
		// antwerpen
		{ id: 'BE.3535', value: 240000, newUsers: 40000, returningUsers: 200000 },
	]);

	// create choropleth series
	var series = map.choropleth(dataSet);
	series.tooltip().format(function (e) {
		return 'new users: ' + e.getData('newUsers').toLocaleString('nl-BE') + '\n' + 'returning users: ' + e.getData('returningUsers').toLocaleString('nl-BE');
	});

	// set geoIdField to 'id', this field contains in geo data meta properties
	series.geoIdField('id');

	// set map color settings
	series.colorScale(anychart.scales.linearColor('#deebf7', '#3182bd'));
	series.hovered().fill('#addd8e');

	// set geo data, you can find this map in our geo maps collection
	// https://cdn.anychart.com/#maps-collection
	map.geoData(anychart.maps['belgium']);

	//set map container id (div)
	map.container('heatmapContainer');

	map.background().fill('transparent');

	//initiate map drawing
	map.draw();
};

document.addEventListener('DOMContentLoaded', creatHeatmap());
