import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div>
            <Navigation />
            <h1>About This Project</h1>
            <p>This project is a Bitcoin Portfolio Tracker built using modern web technologies such as Next.js, React, and TypeScript.</p>
            <p>
                The backend is built with Go, utilizing secure authentication mechanisms and API integrations for real-time Bitcoin pricing.
                The frontend is a responsive, fast, and accessible web application designed to work on all devices.
            </p>
            <p>
                This project was created as part of an application for a software development position. It demonstrates proficiency in full-stack development, including API design, frontend development, and deployment.
            </p>
        </div>
    );
};

export default About;
