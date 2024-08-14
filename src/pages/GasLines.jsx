import React, { useState } from 'react';
import ServiceHero from '../components/services/ServiceHero';
import ServiceGrid from '../components/services/ServiceGrid';
import ServiceModal from '../components/services/ServiceModal';

const gasLineServices = [
    {
        title: 'Gas Line Installation',
        image: 'https://kirk-website.s3.us-east-2.amazonaws.com/Gas+Line+-+Gas+Line+Installation.webp',
        description: 'Professional installation of new gas supply lines.',
        longDescription: "Our elite team of commercial plumbers is trained and qualified to install new gas supply lines for your business. We ensure all installations meet the latest industry standards and local regulations, including Local Law 152.",
        features: [
            'Custom gas line design',
            'Professional installation',
            'Compliance with Local Law 152',
            'Safety inspections post-installation',
            'Minimal business disruption',
        ],
        callToAction: {
            text: 'Request Installation Quote',
            onClick: () => console.log('Gas Line Installation quote requested')
        },
    },
    {
        title: 'Gas Line Relocation',
        image: 'https://kirk-website.s3.us-east-2.amazonaws.com/Gas+Line+-+Gas+Line+Relocation.webp',
        description: 'Expert relocation of existing gas lines.',
        longDescription: "When your business needs change, we're here to help relocate your existing gas lines safely and efficiently. Our experienced technicians ensure that all relocated lines meet current safety standards and regulations.",
        features: [
            'Careful planning and assessment',
            'Safe disconnection and reconnection',
            'Compliance with local codes',
            'Minimal downtime for your business',
            'Post-relocation safety checks',
        ],
        callToAction: {
            text: 'Schedule Relocation Service',
            onClick: () => console.log('Gas Line Relocation service scheduled')
        },
    },
    {
        title: 'Gas Leak Detection',
        image: 'https://kirk-website.s3.us-east-2.amazonaws.com/Gas+Line+-+Gas+Line+Detection.webp',
        description: 'Swift and accurate gas leak detection services.',
        longDescription: "Gas leaks can be extremely dangerous. Our experienced technicians use proven technologies to quickly locate and identify gas leaks, ensuring the safety of your property and occupants.",
        features: [
            'Advanced leak detection equipment',
            'Thorough inspection of all gas lines',
            'Immediate safety recommendations',
            '24/7 emergency services',
            'Detailed reporting of findings',
        ],
        callToAction: {
            text: 'Request Emergency Leak Detection',
            onClick: () => console.log('Gas Leak Detection requested')
        },
    },
    {
        title: 'Gas Line Repair',
        image: 'https://kirk-website.s3.us-east-2.amazonaws.com/Gas+Line+-+Gas+Line+Repair.webp',
        description: 'Expert repair services for all types of gas lines.',
        longDescription: "When a gas leak is detected, our certified plumbers are ready to provide swift and effective repairs. We work on all types of gas lines, ensuring they are leak-free and safe for continued use.",
        features: [
            'Rapid response times',
            'Certified repair technicians',
            'Comprehensive safety checks post-repair',
            'Use of high-quality materials',
            'Compliance with all safety regulations',
        ],
        callToAction: {
            text: 'Schedule Repair Service',
            onClick: () => console.log('Gas Line Repair service scheduled')
        },
    },
    {
        title: 'Gas Line Inspections',
        image: 'https://kirk-website.s3.us-east-2.amazonaws.com/Gas+Line+-+Gas+Line+Inspection.webp',
        description: 'Thorough inspections to ensure gas line safety and compliance.',
        longDescription: "Regular gas line inspections are crucial for maintaining safety and compliance. Our detailed inspections cover all aspects of your gas system, from supply lines to connections, ensuring everything meets current standards and regulations.",
        features: [
            'Comprehensive system evaluation',
            'Compliance checks for Local Law 152',
            'Detailed inspection reports',
            'Recommendations for improvements',
            'Scheduling of follow-up maintenance',
        ],
        callToAction: {
            text: 'Book an Inspection',
            onClick: () => console.log('Gas Line Inspection booked')
        },
    },
    {
        title: 'Emergency Gas Services',
        image: 'https://kirk-website.s3.us-east-2.amazonaws.com/Gas+Line+-+Emergency+Gas+Services.webp',
        description: '24/7 emergency gas line services for your peace of mind.',
        longDescription: "Gas emergencies require immediate attention. Our team is available 24/7 to respond to gas-related emergencies, providing rapid assessment, leak control, and necessary repairs to ensure your safety.",
        features: [
            'Round-the-clock availability',
            'Rapid response times',
            'Emergency leak control',
            'Immediate safety measures',
            'Coordination with local authorities',
        ],
        callToAction: {
            text: 'Call for Emergency Service',
            onClick: () => console.log('Emergency Gas Service called')
        },
    },
];

const GasLines = () => {
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
                title="Gas Line Services"
                subtitle="Expert Gas Line Installation, Repair, and Maintenance in New York City"
            />
            <div className="container mx-auto px-4 py-12">
                <p className="text-lg mb-8">
                    At Maxwell Plumb Mechanical, our elite team of commercial plumbers is trained and qualified to handle gas line services of any size and scope. With decades of experience, we stay current on the latest industry standards and regulations, including Local Law 152, to ensure the safety and compliance of your gas systems.
                </p>
                <ServiceGrid
                    services={gasLineServices}
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

export default GasLines;