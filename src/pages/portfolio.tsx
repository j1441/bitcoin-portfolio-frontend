import { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import Navigation from '../components/Navigation';
import FeeEstimatorWidget from '../components/FeeEstimatorWidget'; // Import the widget

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

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
    const [totalHoldings, setTotalHoldings] = useState(0);
    const [bitcoinPrice, setBitcoinPrice] = useState<number | null>(null);
    const [historicalPrices, setHistoricalPrices] = useState<any[]>([]);
    const [timeRange, setTimeRange] = useState('30'); // Default time range is 30 days

    useEffect(() => {
        const fetchPortfolios = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/portfolios`, { withCredentials: true });
                const portfolios = response.data;
                setPortfolios(portfolios);
                calculateTotalHoldings(portfolios);
            } catch (error) {
                console.error('Failed to fetch portfolios', error);
            }
        };

        const fetchBitcoinPrice = async () => {
            try {
                const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
                setBitcoinPrice(response.data.bitcoin.usd);
            } catch (error) {
                console.error('Failed to fetch Bitcoin price', error);
            }
        };

        const fetchHistoricalPrices = async () => {
            try {
                const response = await axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${timeRange}`);
                setHistoricalPrices(response.data.prices);
            } catch (error) {
                console.error('Failed to fetch historical Bitcoin prices', error);
            }
        };

        fetchPortfolios();
        fetchBitcoinPrice();
        fetchHistoricalPrices();
    }, [timeRange]);

    const calculateTotalHoldings = (portfolios: Portfolio[]) => {
        const total = portfolios.reduce((sum, portfolio) => sum + portfolio.amount * (bitcoinPrice || 0), 0);
        setTotalHoldings(total);
    };

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
            const portfolios = response.data;
            setPortfolios(portfolios);
            calculateTotalHoldings(portfolios);
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
                const updatedPortfolios = portfolios.filter((portfolio) => portfolio.id !== id);
                setPortfolios(updatedPortfolios);
                calculateTotalHoldings(updatedPortfolios);
            } catch (error) {
                console.error('Failed to delete portfolio', error);
            }
        }
    };

    const chartData = {
        labels: historicalPrices.map(price => new Date(price[0]).toLocaleDateString()),
        datasets: [
            {
                label: 'Bitcoin Price (USD)',
                data: historicalPrices.map(price => price[1]),
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
            },
            {
                label: 'Total Portfolio Value (USD)',
                data: historicalPrices.map(price => {
                    const correspondingPortfolioValue = portfolios.reduce((sum, portfolio) => sum + (portfolio.amount * price[1]), 0);
                    return correspondingPortfolioValue;
                }),
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: false,
            },
        },
    };

    return (
        <div className="min-h-screen flex flex-col items-center bg-orange-300">
            <Navigation />
            <FeeEstimatorWidget /> {/* Place the fee estimator widget in the corner */}
            <div className="container mx-auto p-6 bg-white rounded shadow-md mt-8">
                <h1 className="text-4xl font-bold text-orange-600 mb-6">Your Portfolios</h1>
                
                {/* Display total holdings */}
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-orange-800">Total Holdings: ${totalHoldings.toFixed(2)}</h2>
                </div>

                {/* Display current Bitcoin price */}
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-orange-800">
                        Current Bitcoin Price: {bitcoinPrice ? `$${bitcoinPrice.toFixed(2)}` : 'Loading...'}
                    </h2>
                </div>

                {/* Display time range selection */}
                <div className="mb-6">
                    <label className="text-gray-800 mr-4">Select Time Range:</label>
                    <select
                        value={timeRange}
                        onChange={(e) => setTimeRange(e.target.value)}
                        className="p-2 border border-gray-300 rounded"
                    >
                        <option value="30">30 Days</option>
                        <option value="365">1 Year</option>
                    </select>
                </div>

                {/* Display the chart */}
                <div className="mb-6 flex items-start">
                    <div className="mr-6">
                        <h2 className="text-2xl font-semibold text-orange-800 mb-4">Bitcoin Price and Portfolio Value Over Time</h2>
                        <div className="w-full max-w-md">
                            <Line data={chartData} options={chartOptions} />
                        </div>
                    </div>
                </div>

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
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-orange-500 text-gray-800"
                        />
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="Amount (BTC)"
                            required
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-orange-500 text-gray-800"
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
