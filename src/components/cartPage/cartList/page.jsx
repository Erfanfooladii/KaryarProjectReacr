import { Link } from "react-router-dom";
import SelectProduct from "../../select/page";
import prime from "../../../assets/images/prime.avif";

const CartList = ({
  isBtn,
  currentProductId,
  item,
  handeleChangeSelect,
  btnHandler
}) => {
  
  return (
    <li>
      <span className="price-product-cart">${item.price}</span>
      <div className="image-product">
        <Link to={`/${item.id}`}>
          <img src={item.image_link} alt={`Image of ${item.name}`} />
        </Link>
      </div>
      <div className="title-product">
        <p>{item.descriptions}</p>
        <span className="green">In Stock</span>
        <img src={prime} alt="Prime icon" />
        <div className="check">
          <input type="checkbox" id={`check-${item.id}`} />
          <label htmlFor={`check-${item.id}`}>
            This will be a gift <a href="#">Learn more</a>
          </label>
        </div>
        <span className="style-color">
          <span className="bold">Style Name:</span> 0.5 litre work container
        </span>
        <span className="style-color">
          <span className="bold">Colour name:</span> white
        </span>
        <div className="btns">
          <SelectProduct setChanges={handeleChangeSelect} defaultValue={item.value} />
          <button value={item.id} onClick={btnHandler}>
            {isBtn && currentProductId === item.id ? "Update" : "Delete"}
          </button>
          <a href="#">Save for later</a>
          <a href="#">See more like this</a>
          <a href="#">Share</a>
        </div>
      </div>
    </li>
  );
};

export default CartList;