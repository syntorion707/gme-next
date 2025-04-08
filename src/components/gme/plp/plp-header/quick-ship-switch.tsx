import React from 'react';

const QuickShipSwitch = () => {
    return (
        <div className='flex items-center gap-1'>
            <label className='relative inline-block h-5 w-10'>
                <input type='checkbox' className='peer hidden' />
                <span className='absolute inset-0 cursor-pointer rounded-full bg-gray-500 transition duration-300 peer-checked:bg-green-500'></span>
                <span className='absolute top-1 left-1 h-3 w-3 rounded-full bg-white transition-transform duration-300 peer-checked:translate-x-4'></span>
            </label>
            <div className='flex items-center gap-1'>
                <svg version='1.1' xmlns='http://www.w3.org/2000/svg' width='40' height='30' viewBox='0 0 42 32'>
                    <path
                        fill='#008200'
                        d='M11.281 8.008c-0.039 0.016-0.078 0.039-0.109 0.070 0.016-0.023 0.031-0.031 0.054-0.047 0.016-0.008 0.039-0.023 0.054-0.023z'></path>
                    <path fill='#008200' d='M25.906 16.246v0.015l-13.976-7.077 13.976 7.061z'></path>
                    <path
                        fill='#008200'
                        d='M41.724 8.209c-0.016-0.039-0.023-0.070-0.047-0.101-0.016-0.039-0.039-0.070-0.070-0.093-0.023-0.031-0.054-0.054-0.093-0.077-0.016-0.015-0.031-0.023-0.046-0.031l-14.905-6.651c-0.124-0.054-0.263-0.054-0.379 0l-14.905 6.752c-0.039 0.015-0.077 0.039-0.108 0.070-0.023 0.015-0.046 0.039-0.062 0.062-0.023 0.015-0.039 0.039-0.046 0.062-0.039 0.062-0.062 0.139-0.062 0.217v4.994c0 0.255 0.209 0.465 0.465 0.465s0.465-0.209 0.465-0.465v-4.227l13.975 7.061v13.867l-7.611-3.895c-0.225-0.116-0.503-0.023-0.619 0.201-0.116 0.232-0.031 0.511 0.201 0.627l8.254 4.228c0.077 0.039 0.155 0.062 0.24 0.062 0.077 0 0.147-0.015 0.217-0.047l0.031-0.015 14.874-7.634c0.155-0.077 0.248-0.24 0.248-0.41v-14.912c0 0-0.008-0.070-0.015-0.108zM26.371 2.193l13.821 6.171-4.979 2.547-13.279-6.713 4.437-2.005zM26.371 15.441h-0.015l-13.813-6.992 5.002-2.261 13.542 6.837-4.715 2.416zM40.811 22.943l-13.976 7.17v-13.867l4.684-2.393 0.054 5.513c0.008 0.163 0.085 0.31 0.224 0.395 0.077 0.046 0.163 0.062 0.24 0.062s0.147-0.015 0.217-0.046l3.105-1.595c0.155-0.077 0.255-0.24 0.255-0.41v-6.024l5.195-2.656v13.852z'></path>
                    <path fill='#008200' d='M12.542 8.449v0zM12.542 8.449v0z'></path>
                    <path
                        fill='#008200'
                        d='M15.345 16.695h-14.2c-0.256 0-0.465-0.209-0.465-0.465s0.209-0.465 0.465-0.465h14.2c0.255 0 0.464 0.209 0.464 0.465s-0.209 0.465-0.464 0.465z'></path>
                    <path
                        fill='#008200'
                        d='M15.345 20.737h-10.453c-0.255 0-0.465-0.209-0.465-0.465s0.209-0.465 0.465-0.465h10.453c0.255 0 0.465 0.209 0.465 0.465s-0.209 0.465-0.465 0.465z'></path>
                    <path
                        fill='#008200'
                        d='M15.345 24.786h-6.55c-0.255 0-0.465-0.209-0.465-0.465s0.209-0.465 0.465-0.465h6.55c0.255 0 0.464 0.209 0.464 0.465s-0.209 0.465-0.464 0.465z'></path>
                </svg>
                <h2 className='text-xs font-extrabold text-green-600'>QUICK SHIP</h2>
            </div>
        </div>
    );
};

export default QuickShipSwitch;
