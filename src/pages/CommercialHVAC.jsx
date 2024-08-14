import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ServiceHero from '../components/services/ServiceHero';
import ServiceGrid from '../components/services/ServiceGrid';
import ServiceModal from '../components/services/ServiceModal';

const airConditioningServices = [
    {
        title: 'Air Chillers',
        image: 'https://kirk-website.s3.us-east-2.amazonaws.com/Commercial+HVAC+Services+-+Air+Chillers.webp',
        description: 'High-efficiency air chillers for optimal cooling performance.',
        longDescription: "Experience superior cooling with our state-of-the-art air chiller systems. At Maxwell Plumb Mechanical, we specialize in installing, maintaining, and repairing air chillers designed to meet the demands of commercial and industrial environments. Our expert technicians ensure your air chiller operates at peak efficiency, providing consistent temperature control while minimizing energy consumption.",
        features: [
            'Energy-efficient cooling',
            'Precise temperature control',
            'Reduced operating costs',
            'Customized solutions'
        ],
        callToAction: {
            text: 'Get Your Air Chiller Quote',
            onClick: null
        },
        additionalContent: (
            <div>
            <h5 className='text-lg font-semibold text-white mb-2'>Why Choose Our Air Chiller Services?</h5>
            <p className='text-gray-300'>Our air chiller solutions are tailored to your specific needs, whether for industrial processes, data centers, or large commercial spaces. We utilize cutting-edge technology to maximize cooling efficiency while minimizing environmental impact. Trust our experienced team to design, install, and maintain an air chiller system that ensures optimal performance and longevity for your cooling infrastructure.</p>
            </div>
        )
    },
    {
        title: 'Air Conditioner Installation',
        image: 'https://kirk-website.s3.us-east-2.amazonaws.com/Commercial+HVAC+Services+-+Air+Conditioner+Installation.webp',
        description: 'Professional AC installation for optimal comfort and efficiency.',
        longDescription: "Upgrade your space with expert air conditioner installation from Maxwell Plumb Mechanical. Our skilled technicians ensure your new AC system is perfectly sized and installed for maximum performance and energy efficiency. We handle everything from unit selection to final testing, providing you with a cool, comfortable environment that lasts.",
        features: [
          'Expert system sizing',
          'Energy-efficient units',
          'Professional installation',
          'Full system testing'
        ],
        callToAction: {
          text: 'Schedule Your AC Installation',
          onClick: null
        },
        additionalContent: (
          <div>
            <h5 className='text-lg font-semibold text-white mb-2'>Why Choose Our AC Installation?</h5>
            <p className='text-gray-300'>Our team brings years of experience and industry-leading knowledge to every installation. We work with top brands and cutting-edge technology to ensure your new air conditioner meets your specific needs. From residential to commercial spaces, trust us to deliver a cooling solution that enhances comfort while optimizing energy use.</p>
          </div>
        )
      },
      {
        title: 'Air Conditioner Maintenance',
        image: 'https://kirk-website.s3.us-east-2.amazonaws.com/Commercial+HVAC+Services+-+Air+Conditioner+Maintenance.webp',
        description: 'Regular AC maintenance to ensure peak performance and longevity.',
        longDescription: "Keep your air conditioning system running smoothly with our comprehensive maintenance services. At Maxwell Plumb Mechanical, we offer thorough inspections, cleaning, and tune-ups to prevent breakdowns, improve efficiency, and extend the life of your AC unit. Our preventative maintenance plans save you money on energy bills and costly repairs.",
        features: [
          'Comprehensive system check',
          'Filter replacement',
          'Coil cleaning',
          'Performance optimization'
        ],
        callToAction: {
          text: 'Book AC Maintenance Now',
          onClick: null
        },
        additionalContent: (
          <div>
            <h5 className='text-lg font-semibold text-white mb-2'>Benefits of Regular AC Maintenance</h5>
            <p className='text-gray-300'>Regular maintenance is key to ensuring your AC system operates at its best. Our skilled technicians catch small issues before they become major problems, helping you avoid unexpected breakdowns and extend the lifespan of your unit. Experience improved air quality, lower energy bills, and consistent comfort with our expert maintenance services.</p>
          </div>
        )
    },
    {
        title: 'Air Conditioner Repair',
        image: 'https://kirk-website.s3.us-east-2.amazonaws.com/Commercial+HVAC+Services+-+Air+Conditioner+Repair.webp',
        description: 'Swift and reliable AC repair services to restore your comfort.',
        longDescription: "When your air conditioner breaks down, Maxwell Plumb Mechanical is here to help. Our expert technicians provide fast, efficient repair services for all makes and models of AC units. We diagnose issues quickly and offer transparent solutions to get your system back up and running, ensuring your space stays cool and comfortable.",
        features: [
          '24/7 emergency service',
          'Experienced technicians',
          'All brands serviced',
          'Transparent pricing'
        ],
        callToAction: {
          text: 'Get AC Repair Now',
          onClick: null
        },
        additionalContent: (
          <div>
            <h5 className='text-lg font-semibold text-white mb-2'>Why Choose Our AC Repair Service?</h5>
            <p className='text-gray-300'>Our team is equipped to handle any AC problem, from minor fixes to major system overhauls. We prioritize quick response times and efficient repairs to minimize disruption to your daily life or business operations. With our expertise and commitment to customer satisfaction, you can trust us to resolve your AC issues effectively and affordably.</p>
          </div>
        )
    },
    {
        title: 'Ductless Air Conditioning',
        image: 'https://kirk-website.s3.us-east-2.amazonaws.com/Commercial+HVAC+Services+-+Ductless+Air+Conditioning.webp',
        description: 'Efficient and flexible cooling solutions for any space.',
        longDescription: "Experience the ultimate in comfort and efficiency with ductless air conditioning systems from Maxwell Plumb Mechanical. Our ductless AC solutions offer precise temperature control for individual rooms or zones, making them perfect for homes without existing ductwork, additions, or areas needing supplemental cooling. Enjoy quiet operation, improved air quality, and significant energy savings with our expert installation and maintenance services.",
        features: [
          'Zone-based climate control',
          'Energy-efficient operation',
          'Easy installation process',
          'Improved indoor air quality'
        ],
        callToAction: {
          text: 'Explore Ductless AC Options',
          onClick: null
        },
        additionalContent: (
          <div>
            <h5 className='text-lg font-semibold text-white mb-2'>Why Choose Ductless Air Conditioning?</h5>
            <p className='text-gray-300'>Ductless systems offer unparalleled flexibility and efficiency for modern spaces. They're ideal for retrofitting older buildings, cooling specific areas, or creating personalized comfort zones in your home or office. Our team of experts will guide you through selecting the perfect ductless solution, ensuring a seamless installation that maximizes your comfort while minimizing energy costs.</p>
          </div>
        )
    },
    {
        title: 'Thermostats',
        image: 'https://kirk-website.s3.us-east-2.amazonaws.com/Commercial+HVAC+Services+-+Thermostats.webp',
        description: 'Smart temperature control for optimal comfort and efficiency.',
        longDescription: "Upgrade your climate control with cutting-edge thermostat solutions from Maxwell Plumb Mechanical. Our selection of advanced thermostats, including smart and programmable options, gives you precise control over your home or office environment. Experience enhanced comfort, significant energy savings, and the convenience of managing your HVAC system from anywhere with our expert thermostat installation and setup services.",
        features: [
          'Precise temperature control',
          'Energy-saving programming',
          'Remote access and control',
          'Integration with smart home systems'
        ],
        callToAction: {
          text: 'Upgrade Your Thermostat',
          onClick: null
        },
        additionalContent: (
          <div>
            <h5 className='text-lg font-semibold text-white mb-2'>Benefits of Modern Thermostats</h5>
            <p className='text-gray-300'>Today's thermostats do more than just adjust temperature. They learn your preferences, adapt to your schedule, and can be controlled from your smartphone. Our expert technicians will help you choose and install the perfect thermostat for your needs, ensuring seamless integration with your existing HVAC system. Enjoy enhanced comfort, reduced energy bills, and the convenience of smart climate control.</p>
          </div>
        )
    },
];

const heatingServices = [
    {
        title: 'Boiler Installation',
        image: 'https://kirk-website.s3.us-east-2.amazonaws.com/Commercial+HVAC+Services+-+Boiler+Installation.webp',
        description: 'Professional installation of commercial heating systems.',
        longDescription: "Upgrade your commercial heating with expert boiler installation services from Maxwell Plumb Mechanical. Our team specializes in fitting high-efficiency boilers tailored to your business needs. We handle everything from system design to final commissioning, ensuring a seamless transition to a more efficient and reliable heating solution. Our installations are designed to minimize downtime and maximize long-term energy savings for your facility.",
        features: [
          'Custom system design',
          'Energy-efficient boiler selection',
          'Compliant with all safety regulations',
          'Comprehensive system testing'
        ],
        callToAction: {
          text: 'Request Boiler Installation Quote',
          onClick: null
        },
        additionalContent: (
          <div>
            <h5 className='text-lg font-semibold text-white mb-2'>Why Choose Our Boiler Installation?</h5>
            <p className='text-gray-300'>Our expert team brings years of experience in commercial boiler systems to every installation. We work with leading manufacturers to provide you with the most reliable and efficient heating solutions. From initial consultation to post-installation support, we ensure your new boiler system meets all your heating requirements while optimizing energy consumption. Trust us to deliver a heating system that enhances comfort, reduces operating costs, and supports your business's sustainability goals.</p>
          </div>
        )
    },
    {
        title: 'Boiler Maintenance',
        image: 'https://kirk-website.s3.us-east-2.amazonaws.com/Commercial+HVAC+Services+-+Boiler+Maintenance.webp',
        description: 'Comprehensive boiler maintenance and repair.',
        longDescription: "Keep your boiler system running at peak efficiency with Maxwell Plumb Mechanical's expert maintenance services. Our skilled technicians provide thorough inspections, cleaning, and tune-ups to prevent unexpected breakdowns and extend the life of your boiler. From routine check-ups to emergency repairs, we ensure your heating system operates safely and efficiently year-round, minimizing downtime and maximizing energy savings for your business.",
        features: [
          'Scheduled preventive maintenance',
          'Emergency repair services',
          'Performance optimization',
          'Safety inspections and testing'
        ],
        callToAction: {
          text: 'Schedule Boiler Maintenance',
          onClick: null
        },
        additionalContent: (
          <div>
            <h5 className='text-lg font-semibold text-white mb-2'>Benefits of Regular Boiler Maintenance</h5>
            <p className='text-gray-300'>Regular maintenance is key to the longevity and efficiency of your boiler system. Our comprehensive service plans help prevent costly breakdowns, reduce energy consumption, and ensure compliance with safety regulations. Trust our experienced technicians to keep your heating system in top condition, providing you with reliable warmth and hot water while minimizing operational costs and environmental impact.</p>
          </div>
        )
    },
    {
        title: 'Boiler Repair',
        image: 'https://kirk-website.s3.us-east-2.amazonaws.com/Commercial+HVAC+Services+-+Boiler+Repair.webp',
        description: 'Fast, reliable boiler repair services to restore your heating.',
        longDescription: "When your boiler system fails, Maxwell Plumb Mechanical is here to get you back up and running quickly. Our expert technicians are equipped to diagnose and repair all types of boiler issues, from minor fixes to major overhauls. We understand the critical nature of heating in commercial and residential settings, which is why we offer prompt, efficient repair services to minimize downtime and ensure your comfort and safety.",
        features: [
          '24/7 emergency repair service',
          'Comprehensive diagnostics',
          'Repairs for all boiler types and brands',
          'Transparent pricing and solutions'
        ],
        callToAction: {
          text: 'Get Emergency Boiler Repair',
          onClick: null
        },
        additionalContent: (
          <div>
            <h5 className='text-lg font-semibold text-white mb-2'>Why Choose Our Boiler Repair Service?</h5>
            <p className='text-gray-300'>Our team of certified technicians brings years of experience and in-depth knowledge to every repair job. We pride ourselves on quick response times, accurate diagnostics, and lasting solutions. Whether you're dealing with strange noises, leaks, or complete system failures, we have the skills and equipment to address the issue efficiently. Trust us to restore your heating system's functionality and improve its performance, ensuring warmth and comfort in your space.</p>
          </div>
        )
    },
    {
        title: 'Ductless Heating',
        image: 'https://img.freepik.com/free-photo/close-up-heat-pump-outside-home_23-2149250267.jpg?t=st=1723567964~exp=1723571564~hmac=881f9ce276371b6d1835b39e2bf11da5c27298c319447fe29c0817c47ca3540b&w=1060',
        description: 'Efficient and flexible ductless heating solutions for any space.',
        longDescription: "Experience superior comfort with ductless heating systems from Maxwell Plumb Mechanical. Our ductless solutions offer precise temperature control for individual rooms or zones, making them ideal for homes and businesses without existing ductwork, additions, or areas needing supplemental heating. Enjoy quiet operation, improved energy efficiency, and the flexibility to heat specific areas as needed.",
        features: [
          'Zone-based temperature control',
          'Energy-efficient operation',
          'Easy and non-invasive installation',
          'Dual functionality - heating and cooling'
        ],
        callToAction: {
          text: 'Explore Ductless Heating Options',
          onClick: null
        },
        additionalContent: (
          <div>
            <h5 className='text-lg font-semibold text-white mb-2'>Benefits of Ductless Heating Systems</h5>
            <p className='text-gray-300'>Ductless heating systems offer unparalleled flexibility and efficiency for modern spaces. They're perfect for retrofitting older buildings, heating specific areas, or creating personalized comfort zones in your home or office. Our expert team will guide you through selecting the ideal ductless solution, ensuring a seamless installation that maximizes your comfort while minimizing energy costs. Experience the convenience of room-by-room temperature control and the savings of targeted heating with our state-of-the-art ductless systems.</p>
          </div>
        )
    },
    {
        title: 'Heat Exchangers',
        image: 'https://img.freepik.com/free-photo/close-up-heat-pump-outside-home_23-2149250254.jpg?t=st=1723567981~exp=1723571581~hmac=e2051415412b8ab31df1191d938e3fca479a16271cf8d46ad318a7b04661aa81&w=1060',
        description: 'Efficient heat transfer solutions for optimal energy utilization.',
        longDescription: "Maxwell Plumb Mechanical specializes in the installation, maintenance, and repair of advanced heat exchanger systems. Our heat exchangers are designed to maximize energy efficiency by transferring heat between two or more fluids, improving overall system performance in various industrial and commercial applications. From plate heat exchangers to shell and tube designs, we offer customized solutions to meet your specific heating and cooling needs.",
        features: [
          'Custom-designed heat transfer solutions',
          'Energy-efficient operation',
          'Compatible with various fluid types',
          'Scalable for different capacities'
        ],
        callToAction: {
          text: 'Consult on Heat Exchanger Solutions',
          onClick: null
        },
        additionalContent: (
          <div>
            <h5 className='text-lg font-semibold text-white mb-2'>Advantages of Our Heat Exchanger Systems</h5>
            <p className='text-gray-300'>Our heat exchangers play a crucial role in enhancing the efficiency of HVAC, industrial processes, and energy recovery systems. By facilitating effective heat transfer between fluids, these systems help reduce energy consumption, lower operational costs, and minimize environmental impact. Our team of experts will assess your specific requirements and recommend the most suitable heat exchanger type and configuration, ensuring optimal performance and longevity for your heating and cooling applications.</p>
          </div>
        )
    },
    {
        title: 'Heating Maintenance',
        image: 'https://img.freepik.com/free-photo/service-man-adjusting-house-heating-system_1303-26529.jpg?t=st=1723568178~exp=1723571778~hmac=19c69e33fab2131c74091582d937ae71043ca754feafc66b2c4d6f9fb45d11ee&w=1380',
        description: 'Comprehensive heating system maintenance for optimal performance and longevity.',
        longDescription: "Keep your heating system running efficiently and reliably with Maxwell Plumb Mechanical's expert maintenance services. Our thorough maintenance program is designed to prevent unexpected breakdowns, optimize system performance, and extend the lifespan of your heating equipment. From residential furnaces to commercial boilers, our skilled technicians provide meticulous care to ensure your comfort and peace of mind throughout the heating season.",
        features: [
          'Scheduled preventive maintenance',
          'Comprehensive system inspections',
          'Filter replacement and cleaning',
          'Performance tuning and optimization'
        ],
        callToAction: {
          text: 'Schedule Heating Maintenance',
          onClick: null
        },
        additionalContent: (
          <div>
            <h5 className='text-lg font-semibold text-white mb-2'>Benefits of Regular Heating Maintenance</h5>
            <p className='text-gray-300'>Regular maintenance is key to the efficiency and longevity of your heating system. Our comprehensive service plans help prevent costly breakdowns, reduce energy consumption, and ensure your system operates safely. By addressing minor issues before they escalate, we help you avoid major repairs and extend the life of your heating equipment. Trust our experienced technicians to keep your home or business warm and comfortable while minimizing energy costs and environmental impact.</p>
          </div>
        )
    },
    {
        title: 'Heating Repair',
        image: 'https://img.freepik.com/free-photo/young-engineer-adjusting-autonomous-heating_1303-26537.jpg?t=st=1723567907~exp=1723571507~hmac=8f71e7654e4aa61a56755ebf00cccb3dca9c9bbf9f8caeffb552b7a1b04b0056&w=740',
        description: 'Expert heating repair services to keep your home warm and comfortable.',
        longDescription: "Don't let a malfunctioning heating system leave you in the cold. Our skilled technicians at Maxwell Plumb Mechanical specialize in diagnosing and repairing all types of heating systems, from furnaces to heat pumps. We offer prompt, reliable service to restore your home's warmth quickly and efficiently, ensuring your comfort and safety throughout the cold seasons.",
        features: [
          'Fast response times',
          'Experienced technicians',
          'All heating systems serviced',
          'Upfront pricing'
        ],
        callToAction: {
          text: 'Schedule Your Heating Repair',
          onClick: null
        },
        additionalContent: (
          <div>
            <h5 className='text-lg font-semibold text-white mb-2'>Why Choose Our Heating Repair Service?</h5>
            <p className='text-gray-300'>With years of experience and a commitment to excellence, our heating repair team ensures your system is restored to peak performance. We use advanced diagnostic tools and high-quality parts to provide lasting repairs. Trust us to keep your home cozy and energy-efficient, no matter how harsh the winter gets.</p>
          </div>
        )
    },
    {
        title: 'Heating System Installation',
        image: 'https://kirk-website.s3.us-east-2.amazonaws.com/Commercial+HVAC+Services+-+Heating+System+Installation.webp',
        description: 'Professional heating system installation for optimal home comfort.',
        longDescription: "Upgrade your home's heating with our expert installation services. At Maxwell Plumb Mechanical, we specialize in installing a wide range of heating systems, from energy-efficient furnaces to state-of-the-art heat pumps. Our skilled technicians ensure your new system is perfectly sized and installed for maximum efficiency and comfort, providing you with reliable warmth for years to come.",
        features: [
          'Customized system selection',
          'Energy-efficient options',
          'Professional installation',
          'Warranty-backed service'
        ],
        callToAction: {
          text: 'Get Your Free Installation Quote',
          onClick: null
        },
        additionalContent: (
          <div>
            <h5 className='text-lg font-semibold text-white mb-2'>Why Choose Our Installation Service?</h5>
            <p className='text-gray-300'>Our team brings years of experience and in-depth knowledge to every installation. We work with top brands and latest technologies to provide you with a heating solution that meets your specific needs and budget. From initial consultation to final testing, we ensure a smooth, hassle-free installation process, guaranteeing your complete satisfaction and long-term comfort.</p>
          </div>
        )
    },
    {
        title: 'Steam and Heat Pressure',
        image: 'https://kirk-website.s3.us-east-2.amazonaws.com/Commercial+HVAC+Services+-+Steam+and+Heat+Pressure.webp',
        description: 'Expert steam and heat pressure system services for optimal performance and efficiency.',
        longDescription: "Ensure your steam and heat pressure systems operate at peak efficiency with our specialized services. At Maxwell Plumb Mechanical, our team of skilled technicians is equipped to handle all aspects of steam and heat pressure systems, from routine maintenance to complex repairs and installations. We work diligently to optimize your system's performance, ensuring consistent heating and energy savings for your home or business.",
        features: [
          'Comprehensive system diagnostics',
          'Pressure balancing and optimization',
          'Energy efficiency improvements',
          'Safety inspections and upgrades'
        ],
        callToAction: {
          text: 'Schedule Your Steam System Service',
          onClick: null
        },
        additionalContent: (
          <div>
            <h5 className='text-lg font-semibold text-white mb-2'>Why Trust Us with Your Steam and Heat Pressure Systems?</h5>
            <p className='text-gray-300'>Our expertise in steam and heat pressure systems sets us apart. We understand the intricacies of these complex systems and use advanced techniques to ensure they operate safely and efficiently. Whether you need routine maintenance, emergency repairs, or system upgrades, our team delivers reliable solutions that extend the life of your equipment and improve overall performance.</p>
          </div>
        )
    },
];

const indoorAirQualityServices = [
    {
        title: 'Dehumidifiers',
        image: 'https://img.freepik.com/free-photo/air-purifier-cozy-white-living-room-filter-cleaning-removing-dust-pm25-hepa-home-with-woman-reading-book-sofafor-fresh-air-healthy-lifeair-pollution-concept_657921-694.jpg?t=st=1723568987~exp=1723572587~hmac=80985767deaf811c562be330598f0afa45a2f107c271e38b544c6a8aa375632d&w=1380',
        description: 'Advanced air purification solutions for your business.',
        longDescription: "Create a healthier, more comfortable environment for your business with our professional dehumidifier services. At Maxwell Plumb Mechanical, we offer top-of-the-line dehumidification systems designed to control moisture levels, improve air quality, and protect your property. Our expert team will assess your specific needs, recommend the ideal solution, and provide seamless installation and maintenance to ensure optimal performance year-round.",
        features: [
          'Customized humidity control solutions',
          'Energy-efficient models available',
          'Mold and mildew prevention',
          'Improved indoor air quality'
        ],
        callToAction: {
          text: 'Get Your Free Dehumidifier Consultation',
          onClick: null
        },
        additionalContent: (
          <div>
            <h5 className='text-lg font-semibold text-white mb-2'>Why Choose Our Dehumidifier Services?</h5>
            <p className='text-gray-300'>Our dehumidifier solutions go beyond just removing excess moisture. We provide comprehensive services that address the unique challenges of your business environment. Whether you're looking to protect sensitive equipment, maintain product quality, or create a more comfortable space for employees and customers, our team delivers tailored solutions that enhance your business operations while promoting a healthier indoor atmosphere.</p>
          </div>
        )
    },
    {
        title: 'Duct Cleaning',
        image: 'https://img.freepik.com/free-photo/3d-rendering-ventilation-system_23-2149281321.jpg?t=st=1723569016~exp=1723572616~hmac=e40c682ed8a5d54aa34554f351b630146dcf7d6964d5125d14a02c540c340454&w=1060',
        description: 'Enhance your indoor air quality with improved ventilation.',
        longDescription: "Breathe easier with our professional duct cleaning services. At Maxwell Plumb Mechanical, we use state-of-the-art equipment and techniques to thoroughly clean your air ducts, removing accumulated dust, allergens, and contaminants. Our comprehensive duct cleaning service not only improves your indoor air quality but also enhances the efficiency of your HVAC system, leading to better overall performance and potentially lower energy costs.",
        features: [
          'Thorough removal of dust and debris',
          'Elimination of allergens and contaminants',
          'Improved HVAC system efficiency',
          'Potential reduction in energy costs'
        ],
        callToAction: {
          text: 'Schedule Your Duct Cleaning Today',
          onClick: null
        },
        additionalContent: (
          <div>
            <h5 className='text-lg font-semibold text-white mb-2'>Why Choose Our Duct Cleaning Service?</h5>
            <p className='text-gray-300'>Our expert technicians go beyond surface cleaning, using advanced tools to access and clean every part of your duct system. We not only remove visible debris but also tackle hidden contaminants that can affect your air quality and system performance. With our service, you'll notice improved air flow, reduced dust in your home, and potentially lower energy bills. Trust us to create a cleaner, healthier indoor environment for you and your family.</p>
          </div>
        )
    },
    {
        title: 'Indoor Air Filtration',
        image: 'https://img.freepik.com/free-vector/realistic-digital-air-purifier-floor-cozy-room-vector-illustration_1284-70561.jpg?t=st=1723568942~exp=1723572542~hmac=cec84c9613e7377ba1171bc05d12caf9a8df7b7edcde86dafccf73a05de2f705&w=900',
        description: 'Advanced air filtration solutions for cleaner, healthier indoor environments.',
        longDescription: "Breathe easier with our cutting-edge indoor air filtration systems. At Maxwell Plumb Mechanical, we specialize in installing and maintaining high-efficiency air filtration systems that remove a wide range of airborne contaminants, including dust, pollen, pet dander, and even microscopic particles. Our expert team will assess your specific needs and recommend a tailored solution to dramatically improve your indoor air quality, creating a healthier living or working space for you and your loved ones.",
        features: [
          'High-efficiency particulate air (HEPA) filtration',
          'Removal of allergens and pollutants',
          'Odor reduction technology',
          'Customized solutions for homes and businesses'
        ],
        callToAction: {
          text: 'Improve Your Air Quality Today',
          onClick: null
        },
        additionalContent: (
          <div>
            <h5 className='text-lg font-semibold text-white mb-2'>Why Choose Our Indoor Air Filtration Service?</h5>
            <p className='text-gray-300'>Our indoor air filtration systems go beyond standard filters, offering advanced technology to capture even the smallest particles. We provide comprehensive solutions that not only clean your air but also integrate seamlessly with your existing HVAC system. With our expertise, you can enjoy cleaner, fresher air that can contribute to better health, improved sleep, and enhanced overall well-being. Trust us to transform your indoor environment into a sanctuary of clean air.</p>
          </div>
        )
    },
];

const tabs = [
    { id: 'air-conditioning', label: 'Air Conditioning', services: airConditioningServices, intro: 'Keep your business cool and comfortable with our top-tier air conditioning services. From installation to maintenance, we ensure your AC systems run efficiently year-round.' },
    { id: 'heating', label: 'Heating', services: heatingServices, intro: 'Ensure a warm and inviting environment for your customers and employees. Our heating services cover everything from boiler maintenance to full system installations.' },
    { id: 'indoor-air-quality', label: 'Indoor Air Quality', services: indoorAirQualityServices, intro: 'Breathe easier with our indoor air quality solutions. We offer cutting-edge technology to purify and improve the air in your commercial space, promoting health and productivity.' }
];

const CommercialHVAC = () => {
    const navigate = useNavigate();
    const { tab } = useParams();
    const [activeTab, setActiveTab] = useState(tab || 'air-conditioning');
    const [selectedService, setSelectedService] = useState(null);

    airConditioningServices.forEach(service => {
        service.callToAction.onClick = () => navigate('/contact')
    })

    heatingServices.forEach(service => {
        service.callToAction.onClick = () => navigate('/contact')
    })

    indoorAirQualityServices.forEach(service => {
        service.callToAction.onClick = () => navigate('/contact')
    })

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
        navigate(`/services/commercial-hvac/${tabId}`);
    };

    const handleCardClick = (service) => {
        setSelectedService(service);
    };

    const handleCloseModal = () => {
        setSelectedService(null);
    };

    const activeServices = tabs.find(t => t.id === activeTab)?.services || [];

    return (
        <div>
            <ServiceHero
                title="Commercial HVAC Services in New York City"
                subtitle="Expert HVAC Solutions for Businesses in Brooklyn, Bronx, Manhattan, Staten Island, and Queens"
            />
            <div className="bg-gray-800 p-4">
                <div className="container mx-auto">
                    <div className="flex space-x-4">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                className={`px-4 py-2 rounded-lg ${activeTab === tab.id ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'}`}
                                onClick={() => handleTabChange(tab.id)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 py-8">
                <p className="text-lg text-gray-300 mb-8">
                    {tabs.find(t => t.id === activeTab)?.intro}
                </p>
                <ServiceGrid
                    services={activeServices}
                    onCardClick={handleCardClick}
                />
            </div>
            <ServiceModal
                isOpen={Boolean(selectedService)}
                onClose={handleCloseModal}
                service={selectedService}
            />
        </div>
    );
};

export default CommercialHVAC;