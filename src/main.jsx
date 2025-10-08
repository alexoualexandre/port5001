import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Teste from "./Teste.jsx";
import VoiceRecorder from "./VoiceRecorder.jsx";
import "./index.css";

// Définition du routeur
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/recorder",
        element: <VoiceRecorder />,
      },
    ],
  },
]);

// Rendu principal
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
