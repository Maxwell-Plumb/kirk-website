import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ServiceCard from './ServiceCard';
import SwipeIndicator from './SwipeIndicator'

const services = [
  { 
    id: 1,
    image: 'https://images.unsplash.com/photo-1522444195799-478538b28823?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    title: 'Residential Services', 
    description: 'Home comfort solutions for every need.',
    link: '/services/residential'
  },
  { 
    id: 2,
    image: 'https://images.unsplash.com/photo-1708449287110-2f2418fb5a62?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    title: 'Commercial HVAC', 
    description: 'Efficient climate control for businesses.',
    link: '/services/commercial-hvac'
  },
  { 
    id: 3,
    image: 'https://images.unsplash.com/photo-1513828742140-ccaa28f3eda0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    title: 'Commercial Plumbing', 
    description: 'Expert plumbing for commercial properties.',
    link: '/services/commercial-plumbing'
  },
  { 
    id: 4,
    image: 'https://images.unsplash.com/photo-1577678923709-758495cb4497?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    title: 'Fire Sprinklers', 
    description: 'Safety-first fire prevention systems.',
    link: '/services/fire-sprinklers'
  },
  { 
    id: 5,
    image: 'https://images.unsplash.com/photo-1607324772107-8ad6740ca195?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    title: 'Gas Lines', 
    description: 'Safe, reliable gas line services.',
    link: '/services/gas-lines'
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section py-12 px-4 bg-black">
      <Swiper
        spaceBetween={1}
        slidesPerView={1.2}
        speed={500}
        breakpoints={{
          640: {
            slidesPerView: 2.2,
          },
          1024: {
            slidesPerView: 3.2,
          },
          1280: {
            slidesPerView: 4.2,
          },
        }}
      >
        {services.map((service) => (
          <SwiperSlide key={service.id}>
            <ServiceCard
              image={service.image}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-6">
        <SwipeIndicator />
      </div>
    </section>
  );
};

export default ServicesSection;