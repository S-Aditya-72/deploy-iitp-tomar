"use client";

import { motion } from "framer-motion";
import { Landmark } from "lucide-react";
import { facultyData } from "@/data/facultyData";

export default function Memberships() {
  const { memberships } = facultyData;

  const containerVars = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="max-w-4xl mx-auto space-y-10 min-h-[60vh]">
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-6 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Professional Affiliations
        </h1>
        <p className="text-lg text-slate-600 mt-2">
          Memberships and active associations with global and national academic societies.
        </p>
      </div>

      {/* Memberships List */}
      <motion.div 
        variants={containerVars} 
        initial="hidden" 
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {memberships.map((membership, idx) => (
          <motion.div 
            key={idx} 
            variants={itemVars} 
            className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col items-center text-center gap-4 hover:border-slate-300 transition-colors"
          >
            {/* Institutional Icon */}
            <div className="p-4 rounded-full bg-slate-50 border border-slate-100 text-slate-700">
              <Landmark className="w-8 h-8" strokeWidth={1.5} />
            </div>
            
            {/* Content */}
            <div className="flex-1 flex items-center justify-center">
              <p className="text-slate-800 font-semibold leading-relaxed">
                {membership}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}