import "./Card.css";
import applepay from'../../Assets/applepay.png'
import gpay from'../../Assets/gpay.jfif'
import { IoIosClose } from "react-icons/io";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaCcPaypal } from "react-icons/fa6";
function Card() {
  return (
    <div className="payment-card">
      <div className="card-container">
        <div className="cardHeader">
          <h3>Upgrade to pro</h3>
          <IoIosClose className="closebtn" />
        </div>

        <div>
          <p className="billing-title">BILLING PLAN</p>
          <div className="billing-condainer">
            <div className="billing-left">
              <p>MONTHLY</p>
              <h6>$22.99/month</h6>
            </div>
            <div className="billing-right">
              <p>
                YEARLY <span>72% SAVE</span>
              </p>
              <h6>$6.43/month</h6>
            </div>
          </div>
        </div>

        <div>
          <p className="billing-title">PAY WITH</p>
          <div className="pay-condainer">
            <div className="paypal">
              <h6>
                Pay<span>Pal</span>
              </h6>
            </div>
            <div className="ipay">
            <img src={applepay} className="applepay"/>
              {/* <h6>
                <span>pay</span>
              </h6> */}
            </div>
            <div className="gpay">
            <img src={gpay} className="applepay"/>
              {/* <h6>
                <span>pay</span>
              </h6> */}
            </div>
          </div>
        </div>

        <div className="credit-card">
          <p className="line"></p>
        </div>

        <div className="card-information">
            <input placeholder=".... .... .... 3495" className="card-number"/>
            <input placeholder="04/26 598" className="exp-number"/>
          {/* <p>.... ... .... 3495</p>
          <p>40/26 598</p> */}
        </div>

        <div className="name-card">
          {/* <p>Francis Volkman</p> */}
          <input placeholder="Francis Volkman" />
        </div>

        <div className="country-detail">
          <div className="region">
          <select>
  <option value="United States, New York">United States, New York</option>
  <option value="Texas">Texas</option>
  <option value="Colorado">Colorado</option>
  <option value="Alabama">Alabama</option>
</select>

            {/* <p>United States, New York </p>
            <p>
              <MdOutlineArrowDropDown />
            </p> */}
          </div>
          <div className="zip-code">
            {/* <p>349</p> */}
            <input type="number" placeholder="349" />
          </div>
        </div>

        <div className="total">
          <p>Total</p>
          <p>$77.16</p>
        </div>

        <div className="sub-btn">
          <button>Complete purchase</button>
        </div>

      </div>
    </div>
  );
}
export default Card;
