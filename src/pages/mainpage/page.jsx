import { Link } from "react-router-dom";
import useDatas from "../../store/page";
import db from "../../database/db.json";
import { lazy, Suspense , useState } from "react";
import useEffectOnce from "../../utilits/useEffectOnce";
import Slider from "../../components/mainPage/Slider/page";
import "./style.css";
import { FadeLoader } from "react-spinners";
const ItemProduct=lazy(()=> import("../../components/mainPage/ItemProduct/page"))
const MainPage = () => {
    const [database, setDatabase] = useState([]);
    const add = useDatas((state) => state.addData);
    
    useEffectOnce(() => {
        setDatabase(db);
        add(db)
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
                            <ItemProduct item={item} />
                        ))}
                    </Suspense>
                </div>
            </div>
        </>
    );
};

export default MainPage;