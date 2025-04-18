import DeliveryDetails from '@/components/gme/checkout/delivery-details';
import OrderSummary from '@/components/gme/checkout/order-summary';

const CheckoutPage = () => {
    return (
        <section className='mx-auto my-2 grid w-full max-w-6xl grid-cols-1 gap-x-4 md:grid-cols-[1fr_minmax(200px,_280px)] lg:grid-cols-[1fr_minmax(300px,_350px)] lg:gap-x-6'>
            <div className='bg-white md:order-last'>
                <OrderSummary />
            </div>
            <div className='mt-2 px-4 py-2 md:order-first md:px-0'>
                <DeliveryDetails />
            </div>
        </section>
    );
};
export default CheckoutPage;
