import React, { useRef, useState } from "react";
import styles from "./Collapsible.module.scss";
import { IconButton } from "@mui/material";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

function Collapsible({ label, children }) {
  const [collapseItem, setCollapseItem] = useState(false);
  const contentRef = useRef();

  const toggle = () => {
    setCollapseItem(!collapseItem);
  };

  return (
    <div className={styles.item}>
      <div className={styles.itemTitle}>
        <IconButton aria-label="expand row" size="small" onClick={toggle}>
          {collapseItem ? (
            <KeyboardArrowUpOutlinedIcon />
          ) : (
            <KeyboardArrowDownOutlinedIcon />
          )}
        </IconButton>
        <p className={styles.label}>{label}</p>
      </div>

      <div
        className={styles.parent}
        ref={contentRef}
        style={
          collapseItem
            ? { height: contentRef.current.scrollHeight + "px" }
            : { height: "0px" }
        }
      >
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}

export default Collapsible;
