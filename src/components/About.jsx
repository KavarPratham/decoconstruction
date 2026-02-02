import { FaCheckCircle, FaUsers, FaTrophy } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="w-full mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            About <span className="text-amber-500">DECO Construction</span>
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Main Content */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
              Building Excellence Since 2003
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              DECO Construction Company is a <strong>family-owned construction business</strong> with over <strong>22 years of industry experience</strong>. We specialize in residential and commercial construction projects executed on a labour contract basis.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Our owner has been actively involved in the construction field for <strong>11+ years</strong>, ensuring quality, reliability, and timely project delivery on every build.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              With a commitment to excellence and a proven track record, we've earned the trust of countless clients throughout our journey.
            </p>
          </div>

          {/* Right: Feature Cards */}
          <div className="space-y-6">
            <div className="flex items-start gap-4 bg-slate-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-amber-500 p-3 rounded-lg shrink-0">
                <FaTrophy className="text-slate-900 text-2xl" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Proven Experience</h4>
                <p className="text-gray-700">
                  Over two decades of successful project completions across residential and commercial sectors.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-slate-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-amber-500 p-3 rounded-lg shrink-0">
                <FaCheckCircle className="text-slate-900 text-2xl" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Quality Assured</h4>
                <p className="text-gray-700">
                  Commitment to delivering high-quality construction with attention to every detail.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-slate-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-amber-500 p-3 rounded-lg shrink-0">
                <FaUsers className="text-slate-900 text-2xl" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Skilled Team</h4>
                <p className="text-gray-700">
                  13 professional staff members dedicated to bringing your vision to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
