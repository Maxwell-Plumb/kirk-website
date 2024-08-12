import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ServiceHero from '../components/services/ServiceHero';
import ServiceGrid from '../components/services/ServiceGrid';
import ServiceModal from '../components/services/ServiceModal';

const airConditioningServices = [
    {
        title: 'Air Chillers',
        image: 'https://example.com/ac-installation.jpg',
        description: 'Expert installation of commercial AC systems.',
        // ... other properties
    },
    {
        title: 'Air Conditioner Installation',
        image: 'https://example.com/ac-maintenance.jpg',
        description: 'Regular maintenance to keep your AC running efficiently.',
        // ... other properties
    },
    {
        title: 'Air Conditioner Maintenance',
        image: '',
        description: '',
    },
    {
        title: 'Air Conditioner Repair',
        image: '',
        description: '',
    },
    {
        title: 'Ductless Air Conditioning',
        image: '',
        description: '',
    },
    {
        title: 'Thermostats',
        image: '',
        description: ''
    }
    // ... more AC services
];

const heatingServices = [
    {
        title: 'Boiler Installation',
        image: 'https://example.com/heating-installation.jpg',
        description: 'Professional installation of commercial heating systems.',
        // ... other properties
    },
    {
        title: 'Boiler Maintenance',
        image: 'https://example.com/boiler-services.jpg',
        description: 'Comprehensive boiler maintenance and repair.',
        // ... other properties
    },
    {
        title: 'Boiler Repair',
        image: '',
        description: '',
    },
    {
        title: 'Ductless Heating',
        image: '',
        description: '',
    },
    {
        title: 'Heat Exchangers',
        image: '',
        description: '',
    },
    {
        title: 'Heating Maintenance',
        image: '',
        description: '',
    }, 
    {
        title: 'Heating Repair',
        image: '',
        description: '',
    },
    {
        title: 'Heating System Installation',
        image: '',
        description: ''
    },
    {
        title: 'Steam and Heat Pressure',
        image: '',
        description: '',
    },
    {
        title: 'Theromstats',
        image: '',
        description: '',
    }
    // ... more heating services
];

const indoorAirQualityServices = [
    {
        title: 'Dehumidifiers',
        image: 'https://example.com/air-purification.jpg',
        description: 'Advanced air purification solutions for your business.',
        // ... other properties
    },
    {
        title: 'Duct Cleaning',
        image: 'https://example.com/ventilation.jpg',
        description: 'Enhance your indoor air quality with improved ventilation.',
        // ... other properties
    },
    {
        title: 'Humidifiers',
        image: '',
        description: '',
    },
    {
        title: 'Indoor Air Filtration',
        image: '',
        description: '',
    }
    // ... more IAQ services
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