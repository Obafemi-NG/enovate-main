import styles from "../styles/Faq.module.css";
import React, { useState } from "react";
import { faq } from "../faq";
import Image from "next/image";
import plus from "../public/plus.svg";
import minus from "../public/minus.svg";
import chat from "../public/icons/question.svg";
// import arrowRight from "../public/arrow-right-gray.svg";
import mail from "../public/icons/mail.svg";
import { easeInOut, motion } from "framer-motion";

function Faq() {
  const [showAnswer, setShowAnswer] = useState({});
  const [isHovered, setIsHovered] = useState(false);
  const toggleAnswer = (id) => {
    setShowAnswer({
      [id]: !showAnswer[id],
    });
  };
  return (
    <div className={styles["section-container"]}>
      <h4 className={styles["section-title"]}>Frequently asked questions</h4>
      <div className={styles["faq-content"]}>
        <div className={styles["left-section"]}>
          {faq.map((item) => {
            return (
              <div
                key={item.id}
                className={styles["faq-container"]}
                onClick={() => toggleAnswer(item.id)}
              >
                <div className={styles["question-top"]}>
                  <p className={styles["question"]}>{item.question}</p>
                  {showAnswer[item.id] ? (
                    <Image src={minus} alt="minus" />
                  ) : (
                    <Image src={plus} alt="plus" />
                  )}
                </div>
                <p className={styles.answer}>
                  {" "}
                  {showAnswer[item.id] && item.answer}{" "}
                </p>
              </div>
            );
          })}
        </div>
        <div className={styles["right-section"]}>
          <Image src={chat} alt="chat-svg" />
          <h4 className={styles["have-question"]}>
            Do you have any more questions?
          </h4>
          <p className={styles["details"]}>
            Feel free to write us now. We’d be glad to give adequate information
            in response{" "}
          </p>
          <motion.button
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "mailto:HQ@enovate.work";
            }}
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            animate={{
              gap: isHovered ? "1rem" : "0.5rem",
              transition: { duration: 0.7, ease: easeInOut },
            }}
            className={styles["email-btn"]}
          >
            <p>Shoot us an email</p>
            {/* <div className={styles["arrow-right"]}>
              {" "} */}
            <Image
              className={styles["arrow-svg"]}
              src={mail}
              alt="arrow-right"
            />{" "}
            {/* </div> */}
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default Faq;
