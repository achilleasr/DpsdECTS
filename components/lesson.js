import styles from "styles/First.module.css";
import React, { useState } from "react";

export default function Lesson({ data , onClick }) {
  const [selected, setSelected] = useState(data.selected);
  const callback = () => {
    setSelected(!data.selected);
    data.selected = !data.selected;
    onClick(!data.selected);

  };

  return (
    <div onClick={callback} className={data.selected ? styles.box2 : styles.box}>
        <div>{data.type == "Υποχρεωτικό (Υ)" && (<span className={styles.mandatory}>! </span>)}{data.name}</div> 
        <div>{data.ects}</div>
    </div>
  );
}
