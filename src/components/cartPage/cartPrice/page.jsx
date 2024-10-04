const CartPrice = ({totalPrice,totalQuantity}) => {
  return (
    <div className="cart-prices">
      <div className="total-cart">
        <p>Subtotal ({totalQuantity} item):</p>
        <span>${totalPrice}</span>
        <div className="title-cart">
          <input type="checkbox" />
          <label htmlFor="priceStatus">
            This will be a gift <a href="#">Learn more</a>
          </label>
        </div>
        <button className="btn-cart-prices">Proceed to Checkout</button>
      </div>
    </div>
  );
};
export default CartPrice;