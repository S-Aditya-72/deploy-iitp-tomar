"use client";

import { motion } from "framer-motion";
import { Trophy, Mic, Award, Users, Star } from "lucide-react";
import { facultyData } from "@/data/facultyData";

export default function Honours() {
  const { honors } = facultyData;

  const containerVars = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVars = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  // Smart function to assign icons, but keeping colors strictly professional
  const getIcon = (text: string) => {
    const lowerText = text.toLowerCase();
    if (lowerText.includes("lecture") || lowerText.includes("talk")) return Mic;
    if (lowerText.includes("award")) return Trophy;
    if (lowerText.includes("chair")) return Users;
    if (lowerText.includes("scholarship") || lowerText.includes("fellowship") || lowerText.includes("gate") || lowerText.includes("net")) return Award;
    return Star;
  };

  return (
    <div className="max-w-6xl mx-auto space-y-10">
      <div className="border-b border-slate-200 pb-6 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Honours & Awards
        </h1>
        <p className="text-lg text-slate-600 mt-2">
          Recognitions, invited lectures, and prestigious academic achievements.
        </p>
      </div>

      <motion.div 
        variants={containerVars} 
        initial="hidden" 
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {honors.map((honor, idx) => {
          const Icon = getIcon(honor);
          
          return (
            <motion.div 
              key={idx} 
              variants={itemVars} 
              // Removed the colorful hover effects, kept it strictly elegant with slate borders
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:border-slate-300 transition-colors flex items-start gap-4"
            >
              {/* Unified Academic Slate/Blue icon styling */}
              <div className="p-2 rounded-lg flex-shrink-0 bg-slate-50 border border-slate-100 text-slate-600">
                <Icon className="w-5 h-5" />
              </div>
              
              <div className="flex-1">
                <p className="text-slate-800 font-medium leading-relaxed text-sm">
                  {honor}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}