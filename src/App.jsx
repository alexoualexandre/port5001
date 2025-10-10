import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function App() {
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
      <Outlet />
    </div>
  );
}
