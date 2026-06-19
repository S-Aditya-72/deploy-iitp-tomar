"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, BookOpen, User, ChevronRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";

// We define what the data from Sanity looks like
export default function ProfileContent({ data }: { data: any }) {
  const containerVars = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15 } } };
  const itemVars = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

  return (
    <div className="w-full flex flex-col items-center">
      <PageHeader 
        title="Academic Profile" 
        subtitle="Personal information, educational background, and professional timeline."
        imageUrl="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop" 
      />

      <div className="max-w-6xl w-full px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* PERSONAL INFORMATION DOSSIER */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex items-center gap-4 mb-8 border-b border-slate-200 pb-4">
            <User className="w-8 h-8 text-iitp-blue" strokeWidth={1.5} />
            <h2 className="font-serif text-3xl font-bold text-slate-900 tracking-tight">Personal Information</h2>
          </div>
          
          <div className="bg-white border border-slate-200 border-t-[4px] border-t-iitp-blue p-8 md:p-10 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
              <div>
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1">Name</p>
                <p className="font-serif text-xl text-slate-900">{data.name}</p>
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1">Institute</p>
                <p className="text-slate-800 font-medium">{data.institute}</p>
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1">Department</p>
                <p className="text-slate-800 font-medium">{data.department}</p>
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1">Research Interest</p>
                <p className="text-iitp-blue font-bold">{data.researchInterest}</p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.div variants={containerVars} initial="hidden" animate="show" className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* EDUCATION TIMELINE */}
          <motion.section variants={itemVars}>
            <div className="flex items-center gap-4 mb-10 border-b border-slate-200 pb-4">
              <GraduationCap className="w-8 h-8 text-iitp-blue" strokeWidth={1.5} />
              <h2 className="font-serif text-3xl font-bold text-slate-900 tracking-tight">Education</h2>
            </div>
            <div className="ml-2 border-l border-slate-300 space-y-12">
              {data.education?.map((edu: any, idx: number) => (
                <div key={idx} className="relative pl-8 group">
                  <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-slate-300 rotate-45 group-hover:bg-iitp-blue transition-colors"></div>
                  <div>
                    <h3 className="font-serif text-2xl text-slate-900 leading-none">{edu.degree}</h3>
                    <p className="text-slate-700 font-medium mt-3 leading-relaxed">{edu.institution}</p>
                    <span className="inline-block mt-2 text-iitp-blue text-sm font-bold tracking-widest uppercase">{edu.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* ACADEMIC POSITIONS TIMELINE */}
          <motion.section variants={itemVars}>
            <div className="flex items-center gap-4 mb-10 border-b border-slate-200 pb-4">
              <Briefcase className="w-8 h-8 text-iitp-blue" strokeWidth={1.5} />
              <h2 className="font-serif text-3xl font-bold text-slate-900 tracking-tight">Academic Positions</h2>
            </div>
            <div className="ml-2 border-l border-slate-300 space-y-12">
              {data.experience?.map((exp: any, idx: number) => (
                <div key={idx} className="relative pl-8 group">
                  <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-slate-300 rotate-45 group-hover:bg-iitp-blue transition-colors"></div>
                  <div>
                    <h3 className="font-serif text-2xl text-slate-900 leading-tight">{exp.role}</h3>
                    <p className="text-slate-700 font-medium mt-3 leading-relaxed">{exp.institution}</p>
                    <span className="inline-block mt-2 text-slate-500 text-sm font-bold tracking-widest uppercase">{exp.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        </motion.div>

        {/* TEACHING SECTION */}
        <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}>
          <div className="flex items-center gap-4 mb-10 border-b border-slate-200 pb-4">
            <BookOpen className="w-8 h-8 text-iitp-blue" strokeWidth={1.5} />
            <h2 className="font-serif text-3xl font-bold text-slate-900 tracking-tight">Teaching Responsibilities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[ 
              { title: "UG (B.Tech)", items: data.teachingBtech },
              { title: "UG (M.Sc)", items: data.teachingMsc },
              { title: "PG (M.Tech)", items: data.teachingMtech },
              { title: "PG (PhD)", items: data.teachingPhd }
            ].map((section, idx) => (
              section.items && section.items.length > 0 && (
                <div key={idx} className="bg-white p-8 border border-slate-200 rounded-sm hover:border-slate-300 transition-colors">
                  <h3 className="font-serif text-2xl text-slate-900 border-b border-slate-100 pb-4 mb-5 flex items-center justify-between">
                    {section.title}
                    <span className="text-xs font-sans font-bold text-slate-400 uppercase tracking-widest">{section.items.length} Courses</span>
                  </h3>
                  <ul className="space-y-4">
                    {section.items.map((subject: string, i: number) => (
                      <li key={i} className="flex items-start gap-3 text-slate-700 text-[15px] group">
                        <ChevronRight className="w-4 h-4 text-slate-300 mt-1 flex-shrink-0 group-hover:text-iitp-blue transition-colors" strokeWidth={2} />
                        <span className="leading-relaxed">{subject}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  );
}