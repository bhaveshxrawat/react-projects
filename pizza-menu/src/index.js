import React from "react";
import ReactDOM from "react-dom/client";
import pizzaData from './data.js';
import './index.css';

function App() {
    return (
        <div className="pizzas">
            {pizzaData.map((pizza, index) => <Pizza key={index} name={pizza.name} photoName={pizza.photoName} ingredients={pizza.ingredients} price={pizza.price}/>
            )}
        </div>
    )
}
function Pizza(props) {
    let { name, ingredients, photoName, price } = props;
    return (
        <div className={`pizza ${pizzaData.soldOut ? "sold-out" : ""}`}>
            <img src={photoName} alt={name} className="pizzaImage" />
            <div>
                <h2>{name}</h2>
                <p>{ingredients}</p>
                <span>{price}</span>
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode><App /></React.StrictMode>);