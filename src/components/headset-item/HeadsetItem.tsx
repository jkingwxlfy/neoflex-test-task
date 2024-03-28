import type { IHeadset } from '../../models/IHeadset';
import { useAppDispatch } from '../../hooks/redux';
import { addProduct } from '../../store/reducers/staffSlice';

import Star from '../../../public/star.png';
import './headsetitem.scss';

interface IHeadsetItemProps {
    data: IHeadset;
}

const HeadsetItem: React.FC<IHeadsetItemProps> = ({ data }) => {
    const { title, price, image, rate } = data;
    const dispatch = useAppDispatch();

    const onAddItem = () => {
        dispatch(addProduct(data));
    };

    return (
        <div className="headset-item">
            <div className="headset-item__image">
                <img src={image} alt="image of goods" />
            </div>
            <div className="headset-item__info">
                <div className="headset-item__row">
                    <div className="headset-item__title">{title}</div>
                    <div className="headset-item__price">{price} ₽</div>
                    {data.oldPrice ? (
                        <span className="headset-item__oldprice">
                            {data.oldPrice} ₽
                        </span>
                    ) : null}
                </div>
                <div className="headset-item__row">
                    <div className="headset-item__rate">
                        <img src={Star} alt="image of star" />
                        <span>{rate}</span>
                    </div>
                    <button
                        className="headset-item__button"
                        onClick={onAddItem}
                    >
                        Купить
                    </button>
                </div>
            </div>
        </div>
    );
};
export default HeadsetItem;
