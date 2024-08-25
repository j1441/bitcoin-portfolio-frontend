import { useState, useEffect } from 'react';
import axios from 'axios';

interface Portfolio {
    id: number;
    name: string;
    amount: number;
    value_usd: number;
}

const Portfolio = () => {
    const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');

    useEffect(() => {
        const fetchPortfolios = async () => {
            try {
                const response = await axios.get('http://numerisgroup.xyz/portfolios', { withCredentials: true });
                setPortfolios(response.data);
            } catch (error) {
                console.error('Failed to fetch portfolios', error);
            }
        };

        fetchPortfolios();
    }, []);

    const handleCreatePortfolio = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('http://numerisgroup.xyz/portfolio', {
                name,
                amount: parseFloat(amount),
            }, { withCredentials: true });
            setName('');
            setAmount('');
            const response = await axios.get('http://numerisgroup.xyz/portfolios', { withCredentials: true });
            setPortfolios(response.data);
        } catch (error) {
            console.error('Failed to create portfolio', error);
        }
    };

    return (
        <div>
            <h1>Your Portfolios</h1>
            <ul>
                {portfolios.map((portfolio) => (
                    <li key={portfolio.id}>
                        {portfolio.name}: {portfolio.amount} BTC (${portfolio.value_usd.toFixed(2)})
                    </li>
                ))}
            </ul>
            <h2>Create New Portfolio</h2>
            <form onSubmit={handleCreatePortfolio}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Portfolio Name"
                    required
                />
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Amount (BTC)"
                    required
                />
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default Portfolio;
