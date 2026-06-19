import "../globals.css";
import Navbar from "@/components/Navbar";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import Link from "next/link";

// We can safely hardcode the global footer details here to match the original site perfectly.
export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-grow w-full flex flex-col items-center">
        {children}
      </main>

      {/* THE NEW ACADEMIC "FAT FOOTER" */}
      <footer className="bg-slate-900 text-slate-300 border-t-[6px] border-iitp-blue mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
            
            {/* Column 1: Identity & Address */}
            <div>
              <h3 className="font-serif text-2xl text-white mb-6">Dr. N.K. Tomar</h3>
              <div className="space-y-3 text-sm leading-relaxed text-slate-400">
                <p className="font-medium text-white">{`Department of Mathematics`}</p>
                <p>{`Indian Institute of Technology Patna`}</p>
                <div className="flex items-start gap-3 mt-4">
                  <MapPin className="w-5 h-5 text-iitp-blue flex-shrink-0 mt-0.5" />
                  <p>{`Bihta-801106, Patna, Bihar (India)`}</p>
                </div>
              </div>
            </div>

            {/* Column 2: Contact Details */}
            <div>
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Contact Information</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-iitp-blue" />
                  <a href="mailto:nktomar@iitp.ac.in">nktomar@iitp.ac.in</a>
                </div>
                <div className="flex items-center gap-3 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-iitp-blue" />
                  <a href="mailto:chinidma@gmail.com">chinidma@gmail.com</a>
                </div>
                <div className="flex items-center gap-3 hover:text-white transition-colors mt-4">
                  <Phone className="w-4 h-4 text-iitp-blue" />
                  <a href="tel:+919470836610">+91-(0)-94708 36610</a>
                </div>
                <div className="flex items-center gap-3 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-iitp-blue" />
                  <a href="tel:+916115233021">+91-(0)-6115-233-021</a>
                </div>
              </div>
            </div>

            {/* Column 3: Quick Links (From Original Site) */}
            <div>
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Quick Links</h3>
              <div className="grid grid-cols-2 gap-y-3 text-sm">
                <Link href="/" className="hover:text-iitp-blue transition-colors flex items-center gap-2"> Home</Link>
                <Link href="/profile" className="hover:text-iitp-blue transition-colors flex items-center gap-2"> Profile</Link>
                <Link href="/research" className="hover:text-iitp-blue transition-colors flex items-center gap-2"> Research</Link>
                <Link href="/thesis" className="hover:text-iitp-blue transition-colors flex items-center gap-2"> Thesis</Link>
                <Link href="/projects" className="hover:text-iitp-blue transition-colors flex items-center gap-2"> Projects</Link>
                <Link href="/honours" className="hover:text-iitp-blue transition-colors flex items-center gap-2"> Honours</Link>
                <Link href="/memberships" className="hover:text-iitp-blue transition-colors flex items-center gap-2"> Membership</Link>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-slate-800 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
            <p>© {new Date().getFullYear()} Dr. Nutan Kumar Tomar. All Rights Reserved.</p>
            <p className="mt-2 md:mt-0 uppercase tracking-wider">Indian Institute of Technology Patna</p>
          </div>
        </div>
      </footer>
    </div>
  );
}