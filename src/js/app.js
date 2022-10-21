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