import Image from "next/image";
import { useRef } from "react";

// imported CSS
import styles from "./CarouselScroll.module.css";

// imported utils
import { usePosition } from "./usePosition";

const CarouselScroll = ({ children }) => {
  const ref = useRef();
  const { hasItemsOnLeft, hasItemsOnRight, scrollLeft, scrollRight } =
    usePosition(ref);

  return (
    <div className={styles["carouselContainer"]}>
      <div className={styles["carouselContainerInner"]} ref={ref}>
        {children}
      </div>
      <div className={styles["control-container"]}>
        <div
          onClick={scrollLeft}
          className={
            hasItemsOnLeft ? `${styles["non-opaque"]}` : `${styles["opaque"]}`
          }
        >
          <Image
            src="/scroll_left.svg"
            alt="scroll_icon"
            width={40}
            height={40}
          />
        </div>
        <div
          onClick={scrollRight}
          className={
            hasItemsOnRight ? `${styles["non-opaque"]}` : `${styles["opaque"]}`
          }
        >
          <div className={styles["scroll-right"]}>
            <Image
              src="/scroll_right.svg"
              alt="scroll_icon"
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselScroll;
