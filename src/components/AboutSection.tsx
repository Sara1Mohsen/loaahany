import React from 'react';
import { aboutMe, experiences } from '../data';
import { Download, MapPin, Mail } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <span className="text-blue-600 dark:text-blue-400 font-medium mb-2">About Me</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            My Background
          </h2>
          <div className="w-16 h-1 bg-blue-600 mt-4 mb-6 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 text-center max-w-3xl">
            Here you'll find more information about me, my current skills, and my experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Get to know me!</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              I'm a passionate UI/UX Developer dedicated to creating seamless and engaging user experiences. With a strong focus on responsive design, accessibility, and performance, I craft interfaces that are not only visually appealing but also intuitive and user-centric.             </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              My approach to development combines technical expertise with an eye for design to create exceptional user experiences.
            </p>
            
            <div className="flex flex-col space-y-4 mb-8">
              <div className="flex items-center">
                <MapPin size={20} className="text-blue-600 dark:text-blue-400 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">{aboutMe.location}</span>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="text-blue-600 dark:text-blue-400 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">{aboutMe.email}</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
                <span className="text-gray-700 dark:text-gray-300">{aboutMe.availability}</span>
              </div>
            </div>
            
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-300"
            >
              Contact Me
            </a>
            
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 rounded-md border border-gray-300 dark:border-gray-700 ml-4 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium transition-colors duration-300"
            >
              <Download size={18} className="mr-2" />
              Resume
            </a>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Experience</h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-700 last:border-0 last:pb-0">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-500 border-4 border-white dark:border-gray-800"></div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
                      <span>{exp.company}</span>
                      <span className="hidden sm:block">•</span>
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;