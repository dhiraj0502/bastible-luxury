import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Loose Canon | Natural Wine & Irish Cheese",
  description:
    "Concept redesign for Loose Canon, Dublin's independent natural wine bar and Irish cheese shop.",
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
className={`${cormorant.variable} ${manrope.variable}`}
>
        {children}
      </body>
    </html>
  );
}