var app = angular.module('myApp',['ui.router','ui.bootstrap']);

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
app.controller('productsCtrl',['$scope', function($scope){
  var product = [
    {class:'teapot',name:'BLUE GLAZE TEAPOT SET  3',img:'images/product/product1.jpg'},
    {class:'teapot',name:'BLUE GLAZE TEAPOT SET',img:'images/product/product2.jpg'},
    {class:'teapot',name:'CERAMIC PITCHER SET 1',img:'images/product/product3.jpg'},
    {class:'teapot',name:'CERAMIC PITCHER SET 3',img:'images/product/product10.jpg'},
    {class:'vase',name:'CERAMIC VASE',img:'https://cb2.scene7.com/is/image/CB2/SurReactiveVaseSHS19/?$web_product_hero$&180917104904&wid=625&hei=625'},
    {class:'vase',name:'BLUE GLAZE VASE',img:'images/product/product6.jpg'},
    {class:'vase',name:'PINK & BLUE FLOWER VASE',img:'images/product/product7.jpg'},
    {class:'vase',name:'CERAMIC FLOWER VASE',img:'images/product/product8.jpg'},
    {class:'teacup',name:'BLUE GLAZE TEA CUP SET',img:'images/product/product5.jpg'},
    {class:'teacup',name:'BLUE GLAZE TEA CUP SET',img:'images/product/product5.jpg'},
    {class:'teacup',name:'BLUE GLAZE TEA CUP SET',img:'images/product/product5.jpg'},
    {class:'teacup',name:'BLUE GLAZE TEA CUP SET',img:'images/product/product5.jpg'},
    {class:'teacup',name:'BLUE GLAZE TEA CUP SET',img:'images/product/product5.jpg'},
    {class:'teacup',name:'BLUE GLAZE TEA CUP SET',img:'images/product/product5.jpg'},
    {class:'teacup',name:'BLUE GLAZE TEA CUP SET',img:'images/product/product5.jpg'},
    {class:'teacup',name:'BLUE GLAZE TEA CUP SET',img:'images/product/product5.jpg'},
    {class:'teacup',name:'BLUE GLAZE TEA CUP SET',img:'images/product/product5.jpg'},
  ]
  $scope.products = product;
  $scope.page = 1;
  $('document').ready(function(){
    $('.submenu').addClass('none');
    $('.dropdown-toggle').on('click',function(){
      $('.submenu').toggleClass('none');
    });
  });
}]);
