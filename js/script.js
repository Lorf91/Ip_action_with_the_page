/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту

5) Добавить нумерацию выведенных фильмов */

///////////////////////////////////////////////////////////////////////////////////////
/* Задания на урок:
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
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
          promoList = promoContent.querySelector('.promo__interactive-list'),
          form = document.querySelector('.add'),
          formBtn = form.querySelector('button'),
          inputAdd = form.querySelector('.adding__input'),
          inputCheck = form.querySelector('[type="checkbox"]');
    
    //console.log(delBtn);
    
    
    //Task#1 function for delete elem on page
    const deleteElem = (elem) => {
        elem.forEach(item => {
            item.remove();
        });
    };
    
    deleteElem(adv);
    
    //task#2 function for change text elem on page
    function changeText(elem, text) {
        elem.textContent = `${text}`;
    }
    
    changeText(promoGenre, 'драма');
    
    //task#3 change bg_img on page
    bgImg.style.cssText = `background:url("img/bg.jpg") center center/cover no-repeat;`;
    
    //task4
    //movieDB.movies.sort();
    //promoList.innerHTML = '';

    const sortArr = (arr) => {
        arr.sort();
    };
    
    
    const loadMyMovies = (elem, parent) => {
        sortArr(elem);
        parent.innerHTML = '';
    
        elem.forEach((item, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${item}
                    <div class="delete"></div>
                </li>
            `;
        });

        //Удаление елементов
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                //рекурсия (для смены нумерации после удаления)
                loadMyMovies(elem, parent);
            });
        });
    };
    
    loadMyMovies(movieDB.movies, promoList);
    
    formBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (inputAdd.value) {
            if ( inputAdd.value.length > 21) {
                movieDB.movies.push(`${inputAdd.value.slice(0,21)}...`);
            } else {
                movieDB.movies.push( inputAdd.value);
            }
        
            if (inputCheck.checked == true) {
                console.log(`"Добавляем любимый фильм" - ${inputAdd.value}`);
            }
            loadMyMovies(movieDB.movies, promoList);
        }

        inputAdd.value = '';
    });
    
    // delBtn.forEach(btn => {
    //     btn.addEventListener('click', () => {
    //         console.log('fdsf');
    //     });
    // });
});


