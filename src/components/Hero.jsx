import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  const handleContactClick = (e) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen flex items-center">
      <div className="w-full mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-2 mb-8">
            <span className="text-amber-500 font-semibold text-sm">22+ Years of Excellence</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Building Quality,
            <span className="block text-amber-500">Delivering Trust</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Professional residential and commercial construction services
            with over two decades of proven expertise and reliability
          </p>

          {/* CTA Button */}
          <button
            onClick={handleContactClick}
            className="group inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Contact Us Today
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">22+</div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">11+</div>
              <div className="text-gray-400 text-sm">Active Years</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">7</div>
              <div className="text-gray-400 text-sm">Heavy Machines</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">13</div>
              <div className="text-gray-400 text-sm">Skilled Staff</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
