import React from 'react';
import ServiceCard from './ServiceCard';
import web from '../assets/services/web.png'
import res from '../assets/services/res.png'
import api from '../assets/services/api.png'
const Services = () => {
  return (
    <div className="container py-16 md:py-20" id="services">
      <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        Here's what I'm good at
      </h2>
      <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        These are the services I offer
      </h3>

      <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
        <ServiceCard 
          img={web} 
          title="Full Stack Web Development" 
          desc="Building dynamic and responsive web applications using the MERN stack (MongoDB, Express.js, React, Node.js)."
        />
        <ServiceCard 
          img={res}
          title="Responsive Web Design"
          desc="Creating mobile-friendly, adaptive web layouts that provide an optimal viewing experience across all devices."
        />
        <ServiceCard 
          img={api}
          title="RESTful API Development" 
          desc="Designing and developing efficient, scalable APIs to connect frontend and backend services."
        />
     
      </div>
    </div>
  );
};



export default Services;
