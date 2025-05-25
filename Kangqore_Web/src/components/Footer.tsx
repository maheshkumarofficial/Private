import React from 'react';
import { Brain, Twitter, Linkedin, Github, Facebook, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', url: '#about' },
        { name: 'Careers', url: '#' },
        { name: 'Blog', url: '#' },
        { name: 'Team', url: '#team' },
        { name: 'Contact', url: '#contact' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'AI Development', url: '#services' },
        { name: 'Software Engineering', url: '#services' },
        { name: 'Data Analytics', url: '#services' },
        { name: 'Cloud Solutions', url: '#services' },
        { name: 'Cybersecurity', url: '#services' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Case Studies', url: '#case-studies' },
        { name: 'Documentation', url: '#' },
        { name: 'White Papers', url: '#' },
        { name: 'Webinars', url: '#' },
        { name: 'Research', url: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', url: '#' },
        { name: 'Terms of Service', url: '#' },
        { name: 'Cookie Policy', url: '#' },
        { name: 'Accessibility', url: '#' },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, url: '#', label: 'LinkedIn' },
    { icon: <Twitter className="h-5 w-5" />, url: '#', label: 'Twitter' },
    { icon: <Github className="h-5 w-5" />, url: '#', label: 'GitHub' },
    { icon: <Facebook className="h-5 w-5" />, url: '#', label: 'Facebook' },
    { icon: <Instagram className="h-5 w-5" />, url: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-dark-900 text-light-300 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Brain className="h-8 w-8 text-primary-500" />
              <span className="text-2xl font-semibold text-white">Kangqore</span>
            </div>
            <p className="mb-6 text-light-400 max-w-md">
              Kangqore delivers cutting-edge AI-driven IT and software solutions to transform your business. Our innovative approach combines artificial intelligence with expert software development.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  aria-label={social.label}
                  className="bg-dark-800 text-light-400 hover:text-primary-500 hover:bg-dark-700 p-2 rounded-full transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-white mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.url}
                      className="text-light-400 hover:text-primary-500 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-dark-700 pt-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-lg font-semibold text-white mb-2">Stay Updated</h3>
              <p className="text-light-400 mb-0">
                Subscribe to our newsletter for the latest news and insights on AI technology.
              </p>
            </div>
            <div>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-2 rounded-l-md bg-dark-800 border border-dark-600 text-light-300 focus:outline-none focus:ring-1 focus:ring-primary-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary-600 text-white rounded-r-md hover:bg-primary-700 transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-dark-700 pt-8 text-center text-light-500 text-sm">
          <p>© {currentYear} Kangqore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};