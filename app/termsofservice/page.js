export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-white text-[#111] px-6 py-16">
            <div className="mx-auto max-w-5xl">
                <h1 className="text-4xl font-extrabold text-[#005d66]">Terms of Service</h1>
                <p className="mt-6 text-lg leading-8 text-slate-700">
                    Please read these Terms of Service carefully before using this website.
                    By accessing or using the site, you agree to be bound by these terms.
                </p>

                <div className="mt-10 space-y-6 text-base leading-8 text-slate-700">
                    <p>
                        We reserve the right to change or update these terms at any time.
                        Continued use of the website after changes constitutes acceptance.
                    </p>
                    <p>
                        This site is provided "as is" without any warranties, express or implied.
                    </p>
                    <p>
                        We are not responsible for any direct or indirect loss arising from use of this website.
                    </p>
                </div>
            </div>
        </main>
    );
}
