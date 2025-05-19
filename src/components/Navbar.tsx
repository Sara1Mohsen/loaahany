import React, { useState, useEffect } from 'react';
import { navLinks } from '../data';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 300;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold">
            LH<span className="text-primary">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className={`nav-link text-sm font-medium ${
                  activeSection === link.url.substring(1) ? 'active' : ''
                }`}
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="primary-button">
              Book A Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pt-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                onClick={() => setIsOpen(false)}
                className={`block py-3 nav-link ${
                  activeSection === link.url.substring(1) ? 'active' : ''
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="primary-button block text-center mt-4"
            >
              Book A Consultation
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;