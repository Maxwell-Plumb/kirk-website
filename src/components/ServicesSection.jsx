import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ServiceCard from './ServiceCard';
import SwipeIndicator from './SwipeIndicator'

const services = [
  { 
    id: 1,
    image: 'https://kirk-website.s3.us-east-2.amazonaws.com/ServicesSection+-+Residential+Services.webp', 
    title: 'Residential Services', 
    description: 'Home comfort solutions for every need.',
    link: '/services/residential'
  },
  { 
    id: 2,
    image: 'https://kirk-website.s3.us-east-2.amazonaws.com/Commercial+HVAC+Services+-+Air+Chillers.webp', 
    title: 'Commercial HVAC', 
    description: 'Efficient climate control for businesses.',
    link: '/services/commercial-hvac'
  },
  { 
    id: 3,
    image: 'https://kirk-website.s3.us-east-2.amazonaws.com/ServicesSection+-+Commercial+Plumbing.webp', 
    title: 'Commercial Plumbing', 
    description: 'Expert plumbing for commercial properties.',
    link: '/services/commercial-plumbing'
  },
  { 
    id: 4,
    image: 'https://kirk-website.s3.us-east-2.amazonaws.com/ServicesSection+-+Fire+Sprinklers.webp', 
    title: 'Fire Sprinklers', 
    description: 'Safety-first fire prevention systems.',
    link: '/services/fire-sprinklers'
  },
  { 
    id: 5,
    image: 'https://kirk-website.s3.us-east-2.amazonaws.com/ServicesSection+-+Gas+Lines.webp', 
    title: 'Gas Lines', 
    description: 'Safe, reliable gas line services.',
    link: '/services/gas-lines'
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="services-section py-12 px-4 bg-black">
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