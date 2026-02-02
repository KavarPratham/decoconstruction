import { FaHome, FaBuilding, FaHandshake, FaMapMarkedAlt } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaHome className="text-4xl" />,
      title: 'Residential Construction',
      description: 'Quality home construction services tailored to your needs, from foundation to finish.',
    },
    {
      icon: <FaBuilding className="text-4xl" />,
      title: 'Commercial Construction',
      description: 'Professional commercial building solutions for businesses of all sizes and industries.',
    },
    {
      icon: <FaHandshake className="text-4xl" />,
      title: 'Labour Contract Work',
      description: 'Reliable labour contract services with skilled professionals and efficient project management.',
    },
    {
      icon: <FaMapMarkedAlt className="text-4xl" />,
      title: 'Site Development & Earthwork',
      description: 'Complete site preparation, excavation, and earthwork services for all project types.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="w-full mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-amber-500">Services</span>
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Comprehensive construction solutions backed by experience, expertise, and dedication
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8 hover:bg-amber-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="text-amber-500 group-hover:text-slate-900 transition-colors duration-300 mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-slate-900 transition-colors duration-300 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-400 group-hover:text-slate-800 transition-colors duration-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
