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
    <div className={data.selected ? styles.box2 : styles.box}>
      <h4>
        <input
          type="checkbox"
          defaultChecked={data.selected}
          onClick={callback}
        />
        {data.name} {data.ects}
      </h4>
      {/* {data.type} {data.ects}  */}
    </div>
  );
}
