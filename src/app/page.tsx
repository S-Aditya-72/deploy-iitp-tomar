"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Building, MapPin } from "lucide-react";
import { facultyData } from "@/data/facultyData";

export default function Home() {
  const { personal } = facultyData;

  return (
    <div className="min-h-[calc(100vh-10rem)] w-full flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 md:gap-16 gap-10 items-center">
        
        {/* Left Column: Hero */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center md:items-start md:text-left gap-5"
        >
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              {personal.name}
            </h1>
            <p className="text-xl font-medium text-blue-700">
              {personal.designation}
            </p>
          </div>

          <div className="flex flex-col gap-2 text-slate-600 font-medium">
            <span className="flex items-center justify-center md:justify-start gap-2">
              <Building className="w-5 h-5 text-slate-400" />
              {personal.department}
            </span>
            <span className="flex items-center justify-center md:justify-start gap-2">
              <MapPin className="w-5 h-5 text-slate-400" />
              {personal.institute}
            </span>
          </div>

          <div className="mt-2">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-800 text-sm font-semibold tracking-wide border border-blue-100 shadow-sm">
              Research: {personal.researchInterest}
            </span>
          </div>
        </motion.section>

        {/* Right Column: Contact Card */}
        <motion.aside 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="w-full max-w-md mx-auto bg-white shadow-xl shadow-slate-200/50 rounded-2xl px-8 py-8 flex flex-col gap-6 border border-slate-100"
          aria-label="Contact Information"
        >
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-4">
            Contact Info
          </h2>
          <div className="flex flex-col gap-4 text-slate-600">
            
            {/* Emails */}
            {personal.emails.map((email, idx) => (
              <div className="flex items-center gap-3" key={`email-${idx}`}>
                <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                  <Mail className="w-5 h-5" />
                </div>
                <a href={`mailto:${email}`} className="hover:text-blue-700 hover:underline transition-colors">
                  {email}
                </a>
              </div>
            ))}

            {/* Phones */}
            {personal.phones.map((phone, idx) => (
              <div className="flex items-center gap-3" key={`phone-${idx}`}>
                <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                  <Phone className="w-5 h-5" />
                </div>
                <a href={`tel:${phone}`} className="hover:text-blue-700 hover:underline transition-colors">
                  {phone}
                </a>
              </div>
            ))}

            {/* Address */}
            <div className="flex items-start gap-3 mt-2">
              <div className="p-2 bg-slate-50 rounded-lg text-slate-500">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="leading-relaxed text-sm">
                {personal.department},<br />
                {personal.institute},<br />
                {personal.address}
              </span>
            </div>

          </div>
        </motion.aside>
      </div>
    </div>
  );
}