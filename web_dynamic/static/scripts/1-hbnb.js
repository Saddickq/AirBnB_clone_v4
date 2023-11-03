document.ready( ()=> {
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
// propagate h4 tags with the list of selected amenities
        const checked_list = Object.values(amenities_dict).sort().join(", ");
        $(".amenities h4").text(checked_list);
	});
});

