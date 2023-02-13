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
      <h4>
        {/* <input
          type="checkbox"
          defaultChecked={data.selected}
          // onClick={callback}
        /> */}
        <div className={styles.innerStart}>{data.name}</div> 
        <div className={styles.innerEnd}>{data.ects}</div>
      </h4>
      {/* {data.type} {data.ects}  */}
    </div>
  );
}
