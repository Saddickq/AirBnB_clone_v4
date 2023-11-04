document.ready(()=> {
	let amenities_dict = {};
	let amenity_id_value = this.dataset.id;
	let amenity_name_key = this.dataset.name;

	$("li input[type=checkbox]").change(()=> {
// if checkbox is checked or clicked append its value to the dictionary
		if (this.checked) {
			amenities_dict[amenity_name_key] = amenity_id_value;
		} else {
// delete unchecked ones
		delete amenities_dict[amenity_name_key];
		}
        const checked_list = Object.values(amenities_dict).sort().join(", ");
        $(".amenities h4").text(checked_list);
	});

	// fetch data about places
	//fetch
	$.post({
		url: `http://0.0.0.0:5001/api/v1/places_search`,
		headers: {
			"Content-Type": "application/json",
		},
		data: JSON.stringify({}),
		success: (data) => {
			data.forEach((place) => {
				const newarticle = `<article>
				<div class="title_box">
				<h2>${place.name}</h2>
				<div class="price_by_night">$${place.price_by_night}</div>
				</div>
				<div class="information">
				<div class="max_guest">${place.max_guest} Guest${
							place.max_guest !== 1 ? "s" : ""
						}</div>
				<div class="number_rooms">${place.number_rooms} Bedroom${
							place.number_rooms !== 1 ? "s" : ""
						}</div>
				<div class="number_bathrooms">${place.number_bathrooms} Bathroom${
							place.number_bathrooms !== 1 ? "s" : ""
						}</div>
				</div> 
				<div class="description">
				${place.description}
				</div>
					</article>`;

				$("section.places").append(newarticle)
		});
		},
		dataType: "json",
	});
		// search places
		$(".filters button").bind("click", searchPlace);
		searchPlace();
});
