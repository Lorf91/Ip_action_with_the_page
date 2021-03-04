/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
      promoContent = document.querySelector('.promo__content'),
      promoGenre = promoContent.querySelector('.promo__genre'),
      bgImg = promoContent.querySelector('.promo__bg'),
      promoList = promoContent.querySelector('.promo__interactive-list');


//Task#1 function for delete elem on page
function deleteElem(elem) {
    elem.forEach(item => {
        item.remove();
    })
}

deleteElem(adv);

//task#2 function for change text elem on page
function changeText(elem, text) {
    elem.textContent = `${text}`;
}

changeText(promoGenre, 'драма');

//task#3 change bg_img on page
bgImg.style.cssText = `background:url("img/bg.jpg") center center/cover no-repeat;`;

//task4
movieDB.movies.sort();
promoList.innerHTML = '';
movieDB.movies.forEach((item, i) => {
    promoList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${item}
            <div class="delete"></div>
        </li>
    `;
});









//console.log(movieDB.movies);
