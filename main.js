const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "<i class='bx bx-x'></i>";
    } else {
        navBtnImg.src = "<i class='bx bx-menu' ></i>";
    }
}

AOS.init();