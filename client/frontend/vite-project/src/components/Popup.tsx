import React from "react";
import styles from "../styles/Popup.module.css";

interface PopupProps {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ title, children, onClose }) => {
  return (
    <div className={styles.popupBackground} onClick={onClose}>
      <div className={styles.popupContainer} onClick={(e) => e.stopPropagation()}>
      <button className={styles.popupClose} onClick={onClose}></button>
        <div className={styles.popupHeader}>{title}</div>
        <div className={styles.popupBody}>{children}</div>
       
      </div>
    </div>
  );
};

export default Popup;