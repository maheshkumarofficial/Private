import React from 'react';
import { motion } from 'framer-motion';
import { Brain, ArrowRight, Terminal, Database, Server } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-100 rounded-bl-full opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary-100 rounded-tr-full opacity-50 blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 leading-tight mb-6">
              <span className="text-primary-600">AI-Driven</span> Software Solutions for the Future
            </h1>
            <p className="text-lg md:text-xl text-dark-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Kangqore transforms businesses through intelligent software solutions powered by cutting-edge AI technology. We build software that thinks, learns, and evolves.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-all duration-300 text-base font-medium"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#services" 
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-primary-600 text-primary-600 rounded-md hover:bg-primary-50 transition-all duration-300 text-base font-medium"
              >
                Explore Services
              </a>
            </div>
          </motion.div>
          
          {/* 3D Visual Element */}
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative w-full max-w-md">
              {/* Central Brain Icon */}
              <motion.div 
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary-600 rounded-full p-8 shadow-xl z-10"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 4 }}
              >
                <Brain className="h-16 w-16 text-white" />
              </motion.div>
              
              {/* Orbital Elements */}
              <motion.div 
                className="absolute w-full h-full left-0 top-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <motion.div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-light-100 rounded-full p-4 shadow-lg">
                  <Terminal className="h-6 w-6 text-primary-600" />
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="absolute w-full h-full left-0 top-0"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <motion.div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-light-100 rounded-full p-4 shadow-lg">
                  <Database className="h-6 w-6 text-secondary-600" />
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="absolute w-full h-full left-0 top-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                <motion.div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 bg-light-100 rounded-full p-4 shadow-lg">
                  <Server className="h-6 w-6 text-accent-600" />
                </motion.div>
              </motion.div>
              
              {/* Background Circle */}
              <div className="rounded-full border-4 border-dashed border-primary-200 w-64 h-64 mx-auto opacity-70"></div>
              <div className="rounded-full border-4 border-dashed border-secondary-200 w-80 h-80 mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
            </div>
          </motion.div>
        </div>
        
        {/* Brands/Clients */}
        <motion.div 
          className="mt-16 lg:mt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <p className="text-center text-dark-500 mb-6 text-sm uppercase tracking-wider">Trusted by innovative companies</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {['Microsoft', 'Oracle', 'IBM', 'Meta', 'Tesla'].map((brand) => (
              <div key={brand} className="text-dark-400 font-semibold text-xl">
                {brand}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};