import { useState } from "react";
import "./AddBook.css";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDropzone } from "react-dropzone";
import Footer from "../../components/footer/footer";

function AddBook() {
  const [formData, setFormData] = useState({
    titulo: "",
    autor: "",
    descripcion: "",
    imagenes: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Crear un objeto FormData para enviar el archivo de imagen y otros campos
    const data = new FormData();
    data.append("titulo", formData.titulo);
    data.append("autor", formData.autor);
    data.append("descripcion", formData.descripcion);
    data.append("imagenes", formData.imagenes); // 'imagen' debe coincidir con el nombre del parámetro en el backend

    // Enviar la información al servidor
    try {
      const response = await fetch("http://localhost:8080/library/book/register", {
        method: "POST",
        body: data,
      });

      const result = await response.json();
      if (result.success) {
        toast.success("Has publicado el libro con éxito!", {
          onClose: () => navigate("/"),
        });
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Vaya parece que algo ha salido mal.");
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
        <div className="Fotos">
            <input 
                type="text"
                placeholder="Enlace de la imagen"
                value={formData.imagenes}
                onChange={(e) => setFormData({ ...formData, imagenes: e.target.value })}
          />
          {formData.imagenes && <img src={formData.imagenes} alt="Portada del libro" style={{ maxWidth: '50px' }} />}
      </div>

          <div className="form-element titulo">
            <label htmlFor="titulo">Título</label>
            <input
              type="text"
              id="titulo"
              className="form-control"
              value={formData.titulo}
              onChange={(e) =>
                setFormData({ ...formData, titulo: e.target.value })
              }
              autoFocus
              required
            />
          </div>
          <div className="form-element autor">
            <label htmlFor="autor">Autor</label>
            <input
              type="text"
              id="autor"
              className="form-control"
              value={formData.autor}
              onChange={(e) =>
                setFormData({ ...formData, autor: e.target.value })
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
              value={formData.descripcion}
              onChange={(e) =>
                setFormData({ ...formData, descripcion: e.target.value })
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

export default AddBook;
