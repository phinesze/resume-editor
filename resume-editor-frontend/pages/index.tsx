import { useState } from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { DateLabel } from "@/components/atoms/DateLabel";
import { CareerTable } from "@/components/organisms/CareerTable";

export default function Home() {
  function createMarkup(props: object) {
    return {
      __html: "<h1 ...={props} data-value={value}>AAAAAAAA<span>S</span></h1>",
    };
  }

  function MyComponent({ props }: { props: object }) {
    return <div dangerouslySetInnerHTML={createMarkup(props)} />;
  }
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <MyComponent props={{ class: "cls" }} />
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <CareerTable />
      </main>
    </>
  );
}
