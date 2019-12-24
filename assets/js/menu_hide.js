let menu = document.querySelector('.menu');
let posthead = document.querySelector('.work-post-head');
let postcontent = document.querySelector('.work-post-content');

window.onscroll = () =>{
    menu.classList.add("menu--hide");
    posthead.classList.add("work-post-head--normal");
    postcontent.classList.add("work-post-content--normal");
    window.onscroll = null;
};

document.querySelector('.menu__open-arrow').addEventListener('click' , () =>{
    menu.classList.toggle("menu--hide");
    menu.classList.toggle("menu--show");
    posthead.classList.toggle("work-post-head--normal");
    postcontent.classList.toggle("work-post-content--normal");
})
