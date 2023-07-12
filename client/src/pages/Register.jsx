import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth">
      <h1>S'enregistrer</h1>
      <form action="">
        <input required type="text" placeholder="Pseudo" name="username" />
        <input required type="email" placeholder="Email" name="email" />
        <input
          required
          type="password"
          placeholder="Mot de passe"
          name="password"
        />
        <button onChange={handleSubmit}>S'ENREGISTRER</button>
        <p>Erreur</p>
        <span>
          Avez-vous un compte ? <Link to="/login">Connexion</Link>{" "}
        </span>
      </form>
    </div>
  );
};

export default Register;
