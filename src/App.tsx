import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-brand-green text-brand-white font-serif flex flex-col items-center justify-center">
      <nav className="flex gap-4 mb-6">
        <Link to="/" className="underline">
          Home
        </Link>
        <Link to="/about" className="underline">
          About
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} />
      </Routes>
    </div>
  );
}

export default App;
