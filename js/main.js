$(document).ready(function(){
  // carousel
  var $item = $('.carousel .item');
  var $wHeight = $(window).height();
  $item.eq(0).addClass('active');
  $item.height($wHeight);
  $item.addClass('full-screen');

  $('.carousel img').each(function() {
  var $src = $(this).attr('src');
  var $color = $(this).attr('data-color');
  $(this).parent().css({
    'background-image' : 'url(' + $src + ')',
    'background-color' : $color
  });
  $(this).remove();
  });

  $(window).on('resize', function (){
  $wHeight = $(window).height();
  $item.height($wHeight);
  });

  $('.carousel').carousel({
  interval: 6000,
  pause: "false"
  });

  // navbar active item
  $(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
 });
});


// zoom in on product pictures
// first product picture
var modal = document.getElementById('myModal');

var img = document.getElementById('image');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}
// second product picture
var modal2 = document.getElementById('myModal2');

var img2= document.getElementById('image2');
var modalImg2 = document.getElementById("img02");
var captionText2 = document.getElementById("caption2");
img2.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}
// third product picture
var modal3 = document.getElementById('myModal3');

var img3= document.getElementById('image3');
var modalImg3 = document.getElementById("img03");
var captionText3 = document.getElementById("caption3");
img3.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}
// fourth product picture
var modal4 = document.getElementById('myModal4');

var img4= document.getElementById('image4');
var modalImg4 = document.getElementById("img04");
var captionText4 = document.getElementById("caption4");
img4.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}
// fifth product picture
var modal5 = document.getElementById('myModal5');

var img5= document.getElementById('image5');
var modalImg5 = document.getElementById("img05");
var captionText5 = document.getElementById("caption5");
img5.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}
