import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, Users, Zap, Award } from 'lucide-react';

export const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const statsItems = [
    { value: '98%', label: 'Client satisfaction' },
    { value: '120+', label: 'Projects completed' },
    { value: '35+', label: 'AI experts' },
    { value: '12+', label: 'Years of experience' },
  ];

  const values = [
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Client-Centric',
      description: 'We put our clients first, ensuring their needs drive our solutions.',
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Innovation',
      description: 'We embrace emerging technologies to deliver cutting-edge solutions.',
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our work and delivery.',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-light-200 to-light-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* About Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-6">
              We're Transforming Industries Through Intelligent Technology
            </h2>
            
            <p className="text-lg text-dark-600 mb-6">
              Founded in 2012, Kangqore has been at the forefront of the AI revolution, helping businesses
              leverage artificial intelligence to solve complex problems and drive innovation.
            </p>
            
            <p className="text-lg text-dark-600 mb-8">
              Our team of expert engineers, data scientists, and AI specialists work together to deliver
              tailored solutions that meet the unique needs of each client, ensuring measurable results
              and long-term success.
            </p>
            
            <ul className="space-y-3 mb-8">
              {[
                'Industry-leading AI expertise',
                'End-to-end development capabilities',
                'Dedicated support and maintenance',
                'Continuous innovation and improvement',
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-primary-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-dark-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Stats and Values */}
          <div className="space-y-12">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {statsItems.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-light-100 p-6 rounded-lg shadow-sm text-center"
                >
                  <div className="text-3xl font-bold text-primary-600 mb-1">{stat.value}</div>
                  <div className="text-dark-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            
            {/* Values */}
            <div>
              <h3 className="text-xl font-semibold text-dark-900 mb-4">Our Core Values</h3>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="bg-primary-100 p-3 rounded-lg text-primary-600 mr-4 flex-shrink-0">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-dark-900">{value.title}</h4>
                      <p className="text-dark-600">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};