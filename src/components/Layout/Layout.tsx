import { ReactNode } from "react";
import NavBar from "../NavBar/NavBar";
import { Source_Sans_3 } from "next/font/google";
import styles from "./Layout.module.scss";
import Footer from "../Footer/Footer";
import Head from "next/head";

const source_sans_3 = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    
    <div className={`${source_sans_3.className} ${styles.container}`}>
      <Head>
        <title>TMDB</title>
      </Head>
      <NavBar />
      <main className={`${source_sans_3.className} ${styles.childContainer}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
