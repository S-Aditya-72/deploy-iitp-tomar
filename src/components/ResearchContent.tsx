"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Presentation, Users, ExternalLink } from "lucide-react";
import PageHeader from "@/components/PageHeader";

export default function ResearchContent({ data }: { data: any }) {
  const [activeTab, setActiveTab] = useState("publications");

  // Fallback to empty arrays if data isn't published yet
  const pubs = data.publications || [];
  const confs = data.conferences || [];
  const workshops = data.workshopsOrganised || [];

  const tabs = [
    { id: "publications", label: "Journal Publications", count: pubs.length },
    { id: "conferences", label: "Conference Proceedings", count: confs.length },
    { id: "workshops", label: "Workshops Organised", count: workshops.length },
  ];

  const containerVars = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.05 } } };
  const itemVars = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

  return (
    <div className="w-full flex flex-col items-center">
      <PageHeader 
        title="Research & Publications" 
        subtitle="A comprehensive archive of journal articles, conference proceedings, and academic events."
        imageUrl="/images/research.png" 
      />

      <div className="max-w-5xl w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col sm:flex-row border-b-2 border-slate-200 mb-12">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                // Added: w-full sm:w-auto justify-center sm:justify-start for mobile centering
                className={`relative w-full sm:w-auto justify-center sm:justify-start px-8 py-4 text-sm font-bold uppercase tracking-widest transition-colors duration-200 flex items-center gap-3 ${isActive ? "text-iitp-blue bg-slate-50" : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"}`}
              >
                {tab.label}
                <span className={`px-2 py-0.5 text-xs rounded-sm border ${isActive ? "bg-iitp-blue text-white border-iitp-blue" : "bg-white border-slate-300 text-slate-500"}`}>
                  {tab.count}
                </span>
                {isActive && <motion.div layoutId="activeTabResearch" className="absolute bottom-[-2px] left-0 w-full h-[3px] bg-iitp-blue" />}
              </button>
            );
          })}
        </div>

        <div className="min-h-[600px]">
          <AnimatePresence mode="wait">
            
            {activeTab === "publications" && (
              <motion.div key="publications" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                {/* Added: justify-center sm:justify-start text-center sm:text-left */}
                <div className="flex items-center justify-center sm:justify-start text-center sm:text-left gap-4 mb-8 pb-4 border-b border-slate-200">
                  <FileText className="w-8 h-8 text-iitp-blue" strokeWidth={1.5} />
                  <h2 className="font-serif text-3xl text-slate-900 tracking-tight">Journal Publications</h2>
                </div>
                <motion.div variants={containerVars} initial="hidden" animate="show" className="space-y-0">
                  {pubs.map((pub: string, idx: number) => (
                    <motion.div key={idx} variants={itemVars} className="flex flex-col md:flex-row gap-4 md:gap-6 py-6 border-b border-slate-100 hover:bg-slate-50 transition-colors px-4 group">
                      <div className="flex gap-4 md:gap-6 flex-1">
                        <span className="text-slate-400 font-serif text-xl md:text-2xl mt-0.5 group-hover:text-iitp-blue transition-colors">
                          {(idx + 1).toString().padStart(2, '0')}.
                        </span>
                        <p className="text-slate-800 leading-relaxed text-base md:text-[17px] pr-4">
                          {pub}
                        </p>
                      </div>
                      
                      {/* Smart Google Scholar Auto-Search Button */}
                      <a 
                        href={`https://scholar.google.com/scholar?q=${encodeURIComponent(pub)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-slate-400 hover:text-iitp-blue transition-colors self-start md:self-center mt-2 md:mt-0 border border-slate-200 hover:border-iitp-blue/30 px-3 py-2 rounded-sm bg-white"
                      >
                        <ExternalLink className="w-3.5 h-3.5" /> Scholar
                      </a>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}

            {activeTab === "conferences" && (
              <motion.div key="conferences" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                {/* Added: justify-center sm:justify-start text-center sm:text-left */}
                <div className="flex items-center justify-center sm:justify-start text-center sm:text-left gap-4 mb-8 pb-4 border-b border-slate-200">
                  <Presentation className="w-8 h-8 text-iitp-blue" strokeWidth={1.5} />
                  <h2 className="font-serif text-3xl text-slate-900 tracking-tight">Conference Proceedings</h2>
                </div>
                <motion.div variants={containerVars} initial="hidden" animate="show" className="space-y-0">
                  {confs.map((conf: string, idx: number) => (
                    <motion.div key={idx} variants={itemVars} className="flex flex-col md:flex-row gap-4 md:gap-6 py-6 border-b border-slate-100 hover:bg-slate-50 transition-colors px-4 group">
                      <div className="flex gap-4 md:gap-6 flex-1">
                        <span className="text-slate-400 font-serif text-xl md:text-2xl mt-0.5 group-hover:text-iitp-blue transition-colors">
                          {(idx + 1).toString().padStart(2, '0')}.
                        </span>
                        <p className="text-slate-800 leading-relaxed text-base md:text-[17px] pr-4">
                          {conf}
                        </p>
                      </div>
                      
                      {/* I added the Scholar Button here too! */}
                      <a 
                        href={`https://scholar.google.com/scholar?q=${encodeURIComponent(conf)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-slate-400 hover:text-iitp-blue transition-colors self-start md:self-center mt-2 md:mt-0 border border-slate-200 hover:border-iitp-blue/30 px-3 py-2 rounded-sm bg-white"
                      >
                        <ExternalLink className="w-3.5 h-3.5" /> Scholar
                      </a>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}

            {activeTab === "workshops" && (
              <motion.div key="workshops" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                {/* Added: justify-center sm:justify-start text-center sm:text-left */}
                <div className="flex items-center justify-center sm:justify-start text-center sm:text-left gap-4 mb-8 pb-4 border-b border-slate-200">
                  <Users className="w-8 h-8 text-iitp-blue" strokeWidth={1.5} />
                  <h2 className="font-serif text-3xl text-slate-900 tracking-tight">Workshops Organised</h2>
                </div>
                <motion.div variants={containerVars} initial="hidden" animate="show" className="space-y-0">
                  {workshops.map((workshop: string, idx: number) => (
                    <motion.div key={idx} variants={itemVars} className="flex gap-6 py-6 border-b border-slate-100 hover:bg-slate-50 transition-colors px-4 group">
                      <span className="text-slate-400 font-serif text-xl md:text-2xl mt-0.5 group-hover:text-iitp-blue transition-colors">
                        {(idx + 1).toString().padStart(2, '0')}.
                      </span>
                      <p className="text-slate-800 leading-relaxed text-base md:text-[17px]">
                        {workshop}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}