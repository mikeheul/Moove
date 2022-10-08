window.addEventListener("DOMContentLoaded", (event) => {

    // console.log("DOM entièrement chargé et analysé");

    // -------------- VIDEO PLAY PAUSE ------------
    const video = document.querySelector('#video');
    const btnPlayPause = document.querySelector('.play');
    btnPlayPause.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            btnPlayPause.innerHTML = "<i class='fa-solid fa-pause'></i>";
        } else {
            video.pause();
            btnPlayPause.innerHTML = "<i class='fa-solid fa-play'></i>";
        }
    });

    // -------------- SWIPER CLIENTS ------------
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 6,
        spaceBetween: 60,
        loop: true,
        autoplay: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 50,
            },
            1800: {
                slidesPerView: 6,
                spaceBetween: 60,
            }
        },
    });

    // -------------- COUNT UP STATS ------------
    $(document).ready(function ($) {
        $('.count-number').counterUp({
            delay: 3,
            time: 1000
        });
    });

    // -------------- FILTER GALLERY ------------
    let sortBtn = document.querySelector('.filter-menu').children;
    let sortItem = document.querySelector('.filter-item').children;

    for (let i = 0; i < sortBtn.length; i++) {
        sortBtn[i].addEventListener('click', function () {
            for (let j = 0; j < sortBtn.length; j++) {
                sortBtn[j].classList.remove('current');
            }

            this.classList.add('current');

            let targetData = this.getAttribute('data-target');

            for (let k = 0; k < sortItem.length; k++) {
                sortItem[k].classList.remove('active');
                sortItem[k].classList.add('delete');

                if (sortItem[k].getAttribute('data-item') == targetData || targetData == "all") {
                    sortItem[k].classList.remove('delete');
                    sortItem[k].classList.add('active');
                }
            }
        });
    }
})