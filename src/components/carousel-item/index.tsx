import Image from "next/image";
import Media from "../../interfaces/media";

import styles from "./styles.module.scss";

interface Props {
  media: Media;
}

export default function CarouselItem(props: Props) {
  return (
    <div className={styles.carouselItem}>
      <Image
        src={props.media.imageUrl}
        alt={`Banner ${props.media.name}`}
        objectFit="cover"
        layout="fill"
        className={styles.image}
      />

      <span className={styles.content}>
        <h1>{props.media.name}</h1>
        <p>{props.media.synopsis}</p>
        <span>
          <button>Ver críticas</button>
          <button className={styles.share}>Compartilhar</button>
        </span>
      </span>
    </div>
  );
}
