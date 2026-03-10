import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nicky Pillai | Senior Product Manager",
    template: "%s | Nicky Pillai",
  },
  description:
    "Senior Product Manager with 14+ years in IT. Specializing in SaaS, HRMS, telematics, and digital transformation across the Middle East. Available for consulting.",
  keywords: [
    "Product Manager",
    "Dubai",
    "Smart Mobility",
    "HRMS",
    "Digital Transformation",
    "Agile",
    "Consulting",
    "SaaS",
    "Telematics",
  ],
  authors: [{ name: "Nicky Pillai" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Nicky Pillai Portfolio",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} font-sans antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
