let modal;
let sect;
let id;

const loadJson = function () {
	let htmlString = ``;

	const getElement = document.getElementById('menu');

	fetch('../json/users.json')
		.then((response) => response.json())
		.then((json) => {
			const users = json.users;

			for (const user of users) {
				id = user.UID;
				const voornaam = user.voornaam;
				const achternaam = user.achternaam;
				const mail = user.mail;
				const geslacht = user.geslacht;
				const geboortedatum = user.geboortedatum;
				const postcode = user.postcode;
				const gemeente = user.gemeente;
				const straatnaam = user.straatnaam;
				const phone = user.phone;
				const nr = user.nr;
				const bus = user.bus;
				const nieuwsbrief = user.nieuwsbrief;
				const reclame = user.reclame;
				const admin = user.admin;

				// console.log(getExtra.innerHTML)
				htmlString += `
                
                    <table  class="c-users__table " style="overflow-x:auto;">
                        <tr id="menu" class="c-users__tablerow c-users__tablerow--first  js-deleteuser js-adduser ">
                            <td class="c-users__category js-id"><input class="c-users__input  js-adduser  js-geboortedatum js-disable" type="text" placeholder="${id}" disabled /></td>
                            <td class="c-users__category js-achternaam"><input class="c-users__input js-adduser  js-geboortedatum js-disable" type="text" placeholder="${achternaam}" disabled /></td>
                            <td class="c-users__category js-voornaam"><input class="c-users__input js-adduser  js-geboortedatum js-disable" type="text" placeholder="${voornaam}" disabled /></td>
                            
                            <td class="c-users__category js-mail"><input class="c-users__input js-adduser  js-geboortedatum js-disable" type="text" placeholder="${mail}" disabled /></td>
                            <td class="c-users__category">
                                <button id="js-expandid${id}" class="c-users__expandbutton js-expand " data-id="${id}">
                                    <svg id="${id}" class="c-users__expandicon js-expandbutton js-expandbutton${id}" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M7,10L12,15L17,10H7Z" />
                                    </svg>
                                </button>
                            </td>
                            <div id="extraMenu${id}" class="c-users__extracontainer js-deleteuser" extra-menu="${id}"  style="overflow-x:auto;" > 	 	
                                <td id="js-extra${id}" class="c-users__extradata u-hidden  d-flex js-extra " >
                                    <div class="c-users__extrainformatie c-users__extrainformatie--1 ">

                                        <div class="c-users__geboortedatum">
                                            <label for="geboortedatum" class="c-users__label c-users__align1">Geboortedatum:</label>
                                            <input type="text" id="geboortedatum" class=" c-users__input js-geboortedatum js-adduser  js-disable" placeholder="${geboortedatum}" data-disabledid="${id}" id="edit-input${id}" name="geboortedatum" disabled />
                                        </div>
                                        <div class="c-users__straatnaam">
                                            <label for="straatnaam" class="c-users__label c-users__align2">Straatnaam:</label>
                                            <input type="text" id="straatnaam" class="c-users__input js-straatnaam js-disable" placeholder="${straatnaam}" data-disabledid="${id}" id="edit-input${id}" name="straatnaam" disabled />
                                        </div>
                                        <div class="c-users__nieuwsbrief">
                                            <label for="nieuwsbrief" class="c-users__label  c-users__align3">Nieuwsbrief:</label>
                                            <select name="jaofnee" class="c-users__select js-nieuwsbrief js-disable" id="nieuwsbrief" data-disabledid="${id}" id="edit-input${id}" disabled>
                                                <option value="ja" class="c-users__option js-disable">ja</option>
                                                <option value="nee" class="c-users__option js-disable">nee</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="c-users__extrainformatie c-users__extrainformatie--2">
                                        <div class="c-users__postcode">
                                            <label for="postcode" class="c-users__label  c-users__align1">Postcode:</label>
                                            <input type="text" id="postcode" class="c-users__input js-postcode js-disable" placeholder="${postcode}" data-disabledid="${id}" id="edit-input${id}" name="postcode" disabled />
                                        </div>
                                        <div class="c-users__nr">
                                            <label for="nr" class="c-users__label c-users__align2">Nr:</label>
                                            <input type="text" id="nr" class="c-users__input js-nr js-disable" placeholder="${nr}" name="nr" disabled data-disabledid="${id}" id="edit-input${id}" />
                                        </div>
                                        <div class="c-users__reclame">
                                            <label for="reclame" class="c-users__label c-users__align3">Reclame:</label>
                                            <select name="jaofnee" class="c-users__select js-reclame js-disable" disabled  data-disabledid="${id}" id="edit-input${id}">
                                                <option value="ja" class="c-users__option">ja</option>
                                                <option value="nee" class="c-users__option">nee</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="c-users__extrainformatie c-users__extrainformatie--3">
                                        <div class="c-users__gemeente">
                                            <label for="gemeente" class="c-users__label  c-users__align1">Gemeente:</label>
                                            <input type="text" id="gemeente" class="c-users__input js-gemeente js-disable" placeholder="${gemeente}" data-disabledid="${id}" id="edit-input${id}" name="gemeente" disabled />
                                        </div>
                                        <div class="c-users__bus">
                                            <label for="bus" class="c-users__label c-users__align2">Bus:</label>
                                            <input type="text" id="bus" class="c-users__input js-bus js-disable" placeholder="${bus}" data-disabledid="${id}"id="edit-input${id}" name="bus" disabled />
                                        </div>
                                        <div class="c-users__isadmin">
                                            <label class="c-users__label c-users__align3">IsAdmin:</label>
                                            <select name="jaofnee" class="c-users__select js-admin js-disable" data-disabledid="${id}"id="edit-input${id}" disabled id="ja">
                                                <option value="ja" class="c-users__option">ja</option>
                                                <option value="nee" class="c-users__option">nee</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="c-users__extrainformatie  c-users__extrainformatie--4">
                                        <div class="c-users__telefoonnummer">
                                            <label for="telefoonnummer" class="c-users__label c-users__align1">Telefoonnummer:</label>
                                            <input type="text" id="telefoonnummer" class="c-users__input js-telefoonnummer js-disable" placeholder="${phone}" name="telefoonnummer"id="edit-input${id}" data-disabledid="${id}" disabled />
                                        </div>
                                        <div class="c-users__geslacht">
                                            <label for="geslacht" class="c-users__label  c-users__align2">Geslacht:</label>
                                            <input type="text" id="geslacht" class=" c-users__input js-geslacht js-disable" placeholder="${geslacht}" id="edit-input${id}" name="geslacht" data-disabledid="${id}" disabled />
                                        </div>
                                        <div class="c-users__telefoonnummer"></div>
                                    </div>
                                    <div>
                                        <button class="c-users__delete js-delete" data-deleteid="${id}">
                                            <svg style="width: 24px; height: 24px" class="c-users__deletesvg" viewBox="0 0 24 24">
                                                <path fill="currentColor" class="c-users__deletepath" d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8.46,11.88L9.87,10.47L12,12.59L14.12,10.47L15.53,11.88L13.41,14L15.53,16.12L14.12,17.53L12,15.41L9.88,17.53L8.47,16.12L10.59,14L8.46,11.88M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" />
                                            </svg>
                                        </button>
                                        <button class="c-users__edit js-edit" id="js-editid${id}" data-editid="${id}">
                                            <svg style="width: 24px; height: 24px" class="c-users__editsvg c-users__editsvg--edit js-editsvg" viewBox="0 0 24 24">
                                                <path fill="currentColor" class="c-users__editpath" d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </div>
                        </tr>
                    
                    </table>`;

				// console.log(htmlString);
			}
			getElement.innerHTML += htmlString;

			// console.log(htmlString)
		});
};

const listenToExpand = function () {
	const expandButtons = document.querySelectorAll(`.js-expand`);
	const expandSvg = document.querySelector('.js-expandbutton');

	for (const expandButton of expandButtons) {
		// console.log(expandButton);
		expandButton.addEventListener('click', function () {
			const idnumber = expandButton.getAttribute('data-id');
			const extraTexts = document.getElementById(`js-extra${idnumber}`);
			extraTexts.classList.toggle('u-hidden');
			const extraMenu = document.getElementById(`extraMenu${idnumber}`);
			// console.log(`extraMenu${idnumber}`);
			// console.log(extraMenu);
			extraMenu.classList.toggle('c-spacetop');
			// const nextNumb = idnumber - 1;
			// const nextText = document.getElementById(`js-extra${nextNumb}`);
			// nextText.classList.toggle('c-spacetop');
		});
	}
};

const listenToEdit = function () {
	const editusers = document.querySelectorAll('.js-edit');
	const inputs = document.getElementsByClassName('js-disable');
	for (const input of inputs) {
		for (const edituser of editusers) {
			// console.log(edituser);

			edituser.addEventListener('click', function () {
				console.log('click');

				const deleteid = edituser.getAttribute('data-editid');
				// console.log(deleteid);
				const disable = document.getElementById(`js-editid${deleteid}`);
				// console.log(disable);

				input.toggleAttribute('disabled');
			});
		}
	}
};

const listenTodelete = function () {
	const deletebuttons = document.querySelectorAll('.js-delete');
	const deleteusers = document.getElementsByClassName('js-deleteuser');

	// deze zijn voor De modal window en aanpassingen aan de body
	const darkbackground = document.querySelector('.js-darkbackground');
	const modal = document.querySelector('.js-modal');
	const verwijder = document.querySelector('.js-verwijder');
	const cancel = document.querySelector('.js-cancel');
	for (const deletebutton of deletebuttons) {
		deletebutton.addEventListener('click', function () {
			modal.classList.remove('u-hidden');
			darkbackground.classList.add('c-darkbackground');
		});
	}
	verwijder.addEventListener('click', function () {
		for (const deleteuser of deleteusers) {
			deleteuser.classList.add('u-hidden');
		}
		modal.classList.add('u-hidden');
		darkbackground.classList.remove('c-darkbackground');
	});
	cancel.addEventListener('click', function () {
		modal.classList.add('u-hidden');
		darkbackground.classList.remove('c-darkbackground');
	});
};

const listenToEditChange = function () {
	const editButtons = document.querySelectorAll('.js-edit');
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
const filterbuttons = function () {
	const thbuttons = document.querySelectorAll('.js-filter');

	for (const thbutton of thbuttons) {
		// console.log(thbutton)
		thbutton.addEventListener('click', function () {
			if (thbutton.classList.contains('c-users__id--active')) {
				thbutton.classList.remove('c-users__id--active');
			}
			// console.log("click")
			thbutton.classList.toggle('c-users__id--active');
			thbutton.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" class="c-users__activesvg" viewBox="0 0 24 24"><path class="c-users__activesvgpath" d="M7,10L12,15L17,10H7Z" /></svg>`;
		});
	}
};

const accordeonUsers = function () {
	loadJson();
	setTimeout(listenToExpand, 1000);
	setTimeout(listenToEditChange, 1000);
	setTimeout(listenTodelete, 1000);
	setTimeout(listenToEdit, 1000);
	setTimeout(filterbuttons, 1000);
};

document.addEventListener('DOMContentLoaded', accordeonUsers());
