var ctx = document.getElementById("druguse_chart").getContext("2d");

var data = {
  labels: ["Any illicit Substance", "Hashish", "Cocaine", "Ectasy","Amphetamines","Heroin"],
  datasets: [{
    label: "2001",
    backgroundColor: 'rgb(0, 153, 255,0.5)',
    data: [7.6,7.6,0.9,0.7,0.5,0.7]
  }, {
    label: "2007",
    backgroundColor: 'rgb(255, 153, 51, 0.5)',
    data: [12.0,11.7,1.9,1.3,0.9,1.1]
  }
    ]
};

var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: {
    barValueSpacing: 20,
    scales: {
      yAxes: [{
        ticks: {
          min: 0,
        }
      }]
    }
  }
});



