'use strict';
// all script for settings.html are here

const createValues = function () {
	const inputs = document.querySelectorAll('.js-color-input');

	for (let index = 0; index < inputs.length; index++) {
		const input = inputs[index];
		let value = input.value;
		let inputID = input.id;
		// console.log(value);
		let valueDescriptor = document.getElementById(`${inputID}-value`);
		changeValues(valueDescriptor, value);

		input.addEventListener('change', function () {
			let AELvalue = input.value;
			let AELinputID = input.id;
			// console.log(value);
			let AELvalueDescriptor = document.getElementById(`${AELinputID}-value`);
			changeValues(AELvalueDescriptor, AELvalue);
			// console.log('change');
		});
	}
};

const changeValues = function (valueDescriptor, value) {
	valueDescriptor.innerHTML = `value: ${value}`;
	// valueDescriptor.style.color = value;
	// console.log('change');
};

// js from users.js listenToEdit
const listenToSubscriptionEdit = function () {
	const editSubs = document.querySelectorAll('.js-settings-edit'); // edit button
	for (const editSub of editSubs) {
		// overlopen van alle editbutton
		// console.log(edituser);

		editSub.addEventListener('click', function () {
			console.log('click');
			const inputs = document.querySelectorAll('.js-sub-input');
			for (const input of inputs) {
				// console.log('disableing');
				input.toggleAttribute('disabled');
			}
		});
	}
};

// js from users.js listenToEditChange
const listenToSettingsEditChange = function () {
	// de functie die zorg dat het penceeltje word vervangne door een casette
	const editButtons = document.querySelectorAll('.js-settings-edit');
	const editSvgs = document.querySelectorAll('.js-editsvg');
	for (const editButton of editButtons) {
		for (const editSvg of editSvgs) {
			editButton.addEventListener('click', function () {
				if (editSvg.classList.contains('c-users__editsvg--edit')) {
					editSvg.classList.remove('c-users__editsvg--edit');
					editSvg.classList.add('c-users__editsvg--save');
					editSvg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="c-users__editsvg" viewBox="0 0 24 24"><path class="c-users__editpath" d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" /></svg>`;
				} else if (editSvg.classList.contains('c-users__editsvg--save')) {
					editSvg.classList.add('c-users__editsvg--edit');
					editSvg.classList.remove('c-users__editsvg--save');
					editSvg.innerHTML = `<svg style="width: 24px; height: 24px" class="c-users__editsvg c-users__editsvg--edit js-editsvg" viewBox="0 0 24 24"><path fill="currentColor" class="c-users__editpath" d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>`;
				}
			});
		}
	}
};

// checks if you are on the settings page
const checkSetting = function () {
	if (document.querySelector('.js-page-settings')) {
		createValues();
		listenToSubscriptionEdit();
		listenToSettingsEditChange();
	}
};

document.addEventListener('DOMContentLoaded', checkSetting());
