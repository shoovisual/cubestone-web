/* =============================================================================
-----------------------------  Button scroll up   ------------------------------
============================================================================= */

$(document).ready(function () {
    "use strict";

    var progressPath = document.querySelector(".progress-wrap path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = "stroke-dashoffset 10ms linear";
    var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength) / height;
        progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 150;
    var duration = 550;
    jQuery(window).on("scroll", function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery(".progress-wrap").addClass("active-progress");
        } else {
            jQuery(".progress-wrap").removeClass("active-progress");
        }
    });
    jQuery(".progress-wrap").on("click", function (event) {
        event.preventDefault();
        jQuery("html, body").animate({ scrollTop: 0 }, duration);
        return false;
    });
});

// logo-slide
$(document).ready(function () {
    $(".client-slider").slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: false,
        lazyLoad: "ondemand",
        dots: false,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    });
});

const textContainer = document.getElementById("text-container");

let currentIndex = 0;
const words = ["Brand", "Business", "Company"];

setInterval(() => {
    currentIndex = (currentIndex + 1) % words.length;
    textContainer.textContent = words[currentIndex];
}, 2000); // Change interval in milliseconds (2 seconds in this example)
