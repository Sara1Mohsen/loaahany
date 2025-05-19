import React, { useState } from 'react';
import { skills } from '../data';
import { Code, Server, Database, GitBranch, PenTool, Box, Cloud } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'UX', name: 'UX' },
    { id: 'UI', name: 'UI' },
    { id: 'design', name: 'Design' },
    { id: 'other', name: 'Other' }
  ];
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);
    
  const iconMap: Record<string, React.ReactNode> = {
    code: <Code size={24} />,
    server: <Server size={24} />,
    database: <Database size={24} />,
    'git-branch': <GitBranch size={24} />,
    'pen-tool': <PenTool size={24} />,
    box: <Box size={24} />,
    cloud: <Cloud size={24} />
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <span className="text-blue-600 dark:text-blue-400 font-medium mb-2">My Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Skills & Technologies
          </h2>
          <div className="w-16 h-1 bg-blue-600 mt-4 mb-6 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 text-center max-w-3xl">
            I've worked with a variety of technologies in web development. Here are some of my technical skills.
          </p>
        </div>
        
        <div className="flex justify-center mb-8 overflow-x-auto">
          <div className="flex space-x-2 p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4 text-blue-600 dark:text-blue-400">
                {iconMap[skill.icon]}
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;