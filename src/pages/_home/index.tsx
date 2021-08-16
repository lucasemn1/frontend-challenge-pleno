// Components
import Image from "next/image";
import Carousel from "../../components/carousel";
import { MdStar } from "react-icons/md";

// Styles
import styles from "./styles.module.scss";

export default function HomePage() {
  return (
    <>
      <Carousel />

      <div className={`content ${styles.clients}`}>
        <Image
          className={styles.client}
          src="/assets/img/warner_logo.png"
          alt=""
          width="100"
          height="80"
        />
        <Image
          className={styles.client}
          src="/assets/img/disney_logo.png"
          alt=""
          layout="intrinsic"
          width="180"
          height="80"
        />
        <Image
          className={styles.client}
          src="/assets/img/paramount_logo.png"
          alt=""
          layout="intrinsic"
          width="160"
          height="80"
        />
        <Image
          className={styles.client}
          src="/assets/img/dc_logo.png"
          alt=""
          layout="intrinsic"
          width="105"
          height="80"
        />
      </div>

      <div className={`content ${styles.topReviews}`}>
        <span>
          <div className={styles.starsArea}>
            <MdStar />
            <h2>4.5</h2>
          </div>
          <h2>Mulher Mararvilha</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos odit
            corporis ullam.
          </p>
        </span>
        <span>
          <div className={styles.starsArea}>
            <MdStar />
            <h2>4.5</h2>
          </div>
          <h2>Mulher Mararvilha</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos odit
            corporis ullam.
          </p>
        </span>
        <span>
          <div className={styles.starsArea}>
            <MdStar />
            <h2>4.5</h2>
          </div>
          <h2>Mulher Mararvilha</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos odit
            corporis ullam.
          </p>
        </span>
      </div>
    </>
  );
}
