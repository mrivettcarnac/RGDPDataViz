 // The code below is taken from: https://developers.google.com/chart/interactive/docs/quick_start
 // Load the Visualization API and the piechart package.
      google.load('visualization', '1.0', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {
      	
      	// Starting a for loop to pull array of arrays from the obsetvations in jsonRGDPData
      	
      	var RGDPArray = []; //This is the big array. Will use the "for" loop to put the small array, dateAndValueArray, into the bigger array.  
      	
      	for(var i=0; i<jsonRGDPData.observations.length; i++){
			
			var dateAndValueArray = []; //This is the small array. It will hold each set of date and value
		
			dateAndValueArray.push(jsonRGDPData.observations[i].date);
			dateAndValueArray.push(Number(jsonRGDPData.observations[i].value)); //casted value from a string to a number so it can be read by column item 1
		
			RGDPArray.push(dateAndValueArray); //pushing small array set into the big array set.
			
		}; //end of the "for" loop.


        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Date');
        data.addColumn('number', 'Dollars');
        data.addRows(RGDPArray);

        // Set chart options
        var options = {'title':'The Real Gross Domestic Product Incresed Steadily Since 1929',
                       'width':1200,
                       'height':900,
                       'legend' : {position: 'right'},
                       'bar' : { groupWidth: '75%' },
                       };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }