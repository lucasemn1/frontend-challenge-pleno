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
import { useState } from "react";
import Media from "../../interfaces/media";

export default function Carousel() {
  const [medias] = useState<Media[]>([
    {
      id: 0,
      imageUrl: "/assets/img/snydercut.jpg",
      name: "Zack Snyder Justice League",
      synopsis:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nostrum aliquid, ad amet praesentium quasi, excepturi perspiciatis sapiente architecto totam a corrupti voluptatum? Exercitationem doloribus ratione architecto consequatur officia tenetur.",
    },
    {
      id: 1,
      imageUrl: "/assets/img/ww84.jpg",
      name: "Mulher Maravilha 1984",
      synopsis:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nostrum aliquid, ad amet praesentium quasi, excepturi perspiciatis sapiente architecto totam a corrupti voluptatum? Exercitationem doloribus ratione architecto consequatur officia tenetur.",
    },
  ]);

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
      <Swiper pagination={true} className={styles.carousel}>
        {renderItems()}
      </Swiper>
    </>
  );
}
