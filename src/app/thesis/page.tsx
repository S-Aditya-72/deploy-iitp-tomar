"use client";

import { motion } from "framer-motion";
import { Book, Award, Users, Calendar, User } from "lucide-react";
import { facultyData } from "@/data/facultyData";

export default function Thesis() {
  const { students } = facultyData;

  const containerVars = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="max-w-6xl mx-auto space-y-16">
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Theses Supervised
        </h1>
        <p className="text-lg text-slate-600 mt-2">
          Research projects and dissertations supervised at the Ph.D., M.Tech, and M.Sc. levels.
        </p>
      </div>

      {/* Ph.D. Section */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-amber-100 text-amber-700 rounded-xl">
            <Award className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Ph.D. Theses</h2>
        </div>
        
        <motion.div 
          variants={containerVars} initial="hidden" animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {students.phd.map((student, idx) => (
            <motion.div key={idx} variants={itemVars} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-amber-400 group-hover:bg-amber-500 transition-colors"></div>
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2 text-slate-700 font-semibold">
                  <User className="w-4 h-4 text-slate-400" />
                  {student.name}
                </div>
                <span className="flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 px-2 py-1 rounded-md">
                  <Calendar className="w-3 h-3" />
                  {student.year}
                </span>
              </div>
              <h3 className="text-slate-900 font-bold leading-snug">{student.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* M.Tech Section */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-blue-100 text-blue-700 rounded-xl">
            <Book className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">M.Tech Theses</h2>
        </div>
        
        <motion.div 
          variants={containerVars} initial="hidden" animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {students.mtech.map((student, idx) => (
            <motion.div key={idx} variants={itemVars} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-400 group-hover:bg-blue-500 transition-colors"></div>
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2 text-slate-700 font-semibold">
                  <User className="w-4 h-4 text-slate-400" />
                  {student.name}
                </div>
                <span className="flex items-center gap-1 text-xs font-bold text-blue-700 bg-blue-50 px-2 py-1 rounded-md">
                  <Calendar className="w-3 h-3" />
                  {student.year}
                </span>
              </div>
              <h3 className="text-slate-900 font-bold leading-snug">{student.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* M.Sc Section */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-teal-100 text-teal-700 rounded-xl">
            <Users className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">M.Sc Students</h2>
        </div>
        
        <motion.div 
          variants={containerVars} initial="hidden" animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {students.msc.map((student, idx) => (
            <motion.div key={idx} variants={itemVars} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-teal-400 group-hover:bg-teal-500 transition-colors"></div>
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2 text-slate-700 font-semibold">
                  <User className="w-4 h-4 text-slate-400" />
                  Student(s)
                </div>
                <span className="flex items-center gap-1 text-xs font-bold text-teal-700 bg-teal-50 px-2 py-1 rounded-md">
                  <Calendar className="w-3 h-3" />
                  {student.year}
                </span>
              </div>
              <h3 className="text-slate-900 font-bold leading-relaxed">{student.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </section>

    </div>
  );
}