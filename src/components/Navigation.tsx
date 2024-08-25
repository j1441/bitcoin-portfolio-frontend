import Link from 'next/link';

const Navigation = () => {
    return (
        <nav>
            <ul style={{ display: 'flex', gap: '10px', listStyle: 'none', padding: 0 }}>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/login">Login</Link>
                </li>
                <li>
                    <Link href="/signup">Signup</Link>
                </li>
                <li>
                    <Link href="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
