import React from 'react';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <aside className="block col-6">
      <h2>Basket</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-12">{item.name}</div>
            <div className="col-12">
              <button onClick={() => onRemove(item)} className="remove btn-warning">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add btn-success">
                +
              </button>
            </div>

            <div className="col-12 text-right">
              {item.qty} x Rs.{item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-1">Sub Total</div>
              <div className="col-2 text-right">Rs.{itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-1">Tax Price</div>
              <div className="col-2 text-right">Rs.{taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                Rs.{shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-1">
                <strong>Total Price</strong>
              </div>
              <div className="col-2 text-right">
                <strong>Rs.{totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert('Implement Checkout!')}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
