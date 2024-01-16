import styles from "./InfoPagesText.module.scss";

function InfoPagesText({ title, children }) {
  return (
    <div className={styles.content}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
}

export default InfoPagesText;
