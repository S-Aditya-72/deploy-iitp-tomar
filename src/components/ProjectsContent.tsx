"use client";

import { motion } from "framer-motion";
import { Landmark, Calendar, UserCheck, CheckCircle } from "lucide-react";
import PageHeader from "@/components/PageHeader";

export default function ProjectsContent({ data }: { data: any }) {
  const projects = data.projects || [];

  const containerVars = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15 } } };
  const itemVars = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };

  return (
    <div className="w-full flex flex-col items-center">
      <PageHeader 
        title="Sponsored Research" 
        subtitle="Major funded initiatives, technical modeling, and collaborative defense research."
        imageUrl="/images/projects.jpeg" 
      />

      <div className="max-w-5xl w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center gap-4 mb-12 border-b border-slate-200 pb-4">
          <CheckCircle className="w-8 h-8 text-iitp-blue" strokeWidth={1.5} />
          <h2 className="font-serif text-3xl md:text-4xl text-slate-900 tracking-tight">Funded Projects</h2>
        </div>

        <motion.div variants={containerVars} initial="hidden" animate="show" className="space-y-8">
          {projects.map((project: any, idx: number) => (
            <motion.div key={idx} variants={itemVars} className="bg-white border border-slate-200 rounded-sm shadow-sm hover:shadow-md hover:border-iitp-blue transition-all duration-300 flex flex-col md:flex-row overflow-hidden group">
              <div className="p-8 md:w-2/3 border-b md:border-b-0 md:border-r border-slate-200 relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-slate-200 group-hover:bg-iitp-blue transition-colors"></div>
                <h3 className="font-serif text-2xl md:text-3xl text-slate-900 leading-snug mb-6 pl-4">{project.title}</h3>
                {/* Only show a badge if the project is Completed */}
                {project.role?.includes("Completed") && (
                  <div className="pl-4">
                    <span className="inline-flex items-center px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-sm bg-slate-100 text-slate-600 border border-slate-300">
                      Completed
                    </span>
                  </div>
                )}
              </div>

              <div className="p-8 md:w-1/3 bg-slate-50 flex flex-col justify-start space-y-6">
                <div>
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1 flex items-center gap-2"><Landmark className="w-3.5 h-3.5" /> Funding Agency</p>
                  <p className="text-slate-900 font-medium text-sm leading-relaxed">{project.agency}</p>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1 flex items-center gap-2"><Calendar className="w-3.5 h-3.5" /> Duration</p>
                  <p className="text-slate-900 font-medium text-sm">{project.duration}</p>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1 flex items-center gap-2"><UserCheck className="w-3.5 h-3.5" /> Investigator Role</p>
                  <p className="text-slate-900 font-medium text-sm">{project.role?.replace(" (Completed)", "")}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}