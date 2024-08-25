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
                <p className="text-gray-700">
                    This project was created as part of an application for a software development position. It demonstrates proficiency in full-stack development, including API design, frontend development, and deployment.
                </p>
            </div>
        </div>
    );
};

export default About;
