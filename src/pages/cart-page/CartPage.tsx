import CartList from '../../components/cart-list/cartList';
import { useAppSelector } from '../../hooks/redux';

import './cartpage.scss';

const CartPage: React.FC = () => {
    const { totalPrice, cart } = useAppSelector((state) => state.cart);

    return (
        <section className="cart-page">
            <div className="cart-page__title">
                {cart.length ? 'Корзина' : ''}
            </div>
            <div className="cart-page__wrapper">
                <div className="cart-page__products">
                    <CartList />
                </div>
                <div className="cart-page__decoration">
                    <div className="cart-page__decoration-sum">
                        <span>ИТОГО</span>
                        <span>₽ {totalPrice}</span>
                    </div>
                    <button className="cart-page__decoration-button">
                        Перейти к оформлению
                    </button>
                </div>
            </div>
        </section>
    );
};
export default CartPage;
