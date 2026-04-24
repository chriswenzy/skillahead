import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

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
        url: "/og-image.png?v=2",
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
    images: ["/og-image.png?v=2"],
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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Skillahead",
    "url": "https://skillahead.ng",
    "logo": "https://skillahead.ng/logo.png",
    "description": "The Next Era of Technical Mastery. Specialized training in Data Science, Programming, and Business Intelligence.",
    "sameAs": [
      "https://linkedin.com/company/skillahead",
      "https://instagram.com/skillahead"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Skillahead",
    "url": "https://skillahead.ng",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://skillahead.ng/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en" className={`${poppins.variable} antialiased`}>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=verified" />
      </head>
      <body className="flex flex-col min-h-screen">
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
