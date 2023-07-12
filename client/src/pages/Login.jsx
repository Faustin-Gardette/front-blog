import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth">
      <h1>Connexion</h1>
      <form action="">
        <input required type="text" placeholder="Pseudo" />
        <input required type="password" placeholder="Mot de passe" />
        <button>CONNEXION</button>
        <p>Erreur</p>
        <span>
          Avez-vous un compte ? <Link to="/register">S'enregistrer</Link>{" "}
        </span>
      </form>
    </div>
  );
};

export default Login;
