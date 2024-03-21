import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });
const CLIENT_ID='9534d9c18209cacf0572'
const CLINT_SECRET='97047a9b604dff95f93ed1419970101780ea46bb'
const REDIRECT_URI='http://localhost:3000/login'

export default function Home() {
  return (
    <>
       <a href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=repo`}>Signin with GitHub</a>
    </>
  );
}
