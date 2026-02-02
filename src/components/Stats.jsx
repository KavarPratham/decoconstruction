import { FaCalendarAlt, FaHardHat, FaCogs, FaUsers } from 'react-icons/fa';

const Stats = () => {
  const stats = [
    {
      icon: <FaCalendarAlt className="text-4xl" />,
      number: '22+',
      label: 'Years in Construction Business',
      description: 'Trusted since 2003',
    },
    {
      icon: <FaHardHat className="text-4xl" />,
      number: '11+',
      label: 'Years Hands-on Experience',
      description: 'Owner-led expertise',
    },
    {
      icon: <FaCogs className="text-4xl" />,
      number: '7',
      label: 'Heavy Machines Owned',
      description: 'Fully equipped fleet',
    },
    {
      icon: <FaUsers className="text-4xl" />,
      number: '13',
      label: 'Professional Staff Members',
      description: 'Skilled workforce',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-500 to-amber-600">
      <div className="w-full mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Track Record
          </h2>
          <div className="w-24 h-1 bg-slate-900 mx-auto mb-6"></div>
          <p className="text-slate-800 text-lg max-w-2xl mx-auto font-medium">
            Numbers that speak for our commitment to excellence and reliability
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/95 backdrop-blur-sm rounded-lg p-8 text-center hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              <div className="text-amber-600 mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-5xl md:text-6xl font-bold text-slate-900 mb-2">
                {stat.number}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {stat.label}
              </h3>
              <p className="text-gray-600 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Experience You Can Trust, Quality You Can See
          </p>
          <p className="text-slate-800 text-lg">
            Let our proven track record work for your next project
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
