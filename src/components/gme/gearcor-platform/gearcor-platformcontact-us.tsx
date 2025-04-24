import React from 'react';

interface ContactUsButton {
    label: string;
    variant: string;
}

interface ContactUsData {
    title: string;
    subtitle: string;
    phoneNumber: string;
    buttons: ContactUsButton[];
    className?: string;
}

interface GearcorPlatformContactUsProps {
    contactUs: ContactUsData;
}

const GearcorPlatformContactUs: React.FC<GearcorPlatformContactUsProps> = ({
    contactUs: { title, subtitle, phoneNumber, buttons, className = '' }
}) => {
    const getButtonStyle = (variant: string) => {
        switch (variant) {
            case 'primary':
                return 'bg-primary text-white ';
            case 'secondary':
                return 'bg-[#d3d3d3] text-primary ';
            default:
                return 'bg-primary text-white';
        }
    };

    return (
        <div className={`mb-8 border border-gray-200 py-10 text-center ${className}`}>
            <h3 className='text-primary mt-4 mb-2 text-lg font-bold md:text-2xl'>{title}</h3>
            <p className='text-primary mb-4 text-xl font-semibold md:text-2xl'>{subtitle}</p>
            <p className='text-primary text-lg font-medium md:text-2xl'>{phoneNumber}</p>

            {buttons.length > 0 && (
                <div className='mx-auto mt-10 grid grid-cols-1 gap-4 px-4 md:max-w-7xl md:grid-cols-3'>
                    {buttons.map((button, index) => (
                        <button
                            key={index}
                            className={`rounded-sm py-2 font-semibold ${getButtonStyle(button.variant)}`}>
                            {button.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default GearcorPlatformContactUs;
