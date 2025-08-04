import React from "react";
import ReactDOM from "react-dom/client"; // <-- use 'client' here
import App from "./App";
import "./index.css"; // Assuming you have some global styles

import { InternProvider } from "./context/interncontext";

// ✅ React 18+ compatible root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>

      <InternProvider>
        <App />
      </InternProvider>

  </React.StrictMode>
);