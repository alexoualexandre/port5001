import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Bienvenue</h1>

      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/teste">Page Teste</Link></li>
        </ul>
      </nav>

      {/* 👉 Ici s’affichera le contenu des sous-routes */}
      <Outlet />
    </div>
  );
}
