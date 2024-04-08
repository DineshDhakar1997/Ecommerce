import { ChangeEvent, useState } from "react"
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";


const Shipping = () => {
    const [ShippingInfo, setShippingInfo] = useState({
        address: '',
        city: '',
        state: "",
        pinCode: '',
        country: ''
    });
    const chnageHandler = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setShippingInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
    const navigate=useNavigate();
    return (
        <div className="shipping">
            <button className="back-btn" onClick={() => navigate("/cart" )}>
                <BiArrowBack />
            </button>
            <form>
                <h1>Shipping Address</h1>
                <input
                    required
                    type="text"
                    placeholder="Address"
                    name="address"
                    value={ShippingInfo.address}
                    onChange={chnageHandler} />
                <input
                    required
                    type="text"
                    placeholder="City"
                    name="city"
                    value={ShippingInfo.city}
                    onChange={chnageHandler} />
                <input
                    required
                    type="text"
                    placeholder="State"
                    name="state"
                    value={ShippingInfo.state}
                    onChange={chnageHandler} />
                <select
                    required
                    name="country"
                    value={ShippingInfo.country}>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                </select>
                <input
                    required
                    type="number"
                    placeholder="Pin Code"
                    name="pinCode"
                    value={ShippingInfo.pinCode}
                    onChange={chnageHandler} />
                
                <button  type="submit">Pay Now</button>

            </form>
        </div>)
}

export default Shipping