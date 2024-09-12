import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../sections/Header";
import Hero from "../sections/Hero";
import Video from "../sections/Video";
import Expertise from "../sections/expertise";
import Projects from "../sections/Projects";
import BuildingProcess from "../sections/BuildingProcess";
import Faq from "../sections/Faq";
import Footer from "../sections/Footer";
import { useDispatch } from "react-redux";
import { dropDownAction } from "../redux/slice/dropDownSlice";
import PreFooter from "../sections/PreFooter";
import prisma from "../lib/prisma";

export const getStaticProps = async () => {
  const data = await prisma.project.findMany();
  return {
    props: { result: data },
  };
};

export default function Home({ result }) {
  const dispatch = useDispatch();
  const closeDropDown = () => {
    dispatch(dropDownAction.close());
  };
  return (
    <>
      <Head>
        <title>Enovate | Creative design and development agency</title>
        <meta
          name="description"
          content="We’re Enovate, more than just an agency, we specialize in creative design and development of websites, web applications and mobile apps."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        {/* Header-section */}
        <Header />
        {/* Hero-section */}
        <div onClick={closeDropDown} className={styles["page-content"]}>
          <Hero />
          <Video />
          <Expertise />
          <Projects result={result} />
          <BuildingProcess />
          <Faq />
          <PreFooter />
          <Footer />
        </div>
      </main>
    </>
  );
}
