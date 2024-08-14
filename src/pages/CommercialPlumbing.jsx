import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ServiceHero from '../components/services/ServiceHero';
import ServiceGrid from '../components/services/ServiceGrid';
import ServiceModal from '../components/services/ServiceModal';

const generalPlumbingServices = [
    {
        title: 'Plumbing Fixture Installation',
        image: 'https://img.freepik.com/free-photo/female-plumber-working-fix-problems-client-s-house_23-2150990725.jpg?t=st=1723570415~exp=1723574015~hmac=414cd1c56ec9163a4d4d690ada31e7e6f3f800ff447c74839c6746dfd911263c&w=1380',
        description: 'Professional installation of commercial plumbing fixtures.',
        longDescription: "Upgrade your commercial space with our expert plumbing fixture installation services. At Maxwell Plumb Mechanical, we specialize in installing a wide range of high-quality, efficient plumbing fixtures tailored to meet the unique needs of businesses. From water-saving faucets to heavy-duty toilets and industrial-grade sinks, our skilled technicians ensure precise installation for optimal performance and longevity.",
        features: [
          'Wide range of commercial-grade fixtures',
          'Water-efficient options available',
          'ADA-compliant installations',
          'Minimal business disruption'
        ],
        callToAction: {
          text: 'Get Your Fixture Installation Quote',
          onClick: null
        },
        additionalContent: (
          <div>
            <h5 className='text-lg font-semibold text-white mb-2'>Why Choose Our Plumbing Fixture Installation?</h5>
            <p className='text-gray-300'>Our team brings years of experience in commercial plumbing installations, ensuring that your new fixtures not only look great but also function flawlessly. We understand the importance of minimizing downtime for your business, so we work efficiently and around your schedule. From selecting the right fixtures for your needs to providing ongoing maintenance, we're committed to enhancing your commercial space's functionality and aesthetics while potentially reducing water consumption and utility costs.</p>
          </div>
        )
    },
    {
        title: 'Plumbing Repairs',
        image: 'https://img.freepik.com/free-photo/plumber-man-fixing-kitchen-sink_53876-27.jpg?t=st=1723570445~exp=1723574045~hmac=a1a83dc492c07189fb1cf352e94cda750cfef1057c3083859b408b8eb6b9b2c1&w=1380',
        description: 'Swift and reliable repairs for all plumbing issues.',
        longDescription: "Don't let plumbing problems disrupt your daily life or business operations. At Maxwell Plumb Mechanical, we offer comprehensive plumbing repair services to address a wide range of issues quickly and effectively. From minor leaks to major pipe failures, our experienced technicians are equipped to handle it all. We pride ourselves on our rapid response times, accurate diagnostics, and durable repairs that stand the test of time.",
        features: [
          '24/7 emergency repair service',
          'Experienced, licensed plumbers',
          'State-of-the-art diagnostic tools',
          'Transparent pricing with no hidden fees'
        ],
        callToAction: {
          text: 'Schedule Your Plumbing Repair Now',
          onClick: null
        },
        additionalContent: (
          <div>
            <h5 className='text-lg font-semibold text-white mb-2'>Why Choose Our Plumbing Repair Service?</h5>
            <p className='text-gray-300'>Our team of skilled plumbers combines years of experience with the latest technology to deliver superior repair services. We understand that plumbing issues can be stressful and disruptive, which is why we focus on providing quick, efficient, and lasting solutions. Whether you're dealing with a stubborn clog, a hidden leak, or outdated plumbing systems, we have the expertise to resolve your issues and prevent future problems. Trust us to keep your plumbing running smoothly, saving you time, money, and headaches in the long run.</p>
          </div>
        )
    },
    {
        title: 'Drain Cleaning',
        image: 'https://img.freepik.com/free-photo/service-maintenance-worker-repairing_23-2149176719.jpg?t=st=1723570478~exp=1723574078~hmac=d07005b8d338409211603d2a25588c800993ed73a4b8ff2860146dafbe0f183a&w=1380',
        description: 'Effective cleaning solutions for clogged drains.',
        longDescription: "Don't let clogged drains disrupt your daily routine. At Maxwell Plumb Mechanical, we specialize in fast, efficient drain cleaning services for both residential and commercial properties. Our expert technicians use advanced equipment and techniques to clear even the most stubborn blockages, restoring proper flow and preventing future clogs. From kitchen sinks to main sewer lines, we have the skills and tools to tackle any drain cleaning challenge.",
        features: [
          'High-pressure water jetting',
          'Video camera inspections',
          'Environmentally friendly solutions',
          'Preventive maintenance plans'
        ],
        callToAction: {
          text: 'Clear Your Drains Today',
          onClick: null
        },
        additionalContent: (
          <div>
            <h5 className='text-lg font-semibold text-white mb-2'>Why Choose Our Drain Cleaning Service?</h5>
            <p className='text-gray-300'>Our drain cleaning experts go beyond just clearing the immediate blockage. We use state-of-the-art camera inspections to identify the root cause of recurring clogs, allowing us to provide long-term solutions. Our methods are not only effective but also eco-friendly, ensuring that we protect your plumbing system and the environment. With our preventive maintenance plans, you can avoid unexpected drain issues and extend the life of your plumbing. Trust us to keep your drains flowing smoothly, saving you time and preventing costly water damage.</p>
          </div>
        )
    },
    {
        title: 'Water Leak Detection',
        image: 'https://img.freepik.com/free-photo/man-fixing-kitchen-sink_53876-13430.jpg?t=st=1723570510~exp=1723574110~hmac=4c73c14aa5cea1ff1c4a697ff2bdf48e6952f8926a8bdacc0f601a09ffb6f876&w=1060',
        description: 'Advanced techniques to locate and address water leaks.',
        longDescription: "Don't let hidden leaks cause extensive damage to your property. Our state-of-the-art water leak detection service uses cutting-edge technology to pinpoint the exact location of leaks, even those hidden behind walls or underground. At Maxwell Plumb Mechanical, our expert technicians combine years of experience with non-invasive methods to quickly identify and resolve leaks, saving you time, money, and stress.",
        features: [
          'Non-invasive detection methods',
          'Prevent water damage and mold growth',
          'Reduce water bills',
          'Preserve structural integrity'
        ],
        callToAction: {
          text: 'Schedule Leak Detection Service',
          onClick: null
        },
        additionalContent: (
          <div>
            <h5 className='text-lg font-semibold text-white mb-2'>Why Choose Our Leak Detection Service?</h5>
            <p className='text-gray-300'>Water leaks can cause significant damage if left undetected. Our advanced leak detection service combines acoustic sensors, thermal imaging, and pressure testing to locate leaks with pinpoint accuracy. We can detect leaks in pipes, walls, floors, and outdoor areas without causing unnecessary damage to your property. Trust our experienced team to find and fix leaks quickly, protecting your home and your wallet from the consequences of undetected water damage.</p>
          </div>
        )
    },
    {
        title: 'Valve Replacement',
        image: 'https://img.freepik.com/free-photo/piping-with-taps_169016-5374.jpg?t=st=1723570559~exp=1723574159~hmac=e68be11cd26b59b3f16bab01c32f80772e93edd5a35107f01f33c899f2739ba9&w=1380',
        description: 'Expert valve replacement for improved system performance.',
        longDescription: "Ensure the reliability and efficiency of your plumbing and HVAC systems with our professional valve replacement service. At Maxwell Plumb Mechanical, we understand that valves are critical components in controlling flow and pressure. Our skilled technicians are equipped to replace all types of valves, from simple shut-off valves to complex pressure-reducing valves. We use high-quality parts and precision techniques to enhance your system's functionality and longevity.",
        features: [
          'Improve system efficiency',
          'Prevent leaks and failures',
          'Extend equipment lifespan',
          'Ensure proper flow control'
        ],
        callToAction: {
          text: 'Schedule Valve Replacement',
          onClick: null
        },
        additionalContent: (
          <div>
            <h5 className='text-lg font-semibold text-white mb-2'>Why Choose Our Valve Replacement Service?</h5>
            <p className='text-gray-300'>Faulty valves can lead to system inefficiencies, water hammer, and even catastrophic failures. Our valve replacement service covers everything from small residential valves to large commercial and industrial applications. We carefully assess your system, recommend the right valve for your needs, and perform precise installations. With our expertise, you can trust that your new valves will provide reliable performance, improved control, and enhanced safety for years to come.</p>
          </div>
        )
    },
    {
        title: 'Remodeling',
        image: 'https://img.freepik.com/free-photo/plumbing-repair-service_181624-27146.jpg?t=st=1723570591~exp=1723574191~hmac=a749b7ed08aec37640486df1a4b87acda6cea445133cb85e132d71ddcde86ee8&w=1380',
        description: 'Comprehensive plumbing solutions for your remodeling projects.',
        longDescription: "Transform your space with confidence using Maxwell Plumb Mechanical's expert remodeling services. Whether you're updating a bathroom, renovating a kitchen, or overhauling your entire home, our skilled technicians ensure that your plumbing systems are not just functional, but optimized for your new design. We handle everything from fixture installations to complex pipe rerouting, seamlessly integrating modern plumbing solutions into your vision for a refreshed living space.",
        features: [
          'Custom plumbing designs',
          'Fixture selection and installation',
          'Pipe rerouting and upgrades',
          'Code compliance expertise'
        ],
        callToAction: {
          text: 'Start Your Remodeling Project',
          onClick: null
        },
        additionalContent: (
          <div>
            <h5 className='text-lg font-semibold text-white mb-2'>Why Choose Our Remodeling Service?</h5>
            <p className='text-gray-300'>Remodeling is an opportunity to not just update your space visually, but to improve its functionality and efficiency. Our team works closely with you and your contractors to ensure that the plumbing aspects of your remodel are executed flawlessly. From water-saving fixtures to state-of-the-art water heating systems, we help you make informed decisions that enhance your home's value and your quality of life. Trust us to bring your remodeling vision to life with expert plumbing solutions that stand the test of time.</p>
          </div>
        )
    },
];

const specializedServices = [
    {
        title: 'Trenchless Sewer Repair',
        image: 'https://kirk-website.s3.us-east-2.amazonaws.com/Commercial+Plumbing+-+Trenchless+Sewer+Repair.webp',
        description: 'Minimally invasive sewer repair techniques.',
        longDescription: "Experience the future of sewer repair with Maxwell Plumb Mechanical's trenchless technology. Our innovative, minimally invasive techniques allow us to repair or replace your sewer lines without the extensive excavation and landscape disruption associated with traditional methods. Using state-of-the-art equipment, we can diagnose and fix sewer line issues quickly and efficiently, saving you time, money, and the headache of a torn-up yard.",
        features: [
          'Minimal property disruption',
          'Faster completion times',
          'Cost-effective solutions',
          'Long-lasting repairs'
        ],
        callToAction: {
          text: 'Schedule Trenchless Repair',
          onClick: null
        },
        additionalContent: (
          <div>
            <h5 className='text-lg font-semibold text-white mb-2'>Why Choose Our Trenchless Sewer Repair?</h5>
            <p className='text-gray-300'>Traditional sewer repair methods often involve extensive digging, which can be disruptive and costly. Our trenchless techniques, such as pipe lining and pipe bursting, allow us to repair or replace your sewer lines through small access points. This means less damage to your property, quicker completion times, and often lower overall costs. Plus, our repairs are designed to last, using durable materials that can extend the life of your sewer system. Choose trenchless repair for a smarter, more efficient solution to your sewer line problems.</p>
          </div>
        )
    },
    {
        title: 'Gas Line Repair & Installation',
        image: 'https://img.freepik.com/free-photo/man-looks-faucet-pipes-valve-pressure-meter_169016-14812.jpg?t=st=1723570738~exp=1723574338~hmac=362d38098b7e8f457a05f886b84acd7bd407d31a2e5f23b2a9fb02ab70dad006&w=1380',
        description: 'Safe and efficient gas line services for your business.',
        longDescription: "Ensure the safety and efficiency of your business's gas systems with Maxwell Plumb Mechanical's expert gas line repair and installation services. Our certified technicians are equipped to handle all aspects of commercial gas line work, from routine maintenance to complex installations. We prioritize safety, compliance, and performance to keep your business running smoothly and protect your employees and customers.",
        features: [
          'Leak detection and emergency repairs',
          'New gas line installations',
          'Code compliance and safety inspections',
          'Upgrade and expansion services'
        ],
        callToAction: {
          text: 'Schedule Gas Line Service',
          onClick: null
        },
        additionalContent: (
          <div>
            <h5 className='text-lg font-semibold text-white mb-2'>Why Choose Our Gas Line Services?</h5>
            <p className='text-gray-300'>Gas line work requires specialized knowledge and strict adherence to safety protocols. Our team of licensed professionals has extensive experience in commercial gas systems, ensuring that every job is completed to the highest standards of safety and quality. Whether you need a new gas line installed for kitchen equipment, require repairs to existing lines, or want to upgrade your system for improved efficiency, we have the expertise to meet your needs. Trust us to keep your business's gas infrastructure safe, compliant, and operating at peak performance.</p>
          </div>
        )
    },
    {
        title: 'Fire Sprinklers & Stand Pipes',
        image: 'https://img.freepik.com/free-photo/safety-extinguisher-instrument-utility-faucet_1127-2359.jpg?t=st=1723570789~exp=1723574389~hmac=b1b61e37ac85c51bdbc72f8bb26bc80976385c173bed72c8924ecc05ca174442&w=1380',
        description: 'Installation and maintenance of fire safety systems.',
        longDescription: "Protect your property and ensure compliance with Maxwell Plumb Mechanical's comprehensive fire sprinkler and stand pipe services. Our expert team specializes in the design, installation, and maintenance of cutting-edge fire safety systems for commercial and industrial buildings. We utilize the latest technology and adhere to all local and national fire safety codes to provide you with reliable, efficient protection that can save lives and minimize property damage in the event of a fire.",
        features: [
          'Custom system design and installation',
          'Regular inspections and maintenance',
          'Emergency repairs and upgrades',
          'Code compliance and certification'
        ],
        callToAction: {
          text: 'Secure Your Fire Safety System',
          onClick: null
        },
        additionalContent: (
          <div>
            <h5 className='text-lg font-semibold text-white mb-2'>Why Choose Our Fire Safety Services?</h5>
            <p className='text-gray-300'>Fire safety is not just about compliance—it's about protecting lives and assets. Our team of certified fire safety experts brings years of experience in designing and implementing fire sprinkler and stand pipe systems tailored to your building's specific needs. We stay up-to-date with the latest fire safety technologies and regulations to ensure your system is not only compliant but also maximally effective. From initial consultation and installation to ongoing maintenance and emergency services, we provide comprehensive support to keep your fire safety systems in top condition, giving you peace of mind and helping you meet insurance requirements.</p>
          </div>
        )
    },
    {
        title: 'Water Heater Repair & Installation',
        image: 'https://img.freepik.com/free-photo/worker-repairing-water-heater_23-2149334232.jpg?t=st=1723568768~exp=1723572368~hmac=24e46dc24bb5f9a251559a0712fdcbade0495938d125bf75e7e15ba23252d10e&w=1380',
        description: 'Expert services for all your water heating needs.',
        longDescription: "Ensure a steady supply of hot water for your home or business with Maxwell Plumb Mechanical's comprehensive water heater services. Our skilled technicians are experienced in repairing and installing all types of water heaters, from traditional tank models to modern, high-efficiency systems. We provide prompt, reliable service to diagnose issues, perform repairs, and install new units, ensuring your comfort and convenience.",
        features: [
          'Repair of all water heater brands and models',
          'New water heater installations',
          'Energy-efficient upgrade options',
          '24/7 emergency services'
        ],
        callToAction: {
          text: 'Schedule Water Heater Service',
          onClick: null
        },
        additionalContent: (
          <div>
            <h5 className='text-lg font-semibold text-white mb-2'>Why Choose Our Water Heater Services?</h5>
            <p className='text-gray-300'>Whether you're facing an unexpected breakdown or looking to upgrade your water heating system, our team has the expertise to meet your needs. We offer fast, efficient repairs to get your hot water flowing again quickly. For new installations, we help you select the right size and type of water heater for your specific requirements, ensuring optimal performance and energy efficiency. Trust us to keep your water hot and your energy bills low with our professional water heater services.</p>
          </div>
        )
    },
    {
        title: 'Tankless Water Heating Systems',
        image: 'https://img.freepik.com/free-photo/male-plumber-working-fix-problems-client-s-house_23-2150990696.jpg?t=st=1723570849~exp=1723574449~hmac=17e6acf360f7243a06b43702d1cdc0cca00fd4e2ce70ff0c469f18d098e1c30e&w=1380',
        description: 'Efficient, space-saving water heating solutions.',
        longDescription: "Upgrade to a modern, efficient water heating solution with Maxwell Plumb Mechanical's tankless water heater services. Our expert team specializes in the installation, repair, and maintenance of tankless systems that provide on-demand hot water while saving space and energy. Experience the benefits of endless hot water and lower utility bills with our state-of-the-art tankless water heaters.",
        features: [
          'On-demand hot water supply',
          'Energy-efficient operation',
          'Space-saving design',
          'Longer lifespan than traditional water heaters'
        ],
        callToAction: {
          text: 'Explore Tankless Water Heaters',
          onClick: null
        },
        additionalContent: (
          <div>
            <h5 className='text-lg font-semibold text-white mb-2'>Why Choose Tankless Water Heating?</h5>
            <p className='text-gray-300'>Tankless water heaters offer numerous advantages over traditional systems. They provide hot water on demand, eliminating the need for a large storage tank and reducing energy waste. Our team can help you select the right tankless system for your needs, whether it's for a small apartment or a large commercial property. We ensure proper sizing and installation to maximize efficiency and performance. With our expert maintenance services, your tankless system will provide reliable hot water and energy savings for years to come.</p>
          </div>
        )
    },
    {
        title: 'Sump Pumps',
        image: 'https://img.freepik.com/free-photo/sanitary-equipment_93675-131936.jpg?t=st=1723570884~exp=1723574484~hmac=5e5fe4041cd7b1fc4727564962f5cc1a2523ebbe5deb4964483f7497badd4aa1&w=1380',
        description: 'Installation and maintenance of sump pump systems.',
        longDescription: "Protect your property from water damage with Maxwell Plumb Mechanical's professional sump pump services. Our experienced technicians specialize in the installation, repair, and maintenance of sump pump systems to keep your basement or crawl space dry. We offer reliable solutions to safeguard your home or business against flooding and moisture-related issues, giving you peace of mind during heavy rains and snowmelt seasons.",
        features: [
          'Custom sump pump installation',
          'Routine maintenance and inspections',
          'Emergency repair services',
          'Battery backup system options'
        ],
        callToAction: {
          text: 'Secure Your Sump Pump',
          onClick: null
        },
        additionalContent: (
          <div>
            <h5 className='text-lg font-semibold text-white mb-2'>Why Choose Our Sump Pump Services?</h5>
            <p className='text-gray-300'>A properly functioning sump pump is crucial for preventing water damage and maintaining a dry, healthy environment in your lower levels. Our team assesses your property's specific needs to recommend and install the most suitable sump pump system. We offer regular maintenance to ensure your pump is always ready when you need it most, and our emergency services are available 24/7 to address unexpected issues. With options like battery backups, we provide comprehensive protection against water intrusion, even during power outages.</p>
          </div>
        )
    },
];

const complianceEfficiencyServices = [
    {
        title: 'RPZ Backflow Testing & Certification',
        image: 'https://img.freepik.com/free-photo/view-male-engineer-work-engineers-day-celebration_23-2151615001.jpg?t=st=1723570969~exp=1723574569~hmac=f555b98d2c5b7e7a9cdf72ec001eb4b402a16f30d8fa3c025d546f6838371f15&w=1380',
        description: 'Ensure compliance with backflow prevention regulations.',
        longDescription: "Protect your water supply and maintain regulatory compliance with Maxwell Plumb Mechanical's expert RPZ backflow testing and certification services. Our certified technicians specialize in testing, repairing, and certifying Reduced Pressure Zone (RPZ) devices to prevent contamination of your potable water system. We ensure your backflow prevention systems meet all local and state regulations, safeguarding public health and your business operations.",
        features: [
          'Annual testing and certification',
          'RPZ device installation and repair',
          'Compliance documentation management',
          'Emergency backflow prevention services'
        ],
        callToAction: {
          text: 'Schedule Backflow Testing',
          onClick: null
        },
        additionalContent: (
          <div>
            <h5 className='text-lg font-semibold text-white mb-2'>Why Choose Our RPZ Backflow Services?</h5>
            <p className='text-gray-300'>Backflow prevention is crucial for maintaining safe, clean water supplies. Our team of certified backflow specialists provides comprehensive testing, repair, and certification services to ensure your RPZ devices are functioning correctly and meeting all regulatory requirements. We offer detailed reports and manage your compliance documentation, taking the stress out of maintaining your backflow prevention systems. Trust us to keep your water safe and your business compliant.</p>
          </div>
        )
    },
    {
        title: 'Compliance Services',
        image: 'https://img.freepik.com/free-photo/male-plumber-working-with-client-fix-kitchen-problems_23-2150990690.jpg?t=st=1723571010~exp=1723574610~hmac=e096f3a151fee0310baa45b15a5e077444f3da921bd6b84f755faac28d8ff663&w=1380',
        description: 'Comprehensive compliance solutions for your plumbing systems.',
        longDescription: "Navigate the complex world of plumbing regulations with ease using Maxwell Plumb Mechanical's comprehensive compliance services. Our team of experts stays up-to-date with the latest local, state, and federal plumbing codes to ensure your systems meet all necessary standards. From initial assessments to ongoing compliance management, we provide the support you need to maintain safe, legal, and efficient plumbing operations.",
        features: [
          'Code compliance assessments',
          'Violation remediation',
          'Documentation and record-keeping',
          'Ongoing compliance monitoring'
        ],
        callToAction: {
          text: 'Ensure Your Plumbing Compliance',
          onClick: null
        },
        additionalContent: (
          <div>
            <h5 className='text-lg font-semibold text-white mb-2'>Why Choose Our Compliance Services?</h5>
            <p className='text-gray-300'>Staying compliant with plumbing regulations is essential for avoiding fines, maintaining safety, and ensuring smooth operations. Our compliance experts offer comprehensive services to assess your current systems, identify any issues, and develop strategies to bring you into full compliance. We handle the complexities of documentation and reporting, allowing you to focus on your core business. With our ongoing monitoring services, you can rest assured that your plumbing systems will remain compliant as regulations evolve.</p>
          </div>
        )
    },
    {
        title: 'Water Meters',
        image: 'https://img.freepik.com/free-photo/view-plumber-working-fix-problems_23-2150990693.jpg?t=st=1723571541~exp=1723575141~hmac=5305aec8a7cfb2496bcb2893a325880125d40c57ffd85e61b89dc5b235bd78b5&w=740',
        description: 'Installation and maintenance of accurate water metering systems.',
        longDescription: "Optimize your water usage and billing accuracy with Maxwell Plumb Mechanical's professional water meter services. We specialize in the installation, repair, and maintenance of state-of-the-art water metering systems for residential, commercial, and industrial properties. Our expert technicians ensure precise measurement of water consumption, helping you manage costs and identify potential leaks or inefficiencies in your water system.",
        features: [
          'Advanced meter installation',
          'Regular calibration and maintenance',
          'Leak detection through consumption analysis',
          'Integration with smart water management systems'
        ],
        callToAction: {
          text: 'Upgrade Your Water Metering',
          onClick: null
        },
        additionalContent: (
          <div>
            <h5 className='text-lg font-semibold text-white mb-2'>Why Choose Our Water Meter Services?</h5>
            <p className='text-gray-300'>Accurate water metering is crucial for fair billing and efficient water management. Our team provides expert installation of the latest water meter technologies, ensuring precise measurement of your water usage. We offer regular maintenance and calibration services to keep your meters functioning at peak accuracy. With options for smart meters and consumption analysis, we help you identify opportunities for water conservation and cost savings, making our water meter services an investment in both efficiency and sustainability.</p>
          </div>
        )
    },
    {
        title: 'Water Conditioning',
        image: 'https://img.freepik.com/free-photo/men-working-with-equipment-full-shot_23-2148921408.jpg?t=st=1723571687~exp=1723575287~hmac=6f56bf71e5951505736f4511c663df9f04f8a6dfecaa96cc67cd945b83978dd3&w=1380',
        description: 'Improve water quality with our conditioning services.',
        longDescription: "Experience the benefits of cleaner, softer water with Maxwell Plumb Mechanical's comprehensive water conditioning services. Our expert team designs and installs custom water treatment solutions to address a wide range of water quality issues, from hard water to contaminants. We offer advanced filtration, softening, and purification systems to enhance the quality of your water, protecting your plumbing fixtures and appliances while providing better-tasting, healthier water for your home or business.",
        features: [
          'Customized water treatment solutions',
          'Water softener installation and maintenance',
          'Whole-house filtration systems',
          'Regular water quality testing'
        ],
        callToAction: {
          text: 'Enhance Your Water Quality',
          onClick: null
        },
        additionalContent: (
          <div>
            <h5 className='text-lg font-semibold text-white mb-2'>Why Choose Our Water Conditioning Services?</h5>
            <p className='text-gray-300'>Improved water quality can significantly enhance your daily life and protect your plumbing infrastructure. Our water conditioning experts assess your specific water quality issues and recommend tailored solutions, from simple filtration to comprehensive treatment systems. We offer ongoing maintenance and water testing to ensure your system continues to deliver high-quality water. With our services, you can enjoy softer skin and hair, longer-lasting appliances, and the peace of mind that comes with knowing your water is clean and safe.</p>
          </div>
        )
    },
];

const tabs = [
    { id: 'general-plumbing', label: 'General Plumbing', services: generalPlumbingServices, intro: 'Our general plumbing services cover all your basic commercial plumbing needs. From installations to repairs, we ensure your plumbing systems operate efficiently and reliably.' },
    { id: 'specialized-services', label: 'Specialized Services', services: specializedServices, intro: 'We offer a range of specialized plumbing services to address complex needs. Our expert technicians are equipped to handle advanced systems and unique challenges.' },
    { id: 'compliance-efficiency', label: 'Compliance & Efficiency', services: complianceEfficiencyServices, intro: 'Stay compliant and maximize efficiency with our specialized services. We help you meet regulations while optimizing your water usage and system performance.' }
];

const CommercialPlumbing = () => {
    const navigate = useNavigate();
    const { tab } = useParams();
    const [activeTab, setActiveTab] = useState(tab || 'general-plumbing');
    const [selectedService, setSelectedService] = useState(null);

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
        navigate(`/services/commercial-plumbing/${tabId}`);
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
                title="Commercial Plumbing Services in New York City"
                subtitle="Expert Plumbing Solutions for Businesses in Brooklyn, Bronx, Manhattan, Staten Island, and Queens"
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

export default CommercialPlumbing;