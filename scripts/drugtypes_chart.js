new Chart(document.getElementById("drugtypes_chart"), {
    type: 'doughnut',
    data: {
      labels: ["Cannabis", "Amphetamines", "Cocaine", "Heroin", "Other"],
      datasets: [
        {
          label: "Drug quantitiies (in percentage)",
          backgroundColor: ["#3cba9f", "#8e5ea2","#3e95cd","#e8c3b9","#c45850"],
          data: [37,0,17,39,6]
        }
      ]
    },    
    options: {
      title: {
        display: true,
        text: 'All treatment entrants aged 15-64 in Portugal, 2019 (in percentage)'
      }
    }
});