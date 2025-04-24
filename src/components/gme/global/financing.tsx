import Image from 'next/image';
import React from 'react';

const FinancingPage = () => {
    return (
        <div className='mt-2'>
            <h2 className='text-primary flex justify-center p-4 text-2xl uppercase md:justify-start md:text-4xl'>
                Financing
            </h2>

            <div className='flex w-full justify-center pb-2'>
                <Image
                    src='https://www.gmesupply.com/images/financing-page.jpg'
                    alt='Finance'
                    height={250}
                    width={500}
                    className='h-30 w-[100%] md:h-[80%] md:w-[85%]'
                />
            </div>
            <h2 className='border-primary border-t-4 bg-black p-2 text-lg text-white uppercase md:text-2xl'>
                Afterpay
            </h2>
            <div className='flex w-full justify-center py-2'>
                <Image
                    src='https://www.gmesupply.com/images/Web_Pages/financing/Afterpay.PNG'
                    alt='Finance'
                    height={250}
                    width={500}
                    className='h-[100%] w-[100%] md:h-[60%] md:w-[60%]'
                />
            </div>
            <p className='p-2 text-sm'>
                <span className='text-primary cursor-pointer'>Click Here</span> for complete terms.
            </p>
            <h2 className='border-primary mt-2 border-t-4 bg-black p-2 text-lg text-white uppercase md:text-2xl'>
                Personal Credit
            </h2>
            <p className='p-2 text-lg font-bold md:text-xl'>No interest if paid in full within 6 months*</p>
            <div className='py-4'>
                <button className='text-md bg-primary cursor-pointer p-2 font-bold text-white uppercase md:text-sm'>
                    Download Application
                </button>
            </div>
            <p className='text-md p-2 font-bold'>
                On purchases with your GME Supply Synchrony financing program credit card. Interest will be charged to
                your account from the purchase date if the promotional purchase is not paid in full within 6 Months or
                if you make a late payment. There is no penalty for early payment of your purchase. Minimum monthly
                payments are required.
            </p>
            <p className='p-2 text-sm'>
                *Offer applies only to single-receipt qualifying purchases. No interest will be assessed on the promo
                purchase if you pay the promo purchase amount in full within 6 Months. If you do not, interest will be
                assessed on the promo purchase from the purchase date. However, if the account becomes 60 days past due,
                promo may be terminated early, accrued interest will be billed, and regular account terms will apply.
                Regular account terms apply to non-promotional purchases and, after promotion ends, to promotional
                balance. For new accounts: Purchase APR is 29.99%. Minimum Interest Charge is $2. Existing cardholders
                should see their credit card agreement for their applicable terms. Subject to credit approval.
            </p>
            <h2 className='text-md p-2 font-bold'>
                For details or to apply, please call <span className='text-primary cursor-pointer'>800-940-6762</span>.
            </h2>
            <p className='p-2 text-sm font-bold'>**Commercial accounts do not qualify for 6 months financing.</p>
            <h2 className='border-primary mt-4 border-t-4 bg-black p-2 text-lg text-white uppercase md:text-2xl'>
                Business Credit
            </h2>
            <p className='p-2 text-lg font-bold md:text-xl'>Net 30 Terms*</p>
            <div className='py-4'>
                <button className='text-md bg-primary cursor-pointer p-2 font-bold text-white uppercase'>
                    Download Gme Supply Application
                </button>
            </div>
            <p className='text-md p-2 font-bold'>
                GME Supply understands the unique needs of your business. To apply for credit, simply download the
                application above, and return it to us. Fax your application to (888) 511-0457, or email it to{' '}
                <span className='text-primary cursor-pointer'>info@gmesupply.com</span>. We will begin processing your
                application immediately, for the fastest turnaround time possible.
            </p>
            <h2 className='text-md p-2 font-bold'>
                For more information, please call <span className='text-primary cursor-pointer'>800-940-6762</span>.
            </h2>
            <div className='py-4'>
                <h2 className='text-md px-2 font-bold'>Applications can also be mailed to:</h2>
                <p className='text-md px-2'>GME Supply Co.</p>
                <p className='text-md px-2'>1391 E. Boone Industrial Blvd.</p>
                <p className='text-md px-2'>Columbia, MO 65202</p>
            </div>
        </div>
    );
};

export default FinancingPage;
