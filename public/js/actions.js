var actions = {
	main: [{
		label: "My Stats",
		action: "showMyStats",
		iconClass: "icon",
		iconHTML: "",

	}
	],
	myStats: [
		{
			label: "Map",
			action: "showMap",
			iconClass: "icon",
			iconHTML: "map"
		},
		{
			label: "Submit Meter Reading",
			action: "showMeterModal",
			iconClass: "icon",
			iconHTML: "settings",
		},
		{
			label: "Update My Profile",
			action: "showUpdateProfileModal",
			iconClass: "icon",
			iconHTML: "settings",
		}
	]
};

function loadActions(page) {
	$("#actions-container").hide();
	var actionElements = "";
	if(navigation[page]) {
		var actElements = actions[page];
		for(var i=0;i<actElements.length;i++) {
			var color = (actElements[i].color) ? actElements[i].color : "blue";
			if(actElements[i].link) {
				actionElements += "<a class='fbtn fbtn-"+color+"' href='"+actElements[i].link+"'><span class='fbtn-text'>"+actElements[i].label+"</span><span class='"+actElements[i].iconClass+"'>"+actElements[i].iconHTML+"</span></a>";
			} else {
				if(actElements[i].action) {
					actionElements += "<a class='fbtn fbtn-"+color+"' onclick='"+actElements[i].action+"();'><span class='fbtn-text'>"+actElements[i].label+"</span><span class='"+actElements[i].iconClass+"'>"+actElements[i].iconHTML+"</span></a>";
				}
			}
		}
	}
	$("#actions-container").html(actionElements);
	$("#actions-container").show();
}