import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import styles from './App.module.css'
import { LandingPage } from "./pages/LandingPage";
import { MovieDetails } from "./pages/MoviesDetails";

function App() {
  return (
   <Router>
    <header>
      <Link to="/"><h1 className={styles.title}>Movies</h1></Link>
    </header>

    <main>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/movie/:movieId" element={<MovieDetails />} />
      </Routes>
    </main>
   </Router>
  )
   
}

export default App;
