"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, GraduationCap } from "lucide-react";
import Link from "next/link";

interface HomeContentProps {
  personal: {
    name: string;
    designation: string;
    department: string;
    institute: string;
    researchInterest: string;
  };
}

export default function HomeContent({ personal }: HomeContentProps) {
  const scholarLink = "https://scholar.google.co.in/citations?user=WHEUGkYAAAAJ&hl=en";

  return (
    <div className="relative w-full min-h-[85vh] flex items-center border-b border-slate-200">
      
      {/* BACKGROUND: IIT Patna Spirit (Campus Overlay) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Replace this URL with an actual picture of IIT Patna's Main Building or Campus */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url('/images/iitp_campus.png')` }}
        />
        {/* Gradient fade to ensure text is perfectly readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/40" />
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center relative z-10 py-12 lg:py-0">
        
        {/* Left Column: Typography & CTAs */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-[60%] flex flex-col justify-center pr-0 lg:pr-12"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-12 h-[2px] bg-iitp-blue inline-block"></span>
            <h2 className="text-iitp-blue font-bold tracking-widest uppercase text-sm">
              {personal.designation}
            </h2>
          </div>
          
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-[5.5rem] text-slate-900 tracking-tight leading-[1.05] mb-6">
            {personal.name.replace("Dr. ", "")}
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed font-light">
            Advancing research in <strong className="text-slate-900 font-semibold">{personal.researchInterest}</strong> at the <span className="text-slate-800 font-medium">{personal.institute}</span>.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="/research" className="bg-iitp-blue text-white px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-iitp-dark transition-colors shadow-md hover:shadow-lg flex items-center gap-3">
              Explore Research <ArrowRight className="w-4 h-4" />
            </Link>
            
            {/* Google Scholar Button */}
            <a href={scholarLink} target="_blank" rel="noopener noreferrer" className="bg-white border border-slate-200 text-slate-700 px-8 py-4 font-bold uppercase tracking-widest text-xs hover:border-iitp-blue hover:text-iitp-blue transition-colors shadow-sm flex items-center gap-3">
              <GraduationCap className="w-4 h-4" /> Google Scholar
            </a>
          </div>
        </motion.div>

        {/* Right Column: The Professor's Portrait */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="w-full lg:w-[40%] mt-16 lg:mt-0 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-sm">
            {/* Structural Accent Box behind the image */}
            <div className="absolute -inset-4 border-2 border-iitp-blue/20 translate-x-4 translate-y-4 rounded-sm"></div>
            
            {/* Portrait Image Container */}
            <div className="relative bg-white p-2 shadow-2xl rounded-sm z-10">
              {}
              <img 
                src="/images/dr_tomar.jpeg" 
                alt={personal.name}
                className="w-full h-[450px] object-cover rounded-sm grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              />
              <div className="p-4 text-center border-t border-slate-100 mt-2">
                <p className="font-serif font-bold text-slate-900 text-lg">{personal.name}</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{personal.department}</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}