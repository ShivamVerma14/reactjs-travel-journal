import Header from "./components/Header";
import Card from "./components/Card";
import journalData from "./data";
import "./style.css";

function App() {
    const journals = journalData.map((item) => {
        return <Card id={item.id} {...item} />;
    });

    return (
        <div className="container">
            <Header />
            <div className="journal-container">{journals}</div>
        </div>
    );
}

export default App;
