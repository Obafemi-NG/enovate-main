import Image from "next/image";
import React, { useState, useEffect } from "react";
import styles from "../styles/Header.module.css";
import logo from "../public/LogoDescription.svg";
import exploreSVG from "../public/explore.svg";
import exploreWhiteSVG from "../public/explore_white.svg";
import Dropdown from "../components/Dropdown/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { dropDownAction } from "../redux/slice/dropDownSlice";
import Link from "next/link";
import { AnimatePresence, motion, easeInOut } from "framer-motion";

function Header() {
  const [exploreBackground, setExploreBackground] = useState(false);
  const [displayNavbar, setDisplayNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  // function for the dropdown display redux action
  const dispatch = useDispatch();
  const toggleDropDown = () => {
    dispatch(dropDownAction.toggle());
  };

  // useEffect for the toggle of the display of the header while scrolling
  useEffect(() => {
    const closeDropdown = () => {
      dispatch(dropDownAction.close());
    };
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > prevScrollPos) {
        setDisplayNavbar(false);
        closeDropdown();
      } else if (window.screenY === 0) {
        setDisplayNavbar(true);
      } else {
        setDisplayNavbar(true);
      }
      setPrevScrollPos(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, dispatch]);

  // selector for the dropdown redux state
  const displayDropDown = useSelector(
    (state) => state.dropDown.dropDownVisible
  );
  return (
    <section>
      <AnimatePresence>
        {displayNavbar && (
          <motion.div
            key="header"
            initial={{ opacity: 0, y: -100 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.2, duration: 0.7, ease: easeInOut },
            }}
            exit={{
              opacity: 0,
              y: -100,
              transition: { delay: 0.2, duration: 0.7, ease: easeInOut },
            }}
            className={styles["header-container-wrapper"]}
          >
            <div className={styles["header-container"]}>
              <div className={styles["left-section"]}>
                <Link href="/" className={styles["enovate_logo_container"]}>
                  <Image
                    src={logo}
                    alt="Enovate_Logo"
                    className={styles["header-logo"]}
                  />
                </Link>
                <p className={styles["logo-description"]}>
                  {" "}
                  Creative Design and Development Agency{" "}
                </p>
              </div>
              <div className={styles["right-section"]}>
                <div
                  onMouseOver={() => {
                    setExploreBackground(true);
                  }}
                  className={styles["explore-container"]}
                  onMouseLeave={() => setExploreBackground(false)}
                  onClick={toggleDropDown}
                >
                  <h3 className={styles.explore}> Explore </h3>
                  {exploreBackground ? (
                    <div className={styles["explore_white_container"]}>
                      {" "}
                      <Image src={exploreWhiteSVG} alt="explore_svg" />{" "}
                    </div>
                  ) : (
                    <div className={styles["explore_svg_container"]}>
                      <Image src={exploreSVG} alt="explore_svg" />
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* dropdown of the menu bar on the web display */}
            {displayDropDown && (
              <div className={styles["web-dropdown"]}>
                {" "}
                <Dropdown />
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      {/* Whole wrapper for the mobile explore button and the display for the menu bar on mobile devices */}
      <div className={styles["whole-wrapper"]}>
        {/* Animation for the display of the dropdown menu on a mobile display */}
        <AnimatePresence>
          {displayDropDown && (
            <motion.div
              key="mobile-dropdown"
              initial={{ opacity: 0, y: -100 }}
              animate={{
                opacity: 1,
                y: -500,
                transition: { delay: 0.2, duration: 0.7, ease: easeInOut },
              }}
              exit={{
                opacity: 0,
                y: -100,
                transition: { delay: 0.2, duration: 0.7, ease: easeInOut },
              }}
              className={styles["mobile-dropdown"]}
            >
              {" "}
              <Dropdown />
            </motion.div>
          )}
        </AnimatePresence>
        {/* Wrapper for the explore button display on a mobile device */}
        <div className={styles["mobile-menu-wrapper"]}>
          <div className={styles["mobile-menu"]}>
            <div
              className={styles["explore-container"]}
              onClick={toggleDropDown}
            >
              <h3 className={styles.explore}> Explore </h3>

              <div className={styles["explore_svg_container"]}>
                <Image src={exploreSVG} alt="explore_svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
