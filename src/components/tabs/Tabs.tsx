"use client"

import { useState } from "react";
import styles from './tabs.module.css'; 
import { LiaVideoSolid } from "react-icons/lia";
import { LiaThumbsUp } from "react-icons/lia";
import { LiaPushed } from "react-icons/lia";

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
          <LiaPushed/>
          Diseño Gráfico
        </div>
        <div
          className={toggleState === 2 ? `${styles.tabs} ${styles.activeTabs}` : styles.tabs}
          onClick={() => toggleTab(2)}
        >
          <LiaThumbsUp/>
          Social Media
        </div>
        <div
          className={toggleState === 3 ? `${styles.tabs} ${styles.activeTabs}` : styles.tabs}
          onClick={() => toggleTab(3)}
        >
          <LiaVideoSolid/>
          Producción Audiovisual
        </div>
        <div
          className={toggleState === 4 ? `${styles.tabs} ${styles.activeTabs}` : styles.tabs}
          onClick={() => toggleTab(4)}
        >
          <LiaVideoSolid/>
          Fotografía profesional
        </div>
      </div>
      <div className={styles.contentTabs}>
        <div className={toggleState === 1 ? `${styles.content} ${styles.activeContent}` : styles.content}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore iusto, aspernatur doloremque alias nam at eligendi saepe quidem quam iste, nulla voluptas quo temporibus omnis consequuntur repudiandae dignissimos quia velit. Quo odio impedit assumenda vero culpa maxime at non nisi.
        </div>
        <div className={toggleState === 2 ? `${styles.content} ${styles.activeContent}` : styles.content}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, quo.
        </div>
        <div className={toggleState === 3 ? `${styles.content} ${styles.activeContent}` : styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus facere porro voluptate earum a error totam ducimus minus, adipisci quasi tenetur ipsum natus, modi sint! Ullam officia et libero repellat, id mollitia, ea velit error perspiciatis illo vero est, dolore suscipit consequuntur eum esse unde obcaecati ducimus. Necessitatibus quia reiciendis distinctio maiores dolorem perspiciatis odio excepturi soluta error alias, nihil hic sunt laborum molestiae quod repudiandae ducimus non. Dicta omnis minima quidem ipsam earum animi, magni et amet non voluptas.
        </div>
        <div className={toggleState === 4 ? `${styles.content} ${styles.activeContent}` : styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi modi repudiandae voluptate ipsa sequi aliquid. Quod libero amet laudantium repellat illo ad enim quis doloremque labore exercitationem, blanditiis quaerat assumenda modi fugiat ullam! Repudiandae quidem molestias rem nihil similique quibusdam illo corrupti facere, dolore doloribus incidunt amet? Autem commodi saepe itaque quasi modi dolore inventore ipsam et beatae, porro facilis.
        </div>
      </div>
    </div>
  );
}

export default Tabs;
