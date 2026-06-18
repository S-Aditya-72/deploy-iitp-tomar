import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

// Load the modern UI font
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

// Load the elite, prestigious serif font
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
});

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
      {/* Inject both font variables into the body */}
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-slate-50 text-slate-900 min-h-screen flex flex-col`}>
        <Navbar /> 
        
        <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        
        <footer className="bg-slate-900 text-slate-400 py-10 text-center text-sm mt-auto border-t-4 border-iitp-blue">
          <p className="font-serif text-lg text-white mb-2 tracking-wide">Dr. Nutan Kumar Tomar</p>
          <p>© {new Date().getFullYear()} All Rights Reserved.</p>
          <p className="mt-1 uppercase tracking-wider text-xs font-semibold text-slate-500">Department of Mathematics, Indian Institute of Technology Patna</p>
        </footer>
      </body>
    </html>
  );
}