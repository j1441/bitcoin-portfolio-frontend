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
        <div>
            <Navigation />
            <h1>Signup</h1>
            <form onSubmit={handleSignup}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit">Signup</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Signup;
