import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import useCartData from "../../store/cartstore";
import useDatas from "../../store/page";
import topPage from "../../assets/images/topPage.webp";
import "./style.css";
import toast from "react-hot-toast";
import ImageProduct from "../../components/singelPage/imageProduct/page";
import TitleProduct from "../../components/singelPage/titileProduct/page";
import PriceProduct from "../../components/singelPage/priceProduct/page";
import api from "../../configs/api/api";

const SinglePage = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const getApiData = async () => {
    try {
      const data = (await api.get("/datas")).data;
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getApiData();
  }, []);
  const mainData = data.find((item) => item.id === id) || [];
  const [selectValue, setSelectValue] = useState(mainData.value || "");
  const datas = useDatas((state) => state.data);
  const productData = datas[0]?.find((item) => item.id === id) || {};
  const addDataCart = useCartData((state) => state.addData);
  const upDataCart = useCartData((state) => state.upData);
  const removeDataCart = useCartData((state) => state.removeData);
  const dataCart = useCartData((state) => state.cartData);
  const prdouctCart = dataCart.filter((item) => item.id === id);
  const statusDataCart = prdouctCart.length > 0;

  const [btn, setBtn] = useState(statusDataCart ? "remove" : "add");

  const handleAddDataCart = useCallback(() => {
    const updatedProduct = {
      ...mainData,
      price: selectValue * mainData.price,
      value: selectValue,
    };

    if (statusDataCart) {
      if (btn === "remove") {
        toast.success("Removed from the cart");
        removeDataCart(productData);
        addDataCart(data);
        setBtn("add");
      } else {
        toast.success("Cart updated!");
        upDataCart(updatedProduct);
        setBtn("remove");
      }
    } else {
      addDataCart(updatedProduct);
      setBtn("remove");
      toast.success("Added to the cart!");
    }
  }, [
    selectValue,
    mainData,
    btn,
    statusDataCart,
    addDataCart,
    upDataCart,
    removeDataCart,
    productData,
  ]);

  const changeHandle = (e) => {
    const value = e.target.value;
    setSelectValue(value);
    setBtn(statusDataCart ? "update" : "add");
  };

  return (
    <>
      <section className="main-product">
        <div className="head-image">
          <img src={topPage} alt="image top" />
        </div>
        <div className="full-product">
          <ImageProduct mainData={mainData} cartData={prdouctCart} />
          <TitleProduct mainData={mainData} cartData={prdouctCart} />
          <PriceProduct
            mainData={mainData}
            cartData={prdouctCart}
            selectHandele={changeHandle}
            clickHandele={handleAddDataCart}
            isBtn={btn}
          />
        </div>
      </section>
    </>
  );
};

export default SinglePage;
