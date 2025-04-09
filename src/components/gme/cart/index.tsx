import { Cart as ICart } from '@/types/cart';
import CartList from './cart-list';

export type CartProps = {
    data: ICart;
};
export const Cart = async ({ data }: CartProps) => {
    const { number } = data;

    return (
        <div className='px-[2.5%]'>
            <div className='flex flex-col'>
                <div className='flex justify-end px-2 pt-5 text-[21px] font-bold md:text-base'>Cart #: {number}</div>
                <CartList data={data} />
            </div>
        </div>
    );
};
