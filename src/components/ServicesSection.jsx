import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ServiceCard from './ServiceCard';
import SwipeIndicator from './SwipeIndicator';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

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
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,  // Adjust the threshold to determine how much of the section needs to be in view
  });

  const slideVariants = {
    hidden: { opacity: 0, x: 100 },  // Start off-screen to the right
    visible: (i) => ({
      opacity: 1,
      x: 0,  // Slide in to the correct position
      transition: {
        delay: i * 0.2,  // Stagger the reveal of each slide
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <motion.section
      id="services"
      className="services-section py-12 px-4 bg-black"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {},
      }}
    >
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
        {services.map((service, index) => (
          <SwiperSlide key={service.id}>
            <motion.div
              custom={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideVariants}
            >
              <ServiceCard
                image={service.image}
                title={service.title}
                description={service.description}
                link={service.link}
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-6">
        <SwipeIndicator />
      </div>
    </motion.section>
  );
};

export default ServicesSection;
