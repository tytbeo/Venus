var app = angular.module('myApp',['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "html/home.html",
    controller : "homeCtrl"
  })
  .when("/gallery", {
    templateUrl : "html/gallery.html",
    controller : "galleryCtrl"
  })
  .when("/products", {
    templateUrl : "html/products.html",
    controller : "productsCtrl"
  })
  .when("/aboutus", {
    templateUrl : "html/aboutus.html",
    controller : "aboutusCtrl"
  })
  .when("/contactus", {
    templateUrl : "html/contactus.html",
    controller : "contactusCtrl"
  });
});

app.controller('homeCtrl',['$scope', function($scope){
  $(document).ready(function() {

    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 5,
      dots: false,
      nav: true,
      navText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>"
      ],
      autoplay: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 4
        }
      }
    });
  });
}]);
app.controller('galleryCtrl',['$scope', function($scope){
  $(document).ready(function() {

    $(".filter-button").on('click' ,function() {
      var value = $(this).attr('data-filter');
      $(".filter-button").removeClass("actives");
      $(this).addClass("actives");
      if (value == "all") {
        //$('.filter').removeClass('hidden');
        $('.filter').show('1000');
      } else {
        //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
        //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
        $(".filter").not('.' + value).hide('slow');
        $('.filter').filter('.' + value).show('slow');

      }
    });
  });
} ]);
