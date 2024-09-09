import Image from "next/image";
import Header from "../sections/Header";
import styles from "../styles/about.module.css";
import { teamMembers } from "../teamMembers";
import vector from "../public/swiggly.png";
import { useDispatch } from "react-redux";
import { dropDownAction } from "../redux/slice/dropDownSlice";
import HowWeWork from "../sections/HowWeWork.jsx";
import Footer from "../sections/Footer";
import MemberCard from "../components/MemberCard/MemberCard";

function About() {
  const dispatch = useDispatch();
  const closeDropDown = () => {
    dispatch(dropDownAction.close());
  };
  return (
    <>
      <Header />
      <div onClick={closeDropDown} className={styles["page-container"]}>
        <div className={styles.top}>
          <h3 className={styles["page-title"]}>About us</h3>
          <div className={styles["about-details"]}>
            <ul>
              <li className={styles["about-list"]}>
                At Enovate, the focus is always on our clients. We&rsquo;re an
                expert team that wants to build amazing innovative companies,
                that&rsquo;s why we&rsquo;re a direct extension of your brand.
              </li>
              <li className={styles["about-list"]}>
                At Enovate, we walk and work with you all the way to bring your
                idea to fruition. Collaboration is one of our key strength in
                making this possible.
              </li>
              <li className={styles["about-list"]}>
                We&rsquo;re results-oriented professionals and when it comes to
                growing your company, no job&rsquo;s too small for us, nor is
                any challenge too big for us to handle.
              </li>
              <li className={styles["about-list"]}>
                We are remote and have great team of creative techies spread
                across continents. We&rsquo;re extremely passionate about what
                we do, and we&rsquo;re amazing at it.
              </li>
            </ul>
          </div>
        </div>
        <h3 className={styles.bandwagon}>A bandwagon of amazing people</h3>
        <div className={styles["team-container"]}>
          {teamMembers.map((member) => {
            return (
              <MemberCard
                id={member.id}
                name={member.name}
                key={member.id}
                imgUrl={member.imgUrl}
                position={member.position}
              />
            );
          })}
        </div>
        <div className={styles["vector-container"]}>
          <Image
            width={2000}
            src={vector}
            alt="vector"
            className={styles.vector}
          />
        </div>
        <HowWeWork />
        <Footer />
      </div>
    </>
  );
}

export default About;
