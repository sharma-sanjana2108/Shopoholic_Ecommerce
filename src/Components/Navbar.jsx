import React, { useContext } from "react";
import { Link } from "react-router-dom";
import newlogo from "../assets/new logo.png";
import ProductContext from "../Context/ProductContext";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../features/auth/authSlice";

const Navbar = () => {
  const { cartItems } = useContext(ProductContext);

  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleLogout = async () => {
    dispatch(logoutUser());
  };

  return (
    <nav className="navbar navbar-expand-lg top-nav">
      <div className="container-fluid mx-2">
        <Link className="navbar-brand" to={"/"}>
          <img className="logo" src={newlogo} alt="" />
          SHOPOHOLIC
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {user && (
              <>
                <li className="nav-item">
                  <Link
                    to={"/menswear"}
                    className="nav-link active mx-3"
                    aria-current="page"
                    href="#"
                  >
                    Mens
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/womenswear"}
                    className="nav-link active mx-3"
                    aria-current="page"
                    href="#"
                  >
                    Womens
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/jewellery"}
                    className="nav-link mx-3"
                    aria-current="page"
                    href="#"
                  >
                    Jewellery
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/electronics"}
                    className="nav-link mx-3"
                    aria-current="page"
                    href="#"
                  >
                    Electronics
                  </Link>
                </li>
              </>
            )}
          </ul>

          {user ? (
            <>
              <Link to={"/cart"}>
                <button className="btn btn-md mx-2 cartbtn">
                  <i className="bi bi-bag-heart me-2"></i>Bag({cartItems.length}
                  )
                </button>
              </Link>
              <button
                className="btn btn-danger btn-md mx-4"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to={"/register"}>
                <button className="btn btn-md cartbtn mx-3">Register</button>
              </Link>
              <Link to={"/login"}>
                <button className="btn btn-md cartbtn mx-3">Login</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

{
  /* <nav className="navbar navbar-expand-sm top-nav">
<div className="container-fluid">
  
  <Link className="navbar-brand" to={"/"}><img className='logo' src={newlogo} alt=""/>SHOPOHOLIC</Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent"> */
}

{
  /* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    </ul> */
}

//     {
//       user ? (
//         <>

//         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//         <Link className="nav-link active mx-3" to={"/menswear"}>Mens</Link>
//       </li>
//       <li className="nav-item">
//         <Link className="nav-link active mx-3" to={"/womenswear"}>Womens</Link>
//       </li>
//       <li className="nav-item">
//         <Link className="nav-link active mx-3" to={"/jewellery"}>Jewellery</Link>
//       </li>
//       <li className="nav-item">
//         <Link className="nav-link active mx-3" to={"/electronics"} >Electronics</Link>
//       </li>
//         </ul>
//         <Link to={"/cart"}> <button className="btn btn-md mx-2 cartbtn"><i className="bi bi-bag-heart me-2"></i>Bag({cartItems.length})</button></Link>

//         <button className="btn btn-danger btn-md mx-4" onClick={handleLogout}>Logout</button>
//           </>
//       ) : (
//         <>
//           <Link to={"/register"}> <button className="btn btn-md cartbtn mx-3" >Register</button></Link>

//           <Link to={"/login"}><button className="btn btn-md cartbtn mx-3" >Login</button></Link>

//         </>
//       )
//     }

//   </div>

// </div>
// </nav>
