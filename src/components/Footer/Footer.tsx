import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.container}>
      Disclaimer: This website is a learning project and a clone of
      themoviedb.org. All rights, trademarks, and copyrights for the original
      content and design are owned by themoviedb.org. This site is intended for
      educational purposes only and does not aim to infringe on the intellectual
      property rights of themoviedb.org. The content and functionality of this
      website are not endorsed or sponsored by themoviedb.org, and the use of
      any names, trademarks, or copyrighted materials is solely for the purpose
      of learning and skill development. If you are the legal owner of the
      original content and wish to have it removed, please contact
      desmond.poh@outlook.com.
    </footer>
  );
};

export default Footer;
