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

const contents = document.querySelectorAll('.services__content');


contents.forEach(el => {
    const itemP = el.querySelectorAll('.services__item-p');
    const openText = el.querySelectorAll('.open-text');
    openText.forEach(txt=>{
        txt.addEventListener('click', (e)=>{
            itemP.forEach(p=>{
                let txtOpen = false;
                p.classList.toggle('active')
                if(p.classList.contains('active')){
                    openText.forEach(q => {
                        q.innerHTML = 'Меньше'
                    })
                }else {
                    openText.forEach(q => {
                        q.innerHTML = 'Подробнее'
                    })
                }
            })
        })
    })
})

const popupClose = document.querySelectorAll('.popup-close');
const popupOpen = document.querySelectorAll('.open-popup');

popupClose.forEach(close => {
    close.addEventListener('click', () => {
        const popups = document.querySelectorAll('.popup');
        popups.forEach(popup => {
            popup.classList.remove('active')
        })
    })
})

popupOpen.forEach(open => {
    open.addEventListener('click', () => {
        const target = open.getAttribute('data-target');
        const popup = document.querySelector(target);
        const popups = document.querySelectorAll('.popup');
        popups.forEach(popup => {
            popup.classList.remove('active')
        })
        popup.classList.add('active')
    })
})