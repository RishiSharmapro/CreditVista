import { Hero, Features, HowItWorks, CTA, Footer, Navbar } from './components/index.js';
import { Routes, Route } from "react-router";
import UploadPage from './components/UploadPage.jsx';
import Dashboard from './components/Dashboard.jsx';


export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={
                <>
                    <Navbar />
                    <main>
                        <Hero />
                        <Features />
                        <HowItWorks />
                        <CTA />
                    </main>
                    <Footer />
                </>} />
                <Route path="/upload" element={
                    <>  
                        <Navbar />
                        <UploadPage />
                        <Footer />
                    </>
                } />
                <Route path="/dashboard" element={
                    <>
                        <Navbar />
                        <Dashboard />
                        <Footer />
                    </>
                } />
            </Routes>
        </>
    );
}

