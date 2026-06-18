"use client";

import { motion } from "framer-motion";
import { Landmark, ShieldCheck } from "lucide-react";
import { facultyData } from "@/data/facultyData";
import PageHeader from "@/components/PageHeader";

export default function Memberships() {
  const { memberships } = facultyData;

  const containerVars = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* UW-Style Header (Classic Architecture / Columns Aesthetic) */}
      <PageHeader 
        title="Affiliations" 
        subtitle="Active memberships and associations with global and national academic societies."
        imageUrl="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
      />

      <div className="max-w-6xl w-full px-4 sm:px-6 lg:px-8 py-16 min-h-[50vh]">
        
        <div className="flex items-center gap-4 mb-12 border-b border-slate-200 pb-4">
          <ShieldCheck className="w-8 h-8 text-iitp-blue" strokeWidth={1.5} />
          <h2 className="font-serif text-3xl md:text-4xl text-slate-900 tracking-tight">Professional Societies</h2>
        </div>

        {/* Memberships Placards */}
        <motion.div 
          variants={containerVars} 
          initial="hidden" 
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {memberships.map((membership, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVars} 
              className="bg-white border border-slate-200 border-t-[6px] border-t-slate-200 rounded-sm p-10 flex flex-col items-center text-center group hover:border-t-iitp-blue hover:shadow-lg transition-all duration-300 relative"
            >
              {/* Institutional Icon */}
              <div className="mb-6 p-4 bg-slate-50 border border-slate-100 text-slate-400 group-hover:text-iitp-blue group-hover:bg-iitp-light transition-colors">
                <Landmark className="w-10 h-10" strokeWidth={1} />
              </div>
              
              {/* Content */}
              <div className="flex-1 flex items-center justify-center">
                <p className="font-serif text-xl text-slate-800 leading-relaxed group-hover:text-slate-900 transition-colors">
                  {membership}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}