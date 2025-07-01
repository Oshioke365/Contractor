import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

// Props Interface
interface HeroProps {
  onViewProjectsClick: () => void;
  onGetQuoteClick: () => void;
}

const Hero = ({ onViewProjectsClick, onGetQuoteClick }: HeroProps) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
      {/* Background Overlays */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div
        className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-blue-600/20 text-blue-300 rounded-full text-sm font-medium mb-4">
              Comprehensive Construction & Technical Services
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Building Excellence,
            <span className="text-blue-400 block">Delivering Solutions</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
            ISUKO SHENGE & CO specializes in comprehensive construction, civil jobs, renovation services, electrical installations, air conditioning systems, and ICT services. From building construction to caravan refurbishment, we deliver quality solutions across Delta State and beyond.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              onClick={onGetQuoteClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-200 transform hover:scale-105"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="h-5 w-5" />
            </button>

            <button
              onClick={onViewProjectsClick}
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-200"
            >
              View Our Projects
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: CheckCircle, text: 'Licensed & Insured' },
              { icon: CheckCircle, text: 'Multi-Disciplinary Expertise' },
              
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3 text-white">
                <item.icon className="h-6 w-6 text-blue-400" />
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
