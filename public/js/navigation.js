var navigation = {
	main: [{
		label: "My Stats",
		action: "showMyStats"

	},
	],
	cityStats: [
		{
			label: "Map",
			action: "showMap",
		}
	],
	myStats: [
		{
			label: "Map",
			action: "showMap",
		},
		{
			label: "Submit Meter Reading",
			action: "showMeterModal",
		},
		{
			label: "Update My Profile",
			action: "showUpdateProfileModal",
		}
	]
};

function loadNavigation(page) {
	$("#main-menu").hide();
	var navigationElements = "";
	if(navigation[page]) {
		var navElements = navigation[page];
		for(var i=0;i<navElements.length;i++) {
			if(navElements[i].link) {
				navigationElements += "<li><a href='"+navElements[i].link+"'>"+navElements[i].label+"</a></li>";
			} else {
				if(navElements[i].action) {
					navigationElements += "<li><a data-toggle='menu' href='menu' onclick='"+navElements[i].action+"();'>"+navElements[i].label+"</a></li>";
				} else {
					navigationElements += "<li><a data-toggle='modal' href='"+navElements[i].modal+"'>"+navElements[i].label+"</a></li>";	
				}
			}
		}
	}
	$("#main-menu").html(navigationElements);
	$("#main-menu").show();
}