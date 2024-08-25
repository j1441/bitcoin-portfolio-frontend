import { useState } from 'react';
import axios from 'axios';
import Navigation from '../components/Navigation';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/signup`, {
                email,
                password,
            });
            setMessage(response.data);
        } catch (error) {
            setMessage('Signup failed');
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-orange-300">
            <Navigation />
            <div className="bg-white p-6 rounded shadow-md w-80">
                <h1 className="text-3xl font-bold text-orange-600 mb-6">Signup</h1>
                <form onSubmit={handleSignup} className="space-y-4">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    <button
                        type="submit"
                        className="w-full p-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition duration-300"
                    >
                        Signup
                    </button>
                </form>
                {message && <p className="mt-4 text-red-500">{message}</p>}
            </div>
        </div>
    );
};

export default Signup;
