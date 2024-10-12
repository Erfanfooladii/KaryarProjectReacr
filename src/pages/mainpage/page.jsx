import { Link } from "react-router-dom";
import useDatas from "../../store/page";
import { lazy, Suspense , useState } from "react";
import useEffectOnce from "../../utilits/useEffectOnce";
import Slider from "../../components/mainPage/Slider/page";
import "./style.css";
import { FadeLoader } from "react-spinners";
import api from "../../configs/api/api";
const ItemProduct=lazy(()=> import("../../components/mainPage/ItemProduct/page"))
const MainPage = () => {
    const [database, setDatabase] = useState([]);
    const add = useDatas((state) => state.addData);
    
    useEffectOnce(() => {
        const getData=async()=>{
            try {
                const res=(await api.get('/datas')).data
                setDatabase(res)
                add(res)
            } catch (error) {
                console.log(error);
            }
        }
        getData()
    }, []);
    
    return (
        <>
            <Slider/>
            <div className="container list-full">
                <div className="title-head">
                    <p>
                    You are on amazon.com. You can also shop on Amazon Iran for millions of products with fast local delivery. Click here to go to 
                    <Link to="/" >amazon.de</Link>
                    </p>
                </div>
                <div className="list-products">
                    <Suspense fallback={<FadeLoader className="loading" />}>
                        {database.map((item) => (
                            <ItemProduct key={item.id} item={item} />
                        ))}
                    </Suspense>
                </div>
            </div>
        </>
    );
};

export default MainPage;