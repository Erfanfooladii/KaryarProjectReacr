import { useParams } from "react-router-dom";
import { useCallback , useState } from "react";
import useCartData from "../../store/cartstore";
import useDatas from "../../store/page";
import db from "../../database/db.json";
import topPage from "../../assets/images/topPage.webp";
import "./style.css"
import toast from "react-hot-toast";
import ImageProduct from "../../components/singelPage/imageProduct/page";
import TitleProduct from "../../components/singelPage/titileProduct/page";
import PriceProduct from "../../components/singelPage/priceProduct/page";

const SinglePage = () => {
    const { id } = useParams();
    const mainProduct = db.find((item) => item.id === id) || [];
    const [selectValue, setSelectValue] = useState(mainProduct.value || "");
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
            ...mainProduct,
            price: selectValue * mainProduct.price,
            value: selectValue
        };

        if (statusDataCart) {
            if (btn === "remove") {
                toast.success('Removed from the cart')
                removeDataCart(productData);
                addDataCart(mainProduct)
                setBtn("add");
            } else {
                toast.success('Cart updated!')
                upDataCart(updatedProduct);
                setBtn("remove");
            }
        } else {
            addDataCart(updatedProduct);
            setBtn("remove");
            toast.success('Added to the cart!')
        }
    }, [selectValue, mainProduct, btn, statusDataCart, addDataCart, upDataCart, removeDataCart, productData]);

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
                    <ImageProduct mainData={mainProduct} cartData={prdouctCart} />
                    <TitleProduct mainData={mainProduct} cartData={prdouctCart} />
                    <PriceProduct mainData={mainProduct} cartData={prdouctCart} selectHandele={changeHandle} clickHandele={handleAddDataCart} isBtn={btn} />
                </div>    
            </section>
        </>
    );
};

export default SinglePage;