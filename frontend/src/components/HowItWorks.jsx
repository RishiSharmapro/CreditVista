const HowItWorksStep = ({ number, title, children }) => (
    <div className="flex flex-col items-center">
        <div className="text-4xl font-bold text-blue-600 bg-blue-100 rounded-full h-16 w-16 flex items-center justify-center mb-4">{number}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{children}</p>
    </div>
);

const HowItWorks = () => (
    <section id="how-it-works" className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Get Started in 3 Easy Steps</h2>
                <p className="text-lg text-gray-600 mt-2">Access your complete credit overview in minutes.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                <HowItWorksStep number="1" title="Provide Your XML">
                    Simply provide your credit report XML file. Our system is designed for secure and fast processing.
                </HowItWorksStep>
                <HowItWorksStep number="2" title="Get Instant Analysis">
                    Our powerful parser instantly transforms your data into a beautiful, easy-to-read dashboard.
                </HowItWorksStep>
                <HowItWorksStep number="3" title="Track Your Financial Health">
                    Use the dashboard to monitor your credit score, identify issues, and plan your financial goals.
                </HowItWorksStep>
            </div>
        </div>
    </section>
);


export default HowItWorks;