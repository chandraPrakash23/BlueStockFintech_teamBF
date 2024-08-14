const ctx = document.getElementById('mainBoardIPOChart').getContext('2d');

const chartData = {
    // labels: ['Afternoon', 'Morning', 'Evening'],
    datasets: [{
        data: [15, 25, 2],
        backgroundColor: ['#8369E3', '#A7B0D3', '#D6D8E4'],
        hoverOffset: 4
    }]
};

const chartOptions = {
    responsive: true,
    plugins: {
        tooltip: {
            backgroundColor: '#0a0536', 
            titleColor: '#FFFFFF', 
            bodyColor: '#FFFFFF', 
            displayColors: false, 
            callbacks: {
                label: function () {
                    return ''; 
                },
                afterLabel: function (context) {
                    const labelIndex = context.dataIndex;
                    const labelMapping = {
                        0: ['Afternoon', 'IPO NSE & BSE', '15'],
                        1: ['Morning', 'IPO NSE', '25'],
                        2: ['Evening', 'IPO BSE', '2']
                    };
                    const label = labelMapping[labelIndex];
                    return label ? label.join('\n') : '';
                }
            },
            padding: 12, 
            cornerRadius: 6, 
        }
    }
};

new Chart(ctx, {
    type: 'doughnut',
    data: chartData,
    options: chartOptions
});
