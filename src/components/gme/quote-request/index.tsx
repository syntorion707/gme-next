'use client';

import React, { useState } from 'react';

type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    industry: string;
    employees: string;
    companyName: string;
    position: string;
    billingAddress1: string;
    billingAddress2: string;
    billingCity: string;
    billingState: string;
    billingPostalCode: string;
    shippingAddress1: string;
    shippingAddress2: string;
    shippingCity: string;
    shippingState: string;
    shippingPostalCode: string;
    quotedProducts: string;
    uploadFile: File | null;
};

const QuoteRequestForm = () => {
    const [formValues, setFormValues] = useState<FormValues>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        industry: '',
        employees: '',
        companyName: '',
        position: '',
        billingAddress1: '',
        billingAddress2: '',
        billingCity: '',
        billingState: '',
        billingPostalCode: '',
        shippingAddress1: '',
        shippingAddress2: '',
        shippingCity: '',
        shippingState: '',
        shippingPostalCode: '',
        quotedProducts: '',
        uploadFile: null
    });

    const requiredFields = [
        'firstName',
        'lastName',
        'email',
        'phone',
        'industry',
        'employees',
        'companyName',
        'position',
        'billingAddress1',
        'billingCity',
        'billingState',
        'billingPostalCode',
        'shippingAddress1',
        'shippingCity',
        'shippingState',
        'shippingPostalCode',
        'quotedProducts'
    ];

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [formSubmitted, setFormSubmitted] = useState(false);

    const FieldError = ({ error }: { error?: string }) => {
        if (!error) return null;

        return <p className='mt-1 ml-2 text-sm text-red-600'>Please complete {error}</p>;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormValues((prev) => ({ ...prev, [name]: value }));
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setErrors((prev) => ({
            ...prev,
            [name]: value.trim() === '' ? 'this required field.' : ''
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormSubmitted(true);

        const newErrors: Record<string, string> = {};

        requiredFields.forEach((field) => {
            const value = formValues[field as keyof typeof formValues];
            if (value === '' || value === null || (typeof value === 'string' && value.trim() === '')) {
                newErrors[field] = 'this required field.';
            }
        });

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // Submit the form (e.g. send data to API)
            console.log('Submitting form...', formValues);
        } else {
            // Scroll to the first error if needed
            const firstErrorKey = Object.keys(newErrors)[0];
            const el = document.querySelector(`[name="${firstErrorKey}"]`);
            el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    // const handlefirstNameBlur = () => {setError(!firstName.trim());};
    // const handlelastNameBlur = () => {setError(!lastName.trim());};
    return (
        <div className='mx-auto max-w-[85rem] px-0 py-12 text-sm text-gray-800'>
            <h1 className='mb-10 text-4xl font-medium text-red-700'>QUOTE REQUEST</h1>

            <form className='grid grid-cols-1 gap-6 md:grid-cols-2' onSubmit={handleSubmit}>
                <div>
                    <label className='mb-1 block'>
                        First name<span className='text-red-600'>*</span>
                    </label>
                    <input
                        className='w-full border-b border-gray-300 p-2 outline-none'
                        type='text'
                        name='firstName'
                        value={formValues.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <FieldError error={errors.firstName} />
                </div>

                <div>
                    <label className='mb-1 block'>
                        Last name<span className='text-red-600'>*</span>
                    </label>
                    <input
                        className='w-full border-b border-gray-300 p-2 outline-none'
                        type='text'
                        name='lastName'
                        value={formValues.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <FieldError error={errors.lastName} />
                </div>

                <div>
                    <label className='mb-1 block'>
                        Email<span className='text-red-600'>*</span>
                    </label>
                    <input
                        className='w-full border-b border-gray-300 p-2 outline-none'
                        type='email'
                        name='email'
                        value={formValues.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <FieldError error={errors.email} />
                </div>

                <div>
                    <label className='mb-1 block'>
                        Phone number<span className='text-red-600'>*</span>
                    </label>
                    <input
                        className='w-full border-b border-gray-300 p-2 outline-none'
                        type='tel'
                        name='phone'
                        value={formValues.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <FieldError error={errors.phone} />
                </div>

                <div className='col-span-2'>
                    <label className='mb-1 block'>
                        Industry (Dropdown)<span className='text-red-600'>*</span>
                    </label>
                    <select
                        className='w-full border-b border-gray-300 p-2 outline-none'
                        name='industry'
                        value={formValues.industry}
                        onChange={handleChange}
                        onBlur={handleBlur}>
                        <option value='' disabled className='text-gray-500'>
                            Please Select
                        </option>
                        <option value='Aerial'>Aerial & Burial Construction</option>
                        <option value='Arborist Select'>Arborist</option>
                        <option value='Battery Stotage'>Battery Stotage</option>
                        <option value='Building Construction'>Building Construction</option>
                    </select>
                    <FieldError error={errors.industry} />
                </div>

                <div>
                    <label className='mb-1 block'>
                        Company name<span className='text-red-600'>*</span>
                    </label>
                    <input
                        className='w-full border-b border-gray-300 p-2 outline-none'
                        type='text'
                        name='companyName'
                        value={formValues.companyName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <FieldError error={errors.companyName} />
                </div>

                <div>
                    <label className='mb-1 block'>
                        Number of employees<span className='text-red-600'>*</span>
                    </label>
                    <select
                        className='w-full border-b border-gray-300 p-2 outline-none'
                        name='employees'
                        value={formValues.employees}
                        onChange={handleChange}
                        onBlur={handleBlur}>
                        <option value='' disabled className='text-gray-500'>
                            Please Select
                        </option>
                        <option value='1-5'>1-5</option>
                        <option value='5-25'>5-25</option>
                        <option value='25-50'>25-50</option>
                        <option value='50-100'>50-100</option>
                        <option value='100-500'>100-500</option>
                        <option value='500-1000'>500-1000</option>
                        <option value='1000+'>1000+</option>
                    </select>
                    <FieldError error={errors.employees} />
                </div>

                <div className='col-span-2'>
                    <label className='mb-1 block'>
                        Position<span className='text-red-600'>*</span>
                    </label>
                    <input
                        className='w-full border-b border-gray-300 p-2 outline-none'
                        type='text'
                        name='position'
                        value={formValues.position}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <FieldError error={errors.position} />
                </div>

                <div>
                    <label className='mb-1 block'>
                        Billing address<span className='text-red-600'>*</span>
                    </label>
                    <input
                        className='w-full border-b border-gray-300 p-2 outline-none'
                        type='text'
                        name='billingAddress1'
                        value={formValues.billingAddress1}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <FieldError error={errors.billingAddress1} />
                </div>

                <div>
                    <label className='mb-1 block'>Billing address 2</label>
                    <input className='w-full border-b border-gray-300 p-2 outline-none' type='text' />
                </div>

                <div className='col-span-2 grid grid-cols-3 gap-6'>
                    <div>
                        <label className='mb-1 block'>
                            Billing City<span className='text-red-600'>*</span>
                        </label>
                        <input
                            className='w-full border-b border-gray-300 p-2 outline-none'
                            type='text'
                            name='billingCity'
                            value={formValues.billingCity}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <FieldError error={errors.billingCity} />
                    </div>

                    <div>
                        <label className='mb-1 block'>
                            Billing State/Region<span className='text-red-600'>*</span>
                        </label>
                        <input
                            className='w-full border-b border-gray-300 p-2 outline-none'
                            type='text'
                            name='billingState'
                            value={formValues.billingState}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <FieldError error={errors.billingState} />
                    </div>

                    <div>
                        <label className='mb-1 block'>
                            Billing Postal code<span className='text-red-600'>*</span>
                        </label>
                        <input
                            className='w-full border-b border-gray-300 p-2 outline-none'
                            type='text'
                            name='billingPostalCode'
                            value={formValues.billingPostalCode}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <FieldError error={errors.billingPostalCode} />
                    </div>
                </div>
                <div>
                    <label className='mb-1 block'>
                        Shipping address<span className='text-red-600'>*</span>
                    </label>
                    <input
                        className='w-full border-b border-gray-300 p-2 outline-none'
                        type='text'
                        name='shippingAddress1'
                        value={formValues.shippingAddress1}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <FieldError error={errors.shippingAddress1} />
                </div>

                <div>
                    <label className='mb-1 block'>Shipping address 2</label>
                    <input className='w-full border-b border-gray-300 p-2 outline-none' type='text' />
                </div>
                <div className='col-span-2 grid grid-cols-3 gap-6'>
                    <div>
                        <label className='mb-1 block'>
                            Shipping City<span className='text-red-600'>*</span>
                        </label>
                        <input
                            className='w-full border-b border-gray-300 p-2 outline-none'
                            type='text'
                            name='shippingCity'
                            value={formValues.shippingCity}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <FieldError error={errors.shippingCity} />
                    </div>

                    <div>
                        <label className='mb-1 block'>
                            Shipping State/Region<span className='text-red-600'>*</span>
                        </label>
                        <input
                            className='w-full border-b border-gray-300 p-2 outline-none'
                            type='text'
                            name='shippingState'
                            value={formValues.shippingState}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <FieldError error={errors.shippingState} />
                    </div>

                    <div>
                        <label className='mb-1 block'>
                            Shipping Postal Code<span className='text-red-600'>*</span>
                        </label>
                        <input
                            className='w-full border-b border-gray-300 p-2 outline-none'
                            type='text'
                            name='shippingPostalCode'
                            value={formValues.shippingPostalCode}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <FieldError error={errors.shippingPostalCode} />
                    </div>
                </div>
                <div className='col-span-2'>
                    <label className='mb-1 block'>
                        Products you would like quoted<span className='text-red-600'>*</span>
                    </label>
                    <textarea
                        className='w-full border-b border-gray-300 p-2 outline-none'
                        rows={4}
                        placeholder='Please include as much information as possible (part number, size, options, quantity, etc).'
                        name='quotedProducts'
                        value={formValues.quotedProducts}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <FieldError error={errors.quotedProducts} />
                </div>

                <div className='col-span-2'>
                    <label className='mb-1 block'>Upload a File</label>
                    <input
                        className='block w-full text-sm text-gray-800 file:mr-4 file:rounded file:border file:border-black file:bg-gray-200 file:px-4 file:py-1 file:font-light'
                        type='file'
                    />
                </div>

                <div className='col-span-2 mt-6 text-xs'>
                    <p>
                        GME needs the contact information you provide to us to contact you about our products and
                        services. You may unsubscribe from these communications at anytime. For information on how to
                        unsubscribe, as well as our privacy practices and commitment to protecting your privacy, check
                        out our{' '}
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
                {formSubmitted && Object.keys(errors).length > 0 && (
                    <p className='col-span-2 mb-4 font-medium text-red-600'>Please complete all required fields.</p>
                )}
                <div>
                    <button
                        type='submit'
                        className='cursor-pointer rounded bg-red-700 px-6 py-2 font-semibold text-white'>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default QuoteRequestForm;
