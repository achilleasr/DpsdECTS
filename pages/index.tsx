import Head from "next/head";
import styles from "styles/First.module.css";
import Lesson from "components/lesson.js";
import React, { useState, useEffect, useCallback } from "react";
import { hardcoded } from "components/hardcoded.js";
// import { saveAs } from "file-saver";

// import Cookie from "js-cookie";
// import {parseCookies} from "nookies"
// import {parseCookies} from "../lib/parseCookies";
// import smiley from "/favicon.ico"; import { parseCookies } from 'nookies';

function Home() {
  // console.log("Init Ects: " + localStorage.getItem("ects"));
  if (typeof window !== "undefined") {
    console.log(localStorage.getItem("lessonsState"));
  }
  let p = [1, 2];
  let lessons = [];
  const [lessonsState, setLessonsState] = useState(hardcoded);
  const [ects, setEcts] = useState(0);

  // console.log(hardcoded);
  const calculateEcts = () => {
    let num = 0;
    for (let i = 0; i < lessonsState.length; i++) {
      if (lessonsState[i].selected) {
        num += parseInt(lessonsState[i].ects);
      }
    }
    // console.log(num);
    setEcts(num);

    // localStorage.setItem("lessonsState", JSON.stringify(lessonsState));
    // localStorage.setItem("ects", ects);
    // console.log(ects);
    // window.localStorage.setItem("myKey", ects);
    // const savedValue = window.localStorage.getItem("myKey");
    // if (savedValue) {
    //   console.log(savedValue);
    // }
  };

  // const handleClick = (e) => {
  //   if (e.type === 'click') {
  //     calculateEcts();
  //   } else if (e.type === 'contextmenu') {
  //     console.log('Right click');
  //   }
  // };

  // useEffect(() => {
  //   if (localStorage.getItem("lessonsState") != null) {
  //     const leState = JSON.parse(localStorage.getItem("lessonsState"));
  //     setLessonsState(leState);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("lessonsState", JSON.stringify(lessonsState));
  // }, [lessonsState]);

  const calculateMandatory = () => {
    let num = 0;
    for (let i = 0; i < lessonsState.length; i++) {
      if (
        lessonsState[i].selected == false &&
        lessonsState[i].type == "Υποχρεωτικό (Υ)"
      ) {
        num += parseInt(lessonsState[i].ects);
      }
    }
    return num;
  };

  // const calculateMandatory = () => {
  //   let blob = new Blob(["Hello, world!"], {
  //     type: "text/plain;charset=utf-8",
  //   });
  //   FileSaver.saveAs(blob, "hello world.txt");
  // };

  // useEffect(() => {
  //   localStorage.setItem("lessonsState", JSON.stringify(lessonsState));
  //   localStorage.setItem("ects",ects);
  // }, [lessonsState]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.container}>
          {lessonsState.map((lesson) => {
            return (
              <div>
                {/* {lesson.semester == 3? (<div>s3</div>):(<div>s</div>)} */}
                <Lesson data={lesson} onClick={calculateEcts} />
              </div>
            );
          })}
        </div>

        <div className={styles.containerRight}>
          <div className={styles.ects}>ECTS = {ects}</div>
          {300 - ects > 0 || calculateMandatory() > 0 ? (
            <div className={styles.ects2}>Υπολειπόμενα ECTS = {300 - ects}</div>
          ) : (
            <div className={styles.ectsPassed}>
              <img
                className={styles.smiley}
                src="/smiley.svg"
                alt="Graduated Happily"
              />
            </div>
          )}
          {lessonsState.map((lesson) => {
            return (
              <div>
                {lesson.selected == false &&
                lesson.type == "Υποχρεωτικό (Υ)" ? (
                  <div className={styles.additionContainer}>
                    <div className={styles.additionName}>{lesson.name}</div>
                    <div className={styles.additionEcts}>{lesson.ects}</div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            );
          })}

          {calculateMandatory() > 0 && (
            <div className={styles.line}>
              +<br />
              <hr />
              <div className={styles.result1Left}>{calculateMandatory()}</div>
              <div className={styles.result1Right}> ects από υποχρεωτικά</div>
              <div className={styles.ects}>
                ECTS = {ects + calculateMandatory()}
              </div>
              <div className={styles.ects2}>
                Υπολειπόμενα ECTS = {300 - ects - calculateMandatory()}
              </div>
            </div>
          )}
        </div>
      </main>

      <style jsx global>{`
        html,
        body {
          max-width: 100vw;
          // overflow-x: hidden;
        }
        body {
          color: black;
          background: white;
          margin: 0px;
          font-family: GeomLight;
        }

        a {
          color: inherit;
          text-decoration: none;
        }
      `}</style>
    </>
  );
}

// Home.getInitialProps = async ({ req }) => {
//   const cookies = parseCookies(req);

//   return {
//     initialLessonsState: cookies.lessonsState,
//     initialEcts: cookies.ects,
//   };
// };

export default Home;
