import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import imageLoader from "../utils/ImageLoader";

import styles from "../styles/404Page.module.css";

export default function Custom404() {
  return (
    <div className={styles.outerDiv}>
      <Head>
        <title>404 Not Found</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
      </Head>
      <div>
      {/** <div className={styles.avatar}></div> */}
        <Image
            loader={imageLoader}
            src="taoji_fist_fight.png"
            alt="打开自我介绍"
            width={250}
            height={250}
          />
        <h1 className="display-6 my-3" style={{ color: "#1D0C26" }}>
          你瞅啥？歌单在<Link href="/">这</Link>！
        </h1>
      </div>
      <div>
        <h1 className={styles.num404}>404</h1>
        <div className={styles.text404Div}>
          <h2 className={styles.text404}>This page could not be found.</h2>
        </div>
      </div>
    </div>
  );
}
