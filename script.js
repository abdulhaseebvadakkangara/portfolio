let timer = null
const initSlideShow = (e) => {
    let slideIndex = 0;
    const ele = e.querySelectorAll(".slide img")

    timer = setInterval(() => {
        for (i = 0; i < ele.length; i++) {
            ele[i].style.display = "none";
          }
        ele[slideIndex].style.display = "block";
        if (slideIndex >= ele.length - 1) slideIndex = 0
        else slideIndex += 1
    }, 700);
}
const clearSlideShow = () => {
    clearInterval(timer)
}
let menuFlag = false
const menu = document.getElementById("menu-div")
const defaultMenu = document.getElementById("default-menu")
const opened = document.getElementById("opened-menu")
function collapseMenu() {
    menuFlag=!menuFlag
    if (menuFlag) {
        opened.style.display="flex"
        defaultMenu.style.display="none"
        menu.style.display = "flex"
    }else{
        opened.style.display="none"
        defaultMenu.style.display="block"
        menu.style.display = "none"
    }
}