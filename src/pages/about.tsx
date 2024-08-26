import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div className="min-h-screen bg-orange-300 p-6 flex flex-col items-center justify-center">
            <Navigation />
            <div className="bg-white p-6 rounded shadow-md max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-orange-600 mb-6">About This Project</h1>
                <p className="text-gray-700 mb-4">
                    This project is a Bitcoin Portfolio Tracker built using modern web technologies such as Next.js, React, and TypeScript.
                </p>
                <p className="text-gray-700 mb-4">
                    The backend is built with Go, utilizing secure authentication mechanisms and API integrations for real-time Bitcoin pricing.
                    The frontend is a responsive, fast, and accessible web application designed to work on all devices.
                </p>
                <p className="text-gray-700 mb-4">
                    This project was created as part of an application for a software development position. It demonstrates proficiency in full-stack development, including API design, frontend development, and deployment.
                </p>
                <p className="text-gray-700 mb-4">
                    The source code for the Next.js + TypeScript frontend can be found at:  
                    <a 
                        href="https://github.com/j1441/bitcoin-portfolio-frontend" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-orange-600 hover:underline"
                    >
                        https://github.com/j1441/bitcoin-portfolio-frontend
                    </a>.
                </p>
                <p className="text-gray-700 mb-4">
                    The source code for the Go and PostGreSQL backend can be found at:  
                    <a 
                        href="https://github.com/j1441/bitcoin-portfolio-tracker" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-orange-600 hover:underline"
                    >
                        https://github.com/j1441/bitcoin-portfolio-tracker
                    </a>.
                </p>
                <p className="text-gray-700">
                    The source code for the Flutter iOS app can be found at:  
                    <a 
                        href="https://github.com/j1441/bitcoin_portfolio_app" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-orange-600 hover:underline"
                    >
                        https://github.com/j1441/bitcoin_portfolio_app
                    </a>.
                </p>
            </div>
        </div>
    );
};

export default About;
