import React from "react";
import Category from "./Category";
import "./SubHeader.css";

function SubHeader() {
  return (
    <div className="subHeader">
      <hr />
      <div className="categories">
        <Category selected title="All"></Category>
        <Category title="Vocal Trance"></Category>
        <Category title="Chill-out music"></Category>
        <Category title="Electronic music"></Category>
        <Category title="Rock music"></Category>
        <Category title="Acoustic guitar"></Category>
        <Category title="Live"></Category>
        <Category title="Indie music"></Category>
        <Category title="Pop music"></Category>
        <Category title="4 strings"></Category>
        <Category title="Mixes"></Category>
        <Category title="Dubstep"></Category>
      </div>
      <hr />
    </div>
  );
}

export default SubHeader;
