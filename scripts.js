function shakeIt(a){
  $(a).removeClass('bounceInUp').toggleClass('headShake');
}
$('.menu-child').hover( function(){
  shakeIt(this);
    // adds shake on hover for .menu-child
});
function rgb2hex(rgb) {
  // rgb to hex conversion because .css() returns rgb even though the css states a hex code
    if (/^#[0-9A-F]{6}$/i.test(rgb)) return rgb;

    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}
function getPage(file, bar) {
  $.get(file , function(data) {
  $(".selected").html(data).delay(120).fadeIn();
  document.title = "I am Lit.io | " + bar;
  history.pushState(file, null, file);
});
}
function backHome() {
  $('.menu-child').delay(750).addClass('bounceInUp');
  $('.menu, .menu-child').show();
  themeColor('#032D7F');
}
function themeColor(color){
  $('meta[name=theme-color]').remove();
  $('head').append('<meta name="theme-color" content="'+color+'">');
  $('.table').css('background', color);
}

(function(){

  "use strict";

  var container = document.querySelector('.menu-wrapper'),
    content = document.querySelector('.selected'),
    defaultTitle = "I am Lit";
  function requestContent(file, bg){
    $.get(file , function(data) {
    $(".selected").html(data);
    $('.menu, .menu-child').hide();
    themeColor(bg);
  });
  }

  container.addEventListener('click', function(e){
    if(e.target != e.currentTarget){
      e.preventDefault();
      var data = e.target.getAttribute('data-name'),
        url = data + ".html";
      var color = e.target.getAttribute('data-color');
      history.pushState(data, null, url);
      requestContent(url, color);
      document.title = "I am Lit.io | " + data;
    }
    e.stopPropagation();
  }, false);


  window.addEventListener('popstate', function(e){
    var page = e.state;

    if (page === null) {
      content.innerHTML = " ";
      document.title = defaultTitle;
      backHome();
    } else {
      requestContent(page + ".html");
      document.title = "I am Lit.io | " + character;
    }
  });
})();



function is_touch() {
  return 'ontouchstart' in window || navigator.maxTouchPoints;       // navigator.maxTouchPoints works on IE10/11 and Surface
}

if(is_touch()){
  if (window.DeviceOrientationEvent){
    window.addEventListener('deviceorientation', function () {
    }, true);
  }
window.ondeviceorientation = function(event) {
function moveBackground2() {

  var accX = (10 * event.gamma)/100,
    accY = (10 * event.beta - 10)/100,
		Ax = 0,
    Ay = 0,
    movement = 5;

    Ax += ((accX - Ax) * movement);
    Ay += ((accY - Ay) * movement);
var  a = (Ax - Ax*2)/3,
  b = (Ay - Ay*2)/3;

  translate = 'translate(' + Ax + 'px, ' + -Ay + 'px) scale(1.1)';
  translate2 = 'translate(' + -Ax + 'px, ' + -Ay + 'px)';
  shadow = a + 'px ' + -b + 'px 1px 0px rgba(0,0,0,0.55)';

  $('.menu').css({
    '-webkit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });
  $('.shadow').css({
    '-webkit-box-shadow': shadow,
    '-moz-box-shadow': shadow,
    'box-shadow': shadow
  });
  $('.menu .logo').css({
    '-webit-transform': translate2,
    '-moz-transform': translate2,
    'transform': translate2
  });

 // window.requestAnimationFrame(moveBackground2);
}
moveBackground2();
};
}
else {
  var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 20;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;
var  a = (x - x*2)/3,
  b = (y - y*2)/3;

  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';
  translate2 = 'translate3d(' + -x + 'px, ' + -y + 'px, 0px) scale(1.1)';
  shadow = a.toFixed(0) + 'px ' + b.toFixed(0) + 'px 10px 0px rgba(0,0,0,0.55)';

  $('.menu').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });
  $('.shadow').css({
    '-webkit-box-shadow': shadow,
    '-moz-box-shadow': shadow,
    'box-shadow': shadow
  });
  $('.menu-child .logo').css({
    '-webit-transform': translate2,
    '-moz-transform': translate2,
    'transform': translate2
  });

  window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;

});
  moveBackground();
}
