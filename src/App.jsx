import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function App() {
  const { VITE_API_HTTP, VITE_API_URL, VITE_API_PORT } = import.meta.env;
  const reponseServer = "réponse du serveur : port 3000 en écoute !";
  const request = () => {
    fetch(
      `${VITE_API_HTTP}://${VITE_API_URL}:${VITE_API_PORT}/teste/${reponseServer}`
    )
      .then((response) => response.json())
      .then((resp) => {
        console.log(resp.reponse);
      });
  };
  return (
    <>
      <header>
        <h1 style={{ color: "white" }}>head</h1>

        <nav>
          <ul className="ul-nav">
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/route1">route1</Link>
            </li>
            <li>
              <Link to="/route2">route2</Link>
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
