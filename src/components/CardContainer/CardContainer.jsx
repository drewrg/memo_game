import React from "react";
import Card from "../Card/Card";
import "./styles.css";

export default function CardContainer(props) {
  const { cards } = props;
  const cardsJSX = cards.map((card, i) => <Card icon={card} key={i} />);
  return (
    <div className="card-wrapper">
      <div className="card-container">{cardsJSX}</div>
    </div>
  );
}
