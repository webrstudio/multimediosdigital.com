import styles from "./styles.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      <p>
        Página web demo - desarrollado por{" "}
        <a href="https://webrstudio.com" target="_blank">
          webrstudio
        </a>
      </p>
    </footer>
  );
};
