import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import Router from "./router/Router";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./provider/AuthProvider";

// ⭐ AOS import
import AOS from "aos";
import "aos/dist/aos.css";

// ⭐ Global initialization
AOS.init({
  duration: 1000,
  once: false,
  easing: "ease-in-out",
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={Router}></RouterProvider>
      <Toaster />
    </AuthProvider>
  </StrictMode>
);
