document.querySelector('#toggle').addEventListener('click' , () =>{

    document.querySelector('#toggle').classList.toggle("on");
    document.querySelector('.menu').classList.toggle("menu--show-mobile");
    document.querySelector('body').classList.toggle("no-scroll");

})