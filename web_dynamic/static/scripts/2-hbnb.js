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

$.getJSON("http://0.0.0.0:5001/api/v1/status/", (data) => {
		if (data.status === "OK") {
			$("div#api_status").addClass("available");
		} else {
			$("div#api_status").removeClass("available");
		}
	});
});
