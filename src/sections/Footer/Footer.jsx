import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section
      id='footer'
      className={styles.container}>
      <div className={styles.exclude}>
        <p>
          &copy; 2024 Mark Talon <br /> All rights reserved.
        </p>
      </div>
    </section>
  );
}

export default Footer;
