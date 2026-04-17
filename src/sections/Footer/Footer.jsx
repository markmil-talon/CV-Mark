import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section
      id='footer'
      className={styles.container}>
      <div className={styles.exclude}>
        <p>© {new Date().getFullYear()} Mark Talon portfolio</p>
      </div>
    </section>
  );
}

export default Footer;
