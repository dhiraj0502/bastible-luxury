import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bastible | Seasonal Irish Dining",
  description:
    "A concept redesign showcasing a luxury digital experience for Bastible, inspired by contemporary Irish dining and editorial design.",
  keywords: [
    "Bastible",
    "Irish Restaurant",
    "Fine Dining",
    "Michelin Guide",
    "Seasonal Dining",
    "Restaurant Dublin",
    "Luxury Restaurant",
  ],
  authors: [{ name: "Dhiraj" }],
  openGraph: {
    title: "Bastible | Seasonal Irish Dining",
    description:
      "Luxury concept redesign for Bastible restaurant.",
    type: "website",
    locale: "en_IE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bastible | Seasonal Irish Dining",
    description:
      "Luxury concept redesign for Bastible restaurant.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${manrope.variable} antialiased bg-[#0F0F0F] text-[#F6F3EE]`}
      >
        {children}
      </body>
    </html>
  );
}