import { Cart } from '@/components/gme/cart';
import { getCart } from '@/lib/api-hub/server-actions';

const CartPage = async () => {
    const cart = await getCart();

    return <Cart data={cart} />;
};

export default CartPage;
