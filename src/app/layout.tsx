import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dr. Nutan Kumar Tomar | IIT Patna",
  description: "Academic Portfolio of Dr. Nutan Kumar Tomar, Department of Mathematics, IIT Patna.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 text-slate-900 min-h-screen flex flex-col`}>
        {/* The Navbar will now appear on every page */}
        <Navbar /> 
        
        {/* This main tag ensures the content is centered and leaves room for the footer */}
        <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        
        {/* Global Footer */}
        <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm mt-auto">
          <p>© {new Date().getFullYear()} Dr. Nutan Kumar Tomar. All Rights Reserved.</p>
          <p className="mt-1">Department of Mathematics, Indian Institute of Technology Patna</p>
        </footer>
      </body>
    </html>
  );
}