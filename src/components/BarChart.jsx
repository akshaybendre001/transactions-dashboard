import React, { useState, useEffect } from 'react';
import api from '../api';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const BarChart = ({ month }) => {
    const [chartData, setChartData] = useState({ labels: [], datasets: [] });

    useEffect(() => {
        fetchBarChartData();
    }, [month]);

    const fetchBarChartData = async () => {
        try {
            const response = await api.get('/bar-chart', { params: { month } });
            const labels = response.data.map(item => item.range);
            const data = response.data.map(item => item.count);
            setChartData({
                labels,
                datasets: [
                    {
                        label: 'Number of Items',
                        data,
                        backgroundColor: 'rgba(75, 192, 192, 0.6)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }
                ]
            });
        } catch (error) {
            console.error('Error fetching bar chart data:', error);
        }
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: `Bar Chart Stats - ${month} (Selected month name from dropdown)`,
                font: {
                    size: 18
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Price Range'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Number of Items'
                },
                beginAtZero: true
            }
        }
    };

    return (
        <div>
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default BarChart;