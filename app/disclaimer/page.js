export default function Disclaimer() {
    return (
        <main className="min-h-screen bg-white text-[#111] px-6 py-16">
            <div className="mx-auto max-w-5xl">
                <h1 className="text-4xl font-extrabold text-[#005d66]">Disclaimer</h1>
                <p className="mt-6 text-lg leading-8 text-slate-700">
                    The information contained on this website is for informational purposes only.
                    It is not intended as medical advice or as a substitute for professional medical
                    consultation, diagnosis, or treatment.
                </p>

                <div className="mt-10 space-y-6 text-base leading-8 text-slate-700">
                    <p>
                        All testimonials and examples represent individual experiences and results may vary.
                        The statements on this site have not been evaluated by the FDA.
                    </p>
                    <p>
                        Always consult your healthcare provider before beginning any new supplement,
                        diet, or exercise program.
                    </p>
                    <p>
                        This website is not affiliated with any third-party brand mentioned on the site.
                    </p>
                </div>
            </div>
        </main>
    );
}
