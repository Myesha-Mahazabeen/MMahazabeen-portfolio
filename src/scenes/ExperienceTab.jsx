import React, { useState, useEffect } from 'react';

function ExperienceTabs({ experiences }) {
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTab((prevTab) => (prevTab + 1) % experiences.length);
        }, 30000); // Change tab every 30 seconds

        return () => clearInterval(interval);
    }, [experiences.length]);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="mt-5">
            {/* Dots representing each experience */}
            <div className="flex justify-center mb-4">
                {experiences.map((_, index) => (
                    <span
                        key={index}
                        className={`h-3 w-3 rounded-full inline-block mx-2 cursor-pointer ${index === activeTab ? 'bg-yellow' : 'bg-dark-grey'}`}
                        onClick={() => handleTabClick(index)}
                    />
                ))}
            </div>

            {/* Displaying the active experience */}
            <div className="experience-container">
                <b className="text-base">{experiences[activeTab].title}</b><br />
                <p className="text-sm mt-1">{experiences[activeTab].organization}</p>
                <p className="text-xs mt-1 text-gray-500">{experiences[activeTab].date}</p>
                <p className="mt-3">
                    {experiences[activeTab].description}
                </p>
            </div>
        </div>
    );
}

export default ExperienceTabs;
