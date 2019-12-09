//policy effectiveness//

var ctx = document.getElementById("interactive_chart");

var overdose_deaths = [60,52,76,34,23,20,9,12,14,20,27,26,10,16,28,37,25,30,29];
var diagnosed_aids = [370,277,221,145,134,115,60,61,42,18];
var diagnosed_hiv = [271,232,159,159,107,62,44,35,24,20];

var chart_labels =  [1999,2000,2001,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017];
var updated_labels = [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017];

var label_names = ['Portugese Overdose Deaths', 'Portugese Diagnosed HIV', 'Portugese Diagnosed AIDS'];
var data_sets = [overdose_deaths,diagnosed_hiv,diagnosed_aids];
var bg_colors = ['rgb(255, 153, 51, 0.5)', 'rgb(0, 153, 255,0.5)', 'rgb(255, 102, 204,0.5)']

var config = {
    type: 'line',
    data: {
        labels: chart_labels,
        datasets: [
            {
                label: label_names[0],
                data: data_sets[0],
                backgroundColor: bg_colors[0],
                borderColor: bg_colors[0]
            }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                position: "left",
                "id": "y-axis-0",
            }]
        },
        title: {
          display: true,
          text: 'Portugal Drug Abuse Statistics'
        }
    }
};

var myLineChart = new Chart(ctx,config);

$("#show_od").click(function() {
    var data = myLineChart.config.data;
    data.labels = chart_labels;
    data.datasets[0].data = data_sets[0];
    data.datasets[0].label = label_names[0];
    data.datasets[0].backgroundColor = bg_colors[0];
    data.datasets[0].borderColor = bg_colors[0];
    myLineChart.update();
});

$("#show_hiv").click(function() {
    var data = myLineChart.config.data;
    data.labels = updated_labels;
    data.datasets[0].data = data_sets[1];
    data.datasets[0].label = label_names[1];
    data.datasets[0].backgroundColor = bg_colors[1];
    data.datasets[0].borderColor = bg_colors[1];
    myLineChart.update();
});

$("#show_aids").click(function() {
    var data = myLineChart.config.data;
    data.labels = updated_labels;
    data.datasets[0].data = data_sets[2];
    data.datasets[0].label = label_names[2];
    data.datasets[0].backgroundColor = bg_colors[2];
    data.datasets[0].borderColor = bg_colors[2];
    myLineChart.update();
});


