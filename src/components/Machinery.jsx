import { GiMiningHelmet } from 'react-icons/gi';
import { FaTruck, FaTractor, FaCogs } from 'react-icons/fa';

const Machinery = () => {
  const equipment = [
    {
      icon: <FaCogs className="text-5xl" />,
      name: 'JCB Machines',
      count: '2',
      description: 'Heavy-duty excavation equipment',
    },
    {
      icon: <FaTruck className="text-5xl" />,
      name: 'Dumper Trucks',
      count: '3',
      description: 'Material transportation fleet',
    },
    {
      icon: <FaTractor className="text-5xl" />,
      name: 'Tractors',
      count: '2',
      description: 'Versatile site equipment',
    },
    {
      icon: <GiMiningHelmet className="text-5xl" />,
      name: 'Skilled Staff',
      count: '13',
      description: 'Professional workforce',
    },
  ];

  return (
    <section id="machinery" className="py-20 bg-white">
      <div className="w-full mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Machinery & <span className="text-amber-500">Workforce</span>
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            State-of-the-art equipment and skilled professionals ready to tackle any project
          </p>
        </div>

        {/* Equipment Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {equipment.map((item, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="bg-linear-to-br from-slate-900 to-slate-800 rounded-lg p-8 mb-4 hover:from-amber-500 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
                <div className="text-amber-500 group-hover:text-slate-900 transition-colors duration-300 mb-4 flex justify-center">
                  {item.icon}
                </div>
                <div className="text-5xl font-bold text-white group-hover:text-slate-900 transition-colors duration-300 mb-2">
                  {item.count}
                </div>
                <div className="text-gray-400 group-hover:text-slate-800 transition-colors duration-300 text-sm">
                  {item.description}
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                {item.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 bg-linear-to-r from-slate-900 to-slate-800 rounded-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Fully Equipped for Any Challenge
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Our fleet of 7 heavy machines combined with a team of 13 skilled professionals ensures efficient project execution and timely delivery.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">7</div>
                <div className="text-gray-400">Heavy Machines</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">13</div>
                <div className="text-gray-400">Staff Members</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Machinery;
