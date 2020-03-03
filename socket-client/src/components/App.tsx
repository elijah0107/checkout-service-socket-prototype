import React, {FC} from 'react';
import Delivery from './delivery/delivery'
import './App.scss';

const App: FC = (item) => {
  const footerMessage = 'Выберите условия доставки для "Посылки 1"';
  console.log('react render', item, 123);
  return (
    <div>
      <header>
        <div className="content-shell">
          <div>
            <img src="//cdn2.static1-sima-land.com/page-header/2.0.20/images/logo.png" className="logo-img"
                 role="presentation" alt="логотип Сима-ленд" />
          </div>
          <div className="header-phone">
            <span className="font-default">+7 800 234 1000</span>
          </div>
        </div>
      </header>
      <section>
        <div className="content-shell">
          <h1 className="content-header">Оформление заказа</h1>
          <span className="delivery-settlement-block">Доставка в Екатеринбург</span>
          <Delivery />
        </div>
      </section>
      <footer>
        <div className="content-shell">
          <div>
            <span className="font-default">{footerMessage}</span>
          </div>
          <div className="content-align-right">
            <div className="button-disabled"><span className="font-default">Оформить заказ</span></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
