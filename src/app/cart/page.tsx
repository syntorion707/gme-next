import { Suspense } from 'react';
import { Cart } from '@/components/gme/cart';
import { getCart } from '@/lib/api-hub/server-actions';

const CartPage = async () => {
    const cart = await getCart();

    return (
        <Suspense>
            <Cart data={cart} />;
        </Suspense>
    );
};

export default CartPage;
