import React from "react";
import "./Category.css";

function Category({ selected, title }) {
  return (
    <button className={`categoryButton ${selected && "selected"}`}>
      {title}
    </button>
  );
}

export default Category;
