"use client"

import { useState } from "react";
import styles from './Tabs.module.css';  // Importar el CSS como módulo

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  function toggleTab(index: number) {
    setToggleState(index);
  }

  return (
    <div className={styles.container}>
      <div className={styles.blockTabs}>
        <div
          className={toggleState === 1 ? `${styles.tabs} ${styles.activeTabs}` : styles.tabs}
          onClick={() => toggleTab(1)}
        >
          primer
        </div>
        <div
          className={toggleState === 2 ? `${styles.tabs} ${styles.activeTabs}` : styles.tabs}
          onClick={() => toggleTab(2)}
        >
          segundo
        </div>
        <div
          className={toggleState === 3 ? `${styles.tabs} ${styles.activeTabs}` : styles.tabs}
          onClick={() => toggleTab(3)}
        >
          tercero
        </div>
      </div>
      <div className={styles.contentTabs}>
        <div className={toggleState === 1 ? `${styles.content} ${styles.activeContent}` : styles.content}>
          a
        </div>
        <div className={toggleState === 2 ? `${styles.content} ${styles.activeContent}` : styles.content}>
          b
        </div>
        <div className={toggleState === 3 ? `${styles.content} ${styles.activeContent}` : styles.content}>
          c
        </div>
      </div>
    </div>
  );
}

export default Tabs;
