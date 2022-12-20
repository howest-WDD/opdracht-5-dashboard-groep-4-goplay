'use strict';

// toggles the class u-hidden on the selected modal
const modalToggle = function (modal, close, graphname) {
	if (modal) {
		modal.classList.remove('u-hidden');

		close.addEventListener('click', function () {
			modal.classList.add('u-hidden');
		});
	} else {
		console.log(`${graphname} not pressable`);
	}
};

// listens to all graphs for their clicks
const listenToGraphs = function () {
	console.log('listening to graphs');
	// selects the graphs

	// geting everything for sex graph
	const sexGraph = document.querySelector('.js-sex');
	// getting the modal stuff
	const modalSex = document.getElementById('modalSex');
	const modalSexClose = document.getElementById('modalSexClose');

	// getting everything for age graph
	const ageGraph = document.querySelector('.js-age');
	// getting the modal stuff
	const modalAge = document.getElementById('modalAge');
	const modalAgeClose = document.getElementById('modalAgeClose');

	// getting everything for growth graph
	const growthGraph = document.querySelector('.js-growth');
	// getting the modal stuff
	const modalGrowth = document.getElementById('modalGrowth');
	const modalGrowthClose = document.getElementById('modalGrowthClose');

	// getting everything for daily users graph
	const dailyGraph = document.querySelector('.js-daily');
	// getting the modal stuff
	const modalDaily = document.getElementById('modalDaily');
	const modalDailyClose = document.getElementById('modalDailyClose');

	// getting everything for new users graph
	const newGraph = document.querySelector('.js-new');
	// getting the modal stuff
	const modalNew = document.getElementById('modalNew');
	const modalNewClose = document.getElementById('modalNewClose');

	// getting everything for map graph
	const mapGraph = document.querySelector('.js-map');
	// getting the modal stuff
	const modalMap = document.getElementById('modalMap');
	const modalMapClose = document.getElementById('modalMapClose');

	// getting everything for genre graph
	const genreGraph = document.querySelector('.js-genre');
	// getting the modal stuff
	const modalGenre = document.getElementById('modalGenre');
	const modalGenreClose = document.getElementById('modalGenreClose');

	// getting everything for income graph
	const incomeGraph = document.querySelector('.js-income');
	// getting the modal stuff
	const modalIncome = document.getElementById('modalIncome');
	const modalIncomeClose = document.getElementById('modalIncomeClose');

	// getting everything for costs graph
	const costsGraph = document.querySelector('.js-costs');
	// getting the modal stuff
	const modalCosts = document.getElementById('modalCosts');
	const modalCostsClose = document.getElementById('modalCostsClose');

	// array of graph dictionarys
	const graphArr = [
		{ graph: sexGraph, modal: modalSex, modalClose: modalSexClose, name: 'sex' },
		{ graph: ageGraph, modal: modalAge, modalClose: modalAgeClose, name: 'age' },
		{ graph: growthGraph, modal: modalGrowth, modalClose: modalGrowthClose, name: 'growth' },
		{ graph: dailyGraph, modal: modalDaily, modalClose: modalDailyClose, name: 'daily' },
		{ graph: newGraph, modal: modalNew, modalClose: modalNewClose, name: 'new' },
		{ graph: mapGraph, modal: modalMap, modalClose: modalMapClose, name: 'map' },
		{ graph: genreGraph, modal: modalGenre, modalClose: modalGenreClose, name: 'genre' },
		{ graph: incomeGraph, modal: modalIncome, modalClose: modalIncomeClose, name: 'income' },
		{ graph: costsGraph, modal: modalCosts, modalClose: modalCostsClose, name: 'costs' },
	];

	// for loop which loops over the graph dictionary
	for (let n = 0; n < graphArr.length; n++) {
		// listens to graph to display modal

		let graphModule = graphArr[n];

		if (graphModule.graph) {
			graphModule.graph.addEventListener('click', function () {
				modalToggle(graphModule.modal, graphModule.modalClose, graphModule.name, graphModule.function);
			});
		} else {
			console.log(`no ${graphModule.graph}  graph to press`);
		}
	}
};

// document.addEventListener('DOMContentLoaded', listenToGraphs());
