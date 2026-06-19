"use client";

import { motion } from "framer-motion";
import { Trophy, Mic, Award, Users, Star, Medal } from "lucide-react";
import PageHeader from "@/components/PageHeader";

export default function HonoursContent({ data }: { data: any }) {
  const honors = data.honors || [];

  const containerVars = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const itemVars = { hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };

  const getIcon = (text: string) => {
    const lowerText = text.toLowerCase();
    if (lowerText.includes("lecture") || lowerText.includes("talk")) return Mic;
    if (lowerText.includes("award")) return Trophy;
    if (lowerText.includes("chair")) return Users;
    if (lowerText.includes("scholarship") || lowerText.includes("fellowship") || lowerText.includes("gate") || lowerText.includes("net")) return Award;
    return Star;
  };

  return (
    <div className="w-full flex flex-col items-center">
      <PageHeader 
        title="Honours & Awards" 
        subtitle="Recognitions, invited lectures, and prestigious academic achievements."
        imageUrl="/images/honours.png" 
      />

      <div className="max-w-6xl w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center gap-4 mb-12 border-b border-slate-200 pb-4">
          <Medal className="w-8 h-8 text-iitp-blue" strokeWidth={1.5} />
          <h2 className="font-serif text-3xl md:text-4xl text-slate-900 tracking-tight">Academic Recognitions</h2>
        </div>

        <motion.div variants={containerVars} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {honors.map((honor: string, idx: number) => {
            const Icon = getIcon(honor);
            return (
              <motion.div key={idx} variants={itemVars} className="bg-white border-t-4 border-slate-200 border-x border-b border-x-slate-100 border-b-slate-100 p-6 hover:border-t-iitp-blue hover:bg-slate-50 transition-colors flex items-start gap-5 group">
                <div className="p-3 rounded-none bg-white border border-slate-200 text-slate-400 group-hover:text-iitp-blue group-hover:border-iitp-blue/30 transition-colors flex-shrink-0">
                  <Icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div className="flex-1 pt-1">
                  <p className="text-slate-800 font-serif text-lg leading-relaxed group-hover:text-slate-900 transition-colors">{honor}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}