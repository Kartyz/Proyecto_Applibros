import { createRoot } from 'react-dom/client';
import React ,{useState, useEffect}from "react";
import axios from "axios";
import "./index.css";
import FAQ from "./routes/faq/faq";
import Contact from "./routes/contact/contact";
import Map from "./routes/map/map";
import Register from './routes/register/register';
import Profile from './routes/profile/profile';
import Login from './routes/login/login';
import AddBook from './routes/addBook/addBook';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import BookCard from './components/bookCard/bookCard';
import App from './App';  
import CartContent from './components/Historial/CartContent';
import Layout from "./layout/layout";
import Chat from "./routes/chat/chat";
import { UserProvider } from "./routes/login/UserContext";
import DataProvider from './components/Context/DataContext';
import Products from './components/Products/Products';
import ProductsBackend from './components/Products/ProductsBackend';

const root = document.getElementById("root");
const rootInstance = createRoot(root);

const Main=()=>{
  
    const [search,setSearch]=useState("");
    const [bookData,setBookData]=useState([]);
    
    const searchBook = async (evt) => {
      if (evt.key === "Enter") {
          try {
              const localBooksResponse = await axios.get(`http://localhost:8080/library/book/${search}`);
              const localBooks =  Array.isArray(localBooksResponse.data) ? localBooksResponse.data : [];

              const googleBooksResponse = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyAJi9kOLDmKoOP4TvB8qiItHlTOJDESqSg&maxResults=40`);
              const googleBooks = googleBooksResponse.data.items || [];

              // Combina los resultados de ambas fuentes de datos
              const combinedBooks = [...googleBooks, ...localBooks];

              // Actualiza el estado con los resultados combinados
              setBookData(combinedBooks);
          } catch (err) {
              console.log(err);
          }
      }
  };
    return(
        <>
            <div className="header">
                <div className="row2">
                    <h2>Encuentra tu libro</h2>
                    <div className="search">
                        <input type="text" placeholder="Barra de búsqueda"
                        value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyPress={searchBook}/>
                    </div>
                    
                </div>
            </div>
            

            <div className="container">
            
              {
                <BookCard book={bookData}/>   
                          
              }
              <ProductsBackend />
              <Products />
              

            </div>
            
        </>
    )
  }
  
rootInstance.render(
  <React.StrictMode>
    <UserProvider>
    <DataProvider>

          <Router>
            <Routes>
              <Route path ="/" element={<Layout />} >
              <Route index element={<App />} />  
              <Route path="profile" element={<Profile />} /> 
              <Route path="login" element={<Login />} /> 
              <Route path="faq" element={<FAQ />} />
              <Route path="contact" element={<Contact />} /> 
              <Route path="register" element={<Register />} />
              <Route path="map" element={<Map />} />
              <Route path="addBook" element={<AddBook />} />
              <Route path="chat" element={<Chat />} />
              <Route path="/cart" element={<CartContent />} />
              <Route path="Products" element={<Products />} />
              <Route path="ProductsBackend" element={<ProductsBackend />} />
            </Route>
          </Routes>
      </Router>

    </DataProvider>
    </UserProvider>
  </React.StrictMode>,
  
);


export default Main;
