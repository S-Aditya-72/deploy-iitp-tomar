"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
}

export default function PageHeader({ title, subtitle, imageUrl }: PageHeaderProps) {
  return (
    <div className="relative w-full bg-iitp-dark overflow-hidden border-b-8 border-iitp-blue">
      {/* Background Image with IITP Blue Overlay (The UW Effect) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-luminosity"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      
      {/* Gradient to ensure text is always readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-iitp-dark via-iitp-blue/80 to-transparent opacity-90" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 flex flex-col justify-center min-h-[250px]">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight uppercase"
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-4 text-lg md:text-xl text-blue-100 max-w-2xl font-medium border-l-4 border-white pl-4"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
}