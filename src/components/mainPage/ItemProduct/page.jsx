import { Link } from "react-router-dom";
import starImage from "../../../assets/images/star.webp"
import "./style.css"
const ItemProduct=({item})=>{
    return(
        <div className="item-product" key={item.id}>
            <Link to={item.id}>
                <img src={`${item.image_link}`} alt={`image ${item.name}`} />
            </Link>
            <h2>{item.name}</h2>
            <h3>${item.price}</h3>
            <span>${item.main_price}</span>
            <p>{item.descriptions}</p>
            <div className="stars">
                <img src={starImage} alt="star icon" />
                <img src={starImage} alt="star icon" />
                <img src={starImage} alt="star icon" />
                <img src={starImage} alt="star icon" />
                <img src={starImage} alt="star icon" />
            </div>
            <Link className="last-link" to={item.id}>see more...</Link>
        </div>       
    )
}

export default ItemProduct;