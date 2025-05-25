import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Pp() {
    return (
        <>
            <Navbar />
            <section className="mt-20 min-h-screen bg-washi text-dark px-6 py-20 font-roboto-condensed">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">
                        Privacy <span className="text-sakura">Policy</span>
                    </h1>

                    <div className="space-y-10 text-lg leading-relaxed">
                        <div>
                            <h2 className="text-2xl font-semibold text-matcha mb-2">1. Introduction</h2>
                            <p>
                                Shizukana respects your privacy. This policy outlines how we collect, use, and protect your personal information when you use our website or make a purchase.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-matcha mb-2">2. What We Collect</h2>
                            <p>
                                We collect your name, email, shipping address, and payment details when you place an order. We also collect basic data like IP address and browser type for analytics.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-matcha mb-2">3. How We Use Your Data</h2>
                            <ul className="list-disc ml-6 mt-2 space-y-2">
                                <li>To process and ship your order</li>
                                <li>To send order confirmations and updates</li>
                                <li>To improve our website and services</li>
                                <li>To respond to customer service requests</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-matcha mb-2">4. Cookies</h2>
                            <p>
                                We use cookies to enhance your experience, including remembering your cart and measuring site performance. You can control cookies in your browser settings.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-matcha mb-2">5. Third-Party Services</h2>
                            <p>
                                We use secure third-party services such as payment processors and shipping providers. These services only receive the data necessary to complete your order.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-matcha mb-2">6. Your Rights</h2>
                            <p>
                                You may request access to, correction of, or deletion of your personal data at any time by contacting us at <span className="text-sakura">support@shizukana-tea.com</span>.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-matcha mb-2">7. Policy Updates</h2>
                            <p>
                                We may update this policy occasionally. Any changes will be posted on this page with a new effective date.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Pp;
