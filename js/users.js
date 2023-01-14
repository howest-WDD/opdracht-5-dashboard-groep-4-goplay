let modal;
let sect;
let id;
let htmlString = ``;
let users;


const loadJson = function () {
	const getElement = document.getElementById("menu");
	const filterbutton = document.querySelector(".js-filter");

	fetch("../json/users.json")
		.then((response) => response.json())
		.then((json) => {
			users = json.users;

			for (let user of users) {
				id = user.UID;
				const voornaam = user.voornaam;
				const achternaam = user.achternaam;
				const mail = user.mail;
				// const geslacht = user.geslacht;
				// const geboortedatum = user.geboortedatum;
				// const postcode = user.postcode;
				// const gemeente = user.gemeente;
				// const straatnaam = user.straatnaam;
				// const phone = user.phone;
				// const nr = user.nr;
				// const bus = user.bus;
				// const nieuwsbrief = user.nieuwsbrief;
				// const reclame = user.reclame;
				// const admin = user.admin;

				// console.log(getExtra.innerHTML)

				// dit is de htmlstring also known as the moshpit
				htmlString += `
                    <table id="menu"  class="c-users__table " style="overflow-x:auto;">
                        <tr  class="c-users__tablerow js-background c-users__tablerow--first  js-deleteuser js-adduser " data-deleteuser="${id}" id="userdelete${id}">
                            <td class="c-users__category js-id"><input class="c-users__input  js-adduser  js-geboortedatum js-disable" type="text" value="${id}" disabled /></td>
                            <td class="c-users__category js-achternaam"><input class="c-users__input js-adduser  js-geboortedatum js-disable" data-disabledid="${id}" type="text" value="${achternaam}" disabled /></td>
                            <td class="c-users__category js-voornaam"><input class="c-users__input js-adduser  js-geboortedatum js-disable" data-disabledid="${id}" type="text" value="${voornaam}" disabled /></td>
                            <td class="c-users__category js-mail"><input class="c-users__input js-adduser  js-geboortedatum js-disable" data-disabledid="${id}" type="text" value="${mail}" disabled /></td>
                            <td class="c-users__category ">
                                <a href="users_detail.html?${id}" id="js-expandid${id}" class="c-users__expandbutton js-expand " data-id="${id}">
                                    <svg id="${id}" class="c-users__expandicon js-expandbutton js-expandbutton${id}" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M7,10L12,15L17,10H7Z" />
                                    </svg>
                                </a>
                            </td>
                            <div id="extraMenu${id}" class="c-users__extracontainer " style="overflow-x:auto;" >
                                <td id="js-extra${id}" class="c-users__extradata u-hidden  d-flex js-extra c-expandborder" >
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

			return json;
		});
};

function findInValues(arr, search) {
	/** cast to string and lowercase to have non-dependant type and case search */
	search = String(search).toLowerCase();
	return arr.filter(object =>
		/** get only values from iterated objects */
		Object.values(object).some(objValue =>
			/** casting field values to the same shape */
			String(objValue).toLowerCase().includes(search)
		)
	);
}

const searchBar = function () {
	const searchbar = document.querySelector(".js-searchbar");
	const getElement = document.getElementById("menu"); //  nodig voor de juiste persoo nterug te geven

	let htmlString = `					
	<table id="menu" class="c-users__table table table-responsive" style="overflow-x: auto">
	<tr class="c-users__tablemainrow">
		<th class="c-users__id c-users__id--active js-filter">
			Id
			<span class="c-users__active "><svg xmlns="http://www.w3.org/2000/svg" class="c-users__activesvg js-filtersvg" viewBox="0 0 24 24"><path class="c-users__activesvgpath" d="M7,10L12,15L17,10H7Z" /></svg></span>
		</th>
		<th class="c-users__achternaam js-filter">
			Achternaam
			<span class="c-users__active "><svg xmlns="http://www.w3.org/2000/svg" class="c-users__activesvg js-filtersvg" viewBox="0 0 24 24"><path class="c-users__activesvgpath" d="M7,10L12,15L17,10H7Z" /></svg></span>
		</th>
		<th class="c-users__voornaam js-filter">
			Voornaam
			<span class="c-users__active "><svg xmlns="http://www.w3.org/2000/svg" class="c-users__activesvg js-filtersvg" viewBox="0 0 24 24"><path class="c-users__activesvgpath" d="M7,10L12,15L17,10H7Z" /></svg></span>
		</th>
			
		<th class="c-users__mail js-filter">
			Mail
			<span class="c-users__active "><svg xmlns="http://www.w3.org/2000/svg" class="c-users__activesvg js-filtersvg" viewBox="0 0 24 24"><path class="c-users__activesvgpath" d="M7,10L12,15L17,10H7Z" /></svg></span>
		</th>
		<th class="c-users__expand js-filter"></th>
	</tr>
</table>`;
	let htmlStrings;
	let ids;
	let voornaams;
	let achternaams;
	let mails;

	let geboortedatums;
	let postcodes;
	let gemeentes;
	let straatnaams;
	let phones;
	let nrs;
	let bussen;

	let tekst;

	fetch("../json/users.json")
		.then((response) => response.json())
		.then((json) => {
			const user = json.users;
			searchbar.addEventListener("keyup", function (event) {
			
				if (event.key === "Enter") {
					const currentWord = event.target.value

					let users = findInValues(user, currentWord)
					console.log(users)
					// console.log(ids)
					// console.log(voornaams)
					// console.log(achternaam)
					// console.log(mail)

					// console.log(geboortedatum)
					// console.log(postcode)
					// console.log(gemeente)
					// console.log(straatnaam)
					// console.log(phone)
					// console.log(nr)
					// console.log(bus)

					for (const user of users) {
						const id = user.UID;
						const voornaam = user.voornaam;
						const achternaam = user.achternaam;
						const mail = user.mail;
						const postcode = user.postcode;
						const gemeente = user.gemeente;
						const straatnaam = user.straatnaam;
						const phone = user.phone;
						const nr = user.nr;
						const bus = user.bus;
						const geboortedatum = user.geboortedatum;
						const nieuwsbrief = user.nieuwsbrief;
						const reclame = user.reclame;
						const admin = user.admin;
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
</tr>
</table>`;
					}

					getElement.innerHTML = htmlString;
					listenToGoBack();
				}

				const expandButtons = document.querySelectorAll(`.js-expand`); // de button
	

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
		

				});
			}
		
		
			verwijder.addEventListener('click', function () { // verwijder de user en de modal window 
				// modal.classList.add('u-hidden');
				// darkbackground.classList.remove('c-darkbackground');
				
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
		});
	})
};

const listenToExpand = function () {
	// function for the expand window
	const expandButtons = document.querySelectorAll(`.js-expand`); // de button

	for (const expandButton of expandButtons) {
		// console.log(expandButton);
		expandButton.addEventListener("click", function () {
			const idnumber = expandButton.getAttribute("data-id"); // de expand button id
			const extraTexts = document.getElementById(`js-extra${idnumber}`); // welke expand is het
			// extraTexts.classList.toggle('u-hidden');
			extraTexts.classList.toggle("u-hidden"); // spreekt voor zichzelf
			extraTexts.classList.toggle("c-expandanimation"); // animation voor het eruit te latne komen

			const extraMenu = document.getElementById(`extraMenu${idnumber}`);
			// console.log(`extraMenu${idnumber}`);
			// console.log(extraMenu);
			extraMenu.classList.toggle("c-spacetop");
			extraMenu.classList.toggle("c-makespace");
			// const nextNumb = idnumber - 1;
			// const nextText = document.getElementById(`js-extra${nextNumb}`);
			// nextText.classList.toggle('c-spacetop');
		});
	}
};

const listenToEdit = function () {
	const editusers = document.querySelectorAll(".js-edit"); // edit button
	for (const edituser of editusers) {
		// overlopen van alle editbutton
		// console.log(edituser);

		edituser.addEventListener("click", function () {
			console.log("click");
			const deleteid = edituser.getAttribute("data-editid"); // data attribuut in de editbutton
			// console.log(deleteid);
			const inputs = document.querySelectorAll(`[data-disabledid='${deleteid}']`); //disabled attribuut in de input fields
			// console.log(inputs);
			// console.log(disable);
			for (const input of inputs) {
				// console.log('disableing');
				input.toggleAttribute("disabled");
			}
		});
	}
};

const listenTodelete = function () {
	const deletebuttons = document.querySelectorAll(".js-delete"); // deletbuttons
	// const deleteusers = document.getElementsByClassName('js-deleteuser');

	// deze zijn voor De modal window en aanpassingen aan de body
	const darkbackground = document.querySelector(".js-darkbackground"); //darkbackground voor de modal
	const modal = document.querySelector(".js-modal"); // modal win dow
	const verwijder = document.querySelector(".js-verwijder"); // verwijder userbutton
	const cancel = document.querySelector(".js-cancel"); // cancel button
	for (const deletebutton of deletebuttons) {
		deletebutton.addEventListener("click", function () {
			// de forloop die zorgt dat als je op de deletebutotn klikt dat de modal window en darkbackground tevoorschijn komt
			modal.classList.remove("u-hidden");
			darkbackground.classList.toggle("c-darkbackground");
		});
	}

	verwijder.addEventListener("click", function () {
		// verwijder de user en de modal window
		modal.classList.add("u-hidden");
		darkbackground.classList.remove("c-darkbackground");

		for (const deletebutton of deletebuttons) {
			deletebutton.addEventListener("click", function () {
				const deleteuserid = deletebutton.getAttribute(`data-deleteid`);

				const deleteuser = document.querySelector(`[data-deleteuser="${deleteuserid}"]`);
				console.log(deleteuser);
				deleteuser.classList.add("u-hidden");
				deleteuser.classList.remove("c-spacetop");
			});
		}
	});
	cancel.addEventListener("click", function () {
		// cancel de modal  window
		modal.classList.add("u-hidden");
		darkbackground.classList.remove("c-darkbackground");
	});
};

const listenToEditChange = function () {
	// de functie die zorg dat het penceeltje word vervangne door een casette
	const editButtons = document.querySelectorAll(".js-edit");
	const editSvgs = document.querySelectorAll(".js-editsvg");
	for (const editButton of editButtons) {
		for (const editSvg of editSvgs) {
			editButton.addEventListener("click", function () {
				if (editSvg.classList.contains("c-users__editsvg--edit")) {
					editSvg.classList.remove("c-users__editsvg--edit");
					editSvg.classList.add("c-users__editsvg--save");
					editSvg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="c-users__editsvg" viewBox="0 0 24 24"><path class="c-users__editpath" d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" /></svg>`;
				} else if (editSvg.classList.contains("c-users__editsvg--save")) {
					editSvg.classList.add("c-users__editsvg--edit");
					editSvg.classList.remove("c-users__editsvg--save");
					editSvg.innerHTML = `<svg style="width: 24px; height: 24px" class="c-users__editsvg c-users__editsvg--edit js-editsvg" viewBox="0 0 24 24"><path fill="currentColor" class="c-users__editpath" d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>`;
				}
			});
		}
	}
};

const filterbuttons = function () {
	// functie die een active state terug geeft aan de filter buttons
	const thbuttons = document.querySelectorAll(".js-filter"); // de filter buttons die geactiveerd worde n

	for (const thbutton of thbuttons) {
		// console.log(thbutton)
		thbutton.addEventListener("click", function () {
			if (!thbutton.classList.contains("c-users__id--active")) {
				thbutton.classList.add("c-users__id--active");
			} else if (thbutton.classList.contains("c-users__id--active")) {
				thbutton.classList.remove("c-users__id--active");
			}
		});
	}
};

const listenToGoBack = function () {
	const goBackButton = document.querySelector(".js-goback");
	goBackButton.classList.remove("u-hidden");
	goBackButton.addEventListener("click", function () {
		location.reload();
	});
};

const accordeonUsers = function () {
	// de init

	if (document.getElementById("menu")) {
		loadJson();
		setTimeout(listenToExpand, 1000);
		setTimeout(listenToEditChange, 1000);
		setTimeout(listenTodelete, 1000);
		setTimeout(listenToEdit, 1000);
		setTimeout(filterbuttons, 1000);
		setTimeout(searchBar, 1000);
	} else {
		console.log("no menu");
	}
};

document.addEventListener("DOMContentLoaded", accordeonUsers());
