import Image from "next/image";
import React, { useState } from "react";
import Footer from "../../sections/Footer";
import Header from "../../sections/Header";
import styles from "../../styles/contact.module.css";
import arrowRight from "../../public/arrow-right-gray.svg";
import star1 from "../../public/star1.svg";
import star3 from "../../public/star3.svg";
import arrowWhite from "../../public/arrow-right-white.svg";
import {
  dollarsCharges,
  foundOptions,
  nairaCharges,
  workOptions,
} from "../../formData";
import { motion, easeInOut } from "framer-motion";
import { useRouter } from "next/router";
import CustomInput from "../../components/CustomInput/CustomInput";
import { useDispatch } from "react-redux";
import { dropDownAction } from "../../redux/slice/dropDownSlice";

const Contact = () => {
  const [isCollaborateBtnHovered, setIsCollaborateBtnHovered] = useState(false);
  const [isMailBtnHovered, setIsMailBtnHovered] = useState(false);
  const [checkedDollars, setCheckedDollars] = useState(true);
  const [checkedNaira, setCheckedNaira] = useState(false);
  const [formDetails, setFormDetails] = useState({
    name: "",
    company: "",
    found: "",
    work: "",
    budget: "",
    email: "",
    projectDetails: "",
  });
  const route = useRouter();
  const toggleDollar = () => {
    setCheckedDollars(false);
    setCheckedNaira(true);
  };
  const toggleNaira = () => {
    setCheckedDollars(true);
    setCheckedNaira(false);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    route.push("/contact/success");
    console.log(formDetails);
  };
  const dispatch = useDispatch();
  const closeDropdown = () => {
    dispatch(dropDownAction.close());
  };
  return (
    <>
      <Header />
      <div onClick={closeDropdown} className={styles["page-container"]}>
        <div className={styles.top}>
          <Image className={styles.star} src={star1} alt="star1" />
          <div className={styles["section-title"]}>
            Let’s make it work <span className={styles.together}>together</span>
          </div>
          <Image className={styles.star} src={star3} alt="star3" />
        </div>
        <form onSubmit={handleSubmit} className={styles["form-container"]}>
          <div className={styles["top-input"]}>
            <div className={styles["name-container"]}>
              <p className={styles.text}>Hi, My name is </p>

              <CustomInput
                required={true}
                value={formDetails.name}
                onChangeHandler={handleChange}
                name="name"
                type="text"
                placeHolder="Type you name*"
              />
            </div>
            <div className={styles["company-container"]}>
              <p className={styles.text}>and I currently work in </p>

              <CustomInput
                required={true}
                onChangeHandler={handleChange}
                placeHolder="Type your company's name"
                name="company"
                value={formDetails.company}
                type="text"
              />
            </div>
          </div>
          <div className={styles["found-container"]}>
            <p className={styles.text}>I found Enovate agency using </p>
            <div className={styles.founds}>
              {foundOptions.map((found) => {
                return (
                  <div className={styles.found} key={found.name}>
                    <input
                      className={styles.radio}
                      type="radio"
                      name="found"
                      id={found.id}
                      value={found.name}
                      onChange={handleChange}
                    />
                    <label htmlFor={found.id} className={styles.label}>
                      {" "}
                      {found.name}{" "}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles["work-container"]}>
            <p className={styles.text}> I am looking for help with </p>
            <div className={styles.works}>
              {workOptions.map((work) => {
                return (
                  <div className={styles.work} key={work.name}>
                    <input
                      className={styles.radio}
                      type="radio"
                      name="work"
                      value={work.name}
                      onChange={handleChange}
                      id={work.id}
                    />
                    <label htmlFor={work.id} className={styles.label}>
                      {" "}
                      {work.name}{" "}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles["budget-container"]}>
            <p className={styles.text}> My budget is around</p>
            <div className={styles["under-lay"]}>
              <div className={styles["currency-control"]}>
                <div className={styles.dollars}>
                  <div
                    style={
                      checkedDollars === true
                        ? { backgroundColor: "#000000" }
                        : null
                    }
                    className={styles.selector}
                    onClick={toggleNaira}
                  ></div>
                  <p className={styles.currency}> $ </p>
                </div>
                <div className={styles.naira}>
                  <div
                    style={
                      checkedNaira === true
                        ? { backgroundColor: "#000000" }
                        : null
                    }
                    className={styles.selector}
                    onClick={toggleDollar}
                  ></div>
                  <p className={styles.currency}> ₦ </p>
                </div>
              </div>
            </div>
            <div className={styles["amount-container"]}>
              {checkedDollars === true
                ? dollarsCharges.map((charge) => {
                    return (
                      <div className={styles.found} key={charge.id}>
                        <input
                          className={styles.radio}
                          type="radio"
                          name="budget"
                          onChange={handleChange}
                          value={charge.amount}
                          id={charge.id}
                        />
                        <label htmlFor={charge.id} className={styles.label}>
                          {" "}
                          {charge.amount}{" "}
                        </label>
                      </div>
                    );
                  })
                : nairaCharges.map((charge) => {
                    return (
                      <div className={styles.found} key={charge.id}>
                        <input
                          className={styles.radio}
                          type="radio"
                          name="budget"
                          onChange={handleChange}
                          value={charge.amount}
                          id={charge.id}
                        />
                        <label htmlFor={charge.id} className={styles.label}>
                          {" "}
                          {charge.amount}{" "}
                        </label>
                      </div>
                    );
                  })}
            </div>
          </div>
          <div className={styles["email-container"]}>
            <div className={styles["top-email"]}>
              <p className={styles.text}>Kindly contact me at </p>

              <CustomInput
                required={true}
                onChangeHandler={handleChange}
                placeHolder="Type your email"
                name="email"
                value={formDetails.email}
                type="email"
                pattern="[a-z0-9]+@[a-z]+.[a-z]{2,3}"
              />
            </div>
            <p className={styles.text}>to start the conversation.</p>
          </div>
          <div className={styles["details-container"]}>
            <p className={styles.text}>
              {" "}
              I will like to share more details about the project{" "}
              <span>(optional)</span>
            </p>
            <textarea
              className={styles["text-area"]}
              placeholder="Tell us more about your project"
              name="projectDetails"
              onChange={handleChange}
              value={formDetails.projectDetails}
            />
          </div>
          <motion.button
            animate={{
              gap: isCollaborateBtnHovered ? "10px" : 0,
              transition: { duration: 0.7, ease: easeInOut },
            }}
            onMouseOver={() => setIsCollaborateBtnHovered(true)}
            onMouseLeave={() => setIsCollaborateBtnHovered(false)}
            className={styles["collaborate-btn"]}
          >
            {" "}
            Let&rsquo;s Collaborate!{" "}
            <div className={styles["white-arrow"]}>
              {" "}
              <Image
                className={styles["arrow-svg"]}
                src={arrowWhite}
                alt="arrow_white"
              />{" "}
            </div>{" "}
          </motion.button>
        </form>
        <div className={styles["deliver-container"]}>
          <h4 className={styles["profit-title"]}>Do you have more questions</h4>
          <motion.button
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "mailto:HQ@enovate.work";
            }}
            animate={{
              gap: isMailBtnHovered ? "10px" : 0,
              transition: { duration: 0.7, ease: easeInOut },
            }}
            onMouseOver={() => setIsMailBtnHovered(true)}
            onMouseLeave={() => setIsMailBtnHovered(false)}
            className={styles.btn}
          >
            {" "}
            Shoot us a mail{" "}
            <div className={styles.arrow}>
              {" "}
              <Image
                className={styles["arrow-svg"]}
                src={arrowRight}
                alt="arrow-right"
              />{" "}
            </div>{" "}
          </motion.button>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
