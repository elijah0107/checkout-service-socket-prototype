import React, {FC} from "react";
import './delivery.scss';

const Delivery: FC = () => {
  return (
    <div className="checkout-block">
      <div className="checkout-form-column">
        <div className="shipment-block border-block-shell">
          <div className="shipment-info">
            <h3 className="font-default">Посылка 1</h3>
            <div className="shipment-images">
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div className="show-more"><span>Ещё 36<br/>товаров</span></div>
            </div>
          </div>
          <div className="shipment-control-block">
            <button className="button-enabled">Выбрать доставку</button>
          </div>
        </div>
      </div>
      <div className="checkout-info-column">
        <div className="total-info-block">
          <div className="details">
            <div className="name">Товары</div>
            <div className="content-align-right font-default">18 824₽</div>
            <div className="name">Скидка</div>
            <div className="content-align-right font-default">− 824₽</div>
          </div>
          <div className="total font-default">
            <div>Итого</div>
            <div>18 000₽</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Delivery
