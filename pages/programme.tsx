import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "styles/Programme.module.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { p_E23_v6, defaultHoverItem } from "components/p_EARINO2023.js";
import { hardcodedLessons } from "components/hardcoded.js";
import { useRouter } from "next/router";

interface Classe {
  Name: string;
  Semester: number;
  Room: string;
  Code: number;
  Mon: any[];
  Tue: any[];
  Wed: any[];
  Thu: any[];
  Fri: any[];
}

interface Lessone {
  name?: string;
  code?: string;
  type?: string;
  ects?: string;
  semester?: string;
  selected?: boolean;
}

export default function Programme() {
  const [programme, setProgramme] = useState([]);
  const [colors, setColors] = useState([]);
  const [hoveredItems, setHoveredItems] = useState<Classe[]>([
    defaultHoverItem,
  ]);
  const [thisSemesterClasses, setThisSemesterClasses] = useState<number[]>([]);

  const days = ["Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή"];
  const days_idx = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  let earinaLength = 0;
  const router = useRouter();
  let selectedClasses: any[] = [];
  if (router.query.codesProp) {
    selectedClasses = JSON.parse(router.query.codesProp.toString());
  }

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
    p_E23_v6.map((classe) => {
      if (thisSemesterClasses != null) {
        if (thisSemesterClasses.toString().includes(classe.Code.toString())) {
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

    hoveredItems.map((hov) => {
      hov.Mon.map((hour) => {
        let idx = hour - 9;
        if (newP[idx] == " " && newP[idx] != hov.Name) {
          newP[idx] = [hov.Name];
          newColors[idx] = [defaultHoverItem.Room];
        } else {
          if (!newP[idx].includes(hov.Name)) {
            newP[idx] = [...newP[idx], hov.Name];
            newColors[idx] = [...newColors[idx], defaultHoverItem.Room];
          }
        }
      });

      hov.Tue.map((hour) => {
        let idx = hour - 9 + 12;
        if (newP[idx] == " " && newP[idx] != hov.Name) {
          newP[idx] = [hov.Name];
          newColors[idx] = [defaultHoverItem.Room];
        } else {
          if (!newP[idx].includes(hov.Name)) {
            newP[idx] = [...newP[idx], hov.Name];
            newColors[idx] = [...newColors[idx], defaultHoverItem.Room];
          }
        }
      });

      hov.Wed.map((hour) => {
        let idx = hour - 9 + 24;
        if (newP[idx] == " " && newP[idx] != hov.Name) {
          newP[idx] = [hov.Name];
          newColors[idx] = [defaultHoverItem.Room];
        } else {
          if (!newP[idx].includes(hov.Name)) {
            newP[idx] = [...newP[idx], hov.Name];
            newColors[idx] = [...newColors[idx], defaultHoverItem.Room];
          }
        }
      });

      hov.Thu.map((hour) => {
        let idx = hour - 9 + 36;
        if (newP[idx] == " " && newP[idx] != hov.Name) {
          newP[idx] = [hov.Name];
          newColors[idx] = [defaultHoverItem.Room];
        } else {
          if (!newP[idx].includes(hov.Name)) {
            newP[idx] = [...newP[idx], hov.Name];
            newColors[idx] = [...newColors[idx], defaultHoverItem.Room];
          }
        }
      });

      hov.Fri.map((hour) => {
        let idx = hour - 9 + 48;
        if (newP[idx] == " " && newP[idx] != hov.Name) {
          newP[idx] = [hov.Name];
          newColors[idx] = [defaultHoverItem.Room];
        } else {
          if (!newP[idx].includes(hov.Name)) {
            newP[idx] = [...newP[idx], hov.Name];
            newColors[idx] = [...newColors[idx], defaultHoverItem.Room];
          }
        }
      });
    });

    setProgramme(newP);
    setColors(newColors);
  };

  useEffect(() => {
    makeProgramme();
  }, [hoveredItems]);

  const flixBox = (idx: number, key: number) => {
    const classColor = [
      styles.color,
      styles.colorHY,
      styles.colorKazino,
      styles.colorPanagoyli,
      styles.colorB12,
      styles.colorB13,
      styles.colorAmfi,
      styles.colorHover,
    ];

    let listt = ["-1"];
    let classColor2 = classColor[0];
    if (programme[idx]) {
      listt = programme[idx];
    }
    if (colors[idx] != " ") {
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
          case "hover":
            return classColor[7];
            break;
          default:
            return classColor[0];
        }
      } else {
        return classColor[0];
      }
    };

    return (
      <div key={key} className={styles.flixBox}>
        {listt.map((val, idu) => (
          <div key={idu + 200} className={`${styles.flixItem} ${choose(idu)}`}>
            {val}
          </div>
        ))}
      </div>
    );
  };

  const print = () => {
    var tempTitle = document.title;
    document.title = "Earino2023.pdf";
    window.print();
    return false;
  };

  // const printHTML = () => {
  //   console.log("pdf");

  //   const element = document.getElementById("pdf-container");
  //   // const opt = {
  //   //   margin: 0.1,
  //   //   filename: "myfile.pdf",
  //   //   image: { type: "png", quality: 0.99 },
  //   //   html2canvas: { scale: 2 },
  //   //   jsPDF: { unit: "in", format: "letter", orientation: "landscape" },
  //   // };

  //   var options = {
  //     quality: 0.01,
  //     // scale: 2,
  //   };
  //   // html2pdf().set(opt).from(element).save();

  //   // const element = document.getElementById('my-content');
  //   if (element) {
  //     domToImage.toPng(element).then(function (dataUrl: any) {
  //       const link = document.createElement("a");
  //       link.download = "Xeim2023.png";
  //       link.href = dataUrl;
  //       link.click();
  //     });
  //   }
  // };

  const SideBarItem = ({ code }: { code: number }) => {
    const startHover = (e: React.ChangeEvent<any>) => {
      setHoveredItems(classesFromCodeEar(code));
    };
    const stopHover = (e: React.ChangeEvent<any>) => {
      setHoveredItems([defaultHoverItem]);
    };
    const toggleSelected = (e: React.ChangeEvent<any>) => {
      if (thisSemesterClasses.toString().includes(code.toString())) {
        let index = -1;
        index = thisSemesterClasses.indexOf(code);
        if (index !== -1) {
          thisSemesterClasses.splice(index, 1);
        }
      } else {
        thisSemesterClasses.push(code);
      }
      setHoveredItems([defaultHoverItem]);
    };
    return (
      <div
        className={
          thisSemesterClasses.includes(code)
            ? styles.sideListItemSelected
            : styles.sideListItem
        }
      >
        <div
          className={styles.sideListLeft}
          onMouseEnter={startHover}
          onMouseLeave={stopHover}
        >
          {classFromCode(code)?.name}
        </div>
        <div className={styles.sideListRight}>
          {thisSemesterClasses.includes(code) ? (
            <RemoveIcon
              className={styles.sideListIcon}
              onClick={toggleSelected}
            />
          ) : (
            <AddIcon className={styles.sideListIcon} onClick={toggleSelected} />
          )}
        </div>
      </div>
    );
  };

  const classFromCode = (code: number) => {
    const item = hardcodedLessons.find((obj) => {
      return parseInt(obj.code) == code;
    });

    return item;
  };

  const classesFromCodeEar = (code: number) => {
    const items: Classe[] = p_E23_v6.filter((obj) => {
      return obj.Code == code;
    });
    return items;
  };

  const classFromCodeEar = (code: number) => {
    const item = p_E23_v6.find((obj) => {
      return obj.Code == code;
    });

    return item;
  };

  const earino = (listOfSelected: number[]) => {
    let eariniLista = [];
    for (let i = 0; i < listOfSelected.length; i++) {
      if (classFromCodeEar(listOfSelected[i]) !== undefined) {
        eariniLista.push(listOfSelected[i]);
      }
    }
    earinaLength = eariniLista.length;
    return eariniLista;
  };

  return (
    <>
      <Head>
        <title>Semester Programme</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/LOGO.ico" />
      </Head>
      <main>
        <div>
          <Link
            href={{
              pathname: "/",
              query: {
                codesProp: JSON.stringify(selectedClasses),
              },
            }}
          >
            <svg
              className={styles.calendarIcon}
              viewBox="0 0 209 334"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M188 21L42 167L188 313"
                stroke="black"
                strokeWidth="58"
              />
            </svg>
          </Link>
          <div className={styles.bigContainer}>
            <div
              className={styles.gridContainer}
              onMouseOver={() => setHoveredItems([defaultHoverItem])}
              id="pdf-container"
            >
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
                    flixBox(getIndex(i), i + 6)
                  )
                )}
              </div>
            </div>

            <div className={styles.sideList}>
              <div className={styles.sideListTitle}>Μαθήματα Εξαμήνου</div>
              <div className={styles.sideListContainer}>
                {earino(selectedClasses).length > 0 ? (
                  [...Array(earinaLength)].map((_, i) => (
                    <SideBarItem key={i} code={earino(selectedClasses)[i]} />
                  ))
                ) : (
                  <div>Κανένα χειμερινό μάθημα</div>
                )}
              </div>
            </div>
          </div>
          <button className={styles.printButton} onClick={print}>
            Save as Pdf
          </button>

          <div className={styles.version}>Προγραμμα v6 από 24/4/2023</div>

          {/* <button className={styles.printButton2} onClick={print}>
            Save as PDF Alternative
          </button> */}
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

            ::-webkit-scrollbar {
              width: 6px;
            }

            /* Track */
            ::-webkit-scrollbar-track {
              background: #f1f1f1;
            }

            /* Handle */
            ::-webkit-scrollbar-thumb {
              background: #888;
            }

            /* Handle on hover */
            ::-webkit-scrollbar-thumb:hover {
              background: #555;
            }
          `}</style>

          <div className={styles.roomGrid}>
            <div
              className={`${styles.roomItem} ${styles.roomItemSmall} ${styles.colorHY}`}
            >
              Εργαστήρια Υπολογιστών Γυμνασίου (A03, A04)
            </div>
            <div
              className={`${styles.roomItem} ${styles.roomItemSmall} ${styles.colorKazino}`}
            >
              Εργαστήρια Βιομηχανικού Σχεδιασμού (Καζίνο)
            </div>
            <div
              className={`${styles.roomItem} ${styles.roomItemSmall} ${styles.colorPanagoyli}`}
            >
              Αίθουσα «Παναγούλη» (Πνευματικό Κέντρο)
            </div>
            <div className={`${styles.roomItem} ${styles.colorB12}`}>
              B12 Αίθουσα Γυμνασίου
            </div>
            <div className={`${styles.roomItem} ${styles.colorB13}`}>
              B13 Αίθουσα Γυμνασίου
            </div>
            <div className={`${styles.roomItem} ${styles.colorAmfi}`}>
              B02 Αμφιθέατρο Γυμνασίου
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className={styles.credits}>
          <a href="https://github.com/achilleasr/DpsdECTS" target="_blank">
            <img src="/logoT.png" width="36" height="36" />
          </a>
        </div>
      </footer>
    </>
  );
}
