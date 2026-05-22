// app/page.jsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#fff] w-full min-h-screen overflow-x-hidden font-sans">

      {/* HERO SECTION */}
      <section className="w-full flex justify-center px-4 pt-4 pb-6 text-center">
        <div className="max-w-[760px] w-full">

          <h1 className="text-[34px] md:text-[52px] leading-[1.1] font-extrabold text-[#004550]">
            That Helped Me Feel Lighter, Happier, And More Like Myself Again!
          </h1>

          <p className="mt-4 text-[22px] md:text-[34px] font-medium text-[#333] leading-relaxed">
            I never imagined something this simple could help me feel more
            confident, energized, and comfortable in my own body again...
          </p>

          {/* HERO IMAGE */}
          <div className="flex justify-center mt-6">
            <Image
              src="/11.png"
              alt="After Transformation"
              width={300}
              height={500}
              quality={100}
              className="object-cover w-full max-w-[300px] h-auto"
            />
          </div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="w-full flex justify-center px-4 pb-8 text-center">
        <div className="max-w-[760px] w-full text-[#222] text-[18px] md:text-[20px] leading-[1.8] font-normal space-y-4">

          <p>“Grandma, why do you always sit down so much?”</p>

          <p>That question hit me harder than anything else.</p>

          <p>I used to avoid doing almost everything.</p>

          <p>Too tired to go shopping.</p>

          <p>Too exhausted to play outside.</p>

          <p>Too uncomfortable even walking through the grocery store.</p>

          <p>The truth?</p>

          <p>I barely recognized the woman staring back at me anymore.</p>

          <p>Every staircase felt exhausting.</p>

          <p>My energy disappeared before the afternoon even started.</p>

          <p>And every photo reminded me how much I had changed.</p>

          <p>After my last doctor appointment, I realized something had to change.</p>

          <p>Not later.</p>

          <p>Now.</p>

          <p>
            Because I didn’t want to spend the rest of my life sitting on the
            sidelines while everyone else kept living.
          </p>

          {/* BEFORE IMAGE */}
          <div className="flex justify-center my-8">
            <Image
              src="/12.png"
              alt="Before Transformation"
              width={300}
              height={500}
              quality={100}
              className="object-cover w-full max-w-[300px] h-auto"
            />
          </div>

          <p>
            Looking back, I was desperate enough to try almost anything.
          </p>

          <p>And believe me... I did.</p>

          <p>Low-carb? Miserable.</p>

          <p>Salads every day? Lasted a week.</p>

          <p>Those intense “fat burning” workouts?</p>

          <p>My knees still haven’t forgiven me.</p>

          <p>
            I counted calories, skipped desserts, bought expensive supplements...
          </p>

          <p>and somehow still felt stuck.</p>

          <p>Every failed attempt made me feel more hopeless.</p>

          <p>
            I honestly started wondering if maybe this was just life after 50.
          </p>

          </div>
      </section>

      {/* TEAL BANNER */}
      <section className="w-full mt-2 px-4">
        <div className="bg-[#004d56] py-3 text-center">
          <h2 className="text-white text-[22px] md:text-[34px] font-bold">
            The Discovery That Changed Everything...
          </h2>
        </div>
      </section>

      {/* DISCOVERY SECTION */}
      <section className="w-full flex justify-center px-4 py-8 text-center">
        <div className="max-w-[760px] w-full text-[#222] text-[18px] md:text-[20px] leading-[1.8] font-normal space-y-4">

          <p>
            Late one evening while scrolling online, I came across people
            talking about a strange “Morning Coffee Trick.”
          </p>

          <p>Honestly?</p>

          <p>I almost ignored it.</p>

          <p>
            But the next morning, my friend Linda stopped by looking slimmer,
            happier, and more energetic than I’d seen her in years.
          </p>

          <p>I had to ask what changed.</p>

          <p>
            That’s when she mentioned the exact same coffee trick I saw online.
          </p>

          <p>Now I was curious.</p>

          <p>“No crazy meal plans,” she told me.</p>

          <p>
            “No exhausting workouts. Just one simple morning habit.”
          </p>

          <p>At first, I was skeptical.</p>

          <p>
            But after years of frustration, I figured I had nothing left to lose.
          </p>

          <p>So the next morning...</p>

          <p>I tried it myself.</p>

          {/* ARROW */}
          <div className="pt-4 flex justify-center">
            <div className="text-[60px] md:text-[70px] leading-none text-[#54d6d6] animate-bounce select-none">
              ⌄
            </div>
          </div>

          {/* CTA BUTTON */}
          <div className="flex justify-center pt-2">
            <Link
              target="_blank"
              href="https://www.metabodrops.com/welcome?hop=onesumit"
              className="w-full max-w-[450px] inline-block"
            >
              <button className="w-full bg-[#ffe100] hover:bg-yellow-400 text-black text-[20px] font-medium px-6 py-3 rounded shadow-[0_5px_10px_rgba(0,0,0,0.25)] border-b-[4px] border-[#5CA796] transition-all">
                Show Me The Morning Coffee Trick →
              </button>
            </Link>
          </div>

        </div>
      </section>

      {/* SECOND TEAL BANNER */}
      <section className="w-full mt-2 px-4">
        <div className="bg-[#004d56] py-3 text-center">
          <h2 className="text-white text-[22px] md:text-[34px] font-bold">
            What Happened Next Still Feels Unreal...
          </h2>
        </div>
      </section>

      {/* RESULTS SECTION */}
      <section className="w-full flex justify-center px-4 py-8 text-center">
        <div className="max-w-[760px] w-full text-[#222] text-[18px] md:text-[20px] leading-[1.8] font-normal space-y-4">

          <p className="text-[22px] md:text-[24px]">Today, I finally feel like ME again.</p>

          <p>My clothes fit better.</p>

          <p>My energy lasts all day.</p>

          <p>
            And for the first time in years, I don’t dread looking in the mirror anymore.
          </p>

          <p>Friends keep asking what I’m doing differently.</p>

          <p>
            Even my family noticed the change almost immediately.
          </p>

          <p>
            I have energy to walk, travel, shop, and actually enjoy time with my grandkids again.
          </p>

          <p>That afternoon energy crash?</p>

          <p>Gone.</p>

          <p>I don’t feel constantly sluggish anymore.</p>

          {/* FINAL IMAGE */}
          <div className="flex justify-center my-8">
            <Image
              src="/13.png"
              alt="Final Transformation"
              width={300}
              height={500}
              quality={100}
              className="object-cover w-full max-w-[300px] h-auto"
            />
          </div>

          <p>And honestly?</p>

          <p>I feel happier than I have in a very long time.</p>

          <p>
            Last month, my granddaughter asked me to race her through the park...
          </p>

          <p>and this time?</p>

          <p>I actually could.</p>

          <p>
            Looking back now, it scares me thinking about how close I came to
            accepting that miserable version of myself forever.
          </p>

          <p>
            Turns out, one tiny daily habit changed far more than I ever imagined.
          </p>

          <p>Don’t wait the way I did.</p>

          <p>
            Tap below to discover the Morning Coffee Trick everyone’s talking about 👇
          </p>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-[#233539] py-10 px-5 text-center text-gray-300 text-[18px] leading-6 mt-10">

        <p className="text-[12px] mb-4">
          © Copyright 2026 - All Rights Reserved
        </p>

        <div className="flex justify-center gap-3 flex-wrap text-[18px] mb-5 text-white">
          <Link href="/privacypolicy" className="hover:underline">
            Privacy Policy
          </Link>

          <span>|</span>

          <Link href="/termsofservice" className="hover:underline">
            Terms and Conditions
          </Link>

          <span>|</span>

          <Link href="/disclaimer" className="hover:underline">
            Disclaimer
          </Link>

          <span>|</span>

          <Link href="/contactus" className="hover:underline">
            Contact Us
          </Link>
        </div>

        <div className="max-w-[1000px] text-[18px] mx-auto space-y-3 text-gray-300">

          <p>
            This site is not a part of the Facebook website or Facebook Inc.
            Additionally, This site is NOT endorsed by Facebook in any way.
            FACEBOOK is a trademark of FACEBOOK, Inc.
          </p>

          <p className="font-semibold">
            FDA Compliance
          </p>

          <p>
            The information on this website has not been evaluated by the Food & Drug Administration
            or any other regulatory body. We do not aim to diagnose, treat, cure, or prevent any
            health conditions or diseases. The content is provided for educational purposes only.
          </p>

          <p>
            Results May Vary: Results and testimonials featured on this site are not a guarantee
            of specific outcomes. Individual results may vary.
          </p>

          <p>
            Some names and personal identifying details have been changed to protect privacy.
          </p>

          <p>
            No individual result should be considered typical.
          </p>

          <p>
            Enjoy & Thank you!
          </p>

        </div>
      </footer>
    </main>
  );
}