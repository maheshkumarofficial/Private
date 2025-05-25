import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Code, Database, Cloud, Bot, Lock, LineChart, Globe } from 'lucide-react';

const services = [
  {
    icon: <Brain className="h-8 w-8" />,
    title: 'AI Development',
    description: 'Custom AI solutions tailored to your business needs, from machine learning models to natural language processing.',
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: 'Software Engineering',
    description: 'End-to-end software development services with cutting-edge technologies and best practices.',
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: 'Data Analytics',
    description: 'Transform your raw data into valuable insights with our advanced analytics and visualization tools.',
  },
  {
    icon: <Cloud className="h-8 w-8" />,
    title: 'Cloud Solutions',
    description: 'Scalable, secure, and cost-effective cloud infrastructure tailored to your business requirements.',
  },
  {
    icon: <Bot className="h-8 w-8" />,
    title: 'Chatbot Development',
    description: 'Intelligent conversational agents that enhance customer experience and streamline operations.',
  },
  {
    icon: <Lock className="h-8 w-8" />,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets and maintain compliance.',
  },
  {
    icon: <LineChart className="h-8 w-8" />,
    title: 'Business Intelligence',
    description: 'Strategic insights and decision-making tools powered by advanced analytics.',
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: 'Digital Transformation',
    description: 'End-to-end guidance to modernize your business processes and technology stack.',
  },
];

export const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-primary-100" data-scroll-section>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-light-100 mb-4">Our Services</h2>
          <p className="text-lg text-light-300 max-w-2xl mx-auto">
            We provide cutting-edge AI-driven solutions to transform your business and drive innovation.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-200/30 to-primary-300/10 backdrop-blur-sm rounded-xl"></div>
              <div className="relative bg-primary-200/20 rounded-xl p-6 h-full border border-primary-300/20 backdrop-blur-sm transform transition-all duration-300 group-hover:bg-primary-200/30">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-secondary-500 mb-4 transform transition-transform duration-300 group-hover:scale-110">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-light-100 mb-3">{service.title}</h3>
                  <p className="text-light-300">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-secondary-600 to-secondary-500 text-white rounded-md hover:from-secondary-700 hover:to-secondary-600 transition-all duration-300 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Get Started with AI Solutions
          </a>
        </div>
      </div>
    </section>
  );
};