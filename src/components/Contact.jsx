import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaPhoneAlt className="text-2xl" />,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      subContent: 'Mon-Sat, 8AM-6PM',
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: 'Email',
      content: 'info@decoconstruction.com',
      subContent: '24/7 Email Support',
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: 'Location',
      content: 'Your City, State',
      subContent: 'Visit our office',
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: 'Working Hours',
      content: 'Mon - Sat: 8AM - 6PM',
      subContent: 'Sunday: Closed',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="w-full mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-amber-500">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to start your next project? Contact us today for a consultation
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-slate-800 border border-slate-700 rounded-lg p-6 text-center hover:border-amber-500 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-amber-500 rounded-full text-slate-900 mb-4">
                {info.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{info.title}</h3>
              <p className="text-amber-500 font-semibold mb-1">{info.content}</p>
              <p className="text-gray-400 text-sm">{info.subContent}</p>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="bg-linear-to-r from-amber-500 to-amber-600 rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Ready to Build Your Dream Project?
          </h3>
          <p className="text-slate-800 text-lg mb-8 max-w-2xl mx-auto">
            Contact DECO Construction Company today and let our 22+ years of experience bring your vision to life with quality and reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15551234567"
              className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Call Us Now
            </a>
            <a
              href="mailto:info@decoconstruction.com"
              className="inline-block bg-white hover:bg-gray-100 text-slate-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
