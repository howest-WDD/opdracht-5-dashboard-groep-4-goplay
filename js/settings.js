'use strict';
// all script for settings.html are here

const createValues = function () {
	const inputs = document.querySelectorAll('.js-color-input');

	for (let index = 0; index < inputs.length; index++) {
		const input = inputs[index];
		let value = input.value;
		// console.log(value);
		let valueDescriptor = input.nextElementSibling;
		changeValues(valueDescriptor, value);

		input.addEventListener('change', function () {
			let AELvalue = input.value;
			// console.log(value);
			let AELvalueDescriptor = input.nextElementSibling;
			changeValues(AELvalueDescriptor, AELvalue);
			console.log('change');
		});
	}
};

const changeValues = function (valueDescriptor, value) {
	valueDescriptor.innerHTML = `value: ${value}`;
	// valueDescriptor.style.color = value;
	// console.log('change');
};

// checks if you are on the settings page
const checkSetting = function () {
	if (document.querySelector('.js-page-settings')) {
		createValues();
	}
};

document.addEventListener('DOMContentLoaded', checkSetting());
