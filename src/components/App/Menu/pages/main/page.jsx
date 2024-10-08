import flag from "../../../../../assets/images/flag.png";
import lnImage from "../../../../../assets/images/image.avif";
const MainPageMenu=({muiscHandele})=>{
    return(
        <>
            <div className="container-menu">
            <div className="item-menu">
              <h3 className="head-item">Digital Content & Devices</h3>
              <ul>
                <li onClick={muiscHandele}>
                  <p>Amazon Music</p>
                  <span className="material-symbols-outlined">
                    arrow_forward_ios
                  </span>
                </li>
                <li>
                  <p>Kindle E -readers & Books</p>
                  <span className="material-symbols-outlined">
                    arrow_forward_ios
                  </span>
                </li>
                <li>
                  <p>Amazon Appstore</p>
                  <span className="material-symbols-outlined">
                    arrow_forward_ios
                  </span>
                </li>
              </ul>
            </div>
            <div className="item-menu">
              <h3 className="head-item">Shop by Department</h3>
              <ul>
                <li>
                  <p>Electronics</p>
                  <span className="material-symbols-outlined">
                    arrow_forward_ios
                  </span>
                </li>
                <li>
                  <p>Computer</p>
                  <span className="material-symbols-outlined">
                    arrow_forward_ios
                  </span>
                </li>
                <li>
                  <p>Smart Home</p>
                  <span className="material-symbols-outlined">
                    arrow_forward_ios
                  </span>
                </li>
                <li>
                  <p>Arts & Crafts</p>
                  <span className="material-symbols-outlined">
                    arrow_forward_ios
                  </span>
                </li>
                <li>
                  <p>See all</p>
                  <span className="material-symbols-outlined">
                    arrow_forward_ios
                  </span>
                </li>
              </ul>
            </div>
            <div className="item-menu">
              <h3 className="head-item">Programs & Features</h3>
              <ul>
                <li>
                  <p>Gift Cards</p>
                  <span className="material-symbols-outlined">
                    arrow_forward_ios
                  </span>
                </li>
                <li>
                  <p>Shop By Interest</p>
                  <span className="material-symbols-outlined">
                    arrow_forward_ios
                  </span>
                </li>
                <li>
                  <p>Amazon live</p>
                  <span className="material-symbols-outlined">
                    arrow_forward_ios
                  </span>
                </li>
                <li>
                  <p>International Shopping</p>
                  <span className="material-symbols-outlined">
                    arrow_forward_ios
                  </span>
                </li>
                <li>
                  <p>See all</p>
                  <span className="material-symbols-outlined">
                    arrow_forward_ios
                  </span>
                </li>
              </ul>
            </div>
            <div className="item-menu">
              <h3 className="head-item">Help & Settings</h3>
              <ul>
                <li>
                  <p>Your Account</p>
                  <span className="material-symbols-outlined">
                    arrow_forward_ios
                  </span>
                </li>
                <li>
                  <div>
                    <p>English</p>
                    <img src={lnImage} alt="icon languig" />
                  </div>
                  <span className="material-symbols-outlined">
                    arrow_forward_ios
                  </span>
                </li>
                <li>
                  <div>
                    <p>United States</p>
                    <img src={flag} alt="flag icon" />
                  </div>
                  <span className="material-symbols-outlined">
                    arrow_forward_ios
                  </span>
                </li>
                <li>
                  <p>Customer Service</p>
                  <span className="material-symbols-outlined">
                    arrow_forward_ios
                  </span>
                </li>
                <li>
                  <p>Sign in</p>
                  <span className="material-symbols-outlined">
                    arrow_forward_ios
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </>
    )
}
export default MainPageMenu;