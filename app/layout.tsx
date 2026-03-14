import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prashant Singh — Data Analyst → AI Engineer",
  description:
    "Data professional with 3+ years of experience. Ex-Uber. Python, SQL, ML. Building toward AI engineering and entrepreneurship.",
  authors: [{ name: "Prashant Singh" }],
  openGraph: {
    title: "Prashant Singh — Data Analyst → AI Engineer",
    description: "Data professional with 3+ years of experience. Ex-Uber.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
