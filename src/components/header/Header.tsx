import { RouteNames } from '../../routes';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';

import Heart from '../../../public/heart.png';
import Cart from '../../../public/cart.png';
import './header.scss';

const links = [
    { img: Heart, href: RouteNames.NOT_FOUND },
    { img: Cart, href: RouteNames.CART_PAGE },
];

const Header: React.FC = () => {
    const { totalCount } = useAppSelector((state) => state.cart);

    return (
        <header className="header">
            <Link to="/" className="header__title">
                QPICK
            </Link>
            <div className="header__links">
                {links.map((link) => (
                    <Link
                        className="header__links-item"
                        key={link.href}
                        to={link.href}
                    >
                        <img src={link.img} alt="logo of header's link" />
                        <div className="header__links-item__counter">
                            {link.href === RouteNames.CART_PAGE
                                ? totalCount
                                : 0}
                        </div>
                    </Link>
                ))}
            </div>
        </header>
    );
};
export default Header;
