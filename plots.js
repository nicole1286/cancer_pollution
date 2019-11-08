var trace1 = {
    x: data.No2_mean,
    y: data.Case_Count,
    mode: "markers",
    type: "scatter",
    name: "No2",
    marker: {
      color: "#2077b4",
      symbol: "hexagram"
    }
  }

  var trace2 = {
    x: data.Co2_mean,
    y: data.Case_Count,
    mode: "markers",
    type: "scatter",
    name: "Co2",
    marker: {
      color: "orange",
      symbol: "diamond-x"
    }
  };

  var trace3 = {
    x: data.So2_mean,
    y: data.Case_Count,
    mode: "markers",
    type: "scatter",
    name: "So2",
    marker: {
      color: "rgba(156, 165, 196, 1.0)",
      symbol: "cross"
    }
  };

  var trace4 = {
    x: data.o3_mean,
    y: data.Case_Count,
    mode: "markers",
    type: "scatter",
    name: "o3",
    marker: {
      color: "rgba(156, 165, 196, 1.0)",
      symbol: "octagon"
    }
  };

   // Create the data array for the plot
   var data = [trace1,trace2,trace3,trace4];
  
   // Define the plot layout
   var layout = {
     title: "Lung Cancer Cases vs Air Pollutants ",
     xaxis: { title: "Air Pollutant" },
     yaxis: { title: "Lung Cancer Cases" }
   };
   
   // Plot the chart to a div tag with id "plot"
   Plotly.newPlot("plot", data, layout);
   