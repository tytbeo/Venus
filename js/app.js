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
  })
  .state('details', {
        url: "/details/:ProductId",
        templateUrl : 'html/details.html',
        controller : "detailsCtrl",
        params: {
            ProductId : null
        },
    });
});
app.controller('mainCtrl',['$scope', function($scope){

}]);
app.controller('homeCtrl',['$scope','$rootScope', function($scope,$rootScope){
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
        400: {
          items: 2
        },
        767: {
          items: 3
        },
        1023: {
          items: 4
        },
        1300: {
          items: 5
        }
      }
    });
  });
}]);
app.controller('galleryCtrl',['$scope','$rootScope', function($scope,$rootScope){
  var tag = [{tagName:'teapot'},{tagName:'ceramic'},{tagName:'vase'},{tagName:'teacup'},{tagName:'glass'},{tagName:'candle'},{tagName:'home-decor'},{tagName:'wood'},{tagName:'table-wares'},{tagName:'decorative-object'}]
  $scope.tags = tag;
  var product = [
    {class:'teapot ceramic',name:'BLUE GLAZE TEAPOT SET  3',img:'images/product/product1.jpg'},
    {class:'teapot ceramic',name:'BLUE GLAZE TEAPOT SET',img:'images/product/product2.jpg'},
    {class:'teapot ceramic',name:'CERAMIC PITCHER SET 1',img:'images/product/product3.jpg'},
    {class:'teapot ceramic',name:'CERAMIC PITCHER SET 3',img:'images/product/product10.jpg'},
    {class:'vase ceramic',name:'CERAMIC VASE',img:'https://cb2.scene7.com/is/image/CB2/SurReactiveVaseSHS19/?$web_product_hero$&180917104904&wid=625&hei=625'},
    {class:'vase ceramic',name:'BLUE GLAZE VASE',img:'images/product/product6.jpg'},
    {class:'vase ceramic',name:'PINK & BLUE FLOWER VASE',img:'images/product/product7.jpg'},
    {class:'vase ceramic',name:'CERAMIC FLOWER VASE',img:'images/product/product8.jpg'},
    {class:'teacup ceramic',name:'BLUE GLAZE TEA CUP SET',img:'images/product/product5.jpg'},
    {class:'teacup ceramic',name:'black cup',img:'images/product/coc2.jpg'},
    {class:'vase ceramic',name:'flower vase ',img:'images/product/vase.jpg'},
    {class:'candle',name:'golden candle holder',img:'images/candle accessories/Candle1.jpg'},
    {class:'candle',name:'Nelumbo nucifera candle holder',img:'images/candle accessories/Candle2.jpg'},
    {class:'candle',name:'glass candle keeper',img:'images/candle accessories/Candle3.jpg'},
    {class:'candle',name:'glass vase candle holder',img:'images/candle accessories/Candle4.jpg'},
    {class:'candle',name:'grapple candle',img:'images/candle accessories/Candle5.jpg'},
    {class:'candle',name:'lantern candle',img:'images/candle accessories/Candle6.jpg'},
    {class:'glass home-decor',name:'Buoy glass grid vase',img:'images/GLASS/glass1,Buoy glass grid vase.jpg'},
    {class:'glass',name:'Profile coupe cocktail glass',img:'images/GLASS/glass2, Profile coupe cocktail glass.jpg'},
    {class:'glass',name:'5-minute turquoise hour glass',img:'images/GLASS/glass3, 5-minute turquoise hour glass.jpg'},
    {class:'glass',name:'Surge black and white glass vase',img:'images/GLASS/glass4, Surge black and white glass vase.jpg'},
    {class:'glass',name:'Mars glass pitcher',img:'images/GLASS/glass5,Mars glass pitcher.jpg'},
    {class:'home-decor',name:'lovely fur pillow',img:'images/Home Decor/16 loves you faux fur pillow with down-alternative insert.jpg'},
    {class:'home-decor',name:'Loves neon red',img:'images/Home Decor/Loves neon red.jpg'},
    {class:'home-decor',name:'Nassa basket pendant light',img:'images/Home Decor/Nassa basket pendant light.jpg'},
    {class:'home-decor',name:'golden barrel cactus',img:'images/Home Decor/Potted 6 faux golden barrel cactus.jpg'},
    {class:'Tables-wares',name:'Custome Wedding Table',img:'images/Tables wares/Custome Wedding Table.jpg'},
    {class:'Tables-wares',name:'Retro Serving Tray',img:'images/Tables wares/Retro Serving Tray.jpg'},
    {class:'Tables-wares',name:'stunning vintage plate',img:'images/Tables wares/stunning vintage French Limoges porcelain decorative collectable plate.jpg'},

  ]
  $rootScope.products = product;
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
app.controller('productsCtrl',['$scope','$rootScope', function($scope,$rootScope){
  var product = [
    {class:'teapot ceramic',name:'BLUE GLAZE TEAPOT SET  3',img:'images/product/product1.jpg'},
    {class:'teapot ceramic',name:'BLUE GLAZE TEAPOT SET',img:'images/product/product2.jpg'},
    {class:'teapot ceramic',name:'CERAMIC PITCHER SET 1',img:'images/product/product3.jpg'},
    {class:'teapot ceramic',name:'CERAMIC PITCHER SET 3',img:'images/product/product10.jpg'},
    {class:'vase ceramic',name:'CERAMIC VASE',img:'https://cb2.scene7.com/is/image/CB2/SurReactiveVaseSHS19/?$web_product_hero$&180917104904&wid=625&hei=625'},
    {class:'vase ceramic',name:'BLUE GLAZE VASE',img:'images/product/product6.jpg'},
    {class:'vase ceramic',name:'PINK & BLUE FLOWER VASE',img:'images/product/product7.jpg'},
    {class:'vase ceramic',name:'CERAMIC FLOWER VASE',img:'images/product/product8.jpg'},
    {class:'teacup ceramic',name:'BLUE GLAZE TEA CUP SET',img:'images/product/product5.jpg'},
    {class:'teacup ceramic',name:'black cup',img:'images/product/coc2.jpg'},
    {class:'vase ceramic',name:'flower vase ',img:'images/product/vase.jpg'},
    {class:'candle',name:'golden candle holder',img:'images/candle accessories/Candle1.jpg'},
    {class:'candle',name:'Nelumbo nucifera candle holder',img:'images/candle accessories/Candle2.jpg'},
    {class:'candle',name:'glass candle keeper',img:'images/candle accessories/Candle3.jpg'},
    {class:'candle',name:'glass vase candle holder',img:'images/candle accessories/Candle4.jpg'},
    {class:'candle',name:'grapple candle',img:'images/candle accessories/Candle5.jpg'},
    {class:'candle',name:'lantern candle',img:'images/candle accessories/Candle6.jpg'},
    {class:'glass home-decor',name:'Buoy glass grid vase',img:'images/GLASS/glass1,Buoy glass grid vase.jpg'},
    {class:'glass',name:'Profile coupe cocktail glass',img:'images/GLASS/glass2, Profile coupe cocktail glass.jpg'},
    {class:'glass',name:'5-minute turquoise hour glass',img:'images/GLASS/glass3, 5-minute turquoise hour glass.jpg'},
    {class:'glass',name:'Surge black and white glass vase',img:'images/GLASS/glass4, Surge black and white glass vase.jpg'},
    {class:'glass',name:'Mars glass pitcher',img:'images/GLASS/glass5,Mars glass pitcher.jpg'},
    {class:'home-decor',name:'lovely fur pillow',img:'images/Home Decor/16 loves you faux fur pillow with down-alternative insert.jpg'},
    {class:'home-decor',name:'Loves neon red',img:'images/Home Decor/Loves neon red.jpg'},
    {class:'home-decor',name:'Nassa basket pendant light',img:'images/Home Decor/Nassa basket pendant light.jpg'},
    {class:'home-decor',name:'golden barrel cactus',img:'images/Home Decor/Potted 6 faux golden barrel cactus.jpg'},
    {class:'Tables-wares',name:'Custome Wedding Table',img:'images/Tables wares/Custome Wedding Table.jpg'},
    {class:'Tables-wares',name:'Retro Serving Tray',img:'images/Tables wares/Retro Serving Tray.jpg'},
    {class:'Tables-wares',name:'stunning vintage plate',img:'images/Tables wares/stunning vintage French Limoges porcelain decorative collectable plate.jpg'},

  ]
  $rootScope.products = product;
  $scope.page = 1;
  $('document').ready(function(){
    $('.submenu').addClass('none');
    $('.dropdown-toggle').on('click',function(){
      $('.submenu').toggleClass('none');
    });
  });
}]);
app.controller('aboutusCtrl',['$scope', function($scope){
  $(document).ready(function() {
    $(".getValue").on('click' ,function() {
      var valueS = $(this).attr('data-toggle');
      $('.collapse').not("#" + valueS).removeClass('show',1000);
      $('.collapse').filter("#" + valueS).addClass('show',1000);
    });
  });
}]);
app.controller('detailsCtrl',['$scope', '$stateParams',function($scope, $stateParams){
  $scope.productId = $stateParams.productId;
  

}]);
