import useCartData from "../../../store/cartstore";
import "./style.css";
import icon from "../../../assets/images/navbarImg.png";
import flag from "../../../assets/images/flag.png";
import icon_cart from "../../../assets/images/basket.png";
import { Link } from "react-router-dom";
const NavBar = () => {
  const dataCart = useCartData((state) => state.cartData);
  const totalQuantity = dataCart.reduce(
    (accumulator, currentValue) => accumulator + parseInt(currentValue.value),
    0
  );

  return (
    <>
      <nav className="nav-bar">
        <div className="item">
          <Link to="/">
            <img src={icon} alt="icon image" />
          </Link>
        </div>
        <div className="item location">
          <span className="material-symbols-outlined">location_on</span>
          <div>
            <small>Deliver to</small>
            <p>iran</p>
          </div>
        </div>
        <div className="">
          <div className="search">
            <select>
              <option value="all">All</option>
              <option value="mobiles">mobiles</option>
              <option value="laptops">laptops</option>
              <option value="mobile accessories">mobile accessories</option>
            </select>
            <input placeholder="Search Amazon" type="text" />
            <button>
              <span className="material-symbols-outlined">search</span>
            </button>
          </div>
        </div>
        <div className="item language">
          <img className="image-flag" src={flag} alt="flag logo" />
          <p>EN</p>
          <span className="material-symbols-outlined">arrow_drop_down</span>
        </div>
        <div className="item sign-in">
          <small>Hello, sign in</small>
          <p>Account & Lists</p>
          <span className="icon material-symbols-outlined">
            arrow_drop_down
          </span>
        </div>
        <div className="item return">
          <small>Returns</small>
          <p>& Orders</p>
        </div>
        <Link to="/cart" className="item quantity">
          <span>{totalQuantity}</span>
          <p>cart</p>
          <img src={icon_cart} alt="cart icon" />
        </Link>
      </nav>
      <header className="header">
        <ul>
          <li>
            <span className="material-symbols-outlined">menu</span>
            All
          </li>
          <li>Today's Deals</li>
          <li>Customer Service</li>
          <li>Registry</li>
          <li>Gift Cards</li>
          <li>Sell</li>
        </ul>
      </header>
    </>
  );
};

export default NavBar;
