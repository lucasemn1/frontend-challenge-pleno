// Next
import Image from "next/image";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";
SwiperCore.use([Pagination]);

// Styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import styles from "./styles.module.scss";
import CarouselItem from "../carousel-item";
import Media from "../../interfaces/media";

interface Props {
  medias: Media[];
}

export default function Carousel({ medias }: Props) {
  function renderItems() {
    return medias.map((media) => {
      return (
        <SwiperSlide key={media.id}>
          <CarouselItem media={media} />
        </SwiperSlide>
      );
    });
  }

  return (
    <>
      <Swiper pagination={true} className={styles.carousel} autoplay={true}>
        {renderItems()}
      </Swiper>
    </>
  );
}
