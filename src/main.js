import "./style.css";
import "./sass/header.sass";

import "masonry-layout";
import Swiper, { Navigation, Pagination, Grid, FreeMode } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";

const clientsGallery = new Swiper(".clients-slider", {
  modules: [Navigation, Pagination, Grid, FreeMode],
  freeMode: true,
  slidesPerView: 1.5,
  // grid: {
  //   fill: "row",
  //   rows: 2,
  // },
  // spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const horses = new Swiper(".horses-slider", {
  modules: [Navigation, Pagination, Grid, FreeMode],
  freeMode: true,
  slidesPerView: 1.5,
  // grid: {
  //   fill: "row",
  //   rows: 2,
  // },
  // spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
