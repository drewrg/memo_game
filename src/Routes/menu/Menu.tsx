import { Alignment, Button, Card, Elevation } from "@blueprintjs/core";
import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Menu() {
  return (
    <div className="menu-wrapper">
      <Card elevation={Elevation.TWO}>
          <h5>Start a new game</h5>
        <Link to="/game">
            <Button intent="primary" text="Start" alignText={Alignment.CENTER} />
        </Link>
      </Card>
    </div>
  );
}
