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
					$("#add-reading").modal("hide");
				}
			});
			
		});
		$('.datepicker-adv-default').each(function(index) {
		var datepicker = $(this).pickadate({
			clear: 'Cancel',
			close: 'OK',
			closeOnSelect: false,
			container: 'body',
			format: 'd/m/yyyy',
			klass: {
				buttonClear: 'btn btn-flat btn-alt picker__button--clear',
				buttonClose: 'btn btn-flat btn-alt picker__button--close',
				buttonToday: 'btn btn-flat btn-alt picker__button--today',
				navPrev: 'icon picker__nav--prev',
				navNext: 'icon picker__nav--next',
			},
			weekdaysFull: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
			weekdaysShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
		});
		
		var datepickerApi = datepicker.pickadate('picker');

		datepickerApi.on({
			close: function() {
				$(document.activeElement).blur();
			},
			open: function() {
				if (!$('.picker__date-display', datepickerApi.$root).length) {
					datepickerDateDisplay(datepickerApi, 'highlight');
				};
			},
			render: function() {
				if (datepickerApi.get('select') === null) {
					datepickerDateDisplay(datepickerApi);
				} else {
					datepickerDateDisplay(datepickerApi, 'select');
				};
			}
		});
	});
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