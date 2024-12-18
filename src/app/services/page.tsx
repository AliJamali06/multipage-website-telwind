import React from 'react';

const services = [
  {
    title: 'Web Development',
    description: 'Build modern, responsive websites with the latest technologies.',
    icon: '🌐',
  },
  {
    title: 'App Development',
    description: 'Create cross-platform mobile applications for iOS and Android.',
    icon: '📱',
  },
  {
    title: 'SEO Optimization',
    description: 'Improve your website ranking on search engines with SEO services.',
    icon: '🔍',
  },
  {
    title: 'Digital Marketing',
    description: 'Boost your business with targeted online marketing strategies.',
    icon: '📈',
  },
];

const Services = () => {
  return (
    <div className="p-10 text-center bg-gray-50">
      <h1 className="text-3xl font-semibold text-sky-400 mb-8">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {services.map((service, index) => (
          <div
            key={index}
            className="border border-gray-200 p-6 rounded-lg shadow-lg bg-white hover:shadow-xl duration-300 transform hover:scale-105"
          >
            <span className="text-4xl mb-4 block">{service.icon}</span>
            <h3 className="text-xl font-medium text-sky-600 mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4 font-sans">{service.description}</p>
            <button className="py-2 px-4 bg-sky-600 text-white rounded hover:bg-sky-700 transition-colors">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
