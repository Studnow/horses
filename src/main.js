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
  slidesPerView: 1.3,
  initialSlide: 0,
  centeredSlides: true,
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
  modules: [Navigation, Pagination],
  freeMode: true,
  slidesPerView: 5,
  initialSlide: 2,
  centeredSlides: true,
  // grid: {
  //   fill: "row",
  //   rows: 2,
  // },
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const reviews = new Swiper(".reviews-slider", {
  modules: [Navigation, Pagination],
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});