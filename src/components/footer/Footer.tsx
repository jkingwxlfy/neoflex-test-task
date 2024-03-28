import WhatsApp from '../../../public/whatsapp.svg';
import Telegram from '../../../public/telegram.svg';
import Vk from '../../../public/vk.svg';
import Circle from '../../../public/footerscircle.png';
import './footer.scss';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer__title">QPICK</div>
            <div className="footer__links">
                <div className="footer__links-item">Избранное</div>
                <div className="footer__links-item">Корзина</div>
                <div className="footer__links-item">Контакты</div>
            </div>
            <div className="footer__copyright">
                <div className="footer__copyright-title">Условия Сервиса</div>
                <div className="footer__copyright-langs">
                    <img src={Circle} alt="image of language logo" />
                    <div className="footer__copyright-langs-item">Рус</div>
                    <div className="footer__copyright-langs-item">Eng</div>
                </div>
            </div>
            <div className="footer__contacts">
                <img src={Vk} alt="image of contact logo" />
                <img src={Telegram} alt="image of contact logo" />
                <img src={WhatsApp} alt="image of contact logo" />
            </div>
        </footer>
    );
};
export default Footer;
