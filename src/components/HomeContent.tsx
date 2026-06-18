"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

// We define the shape of the data coming from Sanity
interface HomeContentProps {
  personal: {
    name: string;
    designation: string;
    department: string;
    institute: string;
    researchInterest: string;
    emails: string[];
    phones: string[];
  };
}

export default function HomeContent({ personal }: HomeContentProps) {
  return (
    <div className="w-full">
      <div className="relative bg-white overflow-hidden min-h-[80vh] flex items-center rounded-sm border border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-stretch relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-[55%] py-16 px-6 lg:pl-16 lg:pr-12 flex flex-col justify-center"
          >
            <h2 className="text-iitp-blue font-bold tracking-widest uppercase text-sm mb-6 flex items-center gap-3">
              <span className="w-10 h-[2px] bg-iitp-blue inline-block"></span>
              {personal.designation}
            </h2>
            
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-[5rem] text-slate-900 tracking-tight leading-[1.05] mb-8">
              {personal.name.replace("Dr. ", "")}
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-lg leading-relaxed border-l-[3px] border-iitp-blue pl-6 font-light">
              Advancing research in <strong className="text-slate-900 font-semibold">{personal.researchInterest}</strong> at the {personal.institute}.
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
              <Link href="/research" className="bg-iitp-blue text-white px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-iitp-dark transition-colors flex items-center gap-3">
                Explore Research <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/profile" className="bg-slate-50 border border-slate-200 text-slate-700 px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-slate-100 transition-colors">
                View Profile
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-[45%] min-h-[500px] lg:min-h-full relative mt-10 lg:mt-0"
          >
            <div className="absolute inset-0 bg-slate-200">
              <div className="absolute inset-0 bg-iitp-blue/5 mix-blend-multiply"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500 px-8 text-center bg-slate-100">
                <span className="font-serif text-2xl mb-4 text-slate-400 border-b border-slate-300 pb-4">
                  [ Portrait Image Placement ]
                </span>
                <span className="text-sm uppercase tracking-wider text-slate-400 font-semibold">
                  1400x1600px High-Resolution Photo Recommended
                </span>
              </div>
            </div>

            <div className="absolute -bottom-6 lg:bottom-16 left-6 lg:-left-16 bg-white p-8 shadow-2xl border-t-[6px] border-iitp-blue w-[85%] sm:w-80">
              <h3 className="font-sans font-extrabold text-slate-900 uppercase tracking-widest text-xs mb-5">Connect</h3>
              <div className="space-y-4">
                {personal.emails && personal.emails.map((email, idx) => (
                  <a key={idx} href={`mailto:${email}`} className="flex items-center gap-4 text-slate-600 hover:text-iitp-blue transition-colors text-sm font-medium">
                    <Mail className="w-4 h-4 text-iitp-blue flex-shrink-0" /> {email}
                  </a>
                ))}
                {personal.phones && personal.phones.map((phone, idx) => (
                  <a key={idx} href={`tel:${phone}`} className="flex items-center gap-4 text-slate-600 hover:text-iitp-blue transition-colors text-sm font-medium">
                    <Phone className="w-4 h-4 text-iitp-blue flex-shrink-0" /> {phone}
                  </a>
                ))}
                <div className="flex items-start gap-4 text-slate-600 text-sm font-medium pt-4 border-t border-slate-100">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-iitp-blue" /> 
                  <span className="leading-relaxed">{personal.department},<br/>IIT Patna</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}