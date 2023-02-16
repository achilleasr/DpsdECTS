import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "styles/Programme.module.css";
// import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FactCheckIcon from "@mui/icons-material/FactCheck";

import { Container, Row, Col } from "reactstrap";

export default function Programme() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Link href="/">
          <FactCheckIcon className={styles.calendarIcon} />
        </Link>
        <div className={styles.gridContainer}>
          <div className={styles.grid}>
            {[...Array(6)].map((_, i) => (
              <div key={i} className={styles.cellStart}>
                {i}
              </div>
            ))}
            {[...Array(12 * 6)].map((_, i) => (
              <div
                key={i + 6}
                className={i % 6 != 0 ? styles.cell : styles.cellStart}>
                {i + 6}
              </div>
            ))}
          </div>
        </div>
        Second Page
        <style jsx global>{`
          :root {
            --cornerDist: 40px;
          }
          html,
          body {
            max-width: 100vw;
            overflow-y: overlay;
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
      </main>
    </>
  );
}
