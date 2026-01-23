

if ($(window).width() >= 1024) {
    $(document).ready(function (e) {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= $('.topic').offset().top) {
                $(".categories").css({ opacity: "5", transition: "all 2s ease" }, 1000);
            }
            else {

                $(".categories").css({ opacity: "0", transition: "all 2s ease" });

            }
        });
    });
}



$(document).ready(function (e) {
    $(window).scroll(function () {
        //if($(window).scrollTop() >= $('.menu_v ').offset().top){
        $('.right carousel-control').click();

        //								   }
    });
});


$(document).ready(function (e) {
    $(window).scroll(function () {
        $(".show-icons").click(function () {
            $(".all-ioc").toggleClass("active");
        });
    });
});


if ($(window).width() <= 767) {
    $(document).ready(function (e) {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= $('.slider').offset().top) {
                $(".topic").css({ opacity: "1", transition: "all 2s ease" }, 1000);
            }
            else {

                $(".topic").css({ opacity: "0", transition: "all 2s ease" });

            }
        });
    });
}



if ($(window).width() >= 1024) {
    $(document).ready(function (e) {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= $('.slider').offset().top) {
                $(".topic").css({ opacity: "5", transition: "all 2s ease" }, 1000);
            }
            else {

                $(".topic").css({ opacity: "0", transition: "all 2s ease" });

            }
        });
    });
}



if ($(window).width() <= 767) {
    $(document).ready(function (e) {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= $('.categories').offset().top) {
                $(".topic").css({ opacity: "5", transition: "all 2s ease" }, 1000);
            }
            else {

                $(".topic").css({ opacity: "0", transition: "all 2s ease" });

            }
        });
    });
}


let started = false;
// Function Started ? No window.onscroll = function ()
$(window).scroll(function () {

    let nums = document.querySelectorAll(".counter-number");

    if ($(window).scrollTop() >= $('.navbar').offset().top) {

        if (!started) { nums.forEach((num) => startCount(num)); } started = true;
    }
});


function startCount(el) {
    let target = el.dataset.target;
    let ourcounter = setInterval(() => { el.textContent++; if (el.textContent == target) { clearInterval(ourcounter); } }, 4000 / target);
}


$(window).scroll(function () {

    if ($(window).scrollTop() >= $('.navbar').offset().top) {

        const swiper = new Swiper(".mySwiper", {

            // Optional parameters



            autoplay: {
                delay: 6000,
            },


            direction: 'horizontal',

            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // And if we need scrollbar

        });

    }
});




$(window).scroll(function () {

    if ($(window).scrollTop() >= $('.navbar').offset().top) {

        const swiper = new Swiper(".swiperpricecard", {
            // Optional parameters
            autoplay: {
                delay: 20000,
            },
            direction: "horizontal",
            speed: 800,
            loop: true,

            // If we need pagination
            pagination: {
                el: ".swiper-pagination",
            },

            // Navigation arrows
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },

            // And if we need scrollbar
            scrollbar: {
                el: ".swiper-scrollbar",
            },
            slidesPerView: 1,
            spaceBetween: 30,
            breakpoints: {
                750: {
                    slidesPerView: 2,
                },
                999: {
                    slidesPerView: 4,
                },
            },
        });



    }
});





$(window).scroll(function () {

    if ($(window).scrollTop() >= $('.navbar').offset().top) {

        const swiper = new Swiper(".swiperpartner", {
            // Optional parameters

            direction: "horizontal",
            speed: 800,
            loop: true,

            // If we need pagination
            pagination: {
                el: ".swiper-pagination",
            },

            // Navigation arrows
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },

            // And if we need scrollbar
            scrollbar: {
                el: ".swiper-scrollbar",
            },
            slidesPerView: 1,
            spaceBetween: 30,
            breakpoints: {
                750: {
                    slidesPerView: 2,
                },
                999: {
                    slidesPerView: 3,
                },
            },
        });



    }
});














$(window).scroll(function () {

    if ($(window).scrollTop() >= $('.cards').offset().top) {

        var owl = $('.slide-one-item');

        $('.slide-one-item').owlCarousel({
            center: false,
            items: 1,
            loop: true,
            stagePadding: 0,
            margin: 0,
            smartSpeed: 1500,
            autoplay: false,
            dots: false,
            nav: false,
            navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
        });

        $('.thumbnail li').each(function (slide_index) {
            $(this).click(function (e) {
                owl.trigger('to.owl.carousel', [slide_index, 1500]);
                e.preventDefault();
            })
        })

        owl.on('changed.owl.carousel', function (event) {
            $('.thumbnail li').removeClass('active');
            $('.thumbnail li').eq(event.item.index - 2).addClass('active');
        })

    }
})


if ($(window).width() >= 1024) {
    $(document).ready(function (e) {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= $('.topic').offset().top) {
                $(".form").css({ opacity: "5", transition: "all 2s ease" }, 1000);
            }
            else {

                $(".form").css({ opacity: "0", transition: "all 2s ease" });

            }
        });
    });
}



if ($(window).width() <= 767) {
    $(document).ready(function (e) {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= $('.topic').offset().top) {
                $(".form").css({ opacity: "5", transition: "all 2s ease" }, 1000);
            }
            else {

                $(".form").css({ opacity: "0", transition: "all 2s ease" });

            }
        });
    });
}







if ($(window).width() >= 1024) {
    $(document).ready(function (e) {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= $('#cat').offset().top) {
                $("#cat").animate({ opacity: "1", left: "10px", transition: "all 2s ease" }, 1000);
            }
        });
    });
}






if ($(window).width() <= 767) {
    $(document).ready(function (e) {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= $('#cat').offset().top) {
                $("#cat").css({ opacity: "1", transition: "all 2s ease" }, 1000);
            }

            else {

                $("#cat").css({ opacity: "0", transition: "all 2s ease" }, 1000);

            }

        });
    });
}







function shut() {


    document.getElementById('shuttle').style = 'background-image:url(../img/shuttle.png);'


}




if ($(window).width() <= 767) {

    $(document).ready(function (e) {
        $("#shuttle").click(function () {
            $("#shuttle").animate({ top: "-10000px" }, 9000);

        });
    });
}





$(document).ready(function (e) {
    $(".up").click(function () {

        $("html,body").animate({ scrollTop: $('#up').offset().top }, 5000);

    });
});



$(document).ready(function (e) {
    $(".loadingbg").delay(1000).fadeOut()

});


$(document).ready(function (e) {
    $('.Number_static').counterUp({
        delay: 10,
        time: 7000
    });
});


$(document).ready(function () {
    $("#loader").delay(3500).fadeOut("fast");
});




if ($(window).width() >= 767) {

    $(document).ready(function (e) {
        $("#shuttle").click(function () {
            $("#shuttle").animate({ top: "-10000px" }, 9000);

        });
    });
}




if ($(window).width() >= 1024) {

    $(document).ready(function (e) {
        $("#shuttle").click(function () {
            $("#shuttle").animate({ top: "-10000px" }, 20000);


        });
    });
}


const links = document.querySelectorAll('.navlink');

if (links.length) {
    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            links.forEach((link) => {
                link.classList.remove('active');
            });
            // e.preventDefault();
            link.classList.add('active');
        });
    });
}


const images = document.querySelectorAll('img');

if (images.length) {

    images.forEach((images) => {
        images.setAttribute("alt", "websitetitle");
    });

}


jQuery(document).ready(function ($) {

    $(window).scroll(function () {
        if ($(window).scrollTop() >= $('.cards').offset().top) {
            var carousel = function () {
                $('.featured-carousel').owlCarousel({
                    loop: true,
                    autoplay: true,
                    stagePadding: 0,
                    margin: 5,
                    animateOut: 'fadeOut',
                    animateIn: 'fadeIn',
                    nav: true,
                    dots: true,
                    autoplayHoverPause: false,
                    items: 1,
                    navText: ["<span class='ion-ios-arrow-back'></span>", "<span class='ion-ios-arrow-forward'></span>"],
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 2
                        },
                        1000: {
                            items: 4
                        }
                    }
                });

            };
            carousel();
        };
    });
});









function CG() {

    //document.getElementById('alert').style.display="none"
    document.querySelector('#Gallery').style.display = 'block';
    document.querySelector('.fultopic').style.display = 'none'

}






// $(document).ready(function (e) {
//     $(window).scroll(function () {
//         $(".show-icons").click(function () {
//             $(".all-ioc").toggleClass("active");
//         });
//     });
// });


