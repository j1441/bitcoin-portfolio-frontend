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
        <div className="min-h-screen bg-orange-100">
            <Navigation />
            <div className="container mx-auto p-6">
                <h1 className="text-4xl font-bold text-orange-600 mb-6">Your Portfolios</h1>
                <ul className="space-y-4">
                    {portfolios.map((portfolio) => (
                        <li key={portfolio.id} className="bg-white p-4 rounded shadow-md flex justify-between items-center">
                            <div>
                                <h2 className="text-2xl font-semibold text-orange-800">{portfolio.name}</h2>
                                <p className="text-gray-700">{portfolio.amount} BTC (${portfolio.value_usd.toFixed(2)})</p>
                            </div>
                            <button
                                onClick={() => handleDeletePortfolio(portfolio.id)}
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="mt-8">
                    <h2 className="text-3xl font-bold text-orange-600 mb-4">Create New Portfolio</h2>
                    <form onSubmit={handleCreatePortfolio} className="space-y-4">
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Portfolio Name"
                            required
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
                        />
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="Amount (BTC)"
                            required
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
                        />
                        <button
                            type="submit"
                            className="bg-orange-500 text-white px-6 py-3 rounded shadow hover:bg-orange-600 transition duration-300"
                        >
                            Create
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
