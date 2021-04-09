import { Icon } from "@blueprintjs/core";
import React from "react";

export default function Back(props) {
  const { icon } = props;
  console.log(icon)
  return (
    <div className="back">
      <Icon icon={icon} iconSize={100} />
    </div>
  );
}
