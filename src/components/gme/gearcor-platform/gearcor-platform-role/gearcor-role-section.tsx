import Image from 'next/image';
import React from 'react';

interface RoleCard {
    title: string;
    description: string;
    imageUrl?: string;
}

interface RolesSectionProps {
    roles: RoleCard[];
}

export const RolesSection: React.FC<RolesSectionProps> = ({ roles }) => (
    <div className='w-full bg-[#eee] px-4 py-12 sm:px-6 lg:px-12'>
        <h2 className='mb-10 text-start text-3xl font-bold'>What's Your Role?</h2>

        <div className='grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-3'>
            {roles.map((role, index) => (
                <div
                    key={index}
                    className='overflow-hidden bg-white transition-shadow duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.15),_0_6px_20px_rgba(0,0,0,0.12)]'>
                    <div className='flex h-full flex-col p-6'>
                        <h3 className='mb-2 text-xl font-semibold text-gray-900'>{role.title}</h3>
                        <p className='flex-grow text-sm text-gray-600'>{role.description}</p>

                        {role.imageUrl && (
                            <div className='relative mt-4 h-42 w-full overflow-hidden md:h-32 lg:h-62'>
                                <Image src={role.imageUrl} alt={role.title} fill className='object-cover' />
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    </div>
);
