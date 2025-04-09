import Link from 'next/link';
import Image from '@/components/atoms/image';
import { CartProps } from '.';

const CartList = ({ data }: CartProps) => {
    return (
        <div className='w-full'>
            <div className='m-2 bg-black px-1 py-2 text-center text-white'>
                <b>Items</b>
            </div>
            <ul className='mx-2 flex flex-col gap-1'>
                {data?.lineItems?.map((lineItem) => {
                    return (
                        <li key={lineItem.sku} className='border-t-my-border-grey border-t-[1px] py-2'>
                            <Link href='/' className='flex flex-col'>
                                <section className='w-3/4'>
                                    <Image
                                        src={lineItem.image!}
                                        alt={lineItem.name}
                                        width={60}
                                        height={60}
                                        className='mx-auto mb-2'
                                    />
                                    <div className='mx-4 pb-4'>
                                        <h4 className='text-center font-bold'>{lineItem.name}</h4>
                                    </div>
                                    <div className='flex gap-x-2 text-center font-[13px]'>
                                        <div className='w-1/2'>
                                            ON BACKORDER{' '}
                                            <i
                                                className='fas fa-info text-secondary mt-1 align-top text-[8px]'
                                                data-original-title='For more information, please reach out to us at (800) 940-6762'
                                            />
                                        </div>
                                        <div>2</div>
                                    </div>
                                </section>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
export default CartList;
