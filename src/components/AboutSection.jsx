import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="bg-black text-white">
      {/* Banner with Quote */}
      <motion.div 
        className="relative h-[60vh] w-full bg-cover bg-center" 
        style={{backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80')"}}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <motion.div 
            className="text-center max-w-4xl px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 leading-tight sm:leading-snug">
              "I've learned that exceptional service stems from <span className='brand-color'>genuine understanding and care</span>. 
              It's not just about fixing what's broken; it's about nurturing the lives within those walls."
            </h1>
            <p className="text-base sm:text-lg md:text-xl italic brand-color">
              Kirk Seubert
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-8 sm:py-16">
        {/* Journey Section */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 brand-color">From Boiler Room to Boardroom</h2>
            <p className="text-base sm:text-lg">
              Kirk's journey began in the hearts of homes - their mechanical rooms. As a young apprentice, 
              he realized he wasn't just providing services; he was delivering <span className='brand-color'>comfort</span>, <span className='brand-color'>safety</span>, and <span className='brand-color'>peace of mind</span>. 
              This revelation became the foundation for <span className='brand-color'>Maxwell Plumb Mechanical Corp</span>.
            </p>
          </div>
          <motion.div 
            className="h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src="https://kirk-website.s3.us-east-2.amazonaws.com/AboutSection+-+HVAC+Technician+At+Work.webp" 
              alt="HVAC Technician at work"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Enhanced Story Section */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
          }}
        >
          <motion.div 
            className="order-2 md:order-1 h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src="https://kirk-website.s3.us-east-2.amazonaws.com/AboutSection+-+Modern+Home+HVAC+System.webp" 
              alt="Modern home HVAC system"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 brand-color">The Heart of Maxwell Plumb: Our Journey</h2>
            <p className="text-base sm:text-lg mb-4">
              At Maxwell Plumb, our mission has always been clear: to blend technical excellence with genuine care. 
              Over the years, we've grown from a small operation to an industry leader, but our core values have remained the same.
            </p>
            <p className="text-base sm:text-lg mb-4">
              We've had the privilege of impacting countless lives by ensuring their homes are safe, comfortable, and well-maintained.
              Every project, from the simplest repair to the most complex installation, is driven by our commitment to excellence.
            </p>
            <p className="text-base sm:text-lg mb-4">
              As we look to the future, we're focused on pushing the boundaries of home services. We are investing in <span className='brand-color'>innovative technologies</span>,
              enhancing our training programs, and expanding our reach to bring our vision of exceptional service to more homes across the country.
            </p>
            <p className="text-base sm:text-lg">
              This is not just our work; it's our passion. We believe that every home we touch becomes part of the Maxwell Plumb legacy.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
