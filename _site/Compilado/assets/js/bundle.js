(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
require('./partials.js');
require('./menu.js');

},{"./menu.js":2,"./partials.js":3}],2:[function(require,module,exports){
document.querySelector('#toggle').addEventListener('click' , () =>{

    document.querySelector('#toggle').classList.toggle("on");
    document.querySelector('.menu').classList.toggle("menu--show-mobile");
    document.querySelector('body').classList.toggle("no-scroll");

})
},{}],3:[function(require,module,exports){
let menu = document.querySelector('.menu');
let posthead = document.querySelector('.work-post-head');
let postcontent = document.querySelector('.work-post-content');
let pathName = window.location.pathname.split('/')[1];


fetch('partials__menu.html')
.then((data) => {
  return data.text();
})
.then((data) => {
  document.querySelector('.menu').innerHTML = data;

    document.querySelector('.menu__open-arrow').addEventListener('click' , () =>{
      menu.classList.toggle("menu--hide");
      menu.classList.toggle("menu--show");
      posthead.classList.toggle("work-post-head--normal");
      postcontent.classList.toggle("work-post-content--normal");
  })

let path =  document.querySelector(`a[href="/${pathName}"]`);

  if (path){
    document.querySelector(`a[href="/${pathName}"]`).classList.add("--selected");
  }
  else {
    document.querySelector(`a[href="/index.html"]`).classList.add("--selected");
  }
    
})  





},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy1tb2R1bGVzL21haW4uanMiLCJqcy1tb2R1bGVzL21lbnUuanMiLCJqcy1tb2R1bGVzL3BhcnRpYWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfXJldHVybiBlfSkoKSIsInJlcXVpcmUoJy4vcGFydGlhbHMuanMnKTtcbnJlcXVpcmUoJy4vbWVudS5qcycpO1xuIiwiZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZ2dsZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyAsICgpID0+e1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZ2dsZScpLmNsYXNzTGlzdC50b2dnbGUoXCJvblwiKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpLmNsYXNzTGlzdC50b2dnbGUoXCJtZW51LS1zaG93LW1vYmlsZVwiKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnRvZ2dsZShcIm5vLXNjcm9sbFwiKTtcblxufSkiLCJsZXQgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51Jyk7XG5sZXQgcG9zdGhlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud29yay1wb3N0LWhlYWQnKTtcbmxldCBwb3N0Y29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53b3JrLXBvc3QtY29udGVudCcpO1xubGV0IHBhdGhOYW1lID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCcvJylbMV07XG5cblxuZmV0Y2goJ3BhcnRpYWxzX19tZW51Lmh0bWwnKVxuLnRoZW4oKGRhdGEpID0+IHtcbiAgcmV0dXJuIGRhdGEudGV4dCgpO1xufSlcbi50aGVuKChkYXRhKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51JykuaW5uZXJIVE1MID0gZGF0YTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19vcGVuLWFycm93JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snICwgKCkgPT57XG4gICAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoXCJtZW51LS1oaWRlXCIpO1xuICAgICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKFwibWVudS0tc2hvd1wiKTtcbiAgICAgIHBvc3RoZWFkLmNsYXNzTGlzdC50b2dnbGUoXCJ3b3JrLXBvc3QtaGVhZC0tbm9ybWFsXCIpO1xuICAgICAgcG9zdGNvbnRlbnQuY2xhc3NMaXN0LnRvZ2dsZShcIndvcmstcG9zdC1jb250ZW50LS1ub3JtYWxcIik7XG4gIH0pXG5cbmxldCBwYXRoID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGFbaHJlZj1cIi8ke3BhdGhOYW1lfVwiXWApO1xuXG4gIGlmIChwYXRoKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBhW2hyZWY9XCIvJHtwYXRoTmFtZX1cIl1gKS5jbGFzc0xpc3QuYWRkKFwiLS1zZWxlY3RlZFwiKTtcbiAgfVxuICBlbHNlIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBhW2hyZWY9XCIvaW5kZXguaHRtbFwiXWApLmNsYXNzTGlzdC5hZGQoXCItLXNlbGVjdGVkXCIpO1xuICB9XG4gICAgXG59KSAgXG5cblxuXG5cbiJdfQ==
