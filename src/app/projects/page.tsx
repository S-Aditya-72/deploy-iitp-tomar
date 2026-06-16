"use client";

import { motion } from "framer-motion";
import { FlaskConical, Building2, Calendar, UserCheck } from "lucide-react";
import { facultyData } from "@/data/facultyData";

export default function Projects() {
  const { projects } = facultyData;

  const containerVars = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-6 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Sponsored Research Projects
        </h1>
        <p className="text-lg text-slate-600 mt-2">
          Major funded research initiatives and collaborations.
        </p>
      </div>

      {/* Projects List */}
      <motion.div 
        variants={containerVars} 
        initial="hidden" 
        animate="show"
        className="space-y-6"
      >
        {projects.map((project, idx) => (
          <motion.div 
            key={idx} 
            variants={itemVars} 
            className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
          >
            {/* Decorative Top Gradient Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-400 opacity-80 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="flex flex-col md:flex-row gap-6 items-start">
              
              {/* Icon Container */}
              <div className="hidden md:flex flex-shrink-0 p-4 bg-blue-50 text-blue-600 rounded-2xl">
                <FlaskConical className="w-8 h-8" />
              </div>

              {/* Project Content */}
              <div className="flex-1 space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  {project.title}
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Funding Agency */}
                  <div className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-slate-400 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Funding Agency</p>
                      <p className="text-slate-800 font-medium">{project.agency}</p>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-slate-400 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Duration</p>
                      <p className="text-slate-800 font-medium">{project.duration}</p>
                    </div>
                  </div>

                  {/* Role */}
                  <div className="flex items-start gap-3 sm:col-span-2 mt-2">
                    <UserCheck className="w-5 h-5 text-slate-400 mt-0.5" />
                    <div className="flex items-center gap-3">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Role</p>
                      <span className={`px-3 py-1 text-sm font-bold rounded-full ${
                        project.role.includes("Co-PI") 
                          ? "bg-indigo-100 text-indigo-800" 
                          : "bg-blue-100 text-blue-800"
                      }`}>
                        {project.role}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}