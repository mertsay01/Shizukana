import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

function Contact() {
    return (
        <>
            <Navbar />
            <section className="mt-20 bg-washi text-dark px-6 py-20 font-roboto-condensed">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-[55px] font-bold mb-10 text-center">
                        <span className="text-sakura">Contact</span> Us
                    </h1>

                    <p className="text-lg text-center mb-12">
                        We'd love to hear from you. For inquiries, feedback, or collaboration, please use the form below.
                    </p>

                    <form className="space-y-6">
                        <div className="flex flex-col">
                            <label htmlFor="name" className="mb-1 font-semibold text-kin">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="p-3 border border-matcha rounded bg-white"
                                placeholder="Your name"
                                required
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="email" className="mb-1 font-semibold text-kin">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="p-3 border border-matcha rounded bg-white"
                                placeholder="you@example.com"
                                required
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="message" className="mb-1 font-semibold text-kin">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={5}
                                className="p-3 border border-matcha rounded bg-white"
                                placeholder="How can we help you?"
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="py-3 px-6 text-lg text-white rounded bg-button-green hover:bg-button transition duration-300 cursor-pointer font-roboto-condensed font-semibold">
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Contact;
