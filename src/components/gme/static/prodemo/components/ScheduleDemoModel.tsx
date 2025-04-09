'use client';

import React, { useEffect, useRef } from 'react';

interface ScheduleDemoModalProps {
    isModalOpen: boolean;
    onClose: () => void;
}

const ScheduleDemoModal: React.FC<ScheduleDemoModalProps> = ({ isModalOpen, onClose }) => {
    const modalRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        }

        if (isModalOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isModalOpen, onClose]);

    if (!isModalOpen) return null;

    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-brightness-90'>
            <div
                ref={modalRef}
                className='scrollbar-hide relative max-h-[80vh] w-full max-w-md overflow-y-auto rounded-lg bg-white p-4 shadow-xl'>
                <button
                    onClick={onClose}
                    className='absolute top-2 right-4 z-10 text-2xl font-bold text-gray-600 hover:text-black'
                    aria-label='Close'>
                    &times;
                </button>

                <form className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                    <div className='bg-black p-1 text-left text-white sm:col-span-2'>
                        <h1>Schedule A GME PRO Demo</h1>
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-700'>
                            First Name<span className='text-red-500'>*</span>
                        </label>
                        <input type='text' className='w-full border-b border-gray-300 outline-none' />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-700'>
                            Last Name<span className='text-red-500'>*</span>
                        </label>
                        <input type='text' className='w-full border-b border-gray-300 outline-none' />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-700'>
                            Email<span className='text-red-500'>*</span>
                        </label>
                        <input type='email' className='w-full border-b border-gray-300 outline-none' />
                    </div>

                    <div>
                        <label className='block text-sm font-medium text-gray-700'>
                            Phone number<span className='text-red-500'>*</span>
                        </label>
                        <input type='tel' className='w-full border-b border-gray-300 outline-none' />
                    </div>

                    <div className='sm:col-span-2'>
                        <label className='block text-sm font-medium text-gray-700'>
                            Industry (Dropdown)<span className='text-red-500'>*</span>
                        </label>
                        <select className='w-full border-b border-gray-300 outline-none'>
                            <option disabled>Please Select</option>
                        </select>
                    </div>

                    <div>
                        <label className='block text-sm font-medium text-gray-700'>
                            Company name<span className='text-red-500'>*</span>
                        </label>
                        <input type='text' className='w-full border-b border-gray-300 outline-none' />
                    </div>

                    <div>
                        <label className='block text-sm font-medium text-gray-700'>
                            Number of employees<span className='text-red-500'>*</span>
                        </label>
                        <select className='w-full border-b border-gray-300 outline-none'>
                            <option disabled>Please Select</option>
                        </select>
                    </div>

                    <div>
                        <label className='block text-sm font-medium text-gray-700'>
                            Annual Revenue<span className='text-red-500'>*</span>
                        </label>
                        <select className='w-full border-b border-gray-300 outline-none'>
                            <option disabled>Please Select</option>
                        </select>
                    </div>

                    <div>
                        <label className='block text-sm font-medium text-gray-700'>
                            Position<span className='text-red-500'>*</span>
                        </label>
                        <input type='text' className='w-full border-b border-gray-300 outline-none' />
                    </div>

                    <div>
                        <label className='block text-sm font-medium text-gray-700'>
                            Address<span className='text-red-500'>*</span>
                        </label>
                        <input type='text' className='w-full border-b border-gray-300 outline-none' />
                    </div>

                    <div>
                        <label className='block text-sm font-medium text-gray-700'>Address 2</label>
                        <input type='text' className='w-full border-b border-gray-300 outline-none' />
                    </div>

                    <div className='col-span-2 grid grid-cols-3 gap-6'>
                        <div>
                            <label className='block text-sm font-medium text-gray-700'>
                                City<span className='text-red-500'>*</span>
                            </label>
                            <input type='text' className='w-full border-b border-gray-300 outline-none' />
                        </div>

                        <div>
                            <label className='block text-sm font-medium text-gray-700'>
                                State/Region<span className='text-red-500'>*</span>
                            </label>
                            <input type='text' className='w-full border-b border-gray-300 outline-none' />
                        </div>

                        <div>
                            <label className='block text-sm font-medium text-gray-700'>
                                Postal code<span className='text-red-500'>*</span>
                            </label>
                            <input type='text' className='w-full border-b border-gray-300 outline-none' />
                        </div>
                    </div>
                    <div className='col-span-2 mt-6 text-xs'>
                        <p>
                            GME needs the contact information you provide to us to contact you about our products and
                            services. You may unsubscribe from these communications at anytime. For information on how
                            to unsubscribe, as well as our privacy practices and commitment to protecting your privacy,
                            check out our{' '}
                            <a href='#' className='text-red-600 underline'>
                                Privacy Policy
                            </a>
                            .
                        </p>
                    </div>
                    <div className='col-span-2 flex h-[60px] w-[256px] font-sans shadow-[0_0_5px_gray]'>
                        <div className='w-[200px] bg-[#4285f4] p-2 text-white'>
                            <div className='text-[14px]'>protected by reCAPTCHA</div>
                            <div className='mt-1 text-[10px]'>
                                <a href='#' className='text-white'>
                                    Privacy
                                </a>{' '}
                                -
                                <a href='#' className='ml-1 text-white'>
                                    Terms
                                </a>
                            </div>
                        </div>
                        <div className='flex w-[56px] items-center justify-center bg-white'>
                            <img
                                src='https://www.gstatic.com/recaptcha/api2/logo_48.png'
                                alt='reCAPTCHA'
                                className='h-[30px] w-[30px]'
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type='submit'
                            className='cursor-pointer rounded bg-red-700 px-6 py-2 font-semibold text-white'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ScheduleDemoModal;
