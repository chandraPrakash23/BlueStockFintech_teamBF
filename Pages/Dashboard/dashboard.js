// const ctx = document.getElementById('mainBoardIPOChart').getContext('2d');
//         const mainBoardIPOChart = new Chart(ctx, {
//             type: 'doughnut',
//             data: {
//                 // labels: ['Upcoming', 'New Listed', 'Ongoing'],
//                 datasets: [{
//                     data: [15, 25, 2],
//                     backgroundColor: ['#8369E3', '#A7B0D3', '#D6D8E4'],
//                     hoverBackgroundColor: ['#512DA8', '#8792f5', '#EEEEEE']
//                 }]
//             },
//             options: {
//                 cutoutPercentage: 60,
//                 legend: {
//                     display: false
//                 },
//                 tooltips: {
//                     callbacks: {
//                         label: function (tooltipItem, data) {
//                             const dataset = data.datasets[tooltipItem.datasetIndex];
//                             const currentValue = dataset.data[tooltipItem.index];
//                             const label = data.labels[tooltipItem.index];
//                             return label + ': ' + currentValue;
//                         }
//                     }
//                 }
//             }
//         });


const ctx = document.getElementById('mainBoardIPOChart').getContext('2d');
        const mainBoardIPOChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [15, 25, 2],
                    backgroundColor: ['#8369E3', '#A7B0D3', '#D6D8E4'],
                    hoverBackgroundColor: ['#512DA8', '#8792f5', '#EEEEEE']
                }]
            },
            options: {
                cutoutPercentage: 60,
                legend: {
                    display: false
                },
                tooltips: {
                    callbacks: {
                        label: function (tooltipItem, data) {
                            const dataset = data.datasets[tooltipItem.datasetIndex];
                            const currentValue = dataset.data[tooltipItem.index];
                            const label = data.labels[tooltipItem.index];
                            return label + ': ' + currentValue;
                        }
                    }
                }
            }
        });