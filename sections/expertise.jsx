import React from "react";
import ExpertiseCard from "../components/ExpertiseCard/ExpertiseCard";
import styles from "../styles/expertise.module.css";
import Image from "next/image";
import gradient from "../public/Subtract.png";
import mSwiggly from "../public/mobile-swiggly.png";
import CarouselScroll from "../components/CarouselScroll";

// imported assets
import ux from "../public/gif/UX.gif";
import brandDesignGif from "../public/gif/brand-design-gif.gif";
import webDevGif from "../public/gif/web-dev-gif.gif";
import mobileDevGif from "../public/gif/mobile-dev-gif.gif";

function Expertise() {
  const expertiseList = [
    {
      id: "1",

      iconLink: "/icons/brand_identity_icon.svg",
      title: "Brand Identity Design",
      bgColor: "#92EBFF",
      descprition: `
        We provide a wide spectrum of media design such as creation of logotype, color palette, typography, social media materials, presentations, business cards, and stationery, and all that we can pack into the brand guidelines.`,
      projectImage: brandDesignGif,
    },
    {
      id: "2",
      iconLink: "/icons/product_design_icon.svg",
      pushDown: true,
      title: "Product Design",
      bgColor: "#67FE9B",
      descprition:
        "We guarantee the delivery of an innovative creative concept that sets a standard for UX. In order to enable seamless and exciting surfing experiences across all platforms, we integrate clean, responsive aesthetics.",
      projectImage: ux,
    },
    {
      id: "3",
      iconLink: "/icons/web_dev_icon.svg",
      title: "Web Application Development",
      bgColor: "#8B98FF",
      descprition:
        "We have an amazing team with a depth of knowledge and experience in developing and managing complex web applications and transactional platforms.",
      projectImage: webDevGif,
    },
    // {
    //   id: "4",
    //   iconLink: "/web_dev.svg",
    //   title: "Web Application Development",
    //   bgColor: "#6DDBF3",
    //   pushDown: true,
    //   descprition:
    //     "We have an amazing team with a depth of knowledge and experience in developing and managing complex web applications and transactional platforms.",
    //   projectImage: ux,
    // },
    {
      id: "4",
      iconLink: "/icons/mobile_dev_icon.svg",
      title: "Mobile Application Development",
      bgColor: "#54EA87",
      descprition:
        "We take your app idea, validate it, build it, test it, get reviews, iterate and launch your app successfully. We’d also provide a first-rate support all the way, be it IOS or Android app.",
      projectImage: mobileDevGif,
    },
  ];
  const mappedItem = expertiseList.map((expertise, index) => (
    <ExpertiseCard
      key={index}
      id={expertise.id}
      iconUrl={expertise.iconLink}
      bgColor={expertise.bgColor}
      title={expertise.title}
      detail={expertise.descprition}
      projectImage={expertise.projectImage}
    />
  ));
  return (
    <>
      <div className={styles["section-container"]}>
        <div className={styles["section-details"]}>
          <h3 className={styles["section-title"]}>
            Our areas of{" "}
            <span className={styles["gradient-text"]}> expertise </span>{" "}
          </h3>
          <p className={styles["section-subtitle"]}>
            {" "}
            We provide a full suite of creative design including illustrations,
            web design and app development services, with special care for
            mobile.{" "}
          </p>
        </div>
        <div className={styles["cards"]}>
          {expertiseList.map((expertise) => {
            return (
              <ExpertiseCard
                key={expertise.id}
                id={expertise.id}
                pushDown={expertise.pushDown}
                iconUrl={expertise.iconLink}
                bgColor={expertise.bgColor}
                title={expertise.title}
                detail={expertise.descprition}
                projectImage={expertise.projectImage}
              />
            );
          })}
        </div>
        {/* <div className={styles["mobile-cards"]}>
          <CarouselScroll>{mappedItem}</CarouselScroll>
        </div> */}
      </div>
      <div className={styles["gradient-container"]}>
        <Image
          src={gradient}
          alt="gradient"
          // width={2000}
          className={styles["swiggly"]}
          priority
        />
      </div>
    </>
  );
}

export default Expertise;
