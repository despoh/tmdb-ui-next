import { useRouter } from "next/router";
import styles from "./NavBar.module.scss";
import Link from "next/link";

const NavBar = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <header className={styles.container}>
      <div onClick={handleClick} className={styles.logo}>
        <img src="/tmdb.png" />
      </div>
    </header>
  );
};

export default NavBar;
