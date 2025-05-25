import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  }>({
    submitted: false,
    success: false,
    message: '',
  });

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you! Your message has been received. We will contact you shortly.',
    });
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Us',
      details: 'info@kangqore.com',
      action: 'mailto:info@kangqore.com',
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      action: 'tel:+15551234567',
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Visit Us',
      details: '123 Innovation Way, San Francisco, CA 94107',
      action: 'https://maps.google.com',
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-light-200 to-light-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            Ready to transform your business with AI? Contact us today to discuss your project or learn more about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.action}
                className="flex items-start p-5 bg-light-100 rounded-lg hover:bg-primary-50 transition-colors duration-300 group"
              >
                <div className="bg-primary-100 p-3 rounded-md text-primary-600 mr-4 group-hover:bg-primary-200 transition-colors duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-dark-900 mb-1">{item.title}</h3>
                  <p className="text-dark-600">{item.details}</p>
                </div>
              </a>
            ))}
            
            <div className="p-5 bg-primary-600 text-white rounded-lg mt-6">
              <h3 className="text-lg font-semibold mb-3">Schedule a Consultation</h3>
              <p className="mb-4">
                Want to discuss your project in detail? Schedule a free 30-minute consultation with our AI experts.
              </p>
              <a
                href="#"
                className="inline-block px-4 py-2 bg-white text-primary-600 rounded-md font-medium hover:bg-light-200 transition-colors"
              >
                Book a Meeting
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-light-100 rounded-xl p-6 md:p-8 shadow-md"
          >
            {formStatus.submitted ? (
              <div className="text-center p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success-100 text-success-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-dark-900 mb-2">Thank You!</h3>
                <p className="text-dark-600">{formStatus.message}</p>
                <button
                  onClick={() => setFormStatus({ submitted: false, success: false, message: '' })}
                  className="mt-6 px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-dark-700 mb-2 font-medium">
                      Full Name <span className="text-error-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-light-400 focus:border-primary-500 focus:ring focus:ring-primary-200 transition-all outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-dark-700 mb-2 font-medium">
                      Email Address <span className="text-error-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-light-400 focus:border-primary-500 focus:ring focus:ring-primary-200 transition-all outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-dark-700 mb-2 font-medium">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-light-400 focus:border-primary-500 focus:ring focus:ring-primary-200 transition-all outline-none"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-dark-700 mb-2 font-medium">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-light-400 focus:border-primary-500 focus:ring focus:ring-primary-200 transition-all outline-none"
                      placeholder="Your Company"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-dark-700 mb-2 font-medium">
                    Message <span className="text-error-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-md border border-light-400 focus:border-primary-500 focus:ring focus:ring-primary-200 transition-all outline-none"
                    placeholder="Tell us about your project and how we can help..."
                  ></textarea>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="privacy"
                    required
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-light-400 rounded"
                  />
                  <label htmlFor="privacy" className="ml-2 text-dark-600 text-sm">
                    I agree to the <a href="#" className="text-primary-600 hover:underline">Privacy Policy</a> and consent to being contacted.
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-all duration-300 text-base font-medium w-full md:w-auto"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};