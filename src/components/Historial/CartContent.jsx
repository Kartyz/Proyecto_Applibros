import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import CartElements from "./CartElements";
import Footer from "../footer/footer";
import "./CartContent.css";

const CartContent = () => {
  const { cart } = useContext(dataContext);

  return (
    <>
      <Footer />
      {cart.length > 0 ? (
        <>
          <CartElements />
          
        </>
      ) : (
        <h2 className='cart-message-center'>Tu historial esta vacio</h2>
      )}
    </>
  );
};

export default CartContent;