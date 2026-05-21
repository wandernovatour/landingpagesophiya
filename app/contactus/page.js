import Link from "next/link";

export default function ContactUs() {
    return (
        <main className="min-h-screen bg-white text-[#111] px-6 py-16">
            <div className="mx-auto max-w-5xl">
                <h1 className="text-4xl font-extrabold text-[#005d66]">Contact Us</h1>
                <p className="mt-6 text-lg leading-8">
                    Have a question about the site or need help with your order?
                    Our team is here to help.
                </p>

                <div className="mt-10 grid gap-8 sm:grid-cols-2">
                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                        <h2 className="text-2xl font-semibold text-[#24363a]">Email Support</h2>
                        <p className="mt-4 text-base leading-7">
                            Send us a message and we will reply within one business day.
                        </p>
                        <p className="mt-4 text-base font-medium">support@drshophia.com</p>
                    </div>

                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                        <h2 className="text-2xl font-semibold text-[#24363a]">General Inquiries</h2>
                        <p className="mt-4 text-base leading-7">
                            If you prefer, call us for fast assistance.
                        </p>
                        <p className="mt-4 text-base font-medium">+1 (800) 123-4567</p>
                    </div>
                </div>

                <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                    <h2 className="text-2xl font-semibold text-[#005d66]">Need help with a page?</h2>
                    <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700">
                        If you were looking for Privacy Policy, Terms & Conditions, or Disclaimer information, use the links below to navigate.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                        <Link href="/privacypolicy" className="rounded-full bg-[#005d66] px-5 py-3 text-sm font-semibold text-white hover:bg-[#004d57]">
                            Privacy Policy
                        </Link>
                        <Link href="/termsofservice" className="rounded-full bg-[#005d66] px-5 py-3 text-sm font-semibold text-white hover:bg-[#004d57]">
                            Terms of Service
                        </Link>
                        <Link href="/disclaimer" className="rounded-full bg-[#005d66] px-5 py-3 text-sm font-semibold text-white hover:bg-[#004d57]">
                            Disclaimer
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
