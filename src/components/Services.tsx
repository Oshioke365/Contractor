import React from 'react';
import { Home, Building, Wrench, Paintbrush, Zap, Wind, Wifi } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Building,
      title: "Construction & Civil Works",
      description: "Comprehensive construction services including building construction, renovation, and civil engineering projects.",
      features: ["Building Construction", "Civil Engineering", "Structural Work", "Foundation & Concrete Work"]
    },
    {
      icon: Paintbrush,
      title: "Painting & Roofing",
      description: "Professional painting services for interior and exterior surfaces, plus comprehensive roofing solutions.",
      features: ["Interior Painting", "Exterior Painting", "Roof Installation", "Roof Maintenance & Repair"]
    },
    {
      icon: Home,
      title: "Caravan Refurbishment",
      description: "Specialized conversion and refurbishment of caravans for office and living quarters.",
      features: ["Office Conversion", "Living Quarters Setup", "Interior Fitting", "Custom Modifications"]
    },
    {
      icon: Zap,
      title: "Electrical Services",
      description: "Complete electrical installation and maintenance services for residential and commercial properties.",
      features: ["Electrical Installation", "Wiring & Rewiring", "Lighting Systems", "Electrical Maintenance"]
    },
    {
      icon: Wind,
      title: "Air Conditioning Services",
      description: "Professional air conditioning installation, maintenance, and servicing for optimal climate control.",
      features: ["AC Installation", "System Maintenance", "Repair Services", "Performance Optimization"]
    },
    {
      icon: Wifi,
      title: "ICT Services",
      description: "Information and Communication Technology services including network setup and maintenance.",
      features: ["Network Installation", "LAN Setup", "WAN Configuration", "IT Support & Maintenance"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive construction and technical solutions designed to meet all your building, renovation, and infrastructure needs with unmatched quality and professionalism.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 group"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
              </div>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;