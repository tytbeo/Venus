var app = angular.module('myApp',['ui.router']);

app.config(function($stateProvider,$urlRouterProvider) {
  $urlRouterProvider.otherwise('/home')
  $stateProvider
  .state("home", {
    url: '/home',
    templateUrl : "html/home.html",
    controller : "homeCtrl"
  })
  .state("gallery", {
    url: '/gallery',
    templateUrl : "html/gallery.html",
    controller : "galleryCtrl"
  })
  .state("products", {
    url: '/products',
    templateUrl : "html/products.html",
    controller : "productsCtrl"
  })
  .state("aboutus", {
    url: '/aboutus',
    templateUrl : "html/aboutus.html",
    controller : "aboutusCtrl"
  })
  .state("contactus", {
    url: '/contactus',
    templateUrl : "html/contactus.html",
    controller : "contactusCtrl"
  });
});

app.controller('mainCtrl',['$scope', function($scope){

}]);
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
