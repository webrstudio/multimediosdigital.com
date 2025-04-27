import styles from "./styles.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      <p>&copy; MULTIMEDIOS DIGITAL - 2025</p>
      <p>
        <a href="https://webrstudio.com" target="_blank">
          Desarrollado por webrstudio
        </a>
      </p>
    </footer>
  );
};
