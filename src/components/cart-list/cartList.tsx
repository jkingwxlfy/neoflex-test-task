import { useAppSelector } from '../../hooks/redux';

import CartItem from '../cart-item/cartItem';

import './cartlist.scss';

const CartList: React.FC = () => {
    const { cart } = useAppSelector((state) => state.cart);

    return (
        <div className="cart-list">
            {cart.length ? (
                cart.map((item) => <CartItem key={Math.random()} data={item} />)
            ) : (
                <div className="cart-list__empty">Корзина пуста</div>
            )}
        </div>
    );
};
export default CartList;
