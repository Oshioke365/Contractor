import React from 'react';
import { ExternalLink, Calendar, MapPin } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "PTI Staff Quarters Refurbishment",
      category: "Renovation",
      location: "PTI Effurun, Warri, Delta State",
      year: "Recent",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Complete refurbishing of staff quarters including painting and interior renovation of Charlet Conference Center and external fencing painting."
    },
    {
      title: "NPDC Clinic Toilet Construction",
      category: "Construction",
      location: "OML 26, NPDC Ozoro, Delta State",
      year: "Recent",
      image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Construction of modern toilet facilities for NPDC clinic to improve sanitation and healthcare infrastructure."
    },
    {
      title: "Industrial Gratings Construction",
      category: "Civil Works",
      location: "OML 119, Wear Heads, Ologbo",
      year: "Recent",
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Construction and installation of industrial gratings for enhanced safety and operational efficiency."
    },
    {
      title: "Caravan Office Conversion",
      category: "Refurbishment",
      location: "OML 119, NPDC, Ologbo",
      year: "Recent",
      image: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Conversion of caravans into functional office and engineering storage facilities with custom modifications."
    },
    {
      title: "External Lighting System Refurbishment",
      category: "Electrical",
      location: "OML, NPDC, Oghelli",
      year: "Recent",
      image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Complete refurbishment of external lighting systems to improve safety and operational visibility."
    },
    {
      title: "Walkway & Gratings Installation",
      category: "Construction",
      location: "OML 26 Ozoro & OML 65 Maraja, Delta State",
      year: "Recent",
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Construction of walkways with gratings and installation of safety gratings at wear heads across multiple locations."
    },
    {
      title: "Air Conditioning Maintenance",
      category: "HVAC Services",
      location: "OML 40, Opuama & NPDC Benin City",
      year: "Ongoing",
      image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Comprehensive maintenance and servicing of air conditioning systems across multiple NPDC facilities."
    },
    {
      title: "Network Infrastructure Revamp",
      category: "ICT Services",
      location: "Warri Warehouse, Delta State",
      year: "Recent",
      image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Complete revamp of Local Area Network (LAN) and reactivation of Wide Area Network (WAN) infrastructure."
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Recent Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful projects across Delta State, showcasing our expertise in construction, renovation, electrical, HVAC, and ICT services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-200">
                    <ExternalLink className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span className="truncate">{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;