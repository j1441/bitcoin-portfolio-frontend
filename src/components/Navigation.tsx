import Link from 'next/link';

const Navigation = () => {
    return (
        <nav className="bg-orange-500 text-white py-4">
            <div className="container mx-auto flex justify-center space-x-4">
                <Link href="/login">
                    <a className="block text-white bg-orange-500 px-6 py-2 rounded shadow hover:bg-orange-600 transition duration-300 text-lg no-underline">
                        Log In
                    </a>
                </Link>
                <Link href="/signup">
                    <a className="block text-white bg-orange-500 px-6 py-2 rounded shadow hover:bg-orange-600 transition duration-300 text-lg no-underline">
                        Sign Up
                    </a>
                </Link>
                <Link href="/about">
                    <a className="block text-white bg-orange-700 px-6 py-2 rounded shadow hover:bg-orange-800 transition duration-300 font-bold text-lg no-underline">
                        About This Project
                    </a>
                </Link>
            </div>
        </nav>
    );
};

export default Navigation;
