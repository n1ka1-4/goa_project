const quest = document.querySelectorAll(".quest");
const textQuest = document.querySelectorAll(".text-quest");
const homeCheck = document.querySelector(".home-check");
const homeScroll = document.querySelector(".home-scroll");
const coursesScroll = document.querySelector(".courses-scroll");
const builtScroll = document.querySelector(".built-scroll");
const contactScroll = document.querySelector(".contact-scroll");
const more = document.querySelectorAll(".courses-to button");

homeScroll.addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: "smooth"});
});

coursesScroll.addEventListener("click", () => {
    window.scrollTo({top: 703, behavior: "smooth"});
});

builtScroll.addEventListener("click", () => {
    window.scrollTo({top: 1406, behavior: "smooth"});
});

contactScroll.addEventListener("click", () => {
    window.scrollTo({top: 2109, behavior: "smooth"});
});

more.forEach((m) => {
    m.addEventListener("click", () => {
        window.scrollTo({top: 2109, behavior: "smooth"});
    });
});

quest.forEach((q, i) => {
    q.addEventListener("click", () => {
        if (!textQuest[i].classList.contains("hidden")) {
            textQuest[i].classList.add("hidden");
        } else {
            textQuest.forEach((t) => {
                t.classList.add("hidden");
            });
            textQuest[i].classList.remove("hidden");
        }
    });
});

homeCheck.addEventListener("click", () => {
    window.scrollBy({top: 703, behavior: "smooth"});
});
