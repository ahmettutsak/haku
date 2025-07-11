import type { Metadata } from "next";
import { Cinzel, Mulish, Noto_Sans_Javanese } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});

const javanese = Noto_Sans_Javanese({
  variable: "--font-javanese",
  subsets: ["javanese"],
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "HAKU - The Art of Sushi Excellence",
  description:
    "Where artistry meets tradition. At HAKU, sushi is a meticulously crafted experience—an elegant fusion of precision and purity. Each dish is a masterpiece, designed to evoke harmony and indulgence, bringing the essence of luxury sushi dining to life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${mulish.variable} ${javanese.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

function Navbar() {
  return (
    <div className="sticky top-0 z-10 mt-8">
      <div className="flex justify-center w-full items-center absolute">
        <h1 className="text-2xl bg-[var(--red)] rounded-full p-4 border-[var(--yellow)] border-4">
          ハク
        </h1>
      </div>
    </div>
  );
}
