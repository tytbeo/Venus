

// function to show product description with Read more / Less button
function readMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("moreBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  }
  else {
    dots.style.display = "none";
    btnText.innerHTML = "Less";
    moreText.style.display = "inline";
  }
};

// function to show all product description
function showAllText() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("moreBtn");

  dots.style.display = "none";
  moreText.style.display = "inline";
};

// set which function of product description to show based on screen size
function screen_resize() {
  var h = parseInt(window.innerHeight);
  var w = parseInt(window.innerWidth);

  if (w <= 768) {
    //max-width 768px
    // actions: call function
    readMore();
  }
  else {
    showAllText();
  }
}

// if window resize call responsive function
$(window).resize(function(e) {
  screen_resize();
});
// call responsive function on default
$(document).ready(function(e) {
  screen_resize();
});


// jQuery
$(document).ready(function() {
  // show submenu (header)
  $('#mainmenu li').click(function() {
    submenu = $(this).data('submenu');
    $('.submenu.' + submenu).fadeToggle();
  })

  var basePrice = 19.95;
  $('.quantity').on('change', function() {
    quantity = $(this).val();

    price = basePrice;
    console.log(price);
    $('.price h1').text('$' + (price * quantity).toFixed(2));
  })

  // slick slider syncing js library
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });

  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });
})
// End of jQuery
