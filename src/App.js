import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";
import "./style.css";

export default function App() {
  const cards = data.map((info) => {
    return <Card key={info.id} {...info} />;
  });

  return (
    <div>
      <Navbar />
      <section className="cards-list">{cards}</section>
    </div>
  );
}
