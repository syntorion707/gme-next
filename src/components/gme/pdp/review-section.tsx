import React, { useState } from 'react';

const ReviewSection = () => {
    const [activeTab, setActiveTab] = useState(1);

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
