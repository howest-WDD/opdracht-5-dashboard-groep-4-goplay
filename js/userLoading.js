"use strict";

const loadJson = function () {
	let htmlString = ``;
	let extraString = ``;
	const getElement = document.getElementById("menu");
	const getExtra = document.getElementById("extramenu");
	fetch("../json/users.json")
		.then((response) => response.json())
		.then((json) => {
			const users = json.users;

			for (const user of users) {
				const id = user.UID;
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
				<tr>
            <tr id="menu" class="c-users__tablerow c-users__tablerow--first  js-deleteuser js-adduser">
				<td class="c-users__category js-id"><input class="c-users__input  js-adduser  js-geboortedatum js-disable" type="text" placeholder="${id}" disabled /></td>
				<td class="c-users__category js-achternaam"><input class="c-users__input js-adduser  js-geboortedatum js-disable" type="text" placeholder="${achternaam}" disabled /></td>
				<td class="c-users__category js-voornaam"><input class="c-users__input js-adduser  js-geboortedatum js-disable" type="text" placeholder="${voornaam}" disabled /></td>
				
				<td class="c-users__category js-mail"><input class="c-users__input js-adduser  js-geboortedatum js-disable" type="text" placeholder="${mail}" disabled /></td>
				<td class="c-users__category">
					<button class="c-users__expandbutton js-expand">
						<svg class="c-users__expandicon js-expandbutton" viewBox="0 0 24 24">
							<path fill="currentColor" d="M7,10L12,15L17,10H7Z" />
						</svg>
					</button>
				</td>
				<table id="extramenu" class="c-users__extracontainer js-deleteuser" style="overflow-x:auto;">
							<td class="c-users__extradata d-flex u-hidden js-extra">
								<div class="c-users__extrainformatie c-users__extrainformatie--1 ">

									<div class="c-users__geboortedatum">
										<label for="geboortedatum" class="c-users__label c-users__align1">Geboortedatum:</label>
										<input type="text" id="geboortedatum" class=" c-users__input js-geboortedatum js-adduser  js-disable" placeholder="${geboortedatum}" name="geboortedatum" disabled />
									</div>
									<div class="c-users__straatnaam">
										<label for="straatnaam" class="c-users__label c-users__align2">Straatnaam:</label>
										<input type="text" id="straatnaam" class="c-users__input js-straatnaam js-disable" placeholder="${straatnaam}" name="straatnaam" disabled />
									</div>
									<div class="c-users__nieuwsbrief">
										<label for="nieuwsbrief" class="c-users__label  c-users__align3">Nieuwsbrief:</label>
										<select name="jaofnee" class="c-users__select js-nieuwsbrief js-disable" id="nieuwsbrief" disabled>
											<option value="ja" class="c-users__option js-disable">ja</option>
											<option value="nee" class="c-users__option js-disable">nee</option>
										</select>
									</div>
								</div>
								<div class="c-users__extrainformatie c-users__extrainformatie--2">
									<div class="c-users__postcode">
										<label for="postcode" class="c-users__label  c-users__align1">Postcode:</label>
										<input type="text" id="postcode" class="c-users__input js-postcode js-disable" placeholder="${postcode}" name="postcode" disabled />
									</div>
									<div class="c-users__nr">
										<label for="nr" class="c-users__label c-users__align2">Nr:</label>
										<input type="text" id="nr" class="c-users__input js-nr js-disable" placeholder="${nr}" name="nr" disabled />
									</div>
									<div class="c-users__reclame">
										<label for="reclame" class="c-users__label c-users__align3">Reclame:</label>
										<select name="jaofnee" class="c-users__select js-reclame js-disable" disabled id="reclame">
											<option value="ja" class="c-users__option">ja</option>
											<option value="nee" class="c-users__option">nee</option>
										</select>
									</div>
								</div>
								<div class="c-users__extrainformatie c-users__extrainformatie--3">
									<div class="c-users__gemeente">
										<label for="gemeente" class="c-users__label  c-users__align1">Gemeente:</label>
										<input type="text" id="gemeente" class="c-users__input js-gemeente js-disable" placeholder="${gemeente}" name="gemeente" disabled />
									</div>
									<div class="c-users__bus">
										<label for="bus" class="c-users__label c-users__align2">Bus:</label>
										<input type="text" id="bus" class="c-users__input js-bus js-disable" placeholder="${bus}" name="bus" disabled />
									</div>
									<div class="c-users__isadmin">
										<label class="c-users__label c-users__align3">IsAdmin:</label>
										<select name="jaofnee" class="c-users__select js-admin js-disable" disabled id="ja">
											<option value="ja" class="c-users__option">ja</option>
											<option value="nee" class="c-users__option">nee</option>
										</select>
									</div>
								</div>
								<div class="c-users__extrainformatie  c-users__extrainformatie--4">
									<div class="c-users__telefoonnummer">
										<label for="telefoonnummer" class="c-users__label c-users__align1">Telefoonnummer:</label>
										<input type="text" id="telefoonnummer" class="c-users__input js-telefoonnummer js-disable" placeholder="${phone}" name="telefoonnummer" disabled />
									</div>
									<div class="c-users__geslacht">
										<label for="geslacht" class="c-users__label  c-users__align2">Geslacht:</label>
										<input type="text" id="geslacht" class=" c-users__input js-geslacht js-disable" placeholder="${geslacht}" name="geboortedatum" disabled />
									</div>
									<div class="c-users__telefoonnummer"></div>
								</div>
								<div>
									<button class="c-users__delete js-delete">
										<svg style="width: 24px; height: 24px" class="c-users__deletesvg" viewBox="0 0 24 24">
											<path fill="currentColor" class="c-users__deletepath" d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8.46,11.88L9.87,10.47L12,12.59L14.12,10.47L15.53,11.88L13.41,14L15.53,16.12L14.12,17.53L12,15.41L9.88,17.53L8.47,16.12L10.59,14L8.46,11.88M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" />
										</svg>
									</button>
									<button class="c-users__edit js-edit">
										<svg style="width: 24px; height: 24px" class="c-users__editsvg c-users__editsvg--edit js-editsvg" viewBox="0 0 24 24">
											<path fill="currentColor" class="c-users__editpath" d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
										</svg>
									</button>
								</div>
							</td>
						</table>
				</tr>
				</tr>`;

				

				extraString += ``;

				console.log(htmlString)
			}
			// getElement.innerHTML = htmlString;
			
			// console.log(htmlString)
		});
};

const getUsers = function () {
	fetch("../json/users.json")
		.then((response) => response.json())
		.then((json) => {
			const users = json.users;
			// console.log(users);
			return users;
		});
};

const loadUser = function () {
	loadJson();
};

document.addEventListener("DOMContentLoaded", loadUser);
