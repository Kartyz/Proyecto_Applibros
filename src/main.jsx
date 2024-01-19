import { createRoot } from 'react-dom/client';
import "./index.css";
import FAQ from "./routes/faq/faq";
import Contact from "./routes/contact/contact";
import Map from "./routes/map/map";
import Register from './routes/register/register';
import Profile from './routes/profile/profile';
import AddBook from './routes/addBook/addBook';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookCard from './components/bookCard/bookCard';
import App from './App';
import { UserProvider } from "./routes/login/UserContext";
const root = document.getElementById("root");
const rootInstance = createRoot(root);
import React ,{useState}from "react";
import axios from "axios";

const Main=()=>{
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const searchBook=(evt)=>{
        if(evt.key==="Enter")
        {
          
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyAJ i9kOLDmKoOP4TvB8qiItHlTOJDESqSg&maxResults=40`)
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }
    return(
        <>
            <div className="header">
                <div className="row2">
                    <h2>Encuentra tu libro</h2>
                    <div className="search">
                        <input type="text" placeholder="Pon el nombre del libro"
                        value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyPress={searchBook}/>
                    </div>
                    
                </div>
            </div>

            <div className="container">
              {
                <BookCard book={bookData}/>              
              }
            </div>
        </>
    )
  }
  
rootInstance.render(
  <React.StrictMode>
    <UserProvider>
      <Router>
        <Routes>
          <Route path ="/" >
          <Route index element={<App />} />      
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} /> 
          <Route path="register" element={<Register />} />  
          <Route path="profile" element={<Profile />} />
          <Route path="map" element={<Map />} />
          <Route path="addBook" element={<AddBook />} />
          </Route>
        </Routes>
      </Router>
    </UserProvider>
  </React.StrictMode>,
  
);


export default Main;
