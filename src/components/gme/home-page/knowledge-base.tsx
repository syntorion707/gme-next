'use client';

import Image from 'next/image';
import Link from 'next/link';

interface KnowledgeItem {
    img: string;
    title: string;
}

interface KnowledgeBaseProps {
    items: KnowledgeItem[];
    link: string;
}

export const KnowledgeBase: React.FC<KnowledgeBaseProps> = ({ items, link }) => {
    return (
        <div className='mt-10 flex flex-col items-center bg-[#ECECEC] px-4 py-8 md:px-8'>
            <span className='border-primary mb-4 w-full border-b-2 p-2 text-center text-lg font-bold uppercase md:mb-8 md:text-3xl'>
                <span className='text-primary'>Knowledge</span> <span className='text-black'>Base</span>
            </span>

            <div className='w-full'>
                <div className='mx-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className='relative flex transform flex-col bg-[#ECECEC] transition-all duration-300 ease-in-out hover:z-10 hover:-translate-y-2 hover:scale-105 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)]'>
                            {/* Image Section */}
                            <div className='relative flex h-[280px] w-full items-center justify-center'>
                                <div className='relative h-4/5 w-4/5'>
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        fill
                                        className='rounded-t-lg object-contain'
                                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                                    />
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className='flex flex-grow flex-col p-6'>
                                <h3 className='mb-3 text-center text-lg font-semibold text-gray-800'>{item.title}</h3>
                                <Link href={link} passHref>
                                    <button className='text-md border-primary text-primary hover:bg-primary mx-auto mt-auto h-[40px] w-full border-2 px-4 py-1 font-medium transition-all duration-300 hover:text-white sm:w-full'>
                                        Learn More
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Knowledge Base Button */}
                <div className='mt-8 text-center'>
                    <Link href={link} passHref>
                        <button className='bg-primary px-4 py-1 text-lg font-semibold text-white shadow-md transition-all duration-300'>
                            Visit Knowledge Base
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
