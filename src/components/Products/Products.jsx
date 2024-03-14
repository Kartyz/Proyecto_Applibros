import { useContext, useState, useEffect } from "react";
import { dataContext } from "../Context/DataContext";
import axios from "axios";

import "./Products.css";

const Products = () => {
  const [data, setData] = useState([]);
  const { buyProducts } = useContext(dataContext);

  useEffect(() => {
    axios("data.json").then((res) => setData(res.data));
  }, []);
  
  //Renderiza los productos mediante los datos
  return data.map((product) => {
    return (
        <div className="bookCard" key={product.id}>
          <img className="bookCard_img" src={product.img} alt="img-product-card" />
              <h3 className="title">{product.name}</h3>
              <button onClick={() => buyProducts(product)}>Solicitar</button>
          </div>
    );
  });
};

export default Products;

