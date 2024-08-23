
import React from "react";
import styles from "./Buttons.module.css";

export default function Buttons({text}) {


    return (
        
    <button className={styles.buttonStyle}>
        {text}
    </button>
    )

}