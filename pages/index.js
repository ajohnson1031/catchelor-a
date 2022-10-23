import Head from "next/head";
import styles from "../styles/Home.module.css";
import ImageContainer from "@/components/ImageContainer";
import { FlickrContextProvider } from "@/context/FlickrContext";
import ImageButtonWrapper from "@/components/ImageButton/ImageButtonWrapper";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Catchelorette</title>
        <meta
          name="description"
          content="Which cat(s) will receive your rose?"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {
          <FlickrContextProvider>
            <ImageContainer />
            <ImageButtonWrapper />
          </FlickrContextProvider>
        }
      </main>
    </div>
  );
}
