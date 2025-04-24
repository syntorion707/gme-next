import Link from 'next/link';
import { cn } from '@/utils/tw';
import PlaceOrder from './place-order';
import PromoCodeModal from './promo-code-modal';

const OrderSummary = () => {
    return (
        <section className='p-3 pb-4' style={{ boxShadow: '0 0 5px #ccc' }}>
            <div className='grid grid-cols-2 items-center gap-x-5 font-bold'>
                <h2>Your Order</h2>
                <RightAlignedText> $441.83 </RightAlignedText>
            </div>
            <HorizontalLine />
            <div className='grid grid-cols-2 gap-x-5 gap-y-2 nth-of-type-[2n+1]:text-red-400'>
                <p className='font-bold'>Subtotal</p>
                <RightAlignedText className='font-bold'> $441.82 </RightAlignedText>

                <p>Delivery</p>
                <RightAlignedText> $0.00</RightAlignedText>
                <p>Sales Tax</p>
                <RightAlignedText> $0.00</RightAlignedText>
            </div>
            <HorizontalLine />
            <div>
                <p className='mb-2 flex justify-between'>
                    <span>Total</span>
                    <span className='font-bold'>$443.78</span>
                </p>
                <div className='mb-2'>
                    <PromoCodeModal />
                </div>
                <div className='mx-auto text-center'>
                    <PlaceOrder />
                    <Link
                        href='/account/login'
                        className='text-primary hover:text-button-accent px-3 py-1.5 hover:underline'>
                        Secure Login
                    </Link>
                    <p className='mt-3'>Cart number 5767718</p>
                </div>
            </div>
        </section>
    );
};

export default OrderSummary;

const HorizontalLine = () => <hr className='-mx-3 my-5 border-0' style={{ borderTop: '1px solid #0000001a' }} />;

const RightAlignedText = ({ children, className }: { className?: string | undefined; children?: React.ReactNode }) => (
    <p className={cn('text-right', className)}>{children}</p>
);
