import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Skillahead | Next Era of Technical Mastery",
  description: "Accelerate your career with industry-vetted technical education and world-class specializations in Data and Programming.",
  keywords: ["Technical Mastery", "Data Science School", "Programming Education", "Skillahead", "Tech Career Transition", "Professional Upskilling"],
  authors: [{ name: "Skillahead Team" }],
  openGraph: {
    title: "Skillahead | Next Era of Technical Mastery",
    description: "Accelerate your career with industry-vetted technical education and world-class specializations.",
    url: "https://skillahead.ng",
    siteName: "Skillahead",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Skillahead Technical Mastery",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skillahead | Next Era of Technical Mastery",
    description: "Accelerate your career with industry-vetted technical education and world-class specializations.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/icon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased`}>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
