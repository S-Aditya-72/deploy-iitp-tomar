"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, BookOpen, CheckCircle } from "lucide-react";
import { facultyData } from "@/data/facultyData";

export default function Profile() {
  const { education, experience, teaching } = facultyData;

  // Animation variants
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="max-w-6xl mx-auto space-y-16">
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Academic Profile
        </h1>
        <p className="text-lg text-slate-600 mt-2">
          Education, Professional Experience, and Teaching Responsibilities.
        </p>
      </div>

      <motion.div
        variants={containerVars}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-12"
      >
        {/* Education Timeline */}
        <motion.section variants={itemVars}>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-blue-100 text-blue-700 rounded-xl">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Education</h2>
          </div>

          <div className="ml-4 border-l-2 border-blue-100 space-y-8">
            {education.map((edu, idx) => (
              <div key={idx} className="relative pl-8">
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm"></div>
                
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-slate-900">{edu.degree}</h3>
                  <p className="text-slate-600 font-medium mt-1">{edu.institution}</p>
                  <span className="inline-block mt-3 px-3 py-1 bg-slate-100 text-slate-700 text-sm font-semibold rounded-full">
                    {edu.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Experience Timeline */}
        <motion.section variants={itemVars}>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-indigo-100 text-indigo-700 rounded-xl">
              <Briefcase className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Academic Positions</h2>
          </div>

          <div className="ml-4 border-l-2 border-indigo-100 space-y-8">
            {experience.map((exp, idx) => (
              <div key={idx} className="relative pl-8">
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-sm"></div>
                
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                  <p className="text-slate-600 font-medium mt-1">{exp.institution}</p>
                  <span className="inline-block mt-3 px-3 py-1 bg-slate-100 text-slate-700 text-sm font-semibold rounded-full">
                    {exp.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </motion.div>

      {/* Teaching Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="pt-8 border-t border-slate-200"
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-emerald-100 text-emerald-700 rounded-xl">
            <BookOpen className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Teaching Responsibilities</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* B.Tech */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 mb-4">UG (B.Tech)</h3>
            <ul className="space-y-3">
              {teaching.btech.map((subject, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>{subject}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* M.Sc */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 mb-4">UG (M.Sc)</h3>
            <ul className="space-y-3">
              {teaching.msc.map((subject, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>{subject}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* M.Tech */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 mb-4">PG (M.Tech)</h3>
            <ul className="space-y-3">
              {teaching.mtech.map((subject, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>{subject}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* PhD */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 mb-4">PG (PhD)</h3>
            <ul className="space-y-3">
              {teaching.phd.map((subject, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>{subject}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>
    </div>
  );
}