import React, { useState } from 'react';
import TransactionsTable from './components/TransactionsTable';
import Statistics from './components/Statistics';
import BarChart from './components/BarChart';

const App = () => {
    const [month, setMonth] = useState('March');

    return (
        <div>
            <h1>Transactions Dashboard</h1>
            <select value={month} onChange={(e) => setMonth(e.target.value)}>
                {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map(m => (
                    <option key={m} value={m}>{m}</option>
                ))}
            </select>
            <TransactionsTable month={month} />
            <Statistics month={month} />
            <BarChart month={month} />
        </div>
    );
};

export default App;
