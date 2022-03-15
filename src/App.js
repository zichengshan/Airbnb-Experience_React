import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card"

function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero/>
        <Card
            img = "katie-zaferes.png"
            rating = {5.0}
            reveiveCount = {6}
            country = "USA"
            title = "Life Lessons with Katie Zaferes"
            price = {135}
        />
    </div>
  );
}

export default App;
