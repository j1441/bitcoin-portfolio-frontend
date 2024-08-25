import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            console.log('API URL:', process.env.NEXT_PUBLIC_API_URL);
            console.error('API URL (error):', process.env.NEXT_PUBLIC_API_URL);
            console.warn('API URL (warn):', process.env.NEXT_PUBLIC_API_URL);
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
                email,
                password,
            }, { withCredentials: true });
            setMessage('Login successful');
            router.push('/portfolio');
        } catch (error) {
            console.error('Login error:', error);
            console.error('This is an error log');
            console.warn('This is a warning log');
            setMessage('Login failed');
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
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
                <button type="submit">Login</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Login;
