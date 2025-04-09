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
            <div className='grid grid-cols-1 gap-6 bg-white p-20 md:grid-cols-2 lg:grid-cols-4'>
                {cardData.map((card, index) => (
                    <div
                        key={index}
                        className='flex flex-col rounded-md bg-white shadow-md transition duration-300 hover:shadow-lg'>
                        <div className='rounded-t-md bg-red-700 p-4 text-base leading-snug font-bold text-white'>
                            {card.title}
                        </div>
                        <div className='flex-1 p-4 text-sm'>
                            <div className='mb-3 flex items-center gap-2 border-b border-gray-300 pb-2 font-semibold'>
                                {card.duration}
                            </div>
                            <ul className='list-disc space-y-2 pl-5 text-gray-800'>
                                {card.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            {/* BUTTON SECTION */}
            <div className='flex w-full justify-end gap-4 p-4 pr-20 sm:flex-row sm:items-center'>
                <button
                    className='w-full cursor-pointer rounded bg-gray-200 px-6 py-1 font-semibold text-red-600 shadow sm:w-48'
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
