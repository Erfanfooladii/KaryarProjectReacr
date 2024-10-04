import "./style.css"
import earth from "../../../assets/images/image.avif"
import amazon from "../../../assets/images/navbarImg.png"
import flag from "../../../assets/images/flag.png"

const Footer=()=>{
    const scrollHandeler=()=>{
        window.scrollTo(0,0)
    }
    
    return(
        <footer className="footer">
            <button onClick={scrollHandeler} className="btn-scroll-mode">Back to top</button>
            <div className="box">
                <div className="item-footer">
                    <h2>Get to Know Us</h2>
                    <ul>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">About Amazon</a></li>
                        <li><a href="#">Investor Relations</a></li>
                        <li><a href="#">Amazon Devices</a></li>
                        <li><a href="#">Amazon Science</a></li>
                    </ul>
                </div>
                <div className="item-footer">
                    <h2>Make Money with Us</h2>
                    <ul>
                        <li><a href="#">Sell products on Amazon</a></li>
                        <li><a href="#">Sell on Amazon Business</a></li>
                        <li><a href="#">Sell apps on Amazon</a></li>
                        <li><a href="#">Become an Affiliate</a></li>
                        <li><a href="#">Advertise Your Products</a></li>
                        <li><a href="#">Self-Publish with Us</a></li>
                        <li><a href="#">Host an Amazon Hubs</a></li>
                        <li><a href="#">See More Make Money with Us</a></li>
                    </ul>
                </div>
                <div className="item-footer">
                    <h2>Amazon Payment Products</h2>
                    <ul>
                        <li><a href="#">Amazon Business Card</a></li>
                        <li><a href="#">Shop with Points</a></li>
                        <li><a href="#">Reload Your Balance</a></li>
                        <li><a href="#">Amazon Currency Converter</a></li>
                    </ul>
                </div>
                <div className="item-footer">
                    <h2>Let Us Help You</h2>
                    <ul>
                        <li><a href="#">Amazon and COVID-19</a></li>
                        <li><a href="#">Your Account</a></li>
                        <li><a href="#">Your Orders</a></li>
                        <li><a href="#">Shipping Rates & Policies</a></li>
                        <li><a href="#">Returns & Replacements</a></li>
                        <li><a href="#">Manage Your Content and Devices</a></li>
                        <li><a href="#">Amazon Assistant</a></li>
                        <li><a href="#">Help</a></li>
                    </ul>
                </div>
            </div>
            <div className="box footer-box">
                <ul>
                    <li>
                        <img src={amazon} alt="logo Amazon" />
                    </li>
                    <li className="item-box">
                    English
                        <img src={earth} alt="earth icon" />
                    </li>
                    <li className="item-box">
                        $ USD - U.s Dolior
                    </li>
                    <li className="item-box">
                        <img src={flag} alt="flag icon" />
                    United States
                    </li>
                </ul>
            </div>
        </footer>
    )
}
export default Footer;