import styles from "./Container.module.scss";

function Container({ variant = "container", children }) {
  return <div className={styles[variant]}>{children}</div>;
}

export default Container;
