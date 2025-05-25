import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    title: 'AI-Powered Customer Service Platform',
    client: 'Global Retail Corporation',
    description: 'Developed an intelligent customer service platform that reduced response times by 78% and increased customer satisfaction by 42%.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['AI', 'NLP', 'Customer Service'],
  },
  {
    title: 'Predictive Maintenance System',
    client: 'Manufacturing Enterprise',
    description: 'Built a machine learning system that predicted equipment failures with 94% accuracy, reducing downtime by 35% and maintenance costs by $2.7M annually.',
    image: 'https://images.pexels.com/photos/2034892/pexels-photo-2034892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Predictive Analytics', 'IoT', 'Manufacturing'],
  },
  {
    title: 'Intelligent Financial Fraud Detection',
    client: 'Major Banking Institution',
    description: 'Implemented an AI-driven fraud detection system that increased fraud identification by 67% while reducing false positives by 49%.',
    image: 'https://images.pexels.com/photos/919436/pexels-photo-919436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Fraud Detection', 'Finance', 'Security'],
  },
];

export const CaseStudies: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="case-studies" className="py-16 md:py-24 bg-light-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">Case Studies</h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            Explore how our AI-driven solutions have transformed businesses across industries.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-light-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary-100 text-primary-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold text-dark-900 mb-2">{study.title}</h3>
                <p className="text-primary-600 font-medium text-sm mb-3">{study.client}</p>
                <p className="text-dark-600 mb-4">{study.description}</p>
                
                <a
                  href="#"
                  className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
                >
                  Read Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 border border-primary-600 text-primary-600 rounded-md hover:bg-primary-50 transition-all duration-300 text-base font-medium"
          >
            View All Case Studies
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};