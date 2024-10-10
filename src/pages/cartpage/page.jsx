import { useEffect, useState } from "react";
import useCartData from "../../store/cartstore";
import "./style.css";
import { Link } from "react-router-dom";
import CartPrice from "../../components/cartPage/cartPrice/page";
import CartList from "../../components/cartPage/cartList/page";
import toast from "react-hot-toast";
import api from "../../api/api";

const CartPage = () => {
  const dataCart = useCartData((state) => state.cartData);
  const [data,setData]=useState([])
  const getDataApi=async ()=>{
    try {
      const dataApi=(await api.get("/datas")).data
      setData(dataApi)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{getDataApi()},[])
  const removeAllDataCart = useCartData((state) => state.removeAllData);
  const updateDataCart = useCartData((state) => state.upData);
  const removeCartItem = useCartData((state) => state.removeData);
  const [isBtn, setIsBth] = useState(false);
  const [selectValue, setSelectValue] = useState("");
  const [currentProductId, setCurrentProductId] = useState(null);
  const totalQuantity = dataCart.reduce(
    (accumulator, currentValue) => accumulator + parseInt(currentValue.value),
    0
  );
  const totalPrice = dataCart.reduce(
    (accumulator, currentValue) => accumulator + parseInt(currentValue.price),
    0
  );

  const btnHandler = (e) => {
    const id = e.target.value;
    const productCart = dataCart.find((item) => item.id === id);
    const productDetails = mainProduct(id);
    const updatedProduct = {
      ...productDetails,
      price: selectValue * productDetails.price,
      value: selectValue,
    };
    if (isBtn) {
      updateDataCart(updatedProduct);
      toast.success("Cart updated!");
    } else {
      toast.success("Removed from the cart");
      removeCartItem(productCart);
    }
    setIsBth(false);
    setCurrentProductId(null);
  };

  const mainProduct = (id) => {
    return data.find((item) => item.id === id) || {};
  };

  const handeleChangeSelect = (e, item) => {
    setIsBth(true);
    setSelectValue(e.target.value);
    setCurrentProductId(item.id);
  };
  return (
    <div className="basket-full">
      <div className="cart-items">
        {dataCart.length === 0 ? (
          <div className="full-page">
            <div className="head-bascket-empty">
              <h1>Your Amazon Basket is empty.</h1>
              <p>
                Check products page for shopping.
                <Link to="/">continue shopping</Link>
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="head-bascket">
              <h1>Shopping Basket</h1>
              <a onClick={removeAllDataCart} href="#">
                Deselect all items
              </a>
            </div>
            <ul className="cart-list">
              {dataCart.map((item) => (
                <CartList
                  key={item.id}
                  handeleChangeSelect={(e) => {
                    handeleChangeSelect(e, item);
                  }}
                  item={item}
                  currentProductId={currentProductId}
                  btnHandler={btnHandler}
                  isBtn={isBtn}
                />
              ))}
            </ul>
            <div className="footer-cart">
              <p>Subtotal ({totalQuantity} item):</p>
              <span>${totalPrice}</span>
            </div>
          </>
        )}
      </div>
      {dataCart.length === 0 ? null : (
        <CartPrice totalPrice={totalPrice} totalQuantity={totalQuantity} />
      )}
    </div>
  );
};

export default CartPage;
