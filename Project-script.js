//Форма обратной связи

function sendDataSuccess() {
    window.alert('Data is successfully sent');
}

function closeModalWin() {
    darkLayer.parentNode.removeChild(darkLayer); // удаляем затемнение
    modalWin.style.display = 'none'; // делаем окно невидимым
}

function successClose() {
    setTimeout(() => {
        console.log('success');
    }, 3000);
    //closeModalWin();
}
function showModalWin() {
    var darkLayer = document.createElement('div'); // слой затемнения
    darkLayer.id = 'shadow'; // id чтобы подхватить стиль
    document.body.appendChild(darkLayer); // включаем затемнение

    var modalWin = document.querySelector('.modalwin'); // находим наше "окно"
    modalWin.style.display = 'flex'; // "включаем" его

    darkLayer.onclick = closeModalWin;
}

//Выпадающее меню
function toggleMenu() {
    document.querySelector(".header_nav_ul").classList.toggle('show');
}

window.onclick = function (e) {
    if (!e.target.matches('.menu-bar_dropdown')) {
        var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}