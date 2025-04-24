import React, { useState } from 'react';
import ReviewGrid from './review-grid';

const ReviewSection = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [review, setReview] = useState(1);
    const [selectedStar, setSelectedStar] = useState<number>(5);

    return (
        <div className='p-2'>
            <h1 className='p-2 text-xl font-bold md:text-2xl'>Reviews</h1>

            <div className='flex gap-10 p-2'>
                <p
                    className={`text-md cursor-pointer md:text-lg ${activeTab === 1 && 'border-b border-black'}`}
                    onClick={() => setActiveTab(1)}>
                    Reviews
                </p>
                <p
                    className={`text-md cursor-pointer md:text-lg ${activeTab === 2 && 'border-b border-black'}`}
                    onClick={() => setActiveTab(2)}>
                    Q&A
                </p>
            </div>

            {activeTab === 1 ? (
                <div>
                    {review ? (
                        <div>
                            <div className='flex h-full w-full flex-col items-center justify-between rounded bg-gray-100 p-4 md:h-50 md:flex-row'>
                                <div className='w-full md:ml-48 md:w-1/3'>
                                    {[5, 4, 3, 2, 1].map((star) => {
                                        const isActive = selectedStar === star;

                                        return (
                                            <div
                                                key={star}
                                                className='flex w-full cursor-pointer items-center justify-between md:w-50'
                                                onClick={() => setSelectedStar(star)}>
                                                <div className='flex items-center'>
                                                    <span
                                                        className={`mr-1 ${isActive ? 'border-b border-black text-black' : 'text-gray-400'}`}>
                                                        {star}
                                                    </span>
                                                    <span className={isActive ? 'text-primary' : 'text-red-300'}>
                                                        ★
                                                    </span>
                                                </div>

                                                <div className='mx-2 h-2 flex-1 rounded bg-gray-200'>
                                                    <div
                                                        className={`h-2 rounded transition-all duration-300 ${isActive ? 'bg-black' : ''}`}></div>
                                                </div>

                                                <span
                                                    className={`ml-2 text-sm ${isActive ? 'border-b border-black text-black' : 'text-gray-400'}`}>
                                                    {star === 5 ? 5 : 0}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className='my-4 flex w-full gap-2 text-start md:my-0 md:w-1/3'>
                                    <div className='text-6xl font-bold'>5</div>
                                    <div>
                                        <div className='text-2xl text-red-600'>★★★★★</div>
                                        <p className='text-sm text-black'>Based on 5 reviews</p>
                                    </div>
                                </div>

                                <div className='flex w-full justify-center md:w-1/3 md:justify-end'>
                                    <button className='cursor-pointer rounded-full bg-black px-6 py-2 font-bold text-white'>
                                        Write A Review
                                    </button>
                                </div>
                            </div>
                            <ReviewGrid />
                        </div>
                    ) : (
                        <div className='p-2 text-center'>
                            <div className='flex justify-center'>
                                <img
                                    src='https://cdn.vectorstock.com/i/1000x1000/89/04/yellow-stars-shining-icons-star-icon-christmas-vector-46558904.webp'
                                    alt='Stars'
                                    className='h-50 w-50'
                                />
                            </div>
                            <p className='text-md mt-2 font-bold md:text-lg'>We’re looking for stars!</p>
                            <p className='md:text-md mt-2 text-sm text-gray-500'>Let us know what you think</p>
                            <button className='mt-2 cursor-pointer rounded-full bg-black p-2 font-bold text-white'>
                                Be the first to write a review!
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <div className='p-2 text-center'>
                    <h1 className='text-xl font-bold md:text-2xl'>Questions & Answers</h1>
                    <p className='text-md text-primary mt-10 font-bold md:text-lg'>Have a question?</p>
                    <p className='md:text-md mt-2 text-sm text-gray-500'>
                        Be the first to ask something about this product.
                    </p>
                    <button className='bg-primary mt-2 h-10 w-48 cursor-pointer rounded-full p-2 font-bold text-white'>
                        Ask a question
                    </button>
                </div>
            )}
        </div>
    );
};

export default ReviewSection;
