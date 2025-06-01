import React, { useState } from 'react';

import { AccordionProps } from './types';

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="rounded-sm flex flex-col items-end mb-4">
            <button onClick={toggleAccordion} className="flex justify-between items-center w-full px-4 py-2 bg-[#f2f2f2] hover:bg-gray-100">
                <span className="font-medium text-[#2a2a2a]">{title}</span>
                {/* Arrow icons */}
                {isOpen ? (
                    // Up arrow
                    <svg className="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                    </svg>
                ) : (
                    // Down arrow
                    <svg className="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                )}
            </button>
            {isOpen && <div className="mt-2 py-2 w-[90%] mb-8">{content}</div>}
        </div>
    );
};

export default Accordion;
