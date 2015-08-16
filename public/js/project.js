function parseFormElements(formId,elementNames) {
	var parsedObject = {}
	$(elementNames).each(function() {
		parsedObject[this] = $("#"+formId+" [name='"+this+"']").val();
	});
	return parsedObject;
}

function showAchievement(achievementName,achievementText,achievementImage) {
	//$('#achievementImage').attr('src',achievementImage);
	if(achievementImage) {
		$('#achievementImage').html(achievementText);	
	}
	$('#achievementDescription').html(achievementText);	
	$('#achievementTitle').html(achievementName);
	$('#achievement').show();
}

function showMeterModal() {
	$("#modal-container").load("/meterReading", function() {

		$("#saveMeterReadingButton").click(function() {	
			$("#add-reading").modal("hide");
			showAchievement('Check please!','Congrats!<br>You just submitted your first reading!<br><span class="content-sub-heading">+100xp</span>');

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
  		$("#add-reading").modal("show");
	});
}

function showUpdateProfileModal() {
	$("#modal-container").load("/updateProfile", function() {
		$("#update-profile").modal("show");
	});
	
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
	$('.progress-circular-wrapper').remove();
	$('.progress-circular-inner').remove();
	$('.progress-circular-spinner').remove();
});