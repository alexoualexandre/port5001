import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function App() {
  const reponseServer = "réponse du serveur : port 3000 en écoute !";
  const request = () => {
    fetch(`http://localhost:3000/teste/${reponseServer}`)
      .then((response) => response.json())
      .then((resp) => {
        console.log(resp.reponse);
      });
  };
  return (
    <div>
      <h1>fixe</h1>

      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/recorder">children</Link>
          </li>
        </ul>
      </nav>
      <button type="button" onClick={request}>
        request
      </button>
      <Outlet />
    </div>
  );
}
