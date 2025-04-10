'use client';

import React, { useState } from 'react';
import BannerSection from '@/components/gme/static/prodemo/components/BannerSection';
import VideoModal from '@/components/gme/static/prodemo/components/VideoModel';
import NavSection from '../components/NavSection';
import ScheduleDemoModal from '../components/ScheduleDemoModel';
import { cardData } from './carddata';

const GettingStarted = () => {
    const [showVideoModel, setShowVideoModel] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className='-mx-[6%]'>
            {/* HERO SECTION */}

            <BannerSection
                backgroundImage='https://www.gmesupply.com/images/Web_Pages/pro_demo/Solar.jpg'
                imageHeight='450px'
                title='Getting Started with GME PRO.'
                subtitle='Take Control. Save Time. Save Money.'
                buttons={[
                    { label: 'Schedule A Demo', onClick: () => setIsModalOpen(true), variant: 'primary' },
                    { label: 'Watch Video', onClick: () => setShowVideoModel(true), variant: 'secondary' }
                ]}
            />

            {/* { Watch A Video} */}
            <VideoModal showVideoModel={showVideoModel} setShowVideoModel={setShowVideoModel} />

            {/* {Schedule A Demo} */}
            <ScheduleDemoModal isModalOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            {/* NAV SECTION */}
            <NavSection />

            {/* INFO SECTION */}
            <section className='justify-center bg-gray-100 px-6 py-25 text-left md:px-10 lg:px-20'>
                <h2 className='mb-4 text-2xl font-medium md:text-3xl'>
                    Getting Started with GME PRO is easy. Simply schedule a demo with your Gear Expert® to get started
                    today!
                </h2>
                <p className='max-w-7xl text-base text-gray-700 md:text-lg'>
                    <br />
                </p>
            </section>

            {/* CARD SECTION */}
            <div className='grid grid-cols-1 gap-6 bg-white px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10 lg:grid-cols-4 lg:px-25 lg:py-15'>
                {cardData.map((card, index) => (
                    <div
                        key={index}
                        className='flex h-full flex-col rounded-md bg-white shadow-md transition duration-300 hover:shadow-lg'>
                        {/* Title Section */}
                        <div className='text-md h-[72px] rounded-t-md bg-red-700 p-4 leading-snug font-bold text-white'>
                            {card.title}
                        </div>

                        {/* Card Content Section */}
                        <div className='flex flex-1 flex-col'>
                            {/* Duration Row */}
                            <div className='text-md flex h-[50px] items-center bg-white px-4 font-bold'>
                                {card.duration}
                            </div>

                            {/* Description Content */}
                            <div className='text-md flex-1 bg-gray-200 px-4 py-4 font-bold text-black'>
                                <ul className='list-outside list-disc space-y-2 pl-5'>
                                    {card.points.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>

                                {/* Card Button Section */}
                                {card.button && (
                                    <div className='flex flex-col items-center px-4 py-4 sm:flex-row sm:items-center sm:justify-start sm:px-6 md:px-8 lg:px-12'>
                                        <button className='w-full cursor-pointer rounded bg-red-600 px-6 py-2 font-semibold text-white shadow sm:w-48'>
                                            Schedule a Demo
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* BUTTON SECTION */}
            <div className='flex w-full flex-col items-center justify-end gap-4 p-4 sm:flex-row sm:items-center sm:justify-end sm:px-6 md:px-10 lg:pr-20'>
                <button
                    className='w-full cursor-pointer rounded bg-gray-200 px-6 py-2 font-semibold text-red-600 shadow sm:w-48'
                    onClick={() => setShowVideoModel(true)}>
                    Watch Video
                </button>
                <button
                    className='w-full cursor-pointer rounded bg-red-600 px-6 py-2 font-semibold text-white shadow sm:w-48'
                    onClick={() => setIsModalOpen(true)}>
                    Schedule a Demo
                </button>
            </div>
        </div>
    );
};

export default GettingStarted;
