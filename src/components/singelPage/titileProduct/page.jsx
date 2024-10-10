import starImage from "../../../assets/images/star.webp"

const TitleProduct=({mainData,cartData})=>{
    return(
        <div className="item-title">
        <div className="head-title">
            <h1>{cartData[0]?.name || mainData.name}</h1>
            <p>{cartData[0]?.descriptions || mainData.descriptions}</p>
            <a href="#">Visit the acer Store</a>
            <div className="link-stars">
                <div className="start">
                    4.3 
                    <img src={starImage} alt="star icon" />
                    <img src={starImage} alt="star icon" />
                    <img src={starImage} alt="star icon" />
                    <img src={starImage} alt="star icon" />
                    <img src={starImage} alt="star icon" />
                </div>
                <div className="links">
                    <a href="#">1,752 rating</a> | <a href="#">Search this page</a>
                </div>
            </div>
            <p className="last-p">6K+ bought in past month</p>
        </div>
        <div className="body-title">
            <div className="price">
                <small>-7%</small>
                <span className="main-price">
                    <sup>$</sup>{cartData[0]?.price || mainData.price} <sup>99</sup>
                </span>
                <div className="list-paragraph">
                    <p>List Price: <span>$321.99</span></p>
                    <p>$91.31 Shipping & Import Fees Deposit to Iran Details</p>
                    <p><span className="yelloy-box">Extra Savings</span> Amazon Music offer with this purchase 1 Applicable Promotion</p>
                </div>
            </div>
        </div>
        <div className="model-product">
            <p>Style: <span>R2 7320U</span></p>
            <div className="boxs">
                <div className="item-model">
                    <span>R3 7320U</span>
                    <p>$499.99</p>
                </div>
                <div className="item-model">
                    <span>R3 7320U</span>
                    <p>$499.99</p>
                </div>
            </div>
                <ul className="list-model">
                    <li>
                        <p>Brand</p>
                        <span>{cartData[0]?.name || mainData.name}</span>
                    </li>
                    <li>
                        <p>Model Name</p>
                        <span>{cartData[0]?.product_category || mainData.product_category}</span>
                    </li>
                    <li>
                        <p>Screen Size</p>
                        <span>15.6 Inches</span>
                    </li>
                    <li>
                        <p>Color</p>
                        <span>Silver</span>
                    </li>
                    <li>
                        <p>Hard Disk Size</p>
                        <span>128 GB</span>
                    </li>
                    <li>
                        <p>CPU Model</p>
                        <span>Ryzen 3</span>
                    </li>
                    <li>
                        <p>Ram Memory Installed Size</p>
                        <span>8 GB</span>
                    </li>
                    <li>
                        <p>Operating System</p>
                        <span>Windows 11 S</span>
                    </li>
                    <li>
                        <p>Special Feature</p>
                        <span>Backlit Keyboard</span>
                    </li>
                    <li>
                        <p>Graphics Card Description</p>
                        <span>Integrated</span>
                    </li>
                    <a href="#">Show less</a>
                </ul>
        </div>
        <div className="about-product">
            <span className="title-about">About this item</span>
            <ul>
                <li>Purposeful Design: Travel with ease and look great doing it with the Aspire's 3 thin, light design.</li>
                <li>Ready-to-Go Performance: The Aspire 3 is ready-to-go with the latest AMD Ryzen 3 7320U Processor with Radeon Graphics—ideal for the entire family, with performance and productivity at the core.</li>
                <li>Visibly Stunning: Experience sharp details and crisp colors on the 15.6" Full HD IPS display with 16:9 aspect ratio and narrow bezels.</li>
                <li>Internal Specifications: 8GB LPDDR5 Onboard Memory; 128GB NVMe solid-state drive storage to store your files and media</li>
                <li>The HD front-facing camera uses Acer’s TNR (Temporal Noise Reduction) technology for high-quality imagery in low-light conditions. Acer PurifiedVoice technology with AI Noise Reduction filters out any extra sound for clear communication over online meetings.</li>
                <li>Wireless Wi-Fi 6 Convenience: Maintain a strong, consistent wireless signal with Wi-Fi 6 (aka 802.11ax) and 2x2 MU-MIMO technology.</li>
                <li>Improved Thermals: With a 78% increase in fan surface area, enjoy an improved thermal system and an additional 17% thermal capacity. Allowing for longer, more efficient work sessions while not plugged in.</li>
            </ul>
            <a href="#">See more</a>
        </div>
        <div className="footer-title">
            <a href="#"><span className="material-symbols-outlined">speaker_notes</span>Report an issue with this product or seller</a>
            <p>
                <span>Note:</span> Products with electrical plugs are designed for use in the US. Outlets and voltage differ internationally and this product may require an adapter or converter for use in your destination. Please check compatibility before purchasing.
            </p>
        </div>
    </div>
    )
}
export default TitleProduct;
