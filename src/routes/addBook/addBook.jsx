import { useState } from "react";
import "./addBook.css";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDropzone } from "react-dropzone";
import Footer from "../../components/footer/footer";

function addBook(){
    const [formData, setFormData] = useState({
        Titulo: "",
        Autor:"",   
        Descripcion: "",
        Etiquetas: "",
        Imagenes:""
      });
      
      const navigate = useNavigate();
      const onDrop =(acceptedFiles) => {
        
        const image =acceptedFiles[0];

        const imageUrl = URL.createObjectURL(image);

        setFormData({...formData, Imagenes:imageUrl });
      };

      const { getRootProps, getInputProps } = useDropzone({ onDrop });

      
      const handleSubmit = async (e) => {
        e.preventDefault(); 
        
    
        // Enviar la información al servidor
        try {
          const response = await fetch("http://localhost:5173/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              Titulo: formData.Titulo,
              Descripcion: formData.Descripcion,
              Etiquetas: formData.Etiquetas,
              Imagenes: formData.Imagenes
            }),
          });
    
          const data = await response.json();
          if (data.success) {
            toast.success("Has publicado el libro con éxito!", {
              onClose: () => navigate("/login"),
            });
          } else {
            toast.error(data.message);
          }
        } catch (error) {
          toast.error("Vaya parece que algo ha salido mal.", error);
        }
      };
return (
<div className="registerContainer">
  <Footer />
      <ToastContainer
        position="top-center"
        theme="colored"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      
      <form onSubmit={handleSubmit}>
        <h1 className="intro">Rellena la información para poder publicar tu libro!</h1>
        <h2 className="registerBookIntro">Información básica</h2>
        <div className="registerElements">
        
        <div className="Fotos" {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Suelta las imagenes de tu libro aquí, o haz clic para seleccionar una.</p>
        {formData.Imagenes && <img src={formData.Imagenes} alt="Portada del libro" style={{ maxWidth: '50px' }} />}
      </div>

          <div className="form-element titulo">
            <label htmlFor="titulo">Título</label>
            <input
              type="text"
              id="titulo"
              className="form-control"
              value={formData.Titulo}
              onChange={(e) =>
                setFormData({ ...formData, Titulo: e.target.value })
              }
              autoFocus
              required
            />
          </div>
          <div className="form-element autor">
            <label htmlFor="autor">Autor</label>
            <input
              type="text"
              id="Autor"
              className="form-control"
              value={formData.Autor}
              onChange={(e) =>
                setFormData({ ...formData, Autor: e.target.value })
              }
              autoFocus
              required
            />
          </div>
          <div className="form-element descripcion">
            <label htmlFor="descripcion">Descripción</label>
            <input
              type="text"
              id="descripcion"
              className="form-control"
              value={formData.Descripcion}
              onChange={(e) =>
                setFormData({ ...formData, Descripcion: e.target.value })
              }
              required
            />
          </div>
          <div className="form-element etiquetas">
            <label htmlFor="password">Etiquetas</label>
            <input
              type="text"
              id="Etiquetas"
              className="form-control"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, Etiquetas: e.target.value })
              }
              required
            />
          </div>
          
        </div>
        <button type="submit" className="registerButton">
          Subir
        </button>
      </form>
    </div>
    
  );
  
}

export default addBook;