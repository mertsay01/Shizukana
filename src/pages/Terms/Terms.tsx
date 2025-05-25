import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Terms() {
    return (
        <>
            <Navbar />
            <section className="mt-20 min-h-screen bg-washi text-dark px-6 py-20 font-roboto-condensed">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">
                        Terms & <span className="text-kin">Conditions</span>
                    </h1>

                    <div className="space-y-10 text-lg leading-relaxed">
                        <div>
                            <h2 className="text-2xl font-semibold text-matcha mb-2">1. Introduction</h2>
                            <p>
                                Welcome to Shizukana. By accessing or using our website, you agree to be bound by these terms and conditions. If you do not agree, please do not use our services.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-matcha mb-2">2. Products & Descriptions</h2>
                            <p>
                                We strive to ensure product descriptions and images are accurate. However, slight variations in color or texture may occur due to natural ingredients and handmade elements.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-matcha mb-2">3. Pricing</h2>
                            <p>
                                All prices are listed in Euros (€) and include VAT where applicable. We reserve the right to adjust prices without prior notice.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-matcha mb-2">4. Orders & Payments</h2>
                            <p>
                                Orders are confirmed once payment is received. We accept major credit cards, PayPal, and other secure payment methods.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-matcha mb-2">5. Limitation of Liability</h2>
                            <p>
                                We are not liable for any damages resulting from the use of our site or products, beyond the amount paid by the customer for the specific purchase.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-matcha mb-2">6. Privacy</h2>
                            <p>
                                We respect your privacy and handle your data responsibly. For full details, please read our <span className="text-sakura">Privacy Policy</span>.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-matcha mb-2">7. Changes to Terms</h2>
                            <p>
                                Shizukana reserves the right to modify these terms at any time. Changes will be posted on this page and apply immediately.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Terms;
