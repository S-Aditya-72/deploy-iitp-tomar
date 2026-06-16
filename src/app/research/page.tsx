"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Presentation, Users, ChevronRight } from "lucide-react";
import { facultyData } from "@/data/facultyData";

export default function Research() {
  const { publications, conferences, workshopsOrganised } = facultyData;
  const [activeTab, setActiveTab] = useState("publications");

  // Tab definitions for easy mapping
  const tabs = [
    { id: "publications", label: "Journal Publications", icon: FileText, count: publications.length },
    { id: "conferences", label: "Conferences", icon: Presentation, count: conferences.length },
    { id: "workshops", label: "Workshops Organised", icon: Users, count: workshopsOrganised.length },
  ];

  // Animation variants for the list items
  const containerVars = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };

  const itemVars = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className="max-w-6xl mx-auto space-y-10">
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Research & Publications
        </h1>
        <p className="text-lg text-slate-600 mt-2">
          A comprehensive list of journal articles, conference proceedings, and organized academic events.
        </p>
      </div>

      {/* Interactive Tabs */}
      <div className="flex flex-col sm:flex-row gap-3 border-b border-slate-200 pb-4">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                isActive
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
              <span
                className={`ml-1 px-2 py-0.5 rounded-full text-xs ${
                  isActive ? "bg-blue-500 text-white" : "bg-slate-100 text-slate-500"
                }`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Tab Content Area */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-10 min-h-[500px]">
        <AnimatePresence mode="wait">
          {activeTab === "publications" && (
            <motion.div
              key="publications"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <FileText className="text-blue-600" /> Journal Publications
              </h2>
              <motion.ul variants={containerVars} initial="hidden" animate="show" className="space-y-5">
                {publications.map((pub, idx) => (
                  <motion.li key={idx} variants={itemVars} className="flex gap-3 text-slate-700 leading-relaxed group">
                    <ChevronRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5 group-hover:text-blue-600 transition-colors" />
                    <span>{pub}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}

          {activeTab === "conferences" && (
            <motion.div
              key="conferences"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Presentation className="text-indigo-600" /> Conference Proceedings
              </h2>
              <motion.ul variants={containerVars} initial="hidden" animate="show" className="space-y-5">
                {conferences.map((conf, idx) => (
                  <motion.li key={idx} variants={itemVars} className="flex gap-3 text-slate-700 leading-relaxed group">
                    <ChevronRight className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5 group-hover:text-indigo-600 transition-colors" />
                    <span>{conf}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}

          {activeTab === "workshops" && (
            <motion.div
              key="workshops"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Users className="text-emerald-600" /> Workshops & Events Organised
              </h2>
              <motion.ul variants={containerVars} initial="hidden" animate="show" className="space-y-5">
                {workshopsOrganised.map((workshop, idx) => (
                  <motion.li key={idx} variants={itemVars} className="flex gap-3 text-slate-700 leading-relaxed group">
                    <ChevronRight className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5 group-hover:text-emerald-600 transition-colors" />
                    <span>{workshop}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}