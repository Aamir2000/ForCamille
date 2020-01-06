$(".Mobile_btn")[0].addEventListener("click", (e) => {
    let isVisible = $(".list_wrapper")[0].style.display == "block";
    if (!isVisible) {
        $(".list_wrapper").show();
    }
    else {
        $(".list_wrapper").hide();
    }
});
window.addEventListener("resize", (e) => {
    if (window.innerWidth > 740) {
        $(".list_wrapper").show();
    }
    else {
        $(".list_wrapper").hide();
    }
});
let audio = document.getElementById("backaud");
audio.play();
