import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
// ... existing metadata ...
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
