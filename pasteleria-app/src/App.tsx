import { useState } from "react";
import Ingredientes from "./components/Ingredientes";
import Productos from "./components/Productos";
import Presupuestos from "./components/Presupuestos";
import logo from "./assets/LogoDulceLimon.jpeg";

type Vista = "ingredientes" | "productos" | "presupuestos";

function App() {
  const [vistaActual, setVistaActual] = useState<Vista>("presupuestos");

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <header className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 shadow-lg">
        <div className="flex items-center space-x-3">
          <img
            id="brandLogo"
            src={logo}
            alt="Logo Dulce Limón"
            className="rounded-full object-cover"
            style={{ width: "100px", height: "100px" }}
          />
          <h1 className="text-2xl font-bold">Dulce Limón</h1>
        </div>
        <p className="text-left text-sm opacity-90 mt-1 ml-11">
          Pastelería artesanal y creativa
        </p>
      </header>
      <nav className="bg-white shadow-md sticky top-0 z-10">
        <div className="flex justify-around">
          <button
            onClick={() => setVistaActual("presupuestos")}
            className={`flex-1 py-4 font-semibold transition ${
              vistaActual === "presupuestos"
                ? "bg-pink-500 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            📋 Presupuestos
          </button>
          <button
            onClick={() => setVistaActual("productos")}
            className={`flex-1 py-4 font-semibold transition ${
              vistaActual === "productos"
                ? "bg-pink-500 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            🧁 Productos
          </button>
          <button
            onClick={() => setVistaActual("ingredientes")}
            className={`flex-1 py-4 font-semibold transition ${
              vistaActual === "ingredientes"
                ? "bg-pink-500 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            📦 Ingredientes
          </button>
        </div>
      </nav>

      <main className="pb-6">
        {vistaActual === "ingredientes" && <Ingredientes />}
        {vistaActual === "productos" && <Productos />}
        {vistaActual === "presupuestos" && <Presupuestos />}
      </main>

      <footer className="bg-gray-800 text-white text-center py-4 text-sm">
        <p>💕 Hecho con amor para mi pastelera Favorita :)</p>
      </footer>
    </div>
  );
}

export default App;
