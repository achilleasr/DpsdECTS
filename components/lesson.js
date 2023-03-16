import styles from "styles/First.module.css";
import React, { useState } from "react";

export default function Lesson({ data, onClick }) {
  const [selected, setSelected] = useState(data.selected);
  const callback = () => {
    setSelected(!data.selected);
    data.selected = !data.selected;
    onClick(!data.selected);
  };

  const SmallType = (type1) => {
    switch (type1) {
      case "Ελεύθερης Επιλογής (ΕΕ)":
        return "";
      case "Υποχρεωτικό (Υ)":
        return "";
      case "Υποχρεωτικό Επιλογής Κατεύθυνσης 1 (ΥΕΚ1)":
        return "ΥΕΚ1 | ";
      case "Υποχρεωτικό Επιλογής Κατεύθυνσης 2 (ΥΕΚ2)":
        return "ΥΕΚ2 | ";
      case "Υποχρεωτικό Επιλογής Κατεύθυνσης 3 (ΥΕΚ3)":
        return "ΥΕΚ3 | ";
      default:
        return "";
    }
  };

  return (
    <div
      onClick={callback}
      className={`${data.selected ? styles.box2 : styles.box} 
      ${data.code == "4356" && !data.selected && styles.ylika} 
      `}
    >
      <div>
        {data.type == "Υποχρεωτικό (Υ)" && (
          <span className={styles.mandatory}>! </span>
        )}
        {data.name}
      </div>
      {/* <div>{data.type}</div> */}
      <div>{SmallType(data.type) + " " + data.ects}</div>
    </div>
  );
}
