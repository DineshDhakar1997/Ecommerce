import { Link } from "react-router-dom";
import { FaSearch, FaShoppingBag, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import  { useState } from 'react'
const user = { "_id": "123", "name": "Charas", "email": "XhYr8@example.com", "role": "" }
const header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const logoutHandler = () => {
        try {
            setIsOpen(false);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <nav className="header">
            <Link  to="/">Home</Link>
            <Link onClick={() => setIsOpen(false)} to="/search">
                <FaSearch />
            </Link>
            <Link onClick={() => setIsOpen(false)} to="/cart">
                <FaShoppingBag />
            </Link>
            {
                user?._id ? (
                    <>
                        <button onClick={() => setIsOpen((prev) => !prev)}>
                            <FaUser />
                            <dialog open={isOpen}>

                                {user.role === "admin" && (<Link to="/admin/dashboard">Admin</Link>)}
                                <Link to="/order">Order</Link>
                                <Link to="/SignOut">
                                    <FaSignOutAlt />
                                </Link>

                            </dialog>
                        </button>
                    </>
                ) : <Link to="/login">Login
                    <FaSignInAlt />
                </Link>
            }
        </nav>
    )

};

export default header