function parseFormElements(formId,elementNames) {
	var parsedObject = {}
	$(elementNames).each(function() {
		parsedObject[this] = $("#"+formId+" [name='"+this+"']").val();
	});
	return parsedObject;
}

function showMeterModal() {
	$("#modal-container").load("/meterReading", function() {

		$("#saveMeterReadingButton").click(function() {
			var baseAttributes = ["binId","lat","lng"];
			var binObject = parseFormElements("binSettings",baseAttributes);

			var settingsAttributes = ["readInterval","numberOfMeasurements","wakeUpTime","sleepTime","fullThreshold","halfFullThreshold"];
			
			binObject["settings"] = parseFormElements("binSettings",settingsAttributes);

			$.post("/api/meterReadings", binObject, function(response) {
				if(response.error) {
					console.log("error "+response.error);
				} else {
					console.log("OK: "+response);
					$("#add-bin").modal("hide");			
				}
			});
			
		})
  		$("#add-bin").modal("show");

	});
}

function showUpdateBinModal() {
	
}

function showMap() {
	$("#footer-tag").html("Map");
	$('#map').siblings().hide();
	$('#map').show();
	loadNavigation("main");
	loadActions("main");
}

function showMyStats(id) {
	//$("#modal-container").load("/api/userStats/"+id);
	$("#footer-tag").html("User Stats");
	$('#my-stats').siblings().hide();
	$('#my-stats').show();
	renderMyStats(id);
	loadNavigation("myStats");
	loadActions("myStats");	
}

$(function() {
	loadNavigation("main");
	loadActions("main");
	
});