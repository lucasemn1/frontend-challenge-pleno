// Next
import { GetStaticProps } from "next";
import Image from "next/image";

// Components
import Carousel from "../../components/carousel";
import { MdStar } from "react-icons/md";

// Styles
import styles from "./styles.module.scss";

// Intefaces
import Media from "../../interfaces/media";

export interface HomeProps {
  topThreeRecent: Media[];
}

export default function HomePage(props: HomeProps) {
  function renderTopReviews() {
    return props.topThreeRecent.map((media) => {
      return (
        <span key={media.id}>
          <div className={styles.starsArea}>
            <MdStar />
            <h2>{media.score}</h2>
          </div>
          <h2>{media.name}</h2>
          <p>{media.legend}</p>
        </span>
      );
    });
  }

  return (
    <>
      <Carousel medias={props.topThreeRecent} />

      <div className={`content ${styles.clients}`}>
        <Image
          className={styles.client}
          src="/assets/img/warner_logo.png"
          alt=""
          layout="fixed"
          width="85"
          height="80"
        />
        <Image
          className={styles.client}
          src="/assets/img/disney_logo.png"
          alt=""
          layout="fixed"
          width="180"
          height="80"
        />
        <Image
          className={styles.client}
          src="/assets/img/paramount_logo.png"
          alt=""
          layout="fixed"
          width="160"
          height="80"
        />
        <Image
          className={styles.client}
          src="/assets/img/dc_logo.png"
          alt=""
          layout="fixed"
          width="85"
          height="80"
        />
      </div>

      <div className={`content ${styles.topReviews}`}>{renderTopReviews()}</div>

      <div className={styles.support}>
        <section className={`content ${styles.content}`}>
          <h1>Atendimento ao cliente</h1>
          <p>
            Precisando entrar em contato, utilize nossos canais de atendimento
            ou consulte a documentação para mais informações.
          </p>

          <div className={styles.buttons}>
            <button className="gray-button">Envie um ticket</button>
            <button>Documentação</button>
          </div>
        </section>
      </div>
    </>
  );
}
