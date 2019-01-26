var btnPlay = document.querySelector(".btn");
var btnPause = document.querySelector('.btnPause');
var btnRestart = document.querySelector('.btnRestart');
var count = 0;
var segments = {
    first: [0, 24],
    second: [24, 45],
    third: [45, 68]
};

var animation = bodymovin.loadAnimation({
    container: document.getElementById("lottie"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "UsePencil_AnimOn.json",
});

animation.setSpeed(0.30);

btnPlay.addEventListener('click', function () {
    count++;

    if (count === 1) {
        this.innerHTML = '<i class="fas fa-play"></i>';
        hideBtn();
        animation.playSegments(segments.first, false);
        showBtn();

    } else if (count === 2) {
        hideBtn();
        animation.playSegments(segments.second, false);
        showBtn();

    } else if (count === 3) {
        hideBtn();
        animation.playSegments(segments.third, false);
        count = 0;
        this.innerHTML = '<i class="fas fa-reply"></i>';
        showBtn();
    }

});


var hideBtn = function () {
    btnPlay.style.display = "none";
};

var showBtn = function () {
    setTimeout(function () {
        btnPlay.style.display = "inline-block";
    }, 1500);
};
