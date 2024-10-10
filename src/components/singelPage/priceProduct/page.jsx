import SelectProduct from "../../select/page";

const PriceProduct = ({ mainData, cartData, clickHandele, selectHandele ,isBtn}) => {
    return (
      <div>
        <div className="item-price-product">
          <div className="item-1">
            <p>Buy new:</p>
            <div>
              <sup>$</sup>
              <span>{cartData[0]?.price || mainData.price}</span>
              <sup>99</sup>
            </div>
            <p>
              $91.31 Shipping & Import Fees Deposit to Iran Details Delivery
              <span>Wednesday, May 15</span>
            </p>
            <a href="#">
              <span className="material-symbols-outlined">location_on</span>Deliver to
              Iran
            </a>
          </div>
          <div className="item-2">
            <span>In Stock</span>
            <SelectProduct
              defaultValue={cartData[0]?.value || mainData.value}
              setChanges={selectHandele}
            />
            <button onClick={clickHandele} className="btn-product">
              {isBtn === "add"
                ? "Add to cart"
                : isBtn === "remove"
                ? "Remove from cart"
                : "Update cart"}
            </button>
          </div>
          <div className="item-3">
            <ul className="list">
              <li>
                <span>Ships from</span>
                <p>Amazon.com</p>
              </li>
              <li>
                <span>Sold by</span>
                <p>Amazon.com</p>
              </li>
              <li>
                <span>Returns</span>
                <a href="#">
                  Eligible for Return, Refund or Replacement within 30 days of
                  receipt
                </a>
              </li>
              <li>
                <span>Payments</span>
                <a href="#">Payments</a>
              </li>
            </ul>
            <a className="last-link" href="#">
              See more
            </a>
          </div>
        </div>
      </div>
    );
  };
  export default PriceProduct;
  