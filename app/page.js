// app/page.jsx

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white w-full min-h-screen">

      {/* HERO SECTION */}
      <section className="w-full flex justify-center px-4 py-10">
        <div className="max-w-[820px] w-full text-center">

          <h1 className="text-[42px] leading-tight font-extrabold text-[#005d66]">
            The Tiny Thing I Added To My Morning Coffee Changed Everything…
          </h1>

          <p className="mt-6 text-[28px] leading-relaxed font-semibold text-[#333]">
            I thought my best years were behind me… until this surprisingly
            simple daily ritual helped me feel energized, confident,
            and back in control again.
          </p>

          {/* IMAGE */}
          <div className="flex justify-center mt-10">
            <Image
              src="/11.png"
              alt="man"
              width={360}
              quality={80}
              height={430}
              className="object-cover rounded-lg"
            />
          </div>

          {/* STORY */}
          <div className="mt-12 text-[#222] text-[22px] leading-[2.1] font-medium">

            <p>“Grandpa, can you hear me now?”</p>

            <p>Every time Noah asked, my stomach sank.</p>

            <p>
              Truth is, I could barely follow conversations anymore.
            </p>

            <p>
              Family dinners became exhausting.
            </p>

            <p>
              I kept nodding and pretending I understood what everyone was saying.
            </p>

            <p>
              The worst part?
            </p>

            <p>
              Watching my grandson repeat himself over and over while I smiled
              like everything was fine.
            </p>

            <p>
              What kind of grandpa can’t even enjoy conversations with his family?
            </p>

            <p>
              I started avoiding restaurants, phone calls… even birthdays.
            </p>

            <p>
              Then came the appointment that shook me awake.
            </p>

            <p>
              Sitting there hearing how quickly things could get worse,
              I realized something:
            </p>

            <p>
              If I didn’t make a change now,
              I was going to miss the moments that mattered most.
            </p>

          </div>
        </div>
      </section>

      {/* SECOND SECTION */}
      <section className="w-full flex justify-center px-4 py-14">
        <div className="max-w-[820px] w-full text-center">

          <div className="flex justify-center">
            <Image
              src="/12.png"
              alt="man"
              width={300}
              quality={80}
              height={340}
              className="object-cover rounded-lg"
            />
          </div>

          <h2 className="text-[36px] font-bold text-[#005d66] mt-12">
            I Knew Something Had To Change… And Finally, It Did!
          </h2>

          <div className="mt-10 text-[#222] text-[22px] leading-[2.1] font-medium">

            <p>
              Looking back, I was willing to try almost anything.
            </p>

            <p>
              And trust me… I did.
            </p>

            <p>
              Those bulky hearing devices?
            </p>

            <p>
              Uncomfortable and frustrating.
            </p>

            <p>
              Turning the TV volume up?
            </p>

            <p>
              My family hated it.
            </p>

            <p>
              Pretending I heard conversations?
            </p>

            <p>
              Exhausting.
            </p>

            <p>
              Every awkward “What?” made me feel older and more isolated.
            </p>

            <p>
              I started wondering if this was just life after 50.
            </p>

            <p>
              But deep down, I refused to believe the best moments of my life
              were supposed to feel this distant.
            </p>

          </div>
        </div>
      </section>

      {/* HEADING BAR */}
      <section className="w-full mt-8">
        <div className="bg-[#005d66] py-5 px-4 text-center">
          <h2 className="text-white text-[32px] font-bold">
            The Discovery That Completely Changed My Life!
          </h2>
        </div>
      </section>

      {/* CONTENT */}
      <section className="w-full flex justify-center px-4 py-14">
        <div className="max-w-[820px] w-full text-center">

          <div className="text-[#222] text-[22px] leading-[2.1] font-medium">

            <p>
              Late one evening while scrolling Facebook,
              I came across something people were calling a
              “Morning Coffee Trick.”
            </p>

            <p>
              Honestly? I almost ignored it.
            </p>

            <p>
              But the next day, my old friend Mark stopped by looking happier,
              sharper, and more energetic than I’d seen him in years.
            </p>

            <p>
              When I asked what changed,
              he mentioned the exact same coffee drops I saw online.
            </p>

            <p>
              Now I was curious.
            </p>

            <p>
              “No complicated routines,” he told me.
            </p>

            <p>
              “Just add a few drops to your morning coffee.”
            </p>

            <p>
              I’ll admit… I was skeptical at first.
            </p>

            <p>
              But after everything I’d been struggling with,
              I figured I had nothing left to lose.
            </p>

            <p>
              So the very next morning,
              I tried it for myself.
            </p>

          </div>

          {/* ARROW */}
          <div className="mt-12 text-[90px] text-[#57d487] animate-bounce">
            ↓
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-4">
            <Link
              target="_blank"
              href={"https://www.metabodrops.com/welcome?hop=onesumit"}
            >
              <button className="bg-[#ffd500] hover:bg-yellow-400 transition-all duration-300 text-black text-[24px] font-bold px-10 py-5 rounded-md shadow-lg">
                Watch The Free Video Before It’s Taken Down →
              </button>

            </Link>
          </div>

        </div>
      </section>

      {/* RESULT HEADING */}
      <section className="w-full mt-10">
        <div className="bg-[#005d66] py-5 px-4 text-center">
          <h2 className="text-white text-[32px] font-bold">
            What Happened After That Still Feels Unreal To Me…
          </h2>
        </div>
      </section>

      {/* RESULT CONTENT */}
      <section className="w-full flex justify-center px-4 py-14">
        <div className="max-w-[820px] w-full text-center">

          <div className="text-[#222] text-[22px] leading-[2.1] font-medium">

            <p>
              Today, I finally feel like myself again.
            </p>

            <p>
              Conversations are easier.
            </p>

            <p>
              Family dinners don’t leave me frustrated anymore.
            </p>

            <p>
              And for the first time in years,
              I’m not constantly asking people to repeat themselves.
            </p>

            <p>
              My grandson actually laughs when we talk now
              instead of saying, “Never mind.”
            </p>

            <p>
              Even my family noticed the difference almost immediately.
            </p>

            <p>
              I’m more confident, more social,
              and honestly… happier than I’ve been in a long time.
            </p>

            <p>
              Last weekend, I sat through an entire family gathering
              without feeling lost or embarrassed.
            </p>

            <p>
              Looking around at everyone smiling and talking,
              it hit me:
            </p>

            <p>
              I almost missed these moments.
            </p>

            <p>
              Turns out, one small daily change made a much bigger difference
              than I ever expected.
            </p>

            <p>
              And honestly?
            </p>

            <p>
              I’m grateful every single day that I decided to try it.
            </p>

          </div>

          {/* IMAGE */}
          <div className="flex justify-center mt-12">
            <Image
              src="/13.png"
              alt="man"
              width={300}
              height={430}
              quality={100}
              className="object-cover rounded-lg"
            />
          </div>

          {/* FINAL TEXT */}
          <div className="mt-12 text-[#222] text-[22px] leading-[2.1] font-medium">

            <p>
              Don’t wait the way I did.
            </p>

            <p>
              The moments with your family are too important to miss.
            </p>

            <p>
              Sometimes the simplest daily habit
              can create the biggest transformation.
            </p>

          </div>

          {/* ARROW */}
          <div className="mt-12 text-[90px] text-[#57d487] animate-bounce">
            ↓
          </div>

          {/* FINAL CTA */}
          <div className="flex justify-center mt-4">
            <Link
              target="_blank"
              href={"https://www.metabodrops.com/welcome?hop=onesumit"}
            >
              <button className="bg-[#ffd500] hover:bg-yellow-400 transition-all duration-300 text-black text-[24px] font-bold px-10 py-5 rounded-md shadow-lg">
                Watch The Free Video Before It’s Taken Down →
              </button>

            </Link>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-[#24363a] mt-20 py-14 px-5 text-center">

        <p className="text-white text-[15px]">
          © Copyright 2026 - All Rights Reserved
        </p>

        <div className="mt-5 flex justify-center gap-5 flex-wrap text-[14px] text-white">
          <Link href="/privacypolicy" className="hover:text-[#ffd500]">Privacy Policy</Link>
          <Link href="/termsofservice" className="hover:text-[#ffd500]">Terms & Conditions</Link>
          <Link href="/disclaimer" className="hover:text-[#ffd500]">Disclaimer</Link>
          <Link href="/contactus" className="hover:text-[#ffd500]">Contact Us</Link>
        </div>

        <div className="mt-8 max-w-[1000px] mx-auto text-gray-300 text-[12px] leading-7">

          <p>
            This website is not affiliated with Facebook or Meta Platforms Inc.
          </p>

          <p>
            The statements on this page have not been evaluated by the FDA.
          </p>

          <p>
            Results may vary from person to person depending on lifestyle,
            body type, and routine.
          </p>

          <p>
            This content is for informational purposes only and does not replace
            professional medical advice.
          </p>

        </div>

      </footer>
    </main>
  );
}