import { useState, useEffect } from 'react';
import axios from 'axios';
import Navigation from '../components/Navigation';

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
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/portfolios`, { withCredentials: true });
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
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/portfolio`, {
                name,
                amount: parseFloat(amount),
            }, { withCredentials: true });
            setName('');
            setAmount('');
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/portfolios`, { withCredentials: true });
            setPortfolios(response.data);
        } catch (error) {
            console.error('Failed to create portfolio', error);
        }
    };

    const handleDeletePortfolio = async (id: number) => {
        if (confirm('Are you sure you want to delete this portfolio?')) {
            try {
                await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/portfolio/delete`, {
                    data: { id },
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                setPortfolios(portfolios.filter((portfolio) => portfolio.id !== id));
            } catch (error) {
                console.error('Failed to delete portfolio', error);
            }
        }
    };

    return (
        <div>
            <Navigation />
            <h1>Your Portfolios</h1>
            <ul>
                {portfolios.map((portfolio) => (
                    <li key={portfolio.id}>
                        {portfolio.name}: {portfolio.amount} BTC (${portfolio.value_usd.toFixed(2)})
                        <button onClick={() => handleDeletePortfolio(portfolio.id)}>Delete</button>
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
