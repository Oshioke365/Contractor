import React from 'react';
import { Award, Users, Clock, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, number: "Multi", label: "Service Expertise" },
    { icon: Users, number: "NPDC", label: "Trusted Partner" },
    { icon: Clock, number: "Delta", label: "State Coverage" },
    { icon: Target, number: "100%", label: "Quality Commitment" }
  ];

  const values = [
    {
      title: "Comprehensive Solutions",
      description: "From construction to ICT services, we provide end-to-end solutions for all your infrastructure needs."
    },
    {
      title: "Technical Expertise",
      description: "Our multi-disciplinary team combines construction, electrical, HVAC, and ICT expertise under one roof."
    },
    {
      title: "Local Knowledge",
      description: "Based in Delta State, we understand local requirements and deliver solutions tailored to regional needs."
    },
    {
      title: "Industry Partnerships",
      description: "Trusted by major organizations including NPDC and PTI for critical infrastructure projects."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About ISUKO SHENGE & CO
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              ISUKO SHENGE & CO is a comprehensive construction and technical services company specializing in construction, civil works, renovation, electrical installations, air conditioning systems, and ICT services.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We serve clients across Delta State and beyond, with particular expertise in industrial and commercial projects. Our unique capability includes caravan refurbishment for office and living quarters, making us a versatile partner for diverse infrastructure needs.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Construction and technical services"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">Delta State</div>
              <div className="text-sm">Based & Serving</div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;