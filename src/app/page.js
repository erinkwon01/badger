import Head from "next/head";
import { Inter } from "next/font/google"; //TODO: replace with font
import Feed from "./feed/page";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Badger</title>
        <meta name="description" content="food sharing challenge app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* TODO: might change to Login below */}
      <Feed /> 
    </div>
  );
}
