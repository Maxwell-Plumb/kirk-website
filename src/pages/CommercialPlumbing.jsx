import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ServiceHero from '../components/services/ServiceHero';
import ServiceGrid from '../components/services/ServiceGrid';
import ServiceModal from '../components/services/ServiceModal';

const generalPlumbingServices = [
    {
        title: 'Plumbing Fixture Installation',
        image: 'https://example.com/fixture-installation.jpg',
        description: 'Professional installation of commercial plumbing fixtures.',
        // ... other properties
    },
    {
        title: 'Plumbing Repairs',
        image: 'https://example.com/plumbing-repairs.jpg',
        description: 'Swift and reliable repairs for all plumbing issues.',
        // ... other properties
    },
    {
        title: 'Drain Cleaning',
        image: 'https://example.com/drain-cleaning.jpg',
        description: 'Effective cleaning solutions for clogged drains.',
        // ... other properties
    },
    {
        title: 'Water Leak Detection',
        image: 'https://example.com/leak-detection.jpg',
        description: 'Advanced techniques to locate and address water leaks.',
        // ... other properties
    },
    {
        title: 'Valve Replacement',
        image: 'https://example.com/valve-replacement.jpg',
        description: 'Expert valve replacement for improved system performance.',
        // ... other properties
    },
    {
        title: 'Remodeling',
        image: 'https://example.com/plumbing-remodeling.jpg',
        description: 'Comprehensive plumbing solutions for your remodeling projects.',
        // ... other properties
    },
];

const specializedServices = [
    {
        title: 'Trenchless Sewer Repair',
        image: 'https://example.com/trenchless-repair.jpg',
        description: 'Minimally invasive sewer repair techniques.',
        // ... other properties
    },
    {
        title: 'Gas Line Repair & Installation',
        image: 'https://example.com/gas-line-services.jpg',
        description: 'Safe and efficient gas line services for your business.',
        // ... other properties
    },
    {
        title: 'Fire Sprinklers & Stand Pipes',
        image: 'https://example.com/fire-sprinklers.jpg',
        description: 'Installation and maintenance of fire safety systems.',
        // ... other properties
    },
    {
        title: 'Water Heater Repair & Installation',
        image: 'https://example.com/water-heater-services.jpg',
        description: 'Expert services for all your water heating needs.',
        // ... other properties
    },
    {
        title: 'Tankless Water Heating Systems',
        image: 'https://example.com/tankless-water-heaters.jpg',
        description: 'Efficient, space-saving water heating solutions.',
        // ... other properties
    },
    {
        title: 'Sump Pumps',
        image: 'https://example.com/sump-pumps.jpg',
        description: 'Installation and maintenance of sump pump systems.',
        // ... other properties
    },
];

const complianceEfficiencyServices = [
    {
        title: 'RPZ Backflow Testing & Certification',
        image: 'https://example.com/backflow-testing.jpg',
        description: 'Ensure compliance with backflow prevention regulations.',
        // ... other properties
    },
    {
        title: 'Compliance Services',
        image: 'https://example.com/plumbing-compliance.jpg',
        description: 'Comprehensive compliance solutions for your plumbing systems.',
        // ... other properties
    },
    {
        title: 'Water Meters',
        image: 'https://example.com/water-meters.jpg',
        description: 'Installation and maintenance of accurate water metering systems.',
        // ... other properties
    },
    {
        title: 'Water Conditioning',
        image: 'https://example.com/water-conditioning.jpg',
        description: 'Improve water quality with our conditioning services.',
        // ... other properties
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