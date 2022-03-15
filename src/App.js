import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card"
import dataSets from "./data"

function App() {
    const cards = dataSets.map((dataSet) => {
        return <Card
            key={dataSet.id}
            // Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals
            {...dataSet}
        />
    })
    return (
        <div className="App">
            <Navbar/>
            <Hero/>
            <section className="cards-list">
                {cards}
            </section>
        </div>
    );
}

export default App;
