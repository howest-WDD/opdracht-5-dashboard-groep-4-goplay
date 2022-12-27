let modal;
let sect;
let id;
let htmlString = ``;
let users;
const loadJson = function () {
	

	const getElement = document.getElementById('menu');

	fetch('../json/users.json')
		.then((response) => response.json())
		.then((json) => {
			users = json.users;

			for (let user of users) {
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
				
				// dit is de htmlstring also known as the moshpit
				htmlString += `
                    <table  class="c-users__table " style="overflow-x:auto;">
                        <tr id="menu" class="c-users__tablerow js-background c-users__tablerow--first  js-deleteuser js-adduser " data-deleteuser="${id}" id="userdelete${id}">
                            <td class="c-users__category js-id"><input class="c-users__input  js-adduser  js-geboortedatum js-disable" type="text" value="${id}" disabled /></td>
                            <td class="c-users__category js-achternaam"><input class="c-users__input js-adduser  js-geboortedatum js-disable" data-disabledid="${id}" type="text" value="${achternaam}" disabled /></td>
                            <td class="c-users__category js-voornaam"><input class="c-users__input js-adduser  js-geboortedatum js-disable" data-disabledid="${id}" type="text" value="${voornaam}" disabled /></td>
                            <td class="c-users__category js-mail"><input class="c-users__input js-adduser  js-geboortedatum js-disable" data-disabledid="${id}" type="text" value="${mail}" disabled /></td>
                            <td class="c-users__category ">
                                <button id="js-expandid${id}" class="c-users__expandbutton js-expand " data-id="${id}">
                                    <svg id="${id}" class="c-users__expandicon js-expandbutton js-expandbutton${id}" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M7,10L12,15L17,10H7Z" />
                                    </svg>
                                </button>
                            </td>
                            <div id="extraMenu${id}" class="c-users__extracontainer " style="overflow-x:auto;" >
                                <td id="js-extra${id}" class="c-users__extradata u-hidden  d-flex js-extra c-expandborder" >
                                    <div class="c-users__extrainformatie c-users__extrainformatie--1 ">
                                        <div class="c-users__geboortedatum">
                                            <label for="geboortedatum" class="c-users__label c-users__align1">Geboortedatum:</label>
                                            <input type="text" id="geboortedatum" class=" c-users__input js-geboortedatum js-adduser  js-disable" value="${geboortedatum}" data-disabledid="${id}" id="edit-input${id}" name="geboortedatum" disabled />
                                        </div>
                                        <div class="c-users__straatnaam">
                                            <label for="straatnaam" class="c-users__label c-users__align2">Straatnaam:</label>
                                            <input type="text" id="straatnaam" class="c-users__input js-straatnaam js-disable" value="${straatnaam}" data-disabledid="${id}" id="edit-input${id}" name="straatnaam" disabled />
                                        </div>
                                        <div class="c-users__nieuwsbrief">
                                            <label for="nieuwsbrief" class="c-users__label  c-users__align3">Nieuwsbrief:</label>
<select name="nieuwsbrief" value="${nieuwsbrief}" class="c-users__select js-nieuwsbrief js-disable" id="nieuwsbrief" data-disabledid="${id}" id="edit-input${id}" disabled nieuwsbrief-id="${id}" nieuwsbriefValue="${nieuwsbrief}">
        </select>
                                        </div>
                                    </div>
                                    <div class="c-users__extrainformatie c-users__extrainformatie--2">
                                        <div class="c-users__postcode">
                                            <label for="postcode" class="c-users__label  c-users__align1">Postcode:</label>
                                            <input type="text" id="postcode" class="c-users__input js-postcode js-disable" value="${postcode}" data-disabledid="${id}" id="edit-input${id}" name="postcode" disabled />
                                        </div>
                                        <div class="c-users__nr">
                                            <label for="nr" class="c-users__label c-users__align2">Nr:</label>
                                            <input type="text" id="nr" class="c-users__input js-nr js-disable" value="${nr}" name="nr" disabled data-disabledid="${id}" id="edit-input${id}" />
                                        </div>
                                        <div class="c-users__reclame">
<label for="reclame" class="c-users__label c-users__align3">Reclame:</label>
<select name="reclame" class="c-users__select js-reclame js-disable" disabled  data-disabledid="${id}" id="edit-input${id}" reclame-id='${id}' value='${reclame}'>
</select>
                                        </div>
                                    </div>
                                    <div class="c-users__extrainformatie c-users__extrainformatie--3">
                                        <div class="c-users__gemeente">
											<label for="gemeente" class="c-users__label  c-users__align1">Gemeente:</label>
											<input type="text" id="gemeente" class="c-users__input js-gemeente js-disable" value="${gemeente}" data-disabledid="${id}" id="edit-input${id}" name="gemeente" disabled />
                                        </div>
                                        <div class="c-users__bus">
											<label for="bus" class="c-users__label c-users__align2">Bus:</label>
											<input type="text" id="bus" class="c-users__input js-bus js-disable" value="${bus}" data-disabledid="${id}"id="edit-input${id}" name="bus" disabled />
                                        </div>
                                        <div class="c-users__isadmin">
<label class="c-users__label c-users__align3">IsAdmin:</label>
<select name="data" class="c-users__select js-admin js-disable" data-disabledid="${id}"id="edit-input${id}" disabled value="${admin}" admin-id='${id}'>
                    	</select>
                                        </div>
                                    </div>
                                    <div class="c-users__extrainformatie  c-users__extrainformatie--4">
                                        <div class="c-users__telefoonnummer">
                                            <label for="telefoonnummer" class="c-users__label c-users__align1">Telefoonnummer:</label>
                                            <input type="text" id="telefoonnummer" class="c-users__input js-telefoonnummer js-disable" value="${phone}" name="telefoonnummer"id="edit-input${id}" data-disabledid="${id}" disabled />
                                        </div>
                                        <div class="c-users__geslacht">
<label for="geslacht" class="c-users__label  c-users__align2">Geslacht:</label>
<select id="geslacht" class=" c-users__select js-geslacht js-disable" value="${geslacht}" id="edit-input${id}" name="geslacht" data-disabledid="${id}" disabled sex-id="${id}">
</select>
                                        </div>
                                        <div class="c-users__randomding"></div>
                                    </div>
                                    <div class="c-users__editbuttoncontainer">
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

			// htmlstings for binary options
			const htmlOption1 = `
						<option value="ja" selected class="c-users__option">ja</option>
						<option value="nee" class="c-users__option">nee</option>
						`;
			const htmlOption2 = `
						<option value="ja" class="c-users__option">ja</option>
						<option value="nee" selected class="c-users__option">nee</option>
						`;

			// htmlstrings for sex
			const htmlOptionSex1 = `
						<option value="0" selected class="c-users__option">Man</option>
						<option value="1" class="c-users__option">Vrouw</option>
						<option value="2"  class="c-users__option">Non-binair</option>
						`;
			const htmlOptionSex2 = `
						<option value="0" class="c-users__option">Man</option>
						<option value="1" selected class="c-users__option">Vrouw</option>
						<option value="2"  class="c-users__option">Non-binair</option>
						`;
			const htmlOptionSex3 = `
						<option value="0" class="c-users__option">Man</option>
						<option value="1"  class="c-users__option">Vrouw</option>
						<option value="2" selected class="c-users__option">Non-binair</option>
						`;

			for (const user of users) {
				const uid = user.UID;

				const nieuwsbriefSelector = document.querySelector(`[nieuwsbrief-id='${uid}']`);
				// console.log(nieuwsbriefSelector.getAttribute(`value`));
				if (nieuwsbriefSelector.getAttribute(`value`) == 0) {
					nieuwsbriefSelector.innerHTML = htmlOption2;
				} else {
					nieuwsbriefSelector.innerHTML = htmlOption1;
				}

				const reclameSelectors = document.querySelector(`[reclame-id='${uid}']`);
				// console.log(reclameSelectors.getAttribute(`value`));
				if (reclameSelectors.getAttribute(`value`) == 0) {
					reclameSelectors.innerHTML = htmlOption2;
				} else {
					reclameSelectors.innerHTML = htmlOption1;
				}

				const adminSelector = document.querySelector(`[admin-id='${uid}']`);
				// console.log(adminSelector.getAttribute(`value`));
				if (adminSelector.getAttribute(`value`) == 0) {
					adminSelector.innerHTML = htmlOption2;
				} else {
					adminSelector.innerHTML = htmlOption1;
				}

				const sexSelector = document.querySelector(`[sex-id='${uid}']`);
				// console.log(sexSelector.getAttribute(`value`));
				if (sexSelector.getAttribute(`value`) == 0) {
					sexSelector.innerHTML = htmlOptionSex1;
				} else if (sexSelector.getAttribute(`value`) == 1) {
					sexSelector.innerHTML = htmlOptionSex2;
				} else {
					sexSelector.innerHTML = htmlOptionSex3;
				}
			}

			// console.log(htmlString)
		});
};

const listenToExpand = function () { // function for the expand window 
	const expandButtons = document.querySelectorAll(`.js-expand`); // de button
	const expandSvg = document.querySelector('.js-expandbutton'); // de svg die op de button staat
	

	for (const expandButton of expandButtons) {
		// console.log(expandButton);
		expandButton.addEventListener('click', function () {
			const idnumber = expandButton.getAttribute('data-id'); // de expand button id 
			const extraTexts = document.getElementById(`js-extra${idnumber}`); // welke expand is het
			// extraTexts.classList.toggle('u-hidden');
			extraTexts.classList.toggle("u-hidden") // spreekt voor zichzelf
			extraTexts.classList.toggle("c-expandanimation") // animation voor het eruit te latne komen 
		
			const extraMenu = document.getElementById(`extraMenu${idnumber}`);
			// console.log(`extraMenu${idnumber}`);
			// console.log(extraMenu);
			extraMenu.classList.toggle('c-spacetop');
			extraMenu.classList.toggle("c-makespace")
			// const nextNumb = idnumber - 1;
			// const nextText = document.getElementById(`js-extra${nextNumb}`);
			// nextText.classList.toggle('c-spacetop');
		});
	}
};

const listenToEdit = function () {
	const editusers = document.querySelectorAll('.js-edit'); // edit button 
	for (const edituser of editusers) { // overlopen van alle editbutton
		// console.log(edituser);

		edituser.addEventListener('click', function () {
			console.log('click');
			const deleteid = edituser.getAttribute('data-editid'); // data attribuut in de editbutton
			// console.log(deleteid);
			const inputs = document.querySelectorAll(`[data-disabledid='${deleteid}']`); //disabled attribuut in de input fields
			// console.log(inputs);
			// console.log(disable);
			for (const input of inputs) {
				// console.log('disableing');
				input.toggleAttribute('disabled');
			}
		});
	}
};

const listenTodelete = function () {
	const deletebuttons = document.querySelectorAll('.js-delete'); // deletbuttons 
	// const deleteusers = document.getElementsByClassName('js-deleteuser');


	// deze zijn voor De modal window en aanpassingen aan de body
	const darkbackground = document.querySelector('.js-darkbackground'); //darkbackground voor de modal 
	const modal = document.querySelector('.js-modal'); // modal win dow 
	const verwijder = document.querySelector('.js-verwijder'); // verwijder userbutton 
	const cancel = document.querySelector('.js-cancel'); // cancel button 
	for (const deletebutton of deletebuttons) {
		deletebutton.addEventListener('click', function () { // de forloop die zorgt dat als je op de deletebutotn klikt dat de modal window en darkbackground tevoorschijn komt
			modal.classList.remove('u-hidden');
			darkbackground.classList.toggle('c-darkbackground');

			if(!modal.classList.remove("u-hidden")){
				
			}
		});
	}


	verwijder.addEventListener('click', function () { // verwijder de user en de modal window 
		modal.classList.add('u-hidden');
		darkbackground.classList.remove('c-darkbackground');
		
		for(const deletebutton of deletebuttons){
			deletebutton.addEventListener("click",function(){
				const deleteuserid = deletebutton.getAttribute(`data-deleteid`)
				
				const deleteuser = document.querySelector(`[data-deleteuser="${deleteuserid}"]`)
				console.log(deleteuser)
				deleteuser.classList.add("u-hidden")
			})

		}
	});
	cancel.addEventListener('click', function () { // cancel de modal  window 
		modal.classList.add('u-hidden');
		darkbackground.classList.remove('c-darkbackground');
	});
};

const listenToEditChange = function () { // de functie die zorg dat het penceeltje word vervangne door een casette 
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

const filterbuttons = function () { // functie die een active state terug geeft aan de filter buttons
	const thbuttons = document.querySelectorAll('.js-filter'); // de filter buttons die geactiveerd worde n

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

const searchBar = function(){
	const searchbar = document.querySelector(".js-searchbar")

	
	let htmlString;
	let id;
	let voornaam; 
	let achternaam; 
	let mail; 
	let geslacht; 
	let geboortedatum; 
	let postcode; 
	let gemeente; 
	let straatnaam; 
	let phone; 
	let nr; 
	let bus; 
	let nieuwsbrief; 
	let reclame; 
	let admin; 

	fetch('../json/users.json')
	.then((response) => response.json())
	.then((json) => {
		const user = json.users
		searchbar.addEventListener("input",function(){
			htmlString = document.getElementById('filterInput').value
			id = user.filter(item => item.UID.toLowerCase().includes(htmlString.toLowerCase())); // kijkt voor id 
			voornaam = user.filter(item => item.voornaam.toLowerCase().includes(htmlString.toLowerCase())); // kijkt voor voornaam
			achternaam = user.filter(item => item.achternaam.toLowerCase().includes(htmlString.toLowerCase())); // kijkt voor achternaam
			mail = user.filter(item => item.mail.toLowerCase().includes(htmlString.toLowerCase())); // mail kijken
			geslacht = user.filter(item => item.geslacht.toLowerCase().includes(htmlString.toLowerCase())); // geslacht
			geboortedatum = user.filter(item => item.geboortedatum.toLowerCase().includes(htmlString.toLowerCase())); // geboortedatum
			postcode = user.filter(item => item.postcode.toLowerCase().includes(htmlString.toLowerCase())); // postcode
			gemeente = user.filter(item => item.gemeente.toLowerCase().includes(htmlString.toLowerCase())); // gemeente
			straatnaam = user.filter(item => item.straatnaam.toLowerCase().includes(htmlString.toLowerCase())); // straatnaam
			phone = user.filter(item => item.phone.toLowerCase().includes(htmlString.toLowerCase())); // phone
			nr = user.filter(item => item.nr.toLowerCase().includes(htmlString.toLowerCase())); // nr 
			bus = user.filter(item => item.bus.toLowerCase().includes(htmlString.toLowerCase())); // bus kijken
			nieuwsbrief = user.filter(item => item.nieuwsbrief.toLowerCase().includes(htmlString.toLowerCase())); // nieuwsbrief kijken
			reclame = user.filter(item => item.reclame.toLowerCase().includes(htmlString.toLowerCase())); // reclame kijken
			admin = user.filter(item => item.admin.toLowerCase().includes(htmlString.toLowerCase())); // admin kijken
			
			console.log(id)
			console.log(voornaam)
			console.log(achternaam)
			console.log(mail)
			console.log(geslacht)
			console.log(geboortedatum)
			console.log(postcode)
			console.log(gemeente)
			console.log(straatnaam)
			console.log(phone)
			console.log(nr)
			console.log(bus)
			console.log(nieuwsbrief)
			console.log(reclame)
			console.log(admin)
		})
		
	})

}

const accordeonUsers = function () { // de init

	if(document.getElementById("menu")){
		loadJson();
		setTimeout(listenToExpand, 1000);
		setTimeout(listenToEditChange, 1000);
		setTimeout(listenTodelete, 1000);
		setTimeout(listenToEdit, 1000);
		setTimeout(filterbuttons, 1000);
		setTimeout(searchBar, 1000)

	} else{
		console.log("no menu")
	}


};

document.addEventListener('DOMContentLoaded', accordeonUsers());