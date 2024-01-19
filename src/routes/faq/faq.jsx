import { useState } from "react";
import "./faq.css";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/footer";

function Faq() {
  const [openQuestion, setOpenQuestion] = useState(null);

  return (
    <div className="faqContainer">
      <h1 className="introFaq">¿Tienes alguna duda?</h1>
      <div className="question">
        <h2
          className="questionContainer"
          onClick={() =>
            openQuestion === "q1"
              ? setOpenQuestion(null)
              : setOpenQuestion("q1")
          }
        >
          ¿Cómo puedo publicar un libro?<i className="fa-solid fa-caret-down"></i>
        </h2>
        <p className={openQuestion === "q1" ? "answer visible" : "answer"}>
          Para publicar un libro tienes que ir a la seccion agregar libro (+) donde te pediremos la información básica.
        </p>
      </div>
      <div className="question">
        <h2
          className="questionContainer"
          onClick={() =>
            openQuestion === "q2"
              ? setOpenQuestion(null)
              : setOpenQuestion("q2")
          }
        >
          ¿Puedo comprar un libro que he intercambiado?
          <i className="fa-solid fa-caret-down"></i>
        </h2>
        <p className={openQuestion === "q2" ? "answer visible" : "answer"}>
          Después de hacer el intercambio si te ha gustado el libro y quieres
          comprarlo tendrás la opción de hacerlo, siempre y cuando el dueño del libro este interesado!
        </p>
      </div>
      <div className="question">
        <h2
          className="questionContainer"
          onClick={() =>
            openQuestion === "q3"
              ? setOpenQuestion(null)
              : setOpenQuestion("q3")
          }
        >
          ¿En qué comercios puedo hacer los intercambios?
          <i className="fa-solid fa-caret-down"></i>
        </h2>
        <p className={openQuestion === "q3" ? "answer visible" : "answer"}>
          Tenemos diferentes comercios dispuestos a que vengas a dejar los libros que vas a intercambiar aqui tienes el {" "}
          <Link className="faqLink" to={"/map"}>
            Mapa
          </Link>{" "}
          de nuestra app. Algunos de los comercios
          participantes son: Humana, Supermercados Dia, Cafetería la Esquina,
          Tea Shop, Alcampo, Kiabi y Bershka, entre otros. Te invitamos a
          explorar esta sección para conocer todos los establecimientos
          asociados.
        </p>
      </div>
      <div className="question">
        <h2
          className="questionContainer"
          onClick={() =>
            openQuestion === "q4"
              ? setOpenQuestion(null)
              : setOpenQuestion("q4")
          }
        >
          ¿Caducan las publicaciones de mis libros?<i className="fa-solid fa-caret-down"></i>
        </h2>
        <p className={openQuestion === "q4" ? "answer visible" : "answer"}>
          Tus publicaciones no se eliminaran a menos que un usuario te haya pedido un intercambio
          y no respondas a la petición, en este caso se te notificara de lo sucedido y estarás en 
        </p>
      </div>
      <div className="question">
        <h2
          className="questionContainer"
          onClick={() =>
            openQuestion === "q5"
              ? setOpenQuestion(null)
              : setOpenQuestion("q5")
          }
        >
          ¿Para que sirve el sistema de clasificación?          <i className="fa-solid fa-caret-down"></i>
        </h2>
        <p className={openQuestion === "q5" ? "answer visible" : "answer"}>
          Con este sistema lo que pretendemos es premiar a aquellas personas
          que hacen un buen uso de la app mejorando su posicionamiento en la misma.
        </p>
      </div>
      <div className="question">
        <h2
          className="questionContainer"
          onClick={() =>
            openQuestion === "q6"
              ? setOpenQuestion(null)
              : setOpenQuestion("q6")
          }
        >
          ¿Quiénes somos?<i className="fa-solid fa-caret-down"></i>
        </h2>
        <p className={openQuestion === "q6" ? "answer visible" : "answer"}>
          <div className="developersProfile">
            <div className="developerCard">
              <div className="Oriol"></div>
              <h1>Oriol</h1>
            </div>
          </div>
          Estudiante de programación que tenía que hacer un proyecto para clase.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Faq;
