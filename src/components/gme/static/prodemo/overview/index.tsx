'use client';

import React, { useState } from 'react';
import BannerSection from '@/components/gme/static/prodemo/components/BannerSection';
import VideoModal from '@/components/gme/static/prodemo/components/VideoModel';
import { FullWidthLayout } from '@/components/layouts';
import NavSection from '../components/NavSection';

const Overview = () => {
    const [showVideoModel, setShowVideoModel] = useState(false);

    return (
        <div className='-mx-[6%]'>
            {/* HERO SECTION */}

            <BannerSection
                backgroundImage='https://www.gmesupply.com/images/Web_Pages/pro_demo/Tower.jpg'
                imageHeight='450px'
                title='Welcome to GME PRO.'
                subtitle='Seamlessly manage your equipment purchasing process.'
                buttons={[
                    { label: 'Sign In', href: '/login', variant: 'secondary' },
                    { label: 'Schedule A Demo', href: '/demo', variant: 'primary' },
                    { label: 'Watch Video', onClick: () => setShowVideoModel(true), variant: 'secondary' }
                ]}
            />

            {/* { Watch A Video} */}
            <VideoModal showVideoModel={showVideoModel} setShowVideoModel={setShowVideoModel} />

            {/* NAV SECTION */}
            <NavSection />

            {/* INFO SECTION */}
            <section className='bg-gray-100 px-6 py-10 text-left md:px-10 lg:px-20'>
                <h2 className='mb-4 text-2xl font-extralight md:text-3xl'>
                    GME PRO allows you to take complete control.
                </h2>
                <p className='max-w-7xl text-base text-gray-700 md:text-lg'>
                    <br />
                    Through world-class technology our Gear Experts® have created a system that empowers you to
                    seamlessly integrate your management, accounting, and procurement needs into a single easy-to-use
                    system...
                </p>

                <div className='mx-auto grid max-w-[1800px] grid-cols-1 gap-10 py-20 md:grid-cols-3 md:gap-20'>
                    {[
                        {
                            icon: 'cogs',
                            title: 'How it Works',
                            desc: 'Our platform enables you to take control.',
                            link: '/prodemo/howitworks'
                        },
                        {
                            icon: 'laptop',
                            title: 'Getting Started',
                            desc: 'Reach out to your Gear Expert® to discuss how a PRO account can benefit your business.',
                            link: '/prodemo/gettingstarted'
                        },
                        {
                            icon: 'calendar',
                            title: 'Schedule A Demo',
                            desc: 'Receive a demo from your Gear Expert®',
                            link: '#modaldemo'
                        }
                    ].map((item, index) => (
                        <div key={index} className='flex flex-col items-center justify-center text-center'>
                            <a className='pd-icon-link' href={item.link}>
                                <i className={`fa fa-${item.icon} fa-4x pb-4 text-red-600`} aria-hidden='true'></i>
                                <h3 className='mb-1 text-xl font-bold'>{item.title}</h3>
                                <p className='text-gray-600'>{item.desc}</p>
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            {/* BENEFITS BANNER */}

            <BannerSection
                backgroundImage='https://www.gmesupply.com/images/Web_Pages/pro_demo/Tree.jpg'
                imageHeight='400px'
                title="GME PRO is a revolutionary business platform that puts you in the driver's seat."
                subtitle=''
                buttons={[
                    { label: 'Schedule A Demo', href: '/demo', variant: 'primary' },
                    { label: 'Watch Video', onClick: () => setShowVideoModel(true), variant: 'secondary' }
                ]}
            />

            {/* BENEFITS LIST */}
            <section className='bg-white py-12'>
                <div className='w-full px-6 md:px-10 lg:px-20'>
                    <h3 className='mb-8 text-2xl font-light md:text-3xl'>GME PRO Benefits:</h3>
                    <div className='grid grid-cols-1 gap-8 text-[18px] text-gray-700 md:grid-cols-2'>
                        <ul className='space-y-3 text-gray-900'>
                            {[
                                'Customizable Controls',
                                'Reporting',
                                'Simplified Quotes',
                                'Easy Product Selection',
                                'PRO Marketplace'
                            ].map((item, idx) => (
                                <li className='flex items-center gap-2' key={idx}>
                                    <i className='fas fa-check text-sm text-black'></i>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <ul className='space-y-3 text-gray-900'>
                            {[
                                'Tracking & Invoices',
                                'Early Pay Discounts',
                                'Management Dashboard',
                                'Security',
                                'Your Personal Gear Expert®'
                            ].map((item, idx) => (
                                <li className='flex items-center gap-2' key={idx}>
                                    <i className='fas fa-check text-sm text-black'></i>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Overview;
