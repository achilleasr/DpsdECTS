import styles from "styles/First.module.css";
import React, { useState } from "react";
import DoneIcon from '@mui/icons-material/Done';

export default function Semester({ i , semesterToggle, semester,handleClick}) {
    return (
      <div className={styles.semesterContainer}>
        <div className={styles.semesterTitle}>
          Εξάμηνο {i + 1}
          <DoneIcon
            onClick={() => handleClick(i)}
            className={styles.semesterCheck}
          />
        </div>
        <div>{semester(i + 1)}</div>
      </div>
    );
  }