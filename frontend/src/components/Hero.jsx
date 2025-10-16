const Hero = () => (
    <section className="bg-white pt-32 pb-20 lg:pt-48 lg:pb-28">
        <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
                Understand Your Credit, <br className="hidden md:block" /> <span className="text-blue-600">Unlock Your Future.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                CreditVista provides a clear, comprehensive view of your credit report, helping you make smarter financial decisions with confidence.
            </p>
            <div className="flex justify-center items-center gap-4">
                <a href="/upload" className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-transform hover:scale-105 shadow-lg">Upload Your Report</a>
                <a href="/dashboard" className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-transform hover:scale-105 shadow-lg">Demo Dashboard</a>
                <a href="#features" className="bg-gray-100 text-gray-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-200 transition-all border border-gray-200">Learn More</a>
            </div>
            <div className="mt-16">
                <img src="/dashboard-ui.png" alt="CreditVista Dashboard Preview" className="w-4/5 rounded-2xl shadow-2xl mx-auto border-4 border-white" />
            </div>
        </div>
    </section>
);


export default Hero;