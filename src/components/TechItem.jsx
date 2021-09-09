import React from "react";

export default function TechItem({ item }) {
  return (
    <div className="item-wrapper">
      <li>
        <span>{item.logo}</span>
        <label>{item.name}</label>
      </li>
    </div>
  );
}
