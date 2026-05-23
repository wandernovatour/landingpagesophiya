import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

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
  description:
    "Discover the latest wellness and lifestyle support at DrShopHia.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Meta Pixel Code */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
        >
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)n=f.fbq;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}
            (window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', '1773340400493531');
            fbq('track', 'PageView');
          `}
        </Script>

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1773340400493531&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {children}

        {/* Floating CTA Button */}
        <a
          href="https://www.metabodrops.com/welcome?hop=onesumit"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-10 right-10 bg-[#107E8B] text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          Special Video <span className="text-rose-500">❤</span>
        </a>
      </body>
    </html>
  );
}