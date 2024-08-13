import React, { useState } from 'react';
import ServiceHero from '../components/services/ServiceHero';
import ServiceGrid from '../components/services/ServiceGrid';
import ServiceModal from '../components/services/ServiceModal';

const fireServices = [
    {
        title: 'Residential Fire Sprinklers',
        image: 'https://cdn.create.vista.com/api/media/medium/11525288/stock-photo-fire-security?token=',
        description: 'Custom-designed fire sprinkler systems for homes.',
        longDescription: "Our engineers and master plumbers design and install residential fire sprinkler systems created specifically for your home. These systems are hydrostatically tested at 200 psi for 2 hours, ensuring reliability and minimizing unexpected activation.",
        features: [
            'Custom system design',
            'Professional installation',
            'Hydrostatic testing',
            'Ceiling-blending sprinkler heads',
            'Annual maintenance and inspections',
        ],
        callToAction: {
            text: 'Get a Free Quote',
            onClick: () => console.log('Residential Fire Sprinklers quote requested')
        },
    },
    {
        title: 'Commercial Fire Sprinklers',
        image: 'https://img.freepik.com/free-photo/red-fire-extinguisher-white-wall_250224-73.jpg?t=st=1723571761~exp=1723575361~hmac=aab70afc61bb750e7916413553acefb31833cf247fb9d1bf8c183e119f6b7eab&w=740',
        description: 'Comprehensive fire protection for businesses and commercial properties.',
        longDescription: "Protect your business with our state-of-the-art commercial fire sprinkler systems. We design, install, and maintain systems that comply with all local regulations and provide optimal fire protection for your property and employees.",
        features: [
            'Custom design for your business needs',
            'Compliance with FDNY regulations',
            'Regular inspections and maintenance',
            'Quick response systems',
            '24/7 emergency services',
        ],
        callToAction: {
            text: 'Schedule a Consultation',
            onClick: () => console.log('Commercial Fire Sprinklers consultation scheduled')
        },
    },
    {
        title: 'Standpipe Systems',
        image: 'https://www.chesapeakesprinkler.com/wp-content/uploads/2022/04/chesapeake-sprinkler-deluge-fire-sprinkler-systems.jpg',
        description: 'Essential fire protection for multi-story buildings.',
        longDescription: "Standpipes act as a fire hydrant for individual buildings, providing a crucial water source for firefighters. Our team expertly designs, installs, and maintains standpipe systems that comply with New York City regulations.",
        features: [
            'Custom system design',
            'Professional installation',
            'Regular maintenance and testing',
            'FDNY compliance assurance',
            'Emergency repair services',
        ],
        callToAction: {
            text: 'Learn More',
            onClick: () => console.log('Standpipe Systems info requested')
        },
    },
    {
        title: 'Fire Sprinkler Inspections',
        image: 'https://png.pngtree.com/thumb_back/fh260/background/20220529/pngtree-red-pipes-with-sprinkler-and-fire-alarm-systems-photo-image_22221358.jpg',
        description: 'Ensure your fire protection system is always ready.',
        longDescription: "Regular inspections are crucial to maintain the effectiveness of your fire sprinkler system. Our FDNY-certified technicians perform thorough inspections, ensuring your system is always in perfect working condition and compliant with regulations.",
        features: [
            'FDNY-mandated 5-year inspections',
            'Monthly fire pump testing',
            'Component-specific inspections',
            'Detailed documentation for FDNY review',
            'Pretest services for FDNY inspections',
        ],
        callToAction: {
            text: 'Schedule an Inspection',
            onClick: () => console.log('Fire Sprinkler Inspection scheduled')
        },
    },
    {
        title: 'Fire Sprinkler Repairs',
        image: 'https://vanguard-fire.com/wp-content/uploads/2022/03/corrosion-in-fire-systems-scaled.jpg',
        description: 'Swift and reliable repairs for all fire sprinkler systems.',
        longDescription: "When your fire sprinkler system needs repair, time is of the essence. Our experienced technicians provide fast, efficient repair services for all types of fire sprinkler systems, ensuring your property remains protected at all times.",
        features: [
            '24/7 emergency repair services',
            'Experienced, licensed technicians',
            'Repairs for all major brands',
            'Quick turnaround times',
            'Post-repair system testing',
        ],
        callToAction: {
            text: 'Request Emergency Repair',
            onClick: () => console.log('Fire Sprinkler Repair requested')
        },
    },
    {
        title: 'Fire Pump Services',
        image: 'https://img.freepik.com/free-photo/rust-water-sprinkler_1127-2871.jpg?t=st=1723572348~exp=1723575948~hmac=fbdd2e938bb845ac2291b006f7962cec82a1cf0a931beef6a827d219cf87eed1&w=1380',
        description: 'Installation and maintenance of critical fire pump systems.',
        longDescription: "Fire pumps are crucial for maintaining adequate water pressure in sprinkler and standpipe systems. We offer comprehensive fire pump services, including installation, testing, and maintenance, to ensure your system performs when you need it most.",
        features: [
            'Fire pump installation',
            'Monthly testing and maintenance',
            'Performance evaluation',
            'Compliance with NFPA 25 standards',
            '24/7 emergency services',
        ],
        callToAction: {
            text: 'Schedule Fire Pump Service',
            onClick: () => console.log('Fire Pump Service scheduled')
        },
    },
];

const FireSprinklers = () => {
    const [selectedService, setSelectedService] = useState(null);

    const handleCardClick = (service) => {
        setSelectedService(service);
    };

    const handleCloseModal = () => {
        setSelectedService(null);
    };

    return (
        <div className="bg-gray-900 text-white">
            <ServiceHero
                title="Fire Sprinklers & Standpipes"
                subtitle="Expert Fire Protection Services for New York City Homes and Businesses"
            />
            <div className="container mx-auto px-4 py-12">
                <p className="text-lg mb-8">
                    At Maxwell Plumb Mechanical, we understand the critical importance of fire protection systems. Our team of skilled engineers and master plumbers provides comprehensive services for fire sprinklers and standpipes, ensuring the safety of your property and compliance with FDNY regulations.
                </p>
                <ServiceGrid
                    services={fireServices}
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

export default FireSprinklers;