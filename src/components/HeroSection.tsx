import React from 'react';
import { aboutMe } from '../data';
import { BarChart3, CheckCircle, Heart, Users } from 'lucide-react';
import loa2 from '../assets/loa2.png';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            I'm {aboutMe.name}
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-8">
            MULTI—DISCIPLINARY<br />DESIGNER.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="card p-8">
            <img
              src={loa2}
              alt="Profile"
              className="w-full aspect-square object-cover rounded-2xl mb-6"
            />
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold mb-2">About Me</h3>
                <p className="text-text-secondary">{aboutMe.bio}</p>
                <button className="primary-button mt-6">Talk with me</button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="stats-card">
              <BarChart3 className="text-primary mb-4" size={32} />
              <div className="text-2xl font-bold">+5 Years</div>
              <div className="text-text-secondary">EXPERIENCE</div>
            </div>
            <div className="stats-card">
              <CheckCircle className="text-primary mb-4" size={32} />
              <div className="text-2xl font-bold">+20</div>
              <div className="text-text-secondary">PROJECT</div>
            </div>
            <div className="stats-card">
              <Heart className="text-primary mb-4" size={32} />
              <div className="text-2xl font-bold">+400</div>
              <div className="text-text-secondary">CLIENT</div>
            </div>
            <div className="stats-card">
              <Users className="text-primary mb-4" size={32} />
              <div className="text-2xl font-bold">+10</div>
              <div className="text-text-secondary">TEAMS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;