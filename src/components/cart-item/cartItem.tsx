import { useAppDispatch } from '../../hooks/redux';
import {
    addProduct,
    removeProduct,
    decreaseProductCount,
} from '../../store/reducers/staffSlice';
import type { ICartItem } from '../../models/IHeadset';

import Plus from '../../../public/plusbutton.png';
import Minus from '../../../public/minusbutton.png';
import Basket from '../../../public/basket.png';
import './cartitem.scss';

interface ICartItemProps {
    data: ICartItem;
}

const CartItem: React.FC<ICartItemProps> = ({ data }) => {
    const dispatch = useAppDispatch();

    const onAddProduct = () => {
        dispatch(addProduct(data));
    };

    const onRemoveProduct = () => {
        dispatch(removeProduct(data));
    };

    const onDecreaseProductCount = () => {
        dispatch(decreaseProductCount(data));
    };

    return (
        <div className="cart-item">
            <div className="cart-item__image">
                <img
                    className="cart-item__image-main"
                    src={data.image}
                    alt="image of product"
                />
                <div className="cart-item__image-counter">
                    <div
                        className="cart-item__image-button"
                        onClick={onDecreaseProductCount}
                    >
                        <img src={Minus} alt="image of button's counter" />
                    </div>
                    <div className="cart-item__image-counter">
                        {data.totalCount}
                    </div>
                    <div
                        className="cart-item__image-button"
                        onClick={onAddProduct}
                    >
                        <img src={Plus} alt="image of button's counter" />
                    </div>
                </div>
            </div>
            <div className="cart-item__info">
                <div className="cart-item__info-title">{data.title}</div>
                <div className="cart-item__info-price">{data.price} ₽</div>
            </div>
            <div className="cart-item__delete" onClick={onRemoveProduct}>
                <img src={Basket} alt="image of delete button" />
            </div>
            <div className="cart-item__info-totalprice">
                {data.price * data.totalCount} ₽
            </div>
        </div>
    );
};
export default CartItem;
