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
    <>
      <header>
        <h1>header</h1>

        <nav>
          <ul className="ul-nav">
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/recorder">children</Link>
            </li>
          </ul>
        </nav>

        <Outlet />
      </header>
      <button type="button" onClick={request}>
        request
      </button>
    </>
  );
}
