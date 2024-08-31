// animateText

let { children: titles } = document.querySelector(".text-animate");
let txtsLen = titles.length;
let index = 0;
let textInTimer = 3000;
let textOutTimer = 2800;

function animateText() {
    for (let i = 0; i < txtsLen; i++) {
        titles[i].classList.remove("text-in", "text-out");
    }
    titles[index].classList.add("text-in");

    setTimeout(function () {
        titles[index].classList.add("text-out");
    }, textOutTimer);

    setTimeout(function () {
        if (index == txtsLen - 1) {
            index = 0;
        } else {
            index++;
        }
        animateText();
    }, textInTimer);
}

window.onload = animateText;

// viwe-more-button

$('.moreless-button').click(function () {
    $('.moretext').slideToggle();
    if ($('.moreless-button').text() == "View All") {
        $(this).text("View less")
    } else {
        $(this).text("View All")
    }
});

// owl-carousel-scroll

$('.owl-carousel').owlCarousel({
    loop: true,
    responsive: {
        0: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
})