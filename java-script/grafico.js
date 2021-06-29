    

Chart.defaults.font.size = 14;
const ctx =  document.getElementById('myChart').getContext('2d');

function MyChart (label, data){

    return new Chart(ctx, {
        type: 'bar',
        data:{
            labels: ['Dom','Seg', 'Ter', 'Quar', 'Quin', 'Sex', 'Sab'],//label,
            datasets:[{
                // yAxisID:'yAxis',
                data: [15, 20, 30, 60, 80, 60, 70],//data,
                backgroundColor:[
                    'rgba(232,241,253)',
                    'rgba(232,241,253)',
                    'rgba(232,241,253)',
                    'rgba(232,241,253)',
                    '#2F80ED',
                    'rgba(232,241,253, 0.4)',
                    'rgba(232,241,253, 0.4)'
                    //'#E8F1FD',
                ],
                
                borderRadius: 6,
                borderSkipped: false, 
            }],
        },
        options:{
            scales:{
                    xAxis:{
                        grid:{
                            display:false,
                           drawBorder:false,
                        },
                        
                    },
                    yAxis:{
                        display:false
                    }
              },
              plugins:{
                legend:{
                    display:false
                }
              },
        }
    });
};
 const myChart = MyChart([],[]);