import React, { useState, useEffect } from "react";
import { useUser } from "../login/UserContext";
import "./profile.css";


function Profile() {
  const { user } = useUser();
  const [userData, setUserData] = useState(null);
  const [profileVisibility, setProfileVisibility] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5173/${user.idUsuario}`)
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error("Error recuperando los datos del usuario:", error));
  }, [user.idUsuario]);

  if (!userData) return <div>Cargando...</div>;

  
  return (
    <div className="profileCard">
      <div
        className="profilePictureContainer"
        onClick={() => setProfileVisibility(!profileVisibility)}
      >
        <i className="fa-solid fa-user"></i>
      </div>
      <div className={profileVisibility ? "data visible" : "data"}>
        <h1 className="nickname">{userData.nickname}</h1>
        <h2 className="emailProfile">{userData.email}</h2>
        <h3 className="id">#{userData.idUsuario}</h3>
      </div>
    </div>
  );
}

export default Profile;
