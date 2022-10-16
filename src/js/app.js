import * as functions from "./modules/functions.js";

functions.isWebp();

// import Swiper, { Navigation, Pagination } from 'swiper';

// const swiper = new Swiper();

const open = document.querySelector('.header__button');
const close = document.querySelector('.header__close');
const menu = document.querySelector('.header__menu');
open.addEventListener('click', () => {
    menu.classList.add('open')
})
close.addEventListener('click', () => {
    menu.classList.remove('open')
})