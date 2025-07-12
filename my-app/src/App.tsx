import MoviesList from "./moviesList";
import { Header } from "./header";
import "./index.css";
function App() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/asasa.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/40 z-0" />

      <div className="relative z-10">
        <Header />
        <MoviesList />
      </div>
    </div>
  );
}

export default App;
