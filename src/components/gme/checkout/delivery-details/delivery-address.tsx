'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { Input } from '@/components/atoms/input';

const DEFAULT_REQUIRED_ERROR_MSG = 'This field is required.';
export const addressSchema = z.object({
    email: z.string().min(1, 'Email is required').email('Invalid email address'),
    isNewLetterSubscribed: z.boolean(),
    firstName: z.string().min(1, DEFAULT_REQUIRED_ERROR_MSG),
    lastName: z.string().min(1, DEFAULT_REQUIRED_ERROR_MSG),
    company: z.string().optional(),
    address1: z.string().min(1, DEFAULT_REQUIRED_ERROR_MSG),
    address2: z.string().optional(),
    city: z.string().min(1, DEFAULT_REQUIRED_ERROR_MSG),
    state: z.string().min(1, DEFAULT_REQUIRED_ERROR_MSG),
    zip: z.string().min(5, 'Zip code must be at least 5 digits').max(10, 'Zip code must be at most 10 digits'),
    country: z.string(),
    phone: z
        .string()
        .min(10, 'Phone number must be at least 10 digits')
        .regex(/^\+?[0-9\s\-()]{10,}$/, 'Invalid phone number')
        .max(13, 'Phone number must be at most 13 digits'),
    billToSameAddress: z.boolean()
});
export type FormData = z.infer<typeof addressSchema>;

const requiredKeys =
    addressSchema instanceof z.ZodObject
        ? Object.entries(addressSchema.shape).reduce((acc, [key, value]) => {
              const isOptional = value.isOptional();
              if (!isOptional) acc.push(key);

              return acc;
          }, [] as string[])
        : [];

const DeliveryAddress = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>({ resolver: zodResolver(addressSchema) });
    const onSubmit: SubmitHandler<FormData> = async (data) => console.log('FORMDATA : ', data);

    return (
        <div>
            <h2>
                {' '}
                <span className='mr-3'>1</span> Delivery Address
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    label='Email'
                    type='text'
                    register={register}
                    fieldName='email'
                    error={errors.email}
                    required={requiredKeys?.includes('email')}>
                    <i className='fa fa-question-circle text-red-600' />
                </Input>
                <Input
                    label='Subscribe to our GME Supply newsletter.'
                    type='checkbox'
                    register={register}
                    fieldName='isNewLetterSubscribed'
                    error={errors.isNewLetterSubscribed}
                />
                <div className='flex flex-col gap-x-2 gap-y-1 md:flex-row'>
                    <Input
                        label='First Name'
                        type='text'
                        fieldName='firstName'
                        register={register}
                        error={errors.firstName}
                        required={requiredKeys?.includes('firstName')}
                    />
                    <Input
                        label='Last Name'
                        type='text'
                        fieldName='lastName'
                        register={register}
                        error={errors.lastName}
                        required={requiredKeys?.includes('lastName')}
                    />
                </div>
                <Input
                    label='Company'
                    type='text'
                    fieldName='company'
                    register={register}
                    error={errors.company}
                    placeholder='Optional'
                />
                <div className='flex flex-col gap-x-2 gap-y-1 md:flex-row'>
                    <Input
                        label='Delivery Address'
                        type='text'
                        fieldName='address1'
                        register={register}
                        error={errors.address1}
                        required={requiredKeys?.includes('address1')}
                    />
                    <Input
                        label='Delivery Address Line 2'
                        type='text'
                        fieldName='address2'
                        register={register}
                        error={errors.address2}
                        required={requiredKeys?.includes('address2')}
                        placeholder='Optional'
                    />
                </div>
                <div className='grid grid-cols-2 gap-x-2 gap-y-1 md:grid-cols-3'>
                    <Input
                        label='City'
                        type='text'
                        fieldName='city'
                        register={register}
                        error={errors.city}
                        required={requiredKeys?.includes('city')}
                        fieldClasses='col-span-2 md:col-span-1'
                    />
                    <Input
                        label='State/Province'
                        type='select'
                        fieldName='state'
                        register={register}
                        error={errors.state}
                        required={requiredKeys?.includes('state')}
                    />
                    <Input
                        label='Zip/Postal Code'
                        type='text'
                        fieldName='zip'
                        register={register}
                        error={errors.zip}
                        required={requiredKeys?.includes('zip')}
                    />
                </div>
                <Input
                    label='Country'
                    type='select'
                    fieldName='country'
                    register={register}
                    error={errors.country}
                    required={requiredKeys?.includes('country')}
                />
                <Input
                    label='Phone Number'
                    type='tel'
                    fieldName='phone'
                    register={register}
                    error={errors.phone}
                    required={requiredKeys?.includes('phone')}
                />
                <Input
                    label='Bill to same address.'
                    type='checkbox'
                    register={register}
                    fieldName='billToSameAddress'
                    error={errors.billToSameAddress}
                />
                <button type='submit'>submit</button>
            </form>
        </div>
    );
};

export default DeliveryAddress;
