import MoviesList from "@/pages/homePage";
import { Header } from "@/widgets/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "@/pages/moviePage";

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-black text-white">
        <div
          className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/1.jpg')" }}
        />
        <div className="fixed inset-0 bg-black/60 z-10" />
        <div className="relative z-20">
          <Header />
          <div className="w-full px-4 mt-16">
            <Routes>
              <Route path="/" element={<MoviesList />} />
              <Route path="/movies/:id" element={<MovieDetails />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
