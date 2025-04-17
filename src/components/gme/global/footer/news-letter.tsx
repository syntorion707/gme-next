import React from 'react';

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
    bannerBg = 'bg-red-700',
    textColor = 'text-white',
    socialLinks = [
        { href: 'https://www.linkedin.com/company/gme-supply', iconClass: 'fab fa-linkedin-in' },
        { href: 'https://www.instagram.com/gmesupply', iconClass: 'fab fa-instagram' },
        { href: 'https://www.youtube.com/user/gmesupply', iconClass: 'fab fa-youtube' },
        { href: 'https://twitter.com/gmesupply', iconClass: 'fab fa-twitter' },
        { href: 'https://www.facebook.com/gmesupply', iconClass: 'fab fa-facebook-f' }
    ]
}) => {
    return (
        <div
            className={`flex flex-col items-center justify-between px-6 py-10 md:flex-row md:p-[50px] ${bannerBg} ${textColor} text-center md:text-left`}>
            <div className='mb-4 w-full md:mb-0 md:w-1/3'>
                <h3 className='text-lg font-bold'>{title}</h3>
            </div>

            <div className='flex w-full justify-center text-center md:w-1/3 md:justify-center'>
                <a
                    className={`btn newsletter-button ${buttonBg} ${buttonTextColor} px-4 py-2 font-bold`}
                    target='_blank'
                    href='/subscribe'>
                    {buttonText}
                </a>
            </div>

            <div className='flex w-full flex-wrap justify-center gap-4 md:w-1/3 md:justify-end'>
                {socialLinks.map(({ href, iconClass }, index) => (
                    <a
                        key={index}
                        href={href}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex h-10 w-10 items-center justify-center border-2 border-white bg-red-700 transition-all hover:text-red-700'>
                        <i className={`${iconClass} text-xl text-white sm:text-2xl`}></i>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Newsletter;
