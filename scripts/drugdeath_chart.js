// criticisms //

var drugDeathChart = document.getElementById("drugdeath_chart");

//1. increase in drug deaths

var drugDeath = new Chart(drugDeathChart, {
    type: 'line',
    data: {
        labels: [1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008],
        datasets: [
            {
                label: 'Portugal',
                data: [240,290,390,350,310,290,160,150,150,210,210,310,350],
                backgroundColor: 'rgb(255, 153, 51, 0.5)',
                borderColor:'rgb(255, 153, 51, 0.5)'
            }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        title: {
            display: true,
            text: 'Number of drug-related deaths recorded in Portugal'
        }
    }
});

