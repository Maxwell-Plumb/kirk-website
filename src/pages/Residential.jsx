import React, { useState } from 'react';
import ServiceHero from '../components/services/ServiceHero';
import ServiceGrid from '../components/services/ServiceGrid';
import ServiceModal from '../components/services/ServiceModal';
import { useNavigate } from 'react-router-dom'

const services = [
    { 
        title: 'Drain Cleaning', 
        image: 'https://kirk-website.s3.us-east-2.amazonaws.com/Residential+-+Drain+Cleaning.webp', 
        description: 'Professional drain cleaning to prevent costly plumbing issues.',
        longDescription: "Don't let minor clogs become major headaches. Our expert drain cleaning service tackles stubborn buildup from food, grease, soap, and hair before it leads to expensive repairs. At Maxwell Plumb Mechanical, our skilled technicians use advanced equipment and years of experience to swiftly resolve any clog, keeping your pipes flowing smoothly.",
        features: [
            'Eliminate foul odors',
            'Prevent major blockages',
            'Extend pipe lifespan',
            'Use eco-friendly methods'
        ],
        callToAction: {
            text: 'Schedule Your Drain Cleaning',
            onClick: null
        },
        additionalContent: (
            <div>
                <h5 className='text-lg font-semibold text-white mb-2'>Why Choose Our Drain Cleaning?</h5>
                <p className='text-gray-300'>Whether you need a one-time deep clean or regular maintenance, we deliver fast, efficient service for all drain issues. Our industry-leading tools and eco-friendly products ensure thorough cleaning with minimal disruption. Trust us to keep your drains clear, so you can focus on what matters most.</p>
            </div>
        )
    },
    {
        title: 'Leak Detection and Repair',
        image: 'https://kirk-website.s3.us-east-2.amazonaws.com/Residential+-+Leak+Detection+and+Repair.webp',
        description: 'Swift, expert leak detection and repair to safeguard your home and wallet.',
        longDescription: "Hidden leaks can silently damage your home and inflate your water bills. At Maxwell Plumb Mechanical, our New York City experts swiftly detect and repair leaks, preventing mold, foundation damage, and health risks. We focus on quick, effective solutions to save you time and money.",
        features: [
            'Advanced leak detection technology',
            'Prompt repair of all types of leaks',
            'Preventive maintenance services',
            'Energy-saving solutions'
        ],
        callToAction: {
            text: 'Schedule Leak Inspection Now',
            onClick: null
        },
        additionalContent: (
            <div>
                <h5 className='text-lg font-semibold text-white mb-2'>Proactive Leak Prevention</h5>
                <p className='text-gray-300'>Don't wait for a crisis. Our expert team offers comprehensive leak prevention strategies:</p>
                <ul className='list-disc pl-5 text-gray-300'>
                    <li>Pipe insulation to prevent freezing and cracking</li>
                    <li>Regular fitting tightening to avoid minor leaks</li>
                    <li>Professional joint sealing for long-term protection</li>
                </ul>
                <p className='text-gray-300 mt-2'>Trust our proactive approach for affordable, effective solutions that keep your plumbing system in top condition.</p>
            </div>
        )
    },
    {
        title: 'Water Heater Installation and Repair',
        image: 'https://kirk-website.s3.us-east-2.amazonaws.com/Residential+-+Water+Heater+Installation+and+Repair.webp',
        description: 'Expert water heater services for comfort and efficiency.',
        longDescription: "Don't let a failing water heater disrupt your daily life. Maxwell Plumb Mechanical offers comprehensive water heater solutions, from emergency repairs to energy-efficient installations. Our New York City experts ensure you have reliable hot water while maximizing energy savings.",
        features: [
            'Emergency repair services',
            'Energy-efficient installations',
            'Expertise in all water heater types',
            'Proactive maintenance advice',
            'Cost-saving recommendations'
        ],
        callToAction: {
            text: 'Schedule Water Heater Service Now',
            onClick: null
        },
        additionalContent: (
            <div>
                <h5 className='text-lg font-semibold text-white mb-2'>Comprehensive Water Heater Solutions</h5>
                <p className='text-gray-300'>We specialize in all types of water heaters:</p>
                <ul className='list-disc pl-5 text-gray-300'>
                    <li>Gas, Electric, and Hybrid models</li>
                    <li>Tankless systems for instant hot water</li>
                    <li>Conventional and high-efficiency units</li>
                </ul>
                <h5 className='text-lg font-semibold text-white mt-4 mb-2'>Signs You Need Our Expert Service:</h5>
                <ul className='list-disc pl-5 text-gray-300'>
                    <li>Age: Units over 10 years old may need replacement</li>
                    <li>Strange noises: Possible sediment buildup</li>
                    <li>Rusty or discolored water: Potential tank corrosion</li>
                    <li>Leaks: Risk of flooding and water damage</li>
                </ul>
                <p className='text-gray-300 mt-4'>Trust our proactive approach for tailored solutions that enhance comfort, efficiency, and savings in your home.</p>
            </div>
        )
    },
    {
        title: 'Pipe Repair and Replacement',
        image: 'https://kirk-website.s3.us-east-2.amazonaws.com/Residential+-+Pipe+Repair+and+Replacement.webp',
        description: 'Swift, reliable pipe solutions to protect your home and health.',
        longDescription: "Don't let pipe issues disrupt your life or endanger your home. Maxwell Plumb Mechanical offers expert pipe repair and replacement services in New York City, addressing everything from minor leaks to major bursts. We prioritize your safety, budget, and peace of mind with transparent pricing and flexible payment options.",
        features: [
            'Emergency repair services',
            'Comprehensive pipe replacement',
            'Expertise in various pipe materials',
            'Transparent pricing and flexible payments',
            'Preventive maintenance advice'
        ],
        callToAction: {
            text: 'Schedule Pipe Inspection Now',
            onClick: null
        },
        additionalContent: (
            <div>
                <h5 className='text-lg font-semibold text-white mb-2'>Warning Signs of Pipe Problems:</h5>
                <ul className='list-disc pl-5 text-gray-300'>
                    <li>Discolored water: Possible pipe corrosion</li>
                    <li>Unexplained increase in water bills: Potential hidden leaks</li>
                    <li>Visible water damage or mold: Sign of pipe failure</li>
                </ul>
                <h5 className='text-lg font-semibold text-white mt-4 mb-2'>Common Causes of Pipe Damage:</h5>
                <ul className='list-disc pl-5 text-gray-300'>
                    <li>Age: Even durable pipes eventually need replacement</li>
                    <li>High water pressure: Can stress and damage pipes over time</li>
                    <li>Corrosion: Especially in older steel pipes</li>
                    <li>Tree root intrusion: Can crush or penetrate underground pipes</li>
                </ul>
                <p className='text-gray-300 mt-4'>Trust our experts to assess your pipes, recommend the best solutions, and implement repairs or replacements that ensure the long-term health of your plumbing system. We offer modern materials like PVC and copper for enhanced durability and corrosion resistance.</p>
            </div>
        )
    },
    {
        title: 'Boiler Services',
        image: 'https://kirk-website.s3.us-east-2.amazonaws.com/Residential+-+Boiler+Services.webp',
        description: 'Expert boiler repair and installation for year-round comfort.',
        longDescription: "Don't let a faulty boiler leave you in the cold. Maxwell Plumb Mechanical offers comprehensive boiler services across NYC, ensuring your home stays warm and comfortable even in the harshest winters. With over 30 years of experience, our licensed technicians provide 24/7 expert repair and installation for all boiler types and brands.",
        features: [
            '24/7 emergency repair service',
            'Expertise in all boiler types (steam, hydronic, gas, oil-fired)',
            'Skilled installation of new, efficient systems',
            'Servicing all NYC boroughs',
            'Transparent pricing and honest recommendations'
        ],
        callToAction: {
            text: 'Schedule Boiler Service Now',
            onClick: null
        },
        additionalContent: (
            <div>
                <h5 className='text-lg font-semibold text-white mb-2'>Signs Your Boiler Needs Attention:</h5>
                <ul className='list-disc pl-5 text-gray-300'>
                    <li>Leaks: Even small leaks can lead to water damage and inefficiency</li>
                    <li>Slow heating: Longer warm-up times indicate potential issues</li>
                    <li>Failure to start: Could be due to low pressure or blockages</li>
                    <li>Strange noises: Banging or whistling sounds signal problems</li>
                </ul>
                <h5 className='text-lg font-semibold text-white mt-4 mb-2'>Our Commitment to You:</h5>
                <ul className='list-disc pl-5 text-gray-300'>
                    <li>Prompt, professional service by licensed technicians</li>
                    <li>Clear communication without confusing technical jargon</li>
                    <li>Honest recommendations based on your specific needs</li>
                    <li>Focus on long-term solutions and energy efficiency</li>
                </ul>
                <p className='text-gray-300 mt-4'>Whether you need a quick repair or a full system replacement, trust Maxwell Plumb Mechanical to keep your home warm and your boiler running efficiently. We're here to ensure your comfort and safety year-round.</p>
            </div>
        )
    },
    {
        title: 'Emergency Plumbing',
        image: 'https://kirk-website.s3.us-east-2.amazonaws.com/Residential+-+Emergency+Plumbing.webp',
        description: 'Swift, reliable 24/7 emergency plumbing solutions.',
        longDescription: "Plumbing emergencies don't wait for business hours. At Maxwell Plumb Mechanical, we're on call 24/7 to tackle your urgent plumbing issues. Our team of licensed professionals arrives quickly, equipped to handle any emergency, from burst pipes to severe clogs. We prioritize your safety and property protection, providing immediate relief and lasting solutions.",
        features: [
            '24/7 availability, including holidays',
            'Rapid response times across NYC',
            'Fully equipped emergency vehicles',
            'Licensed and insured professionals',
            'Transparent pricing, even for emergency services',
            'Expertise in all types of plumbing emergencies'
        ],
        callToAction: {
            text: 'Call for Emergency Service Now',
            onClick: () => console.log('Emergency Plumbing Service called')
        },
        additionalContent: (
            <div>
                <h5 className='text-lg font-semibold text-white mb-2'>We Handle All Plumbing Emergencies:</h5>
                <ul className='list-disc pl-5 text-gray-300'>
                    <li>Burst or leaking pipes</li>
                    <li>Severe drain clogs and backups</li>
                    <li>Overflowing toilets</li>
                    <li>Water heater failures</li>
                    <li>Gas leaks (we'll coordinate with utility companies)</li>
                    <li>Frozen pipe prevention and thawing</li>
                </ul>
                <h5 className='text-lg font-semibold text-white mt-4 mb-2'>Why Choose Our Emergency Services:</h5>
                <ul className='list-disc pl-5 text-gray-300'>
                    <li>Immediate response to minimize damage</li>
                    <li>Skilled technicians with years of emergency experience</li>
                    <li>State-of-the-art equipment for efficient problem-solving</li>
                    <li>Clear communication throughout the emergency</li>
                    <li>Follow-up services to prevent future issues</li>
                </ul>
                <p className='text-gray-300 mt-4'>Don't let a plumbing emergency disrupt your life or damage your property. Our team at Maxwell Plumb Mechanical is ready 24/7 to provide swift, reliable solutions. We'll not only fix the immediate problem but also offer expert advice to prevent future emergencies, ensuring your peace of mind.</p>
            </div>
        )
    },
    {
        title: 'Camera Inspections',
        image: 'https://kirk-website.s3.us-east-2.amazonaws.com/Residential+-+Camera+Inspections.webp',
        description: 'High-tech camera inspections for precise plumbing diagnostics.',
        longDescription: "At Maxwell Plumb Mechanical, we bring the latest technology to your plumbing issues. Our advanced camera inspection services allow us to see deep into your pipes, identifying problems with pinpoint accuracy. This non-invasive method saves time, money, and prevents unnecessary damage to your property, ensuring we provide the most effective solutions for your plumbing needs.",
        features: [
            'Non-invasive inspection technique',
            'High-resolution video imaging',
            'Accurate problem identification',
            'Prevents unnecessary excavation',
            'Detailed reporting with visual evidence',
            'Suitable for all types of pipes and drains'
        ],
        callToAction: {
            text: 'Schedule a Camera Inspection Today',
            onClick: null
        },
        additionalContent: (
            <div>
                <h5 className='text-lg font-semibold text-white mb-2'>Benefits of Camera Inspections:</h5>
                <ul className='list-disc pl-5 text-gray-300'>
                    <li>Precise location of blockages, leaks, and damage</li>
                    <li>Early detection of potential issues before they escalate</li>
                    <li>Assists in planning accurate repairs or replacements</li>
                    <li>Verifies the condition of newly installed pipes</li>
                    <li>Helps in retrieving lost items in pipes</li>
                </ul>
                <h5 className='text-lg font-semibold text-white mt-4 mb-2'>When to Consider a Camera Inspection:</h5>
                <ul className='list-disc pl-5 text-gray-300'>
                    <li>Recurring drain clogs or slow drains</li>
                    <li>Unexplained odors from drains</li>
                    <li>Before purchasing a new property</li>
                    <li>Suspected tree root intrusion</li>
                    <li>As part of regular plumbing maintenance</li>
                </ul>
                <p className='text-gray-300 mt-4'>Our expert technicians use state-of-the-art camera equipment to navigate through your plumbing system, providing real-time video feedback. This allows us to assess the condition of your pipes quickly and accurately, without the need for destructive and costly exploratory work. With Maxwell Plumb Mechanical's camera inspection services, you get clarity on your plumbing issues and peace of mind knowing that our solutions are based on precise, visual diagnostics.</p>
            </div>
        )
    },
    {
        title: 'Fixture Repairs',
        image: 'https://kirk-website.s3.us-east-2.amazonaws.com/Residential+-+Fixture+Repairs.webp',
        description: 'Expert repair and replacement for all plumbing fixtures.',
        longDescription: "Don't let faulty fixtures disrupt your daily routine. At Maxwell Plumb Mechanical, we specialize in repairing and replacing all types of plumbing fixtures. From leaky faucets to malfunctioning toilets, our skilled technicians provide swift, reliable solutions. We ensure your fixtures not only function flawlessly but also enhance your home's efficiency and aesthetics.",
        features: [
            'Comprehensive repair services for all fixture types',
            'High-quality replacement options',
            'Expert installation of new fixtures',
            'Water-saving fixture upgrades',
            'Same-day service for urgent repairs',
            'Warranty on all repair and replacement work'
        ],
        callToAction: {
            text: 'Schedule Fixture Repair Now',
            onClick: null
        },
        additionalContent: (
            <div>
                <h5 className='text-lg font-semibold text-white mb-2'>We Service All Fixtures:</h5>
                <ul className='list-disc pl-5 text-gray-300'>
                    <li>Faucets and taps (kitchen, bathroom, outdoor)</li>
                    <li>Showers and bathtubs</li>
                    <li>Toilets and bidets</li>
                    <li>Sinks and basins</li>
                    <li>Garbage disposals</li>
                    <li>Water filtration systems</li>
                </ul>
                <h5 className='text-lg font-semibold text-white mt-4 mb-2'>Signs You Need Fixture Repair:</h5>
                <ul className='list-disc pl-5 text-gray-300'>
                    <li>Persistent drips or leaks</li>
                    <li>Unusual noises (whistling, banging, etc.)</li>
                    <li>Reduced water pressure</li>
                    <li>Visible corrosion or damage</li>
                    <li>Difficulty in operation (stiff handles, running toilets)</li>
                </ul>
                <p className='text-gray-300 mt-4'>Our expert technicians at Maxwell Plumb Mechanical are equipped to handle any fixture issue, big or small. We pride ourselves on our attention to detail, ensuring that every repair or replacement not only resolves the immediate problem but also improves the overall functionality of your plumbing system. When you choose us, you're opting for lasting solutions that enhance your home's comfort and value.</p>
            </div>
        )
    },
    {
        title: 'Sump Pump Repairs',
        image: 'https://kirk-website.s3.us-east-2.amazonaws.com/Residential+-+Sump+Pump+Repairs.webp',
        description: 'Reliable sump pump repairs to safeguard your home from water damage.',
        longDescription: "Don't let a faulty sump pump put your home at risk. Our expert technicians provide fast, efficient repairs and maintenance to ensure your basement stays dry. We service all brands and models, offering 24/7 emergency support for your peace of mind.",
        features: [
            '24/7 emergency repair service',
            'Expertise in all sump pump types and brands',
            'Preventive maintenance plans',
            'Battery backup system installations',
            'Flood risk assessments'
        ],
        callToAction: {
            text: 'Schedule Sump Pump Service',
            onClick: null
        },
        additionalContent: (
            <div>
                <h5 className='text-lg font-semibold text-white mb-2'>Signs Your Sump Pump Needs Repair:</h5>
                <ul className='list-disc pl-5 text-gray-300'>
                    <li>Strange noises or vibrations</li>
                    <li>Infrequent or constant running</li>
                    <li>Visible rust or damage</li>
                    <li>Failure to turn on during heavy rains</li>
                </ul>
            </div>
        )
    },
    {
        title: 'Sewer Cleaning',
        image: 'https://kirk-website.s3.us-east-2.amazonaws.com/Residential+-+Sewer+Cleaning.webp',
        description: 'Professional sewer cleaning for a healthy, efficient plumbing system.',
        longDescription: "Prevent backups and maintain your home's sanitation with our expert sewer cleaning services. We use advanced techniques like hydro jetting to clear even the toughest blockages, ensuring your sewer lines flow smoothly and efficiently.",
        features: [
            'High-pressure hydro jetting',
            'Video inspection for accurate diagnostics',
            'Root removal services',
            'Preventive maintenance plans',
            'Emergency cleaning services'
        ],
        callToAction: {
            text: 'Book Sewer Cleaning Now',
            onClick: null
        },
        additionalContent: (
            <div>
                <h5 className='text-lg font-semibold text-white mb-2'>Signs You Need Sewer Cleaning:</h5>
                <ul className='list-disc pl-5 text-gray-300'>
                    <li>Slow drains throughout the house</li>
                    <li>Foul odors from drains or yard</li>
                    <li>Gurgling sounds in pipes</li>
                    <li>Sewage backups in toilets or drains</li>
                </ul>
            </div>
        )
    },
    {
        title: 'Water Jetting',
        image: 'https://kirk-website.s3.us-east-2.amazonaws.com/Residential+-+Water+Jetting.webp',
        description: 'Powerful water jetting to eliminate tough clogs and buildup.',
        longDescription: "Our high-pressure water jetting service blasts away even the most stubborn blockages, grease buildup, and tree roots. This eco-friendly method thoroughly cleans your pipes, restoring full flow and preventing future clogs.",
        features: [
            'Clears severe blockages',
            'Removes grease and scale buildup',
            'Cuts through tree roots',
            'Safe for most pipe materials',
            'More effective than traditional snaking'
        ],
        callToAction: {
            text: 'Schedule Water Jetting Service',
            onClick: null
        },
        additionalContent: (
            <div>
                <h5 className='text-lg font-semibold text-white mb-2'>Ideal for:</h5>
                <ul className='list-disc pl-5 text-gray-300'>
                    <li>Sewer line blockages</li>
                    <li>Commercial kitchen drains</li>
                    <li>Industrial pipe systems</li>
                    <li>Preventive maintenance</li>
                </ul>
            </div>
        )
    }
];

const Residential = () => {
    const [selectedService, setSelectedService] = useState(null);
    const navigate = useNavigate()
  
    const handleCardClick = (service) => {
      setSelectedService(service);
    };
  
    const handleCloseModal = () => {
      setSelectedService(null);
    };
  
    services.forEach(service => {
        service.callToAction.onClick = () => navigate('/contact')
    })
    
    return (
      <div>
        <ServiceHero
          title="Residential Plumbing in New York City"
          subtitle="Expert Plumbing Professionals in Brooklyn, Bronx, Manhattan, Staten Island, and Queens"
        />
        <ServiceGrid
          services={services}
          onCardClick={handleCardClick}
        />
        <ServiceModal
          isOpen={Boolean(selectedService)}
          onClose={handleCloseModal}
          service={selectedService}
        />
      </div>
    );
};

export default Residential;
