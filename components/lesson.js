import styles from "styles/First.module.css";
import React, { useState } from "react";

export default function Lesson({ data , onClick }) {
  const [selected, setSelected] = useState(data.selected);
  const callback = () => {
    setSelected(!selected);
    data.selected = !selected;
    onClick(!selected);

  };

  return (
    <div onClick={callback} className={data.selected ? styles.box2 : styles.box}>
        <div>{data.name}</div> 
        <div>{data.ects}</div>
    </div>
  );
}
