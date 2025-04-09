'use client';

import React, { useState } from 'react';
import BannerSection from '@/components/gme/static/prodemo/components/BannerSection';
import VideoModal from '@/components/gme/static/prodemo/components/VideoModel';
import { FullWidthLayout } from '@/components/layouts';
import NavSection from '../components/NavSection';
import Section from './Section';
import { SectionsData } from './sectiondata';

const HowItWorks = () => {
    const [showVideoModel, setShowVideoModel] = useState(false);

    return (
        <div className='-mx-[6%]'>
            {/* HERO SECTION */}

            <BannerSection
                backgroundImage='https://www.gmesupply.com/images/Web_Pages/pro_demo/Wind.jpg'
                imageHeight='450px'
                title='How GME PRO works. We’ve developed a system that empowers business owners and management teams to take their business to the next level'
                subtitle=''
                buttons={[
                    { label: 'Schedule A Demo', href: '/demo', variant: 'primary' },
                    { label: 'Watch Video', onClick: () => setShowVideoModel(true), variant: 'secondary' }
                ]}
            />

            {/* { Watch A Video} */}
            <VideoModal showVideoModel={showVideoModel} setShowVideoModel={setShowVideoModel} />

            {/* NAV SECTION */}
            <NavSection />

            {/* INFO SECTION */}
            <section className='justify-center bg-gray-100 px-6 py-30 text-left md:px-10 lg:px-20'>
                <h2 className='mb-4 text-2xl font-medium md:text-3xl'>
                    GME PRO combines our Gear Expertise with world-class distribution technology to provide a seamless
                    flow for your team.
                </h2>
                <p className='max-w-7xl text-base text-gray-700 md:text-lg'>
                    <br />
                </p>
            </section>

            {/* Section */}
            <div>
                {SectionsData.map((section, index) => (
                    <Section key={index} {...section} />
                ))}
            </div>
        </div>
    );
};

export default HowItWorks;
