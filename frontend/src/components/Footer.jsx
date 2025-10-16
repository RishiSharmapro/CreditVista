const Footer = () => (
    <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-6 text-center">
            <p className="text-lg font-semibold text-white mb-2">CreditVista</p>
            <div className="flex justify-center space-x-6 mb-6">
                <a href="#" className="hover:text-white transition-colors">About Us</a>
                <a href="#" className="hover:text-white transition-colors">Contact</a>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
            <p>&copy; 2025 CreditVista. All Rights Reserved.</p>
        </div>
    </footer>
);

export default Footer;