import Image from "next/image";
import React from "react";
import Footer from "../../sections/Footer";
import Header from "../../sections/Header";
import styles from "../../styles/404.module.css";
import file from "../../public/sent.svg";
import arrowWhite from "../../public/arrow-right-white.svg";
import { useDispatch } from "react-redux";
import { dropDownAction } from "../../redux/slice/dropDownSlice";
import Link from "next/link";

const Success = () => {
  const dispatch = useDispatch();
  const closeMenu = () => dispatch(dropDownAction.close());
  return (
    <>
      <Header />
      <div onClick={closeMenu} className={styles["page-container"]}>
        <div className={styles["page-content"]}>
          <Image src={file} alt="file" />
          <p className={styles.text}>
            Thank you! We will reach out to you via email.
          </p>
          <Link className={styles.btn} href="/">
            Let&rsquo;s take you home{" "}
            <span className={styles["white-arrow"]}>
              {" "}
              <Image
                className={styles["arrow-svg"]}
                src={arrowWhite}
                alt="arrow_white"
              />{" "}
            </span>{" "}
          </Link>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Success;
