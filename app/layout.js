import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DrShopHia - Home",
  description: "Discover the latest wellness and lifestyle support at DrShopHia.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}

        {/* fixed section */}


        <Link href={"https://www.metabodrops.com/welcome?hop=onesumit"} target="_blank">
          <button className="fixed bottom-10 right-10 cursor-pointer bg-[#107E8B] text-white px-4 py-2 rounded-full">
            Special Video <span className="text-rose-500">❤</span>
          </button>
        </Link>
      </body>
    </html>
  );
}
