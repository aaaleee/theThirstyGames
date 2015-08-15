var usageChart = null;
var binStatsSocket = null;

function renderMyStats(userId) { 
		$.get("/userStats", function(data) {
			console.log(data);
			usageChart = new Highcharts.Chart({
         	chart: {
          		renderTo: document.getElementById('usage'),
          		type: 'spline'
        	},
        	title: {
	            text: 'Usage'
	        },
	        xAxis: {
	            categories: ['January','February','March','April','May','June','July','August']
	        },
	        yAxis: {
	            title: {
	                text: 'Gallons'
	            }
	        },
	        series: [{
	            name: 'You',
	            //data: data.yourReadings
	            data: [2000,1800,1700,1900,2100,2200,2200,2100]
	        }, {
	            name: 'Target',
	            data: [1750,1750,1750,1750,1750,1750,1750,1750]
	        },
			{
	            name: 'Average',
	            data: [1800,1700,1650,1700,1800,1800,1900,1900]
	        }
	        ]
     	});

	    $('#mostActiveDays').highcharts({
	        chart: {
	            type: 'column'
	        },
	        title: {
	            text: 'Most Active Days'
	        },
	        xAxis: {
	            categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
	        },
	        yAxis: {
	            title: {
	                text: 'Water Usage'
	            }
	        },
	        series: [{
	            name: 'Daily Max',
	            data: [12,10,10,13,16,30,32]//{{dailyMaxReadings}}
	        }
	        ]
	    });

	    /*$('#timeFull').highcharts({
	        chart: {
	            type: 'pie'
	        },
	        title: {
	            text: 'Time spent awaiting collection'
	        },
	        xAxis: {
	            categories: ['Full (Awaiting Collection)', 'Not Full']
	        },
	        yAxis: {
	            title: {
	                text: 'Bin Usage'
	            }
	        },
	        series: [{
	            name: 'Pt. of time',
	            data: [['Full (Awaiting Collection)',12],['Not Full',88]]
	        }
	        ]
	    });	*/
		});

		

	}