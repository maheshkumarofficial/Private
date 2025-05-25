import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'Dr. Sophia Chen',
    role: 'Chief AI Officer',
    image: 'https://images.pexels.com/photos/5704849/pexels-photo-5704849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Ph.D. in Machine Learning with 15+ years of experience leading AI initiatives at major tech companies.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'mailto:sophia@kangqore.com',
    },
  },
  {
    name: 'James Wilson',
    role: 'CTO',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Former engineering leader at Google with expertise in scalable cloud architecture and AI systems.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'mailto:james@kangqore.com',
    },
  },
  {
    name: 'Dr. Michael Rahman',
    role: 'Head of Research',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Pioneering researcher in deep learning with 45+ published papers and 12 patents in AI technology.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'mailto:michael@kangqore.com',
    },
  },
  {
    name: 'Emily Johnson',
    role: 'Chief Product Officer',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Product visionary who transformed AI solutions for Fortune 500 companies, focusing on user experience.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'mailto:emily@kangqore.com',
    },
  },
];

export const Team: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="team" className="py-16 md:py-24 bg-light-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">Our Leadership Team</h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            Meet the experts behind Kangqore's innovative AI solutions and transformative technology.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-light-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-dark-900">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                <p className="text-dark-600 mb-4 text-sm">{member.bio}</p>
                
                <div className="flex space-x-3">
                  <a
                    href={member.social.linkedin}
                    className="text-dark-500 hover:text-primary-600 transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="text-dark-500 hover:text-primary-600 transition-colors"
                    aria-label={`${member.name}'s Twitter`}
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href={member.social.email}
                    className="text-dark-500 hover:text-primary-600 transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <p className="text-dark-600 mb-4">
            Our team includes 35+ AI specialists, data scientists, engineers, and industry experts.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-all duration-300 text-base font-medium"
          >
            Join Our Team
          </a>
        </div>
      </div>
    </section>
  );
};