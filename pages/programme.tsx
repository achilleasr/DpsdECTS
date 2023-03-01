import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "styles/Programme.module.css";
// import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import { p_X23B } from "components/programmaXeim2023.js";
import { useRouter } from "next/router";

export default function Programme() {
  const [programme, setProgramme] = useState([]);
  const [colors, setColors] = useState([]);
  const days = ["Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή"];
  const days_idx = ["Mon", "Tue", "Wed", "Thu", "Fri"];

  const router = useRouter();
  const codesProp = router.query.codesProp;

  const hours = (number1: number, type: string) => {
    let s = "";
    s += String(number1).padStart(2, "0") + ".00 - ";
    s += String(number1 + 1).padStart(2, "0") + ".00";
    return s;
  };

  const getIndex = (number: number) => {
    number--;
    let idx = Math.floor(number / 6) + (number % 6) * 12;
    return idx;
  };

  const makeProgramme = () => {
    let newP: any[any] = Array(60).fill([" "]);
    let newColors: any[any] = Array(60).fill([" "]);
    console.log("a");
    p_X23B.map((classe) => {
      if (codesProp != null) {
        if (codesProp.includes(classe.Code.toString())) {
          classe.Mon.map((hour) => {
            let idx = hour - 9;
            if (newP[idx] == " ") {
              newP[idx] = [classe.Name];
              newColors[idx] = [classe.Room];
            } else {
              newP[idx] = [...newP[idx], classe.Name];
              newColors[idx] = [...newColors[idx], classe.Room];
            }
          });
          classe.Tue.map((hour) => {
            let idx = hour - 9 + 12;
            if (newP[idx] == " ") {
              newP[idx] = [classe.Name];
              newColors[idx] = [classe.Room];
            } else {
              newP[idx] = [...newP[idx], classe.Name];
              newColors[idx] = [...newColors[idx], classe.Room];
            }
          });
          classe.Wed.map((hour) => {
            let idx = hour - 9 + 24;
            if (newP[idx] == " ") {
              newP[idx] = [classe.Name];
              newColors[idx] = [classe.Room];
            } else {
              newP[idx] = [...newP[idx], classe.Name];
              newColors[idx] = [...newColors[idx], classe.Room];
            }
          });
          classe.Thu.map((hour) => {
            let idx = hour - 9 + 36;
            if (newP[idx] == " ") {
              newP[idx] = [classe.Name];
              newColors[idx] = [classe.Room];
            } else {
              newP[idx] = [...newP[idx], classe.Name];
              newColors[idx] = [...newColors[idx], classe.Room];
            }
          });
          classe.Fri.map((hour) => {
            let idx = hour - 9 + 48;
            if (newP[idx] == " ") {
              newP[idx] = [classe.Name];
              newColors[idx] = [classe.Room];
            } else {
              newP[idx] = [...newP[idx], classe.Name];
              newColors[idx] = [...newColors[idx], classe.Room];
            }
          });
        }
      }
    });

    // console.log(newP);
    setProgramme(newP);
    setColors(newColors);
  };

  useEffect(() => {
    makeProgramme();
  }, []);

  const flixBox = (idx: number) => {
    const classColor = [
      styles.color,
      styles.colorHY,
      styles.colorKazino,
      styles.colorPanagoyli,
      styles.colorB12,
      styles.colorB13,
      styles.colorAmfi,
    ];

    let listt = ["-1"];
    let classColor2 = classColor[0];
    if (programme[idx]) {
      listt = programme[idx];
    }
    if (idx < 1) {
      // console.log(colors);
    }
    if (colors[idx] != " ") {
      // console.log(colors[idx]);

      classColor2 = classColor[2];
    }

    const choose = (idi: number) => {
      let s = 0;

      if (colors[idx]) {
        switch (colors[idx][idi]) {
          // console.log(colors[idx][idi]);
          case "ΗΥ":
            return classColor[1];
            break;
          case "Ι11":
            return classColor[2];
            break;
          case "Ι12":
            return classColor[2];
            break;
          case "Π11":
            return classColor[3];
            break;
          case "Β12":
            return classColor[4];
            break;
          case "Β13":
            return classColor[5];
            break;
          case "Β02":
            return classColor[6];
            break;
          case "ΗΥ/Β02":
            return classColor[6];
            break;
          default:
            return classColor[0];
        }
      } else {
        return classColor[0];
      }
    };

    return (
      <div className={styles.flixBox}>
        {listt.map((val, idu) => (
          <div key={idu + 200} className={`${styles.flixItem} ${choose(idu)}`}>
            {val}
          </div>
        ))}
      </div>
    );
  };

  const print = () => {
    window.print();
    return false;
  };

  return (
    <>
      <Head>
        <title>Programme</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Link
          href={{
            pathname: "/",
            query: {
              codesProp: codesProp,
            },
          }}
        >
          <FactCheckIcon className={styles.calendarIcon} />
        </Link>
        <div className={styles.gridContainer}>
          <div className={styles.grid}>
            {[...Array(6)].map((_, i) => (
              <div key={i} className={styles.cellStartTop}>
                {i != 0 ? days[i - 1] : " "}
              </div>
            ))}
            {[...Array(12 * 6)].map((_, i) =>
              i % 6 == 0 ? (
                <div key={i + 6} className={styles.cellStartLeft}>
                  {hours(i / 6 + 9, "verbose")}
                </div>
              ) : (
                flixBox(getIndex(i))
              )
            )}
          </div>
        </div>
        <button className={styles.printButton} onClick={print}>
          Save as PDF
        </button>
        <style jsx global>{`
          html,
          body {
            max-width: 100vw;
            overflow-y: overlay;
          }
          body {
            color: black;
            background: white;
            margin: 0px;
            font-family: GeomLight;
          }
        `}</style>
      </main>
    </>
  );
}
