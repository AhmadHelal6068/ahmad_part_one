let menu = document.querySelector("#menu-bar");
let navBar = document.querySelector(".navbar");
menu.onclick = () =>{
    menu.classList.toggle("fa-times");
    navBar.classList.toggle("active");
}
window.onscroll = () =>{
    menu.classList.remove("fa-times");
    navBar.classList.remove("active");
}


let slids = document.querySelectorAll(".slide-container");
let index = 0;
function next(){
    slids[index].classList.remove("active");
    index = (index + 1) % slids.length;
    slids[index].classList.add("active");
}
function prev(){
    slids[index].classList.remove("active");
    index = (index - 1 + slids.length) % slids.length;
    slids[index].classList.add("active");
}


document.querySelectorAll(".featured-img-1").forEach(img_1 =>{
    img_1.addEventListener("click", () =>{
        var src = img_1.getAttribute("src");
        document.querySelector(".big-img-1").src = src;
    })
})

document.querySelectorAll(".featured-img-2").forEach(img_2 =>{
    img_2.addEventListener("click", () =>{
        var src = img_2.getAttribute("src");
        document.querySelector(".big-img-2").src = src;
    })
})

document.querySelectorAll(".featured-img-3").forEach(img_3 =>{
    img_3.addEventListener("click", () =>{
        var src = img_3.getAttribute("src");
        document.querySelector(".big-img-3").src = src;
    })
})