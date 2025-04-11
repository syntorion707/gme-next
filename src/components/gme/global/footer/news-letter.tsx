import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

interface SocialLink {
    href: string;
    iconClass: string;
}

interface SubscriptionBannerProps {
    title?: string;
    buttonText?: string;
    buttonBg?: string;
    buttonTextColor?: string;
    bannerBg?: string;
    textColor?: string;
    socialLinks?: SocialLink[];
}

const Newsletter: React.FC<SubscriptionBannerProps> = ({
    title = 'Sign up for Exclusive Offers & Updates',
    buttonText = 'Subscribe Now',
    buttonBg = 'bg-black',
    buttonTextColor = 'text-white',
    bannerBg = 'bg-primary',
    textColor = 'text-white',
    socialLinks = [
        { href: 'https://www.facebook.com/gmesupply', iconClass: 'fab fa-facebook-f' },
        { href: 'https://twitter.com/gmesupply', iconClass: 'fab fa-twitter' },
        { href: 'https://www.youtube.com/user/gmesupply', iconClass: 'fab fa-youtube' },
        { href: 'https://www.instagram.com/gmesupply', iconClass: 'fab fa-instagram' },
        { href: 'https://www.linkedin.com/company/gme-supply', iconClass: 'fab fa-linkedin-in' }
    ]
}) => {
    return (
        <div
            className={`flex flex-col items-center justify-between px-3 py-5 lg:flex-row lg:p-[20px] ${bannerBg} ${textColor} text-center lg:text-left`}>
            <div className='mb-4 w-full lg:mb-0 lg:ml-20 lg:w-1/3'>
                <h3 className='text-lg font-bold'>{title}</h3>
            </div>

            <div className='mb-6 flex w-full justify-center lg:mb-0 lg:w-1/3 lg:justify-center'>
                <a
                    className={`btn newsletter-button ${buttonBg} ${buttonTextColor} bg-black px-4 py-2 font-bold text-white`}
                    target='_blank'
                    href='/subscribe'>
                    {buttonText}
                </a>
            </div>

            <div className='flex w-full flex-wrap justify-center gap-6 lg:mr-20 lg:w-1/3 lg:justify-end'>
                {socialLinks.map(({ href, iconClass }, index) => (
                    <a
                        key={index}
                        href={href}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex h-10 w-10 items-center justify-center border-2 border-white bg-white transition-all'>
                        <i className={`${iconClass} text-2xl text-red-600`}></i>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Newsletter;
