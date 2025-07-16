import MoviesList from "./moviesList";
import { Header } from "./header";
import "./index.css";
function App() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/1.jpg')" }}
      />

      <div className="fixed inset-0 bg-black/60 z-10" />

      <div className="relative z-20">
        <Header />
        <div className="w-full px-4 mt-16">
          <MoviesList />
        </div>
      </div>
    </div>
  );
}

export default App;
