var ctx = document.getElementById("drugoffense_chart").getContext("2d");

var data = {
  labels: [1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010],
  datasets: [{
    label: "Drug use Arrests/Citations",
    borderColor: 'rgb(0, 153, 255,0.5)',
    data: [3000,5000,5500,7000,7900,7800,5900,5800,5900,5500,6000,6200,6500,6200,7600,7500],
    fill:false
    
  }, {
    label: "Trafficking Arrests",
    borderColor: 'rgb(255, 153, 51, 0.5)',
    data: [2050,2100,2000,1950,1900,2100,1950,2050,2060,2070,2080,2090,2100,2000,2100,2000],
    fill:false
  },
  {
    label: "Trafficking-Use Arrests",
    borderColor: 'rgb(255, 102, 204,0.5)',
    data: [1700,1950,1990,2050,2400,3850,3500,3000,2500,2200,3500,3000,2200,3000,3800,3500],
    fill:false
    }]
};

var drugOffense = new Chart(ctx, {
  type: 'line',
  data: data,
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
        text: 'Number of drug offenses recorded in Portugal'
    }
}
});
