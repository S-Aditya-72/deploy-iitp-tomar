"use client";

import { motion } from "framer-motion";
import { Award, Book, Users, Calendar, User } from "lucide-react";
import { facultyData } from "@/data/facultyData";
import PageHeader from "@/components/PageHeader";

export default function Thesis() {
  const { students } = facultyData;

  const containerVars = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* UW-Style Header (Classic Academic Library/Study Hall) */}
      <PageHeader 
        title="Theses Supervised" 
        subtitle="Research projects and dissertations supervised at the Ph.D., M.Tech, and M.Sc. levels."
        imageUrl="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=2070&auto=format&fit=crop" 
      />

      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Ph.D. Section */}
        <section>
          <div className="flex items-center gap-4 mb-10 border-b border-slate-200 pb-4">
            <Award className="w-8 h-8 text-iitp-blue" strokeWidth={1.5} />
            <h2 className="font-serif text-3xl md:text-4xl text-slate-900 tracking-tight">Ph.D. Theses</h2>
          </div>
          
          <motion.div 
            variants={containerVars} initial="hidden" animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {students.phd.map((student, idx) => (
              <motion.div key={idx} variants={itemVars} className="bg-white border border-slate-200 rounded-sm p-8 shadow-sm hover:border-iitp-blue hover:shadow-md transition-all duration-300 relative group flex flex-col h-full">
                {/* Institutional Top Accent Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-slate-200 group-hover:bg-iitp-blue transition-colors"></div>
                
                <div className="flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-2 text-slate-900 font-bold uppercase tracking-wider text-sm">
                      <User className="w-4 h-4 text-iitp-blue" />
                      {student.name}
                    </div>
                  </div>
                  <h3 className="font-serif text-lg text-slate-800 leading-relaxed mb-6 flex-grow">{student.title}</h3>
                  
                  <div className="mt-auto inline-flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest border border-slate-200 bg-slate-50 px-3 py-1.5 rounded-sm self-start">
                    <Calendar className="w-3 h-3" />
                    {student.year}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* M.Tech Section */}
        <section>
          <div className="flex items-center gap-4 mb-10 border-b border-slate-200 pb-4">
            <Book className="w-8 h-8 text-iitp-blue" strokeWidth={1.5} />
            <h2 className="font-serif text-3xl md:text-4xl text-slate-900 tracking-tight">M.Tech Theses</h2>
          </div>
          
          <motion.div 
            variants={containerVars} initial="hidden" animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {students.mtech.map((student, idx) => (
              <motion.div key={idx} variants={itemVars} className="bg-white border border-slate-200 rounded-sm p-8 shadow-sm hover:border-iitp-blue hover:shadow-md transition-all duration-300 relative group flex flex-col h-full">
                <div className="absolute top-0 left-0 w-full h-1 bg-slate-200 group-hover:bg-iitp-blue transition-colors"></div>
                
                <div className="flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-2 text-slate-900 font-bold uppercase tracking-wider text-sm">
                      <User className="w-4 h-4 text-iitp-blue" />
                      {student.name}
                    </div>
                  </div>
                  <h3 className="font-serif text-lg text-slate-800 leading-relaxed mb-6 flex-grow">{student.title}</h3>
                  
                  <div className="mt-auto inline-flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest border border-slate-200 bg-slate-50 px-3 py-1.5 rounded-sm self-start">
                    <Calendar className="w-3 h-3" />
                    {student.year}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* M.Sc Section */}
        <section>
          <div className="flex items-center gap-4 mb-10 border-b border-slate-200 pb-4">
            <Users className="w-8 h-8 text-iitp-blue" strokeWidth={1.5} />
            <h2 className="font-serif text-3xl md:text-4xl text-slate-900 tracking-tight">M.Sc Students</h2>
          </div>
          
          <motion.div 
            variants={containerVars} initial="hidden" animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {students.msc.map((student, idx) => (
              <motion.div key={idx} variants={itemVars} className="bg-white border border-slate-200 rounded-sm p-8 shadow-sm hover:border-iitp-blue hover:shadow-md transition-all duration-300 relative group flex flex-col h-full">
                <div className="absolute top-0 left-0 w-full h-1 bg-slate-200 group-hover:bg-iitp-blue transition-colors"></div>
                
                <div className="flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-2 text-slate-900 font-bold uppercase tracking-wider text-sm">
                      <User className="w-4 h-4 text-iitp-blue" />
                      {student.name}
                    </div>
                  </div>
                  
                  {/* Handle missing title gracefully for M.Sc. if it exists in data */}
                  {student.title && (
                    <h3 className="font-serif text-lg text-slate-800 leading-relaxed mb-6 flex-grow">{student.title}</h3>
                  )}
                  
                  <div className="mt-auto inline-flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest border border-slate-200 bg-slate-50 px-3 py-1.5 rounded-sm self-start">
                    <Calendar className="w-3 h-3" />
                    {student.year}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

      </div>
    </div>
  );
}