import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Sr() {
    return (
        <>
            <Navbar />
            <section className="mt-20 bg-washi text-dark px-6 py-20 font-roboto-condensed">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">
                        <span className="text-sakura">Shipping</span> & <span className="text-matcha">Returns</span>
                    </h1>

                    <div className="space-y-10 text-lg leading-relaxed">
                        <div>
                            <h2 className="text-2xl font-semibold text-kin mb-2">Shipping Information</h2>
                            <p>
                                We currently ship to over <span className="text-matcha">25 countries</span> worldwide.
                                All orders are processed within <span className="text-sakura">1–3 business days</span>.
                                Delivery times may vary depending on your location.
                            </p>
                            <p className="mt-2">
                                Standard shipping is free for orders over €50. Tracked and express options are available
                                at checkout.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-kin mb-2">Returns Policy</h2>
                            <p>
                                Not satisfied with your order? You may return unopened items within
                                <span className="text-sakura"> 14 days of delivery</span> for a full refund.
                            </p>
                            <p className="mt-2">
                                Return shipping costs are the responsibility of the customer unless the item was damaged
                                or incorrect. Please contact us before returning any products.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-kin mb-2">Damaged or Incorrect Items</h2>
                            <p>
                                If your order arrives damaged or incorrect, please email us within
                                <span className="text-matcha"> 7 days of receipt</span>. We’ll replace the item or issue
                                a refund immediately.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-kin mb-2">Contact Us</h2>
                            <p>
                                For any shipping or return-related inquiries, feel free to reach out to us at
                                <span className="text-sakura"> support@shizukana.com</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Sr;
