"use client";

import { motion } from "framer-motion";
import { Landmark, Calendar, UserCheck, CheckCircle } from "lucide-react";
import { facultyData } from "@/data/facultyData";
import PageHeader from "@/components/PageHeader";

export default function Projects() {
  const { projects } = facultyData;

  const containerVars = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* UW-Style Header (High-Tech / Lab / Engineering Aesthetic) */}
      <PageHeader 
        title="Sponsored Research" 
        subtitle="Major funded initiatives, technical modeling, and collaborative defense research."
        imageUrl="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
      />

      <div className="max-w-5xl w-full px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="flex items-center gap-4 mb-12 border-b border-slate-200 pb-4">
          <CheckCircle className="w-8 h-8 text-iitp-blue" strokeWidth={1.5} />
          <h2 className="font-serif text-3xl md:text-4xl text-slate-900 tracking-tight">Funded Projects</h2>
        </div>

        {/* Projects List */}
        <motion.div 
          variants={containerVars} 
          initial="hidden" 
          animate="show"
          className="space-y-8"
        >
          {projects.map((project, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVars} 
              className="bg-white border border-slate-200 rounded-sm shadow-sm hover:shadow-md hover:border-iitp-blue transition-all duration-300 flex flex-col md:flex-row overflow-hidden group"
            >
              {/* Left Side: Project Title (The "Document" side) */}
              <div className="p-8 md:w-2/3 border-b md:border-b-0 md:border-r border-slate-200 relative">
                {/* Active Indicator Line */}
                <div className="absolute top-0 left-0 w-1 h-full bg-slate-200 group-hover:bg-iitp-blue transition-colors"></div>
                
                <h3 className="font-serif text-2xl md:text-3xl text-slate-900 leading-snug mb-6 pl-4">
                  {project.title}
                </h3>
                
                {/* Status Badge */}
                <div className="pl-4">
                  <span className={`inline-flex items-center px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-sm ${
                    project.role.includes("Completed") 
                      ? "bg-slate-100 text-slate-600 border border-slate-300"
                      : "bg-iitp-light text-iitp-blue border border-iitp-blue/30"
                  }`}>
                    {project.role.includes("Completed") ? "Completed" : "Active / Ongoing"}
                  </span>
                </div>
              </div>

              {/* Right Side: Metadata Grid (The "Details" side) */}
              <div className="p-8 md:w-1/3 bg-slate-50 flex flex-col justify-center space-y-6">
                
                {/* Funding Agency */}
                <div>
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1 flex items-center gap-2">
                    <Landmark className="w-3.5 h-3.5" /> Funding Agency
                  </p>
                  <p className="text-slate-900 font-medium text-sm leading-relaxed">
                    {project.agency}
                  </p>
                </div>

                {/* Duration */}
                <div>
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1 flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5" /> Duration
                  </p>
                  <p className="text-slate-900 font-medium text-sm">
                    {project.duration}
                  </p>
                </div>

                {/* Role */}
                <div>
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1 flex items-center gap-2">
                    <UserCheck className="w-3.5 h-3.5" /> Investigator Role
                  </p>
                  <p className="text-slate-900 font-medium text-sm">
                    {project.role.replace(" (Completed)", "")}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}