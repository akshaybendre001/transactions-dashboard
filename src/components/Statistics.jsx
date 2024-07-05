import React, { useState, useEffect } from 'react';
import api from '../api';

const Statistics = ({ month }) => {
    const [stats, setStats] = useState({ totalAmount: 0, totalSold: 0, totalNotSold: 0 });

    useEffect(() => {
        fetchStatistics();
    }, [month]);

    const fetchStatistics = async () => {
        try {
            const response = await api.get('/statistics', { params: { month } });
            setStats(response.data);
        } catch (error) {
            console.error('Error fetching statistics:', error);
        }
    };

    return (
        <div>
            <h3>Statistics for {month}</h3>
            <p>Total Sale Amount: {stats.totalAmount}</p>
            <p>Total Sold Items: {stats.totalSold}</p>
            <p>Total Not Sold Items: {stats.totalNotSold}</p>
        </div>
    );
};

export default Statistics;