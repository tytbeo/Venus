var app = angular.module('myApp',['ui.router','ui.bootstrap','ngCookies', 'slick', 'ngMaterial', 'hm.readmore']);

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
  .state("cart", {
    url: '/cart',
    templateUrl : "html/cart.html",
    controller : "cartCtrl"
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
  $scope.products = product;
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
    {id:'001',class:'teapot ceramic',name:'BLUE GLAZE TEAPOT SET  3',img:'images/product/product1.jpg'},
    {id:'002',class:'teapot ceramic',name:'BLUE GLAZE TEAPOT SET',img:'images/product/product2.jpg'},
    {id:'003',class:'teapot ceramic',name:'CERAMIC PITCHER SET 1',img:'images/product/product3.jpg'},
    {id:'004',class:'teapot ceramic',name:'CERAMIC PITCHER SET 3',img:'images/product/product10.jpg'},
    {id:'005',class:'vase ceramic',name:'CERAMIC VASE',img:'https://cb2.scene7.com/is/image/CB2/SurReactiveVaseSHS19/?$web_product_hero$&180917104904&wid=625&hei=625'},
    {id:'006',class:'vase ceramic',name:'BLUE GLAZE VASE',img:'images/product/product6.jpg'},
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
  $scope.products = product;
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
app.controller('detailsCtrl',['$scope', '$stateParams','$cookies',function($scope, $stateParams,$cookies){
  $scope.productId = $stateParams.ProductId;
  var product = [
      {
        id : '001' ,
        imgsources: [
          { image: 'images/ProductDetails/img00.jpeg' },
          { image: 'images/ProductDetails/img01.jpeg' },
          { image: 'images/ProductDetails/img02.jpeg' },
          { image: 'images/ProductDetails/img03.jpeg' },
          { image: 'images/ProductDetails/img04.jpeg' }
        ],
        name: 'Raw Marble Object',
        sku: 'DO001',
        description: 'Image 00',
        summary: 'Rock Formation. Marble in its most natural state. Unpolished, unfinished and undeniably beautiful.',
        moresummary: `Each piece will be completely unique in shape, color and texture. Raw Marble Object. 5 inches dia.
          <ul>
              <li>Marble</li>
              <li>Each will be unique</li>
              <li>Wipe with a soft cloth</li>
              <li>Made in Vietnam</li>
          </ul>`,
        price: 39.95
      },
      {
        id : '002' ,
        imgsources: [
          { image: 'images/ProductDetails/img10.jpeg' },
          { image: 'images/ProductDetails/img11.jpeg' },
          { image: 'images/ProductDetails/img12.jpeg' },
          { image: 'images/ProductDetails/img13.jpeg' },
          { image: 'images/ProductDetails/img14.jpeg' }
        ],
        name: 'Sur Reactive Vase',
        sku: 'CV002',
        description: 'Image 10',
        summary: 'Dark Waters. Teardrop-shaped ceramic vase holds fresh greenery and stems in moody blue hues.',
        moresummary: `Deep blue reactive glaze washes over top, finishing each piece unique.
        <ul>
            <li>Overall Dimensions: Height: 8.75" X Diameter: 6"</li>
            <li>Ceramic with dark blue reactive glaze</li>
            <li>Each will be unique</li>
            <li>Wipe with a soft cloth</li>
            <li>Made in Vietnam</li>
        </ul>`,
        price: 29.95
      },
      {
        id : '003' ,
        imgsources: [
          { image: 'images/ProductDetails/img20.jpeg' },
          { image: 'images/ProductDetails/img21.jpeg' },
          { image: 'images/ProductDetails/img22.jpeg' },
          { image: 'images/ProductDetails/img23.jpeg' },
          { image: 'images/ProductDetails/img24.jpeg' }
        ],
        name: 'Fuel Navy Credenza',
        sku: 'FS003',
        description: 'Image 20',
        summary: 'Blue Room. Clean lines in glossy navy lacquer span almost five feet to broaden storage options.',
        moresummary: `Low-profile frame with expansive top can even pedestal a widescreen. Two clean-front doors hide two adjustable A/V-ready shelves (one on each side) with a gap and cutouts for cord management. Engineered wood case floats on slim steel L feet in brushed nickel-plated finish.
        <ul>
            <li>Low-emission engineered wood with hi-gloss navy finish</li>
            <li>Steel L feet with a brushed nickel-plated finish</li>
            <li>Top holds TV or stereo up to 50 lbs. evenly distributed</li>
            <li>Shelves have built-in gaps for cords; back has cord cutouts</li>
            <li>Clean with a soft, dry cloth</li>
            <li>Made in Vietnam</li>
        </ul>`,
        price: 499
      },
      {
        id : '004',
        imgsources: [
          { image: 'images/ProductDetails/img30.jpeg' },
          { image: 'images/ProductDetails/img31.jpeg' },
          { image: 'images/ProductDetails/img32.jpeg' },
          { image: 'images/ProductDetails/img33.jpeg' },
          { image: 'images/ProductDetails/img34.jpeg' }
        ],
        name: 'Rush Brushed Gold Flatware Set',
        sku: 'TW004',
        description: 'Image 30',
        summary: 'Gold Diggers. Get a hold on gold at the table. Flatware is forged with substantial heft in 18/0 stainless steel (13/0 for the knife) with a gold-colored finish.',
        moresummary: `Matte finish handles contrast gleaming polished heads. Five-piece settings dine a party of four.
        <ul>
            <li>18/0 forged stainless steel</li>
            <li>Gold finish with matte handles</li>
            <li>Hand wash</li>
            <li>Hand drying is recommended to prevent discoloration and film build-up</li>
            <li>Made in Vietnam</li>
        </ul>`,
        price: 89.95
      },
      {
        id : '005',
        imgsources: [
          { image: 'images/ProductDetails/img40.jpeg' },
          { image: 'images/ProductDetails/img41.jpeg' },
          { image: 'images/ProductDetails/img42.jpeg' },
          { image: 'images/ProductDetails/img43.jpeg' },
          { image: 'images/ProductDetails/img44.jpeg' }
        ],
        name: 'Bondi Mosaic Wall Decor',
        sku: 'HD005',
        description: 'Image 40',
        summary: 'Earth And Sky. Abstract landscape is crafted from strips of natural water hyacinth.',
        moresummary: `Fibers are dyed an earthy spectrum of blue, black, gold and red then folded into triangular shapes and arranged into the conceptual mosaic you see here. We love the texture it adds to any space.
        <ul>
            <li>Water hyacinth and engineered wood</li>
            <li>Each will be unique</li>
            <li>Different wall materials may require different types of fasteners; use fasteners suitable for the walls in your home</li>
            <li>Dust with soft, dry cloth</li>
            <li>Made in Vietnam</li>
        </ul>`,
        price: 199
      },
      {
        id : '006',
        imgsources: [
          { image: 'images/ProductDetails/img50.jpeg' },
          { image: 'images/ProductDetails/img51.jpeg' },
          { image: 'images/ProductDetails/img52.jpeg' },
          { image: 'images/ProductDetails/img53.jpeg' },
          { image: 'images/ProductDetails/img54.jpeg' }
        ],
        name: '4 Star Pillar Candle Holders',
        sku: 'CH006',
        description: 'Image 50',
        summary: 'Point Made. Cast aluminum pillar candle holder makes strong sculptural statement in antique brass finish.',
        moresummary: `Attention-grabbing from every angle.
        <ul>
            <li>Cast aluminum with antiqued brass finish</li>
            <li>Each will be unique</li>
            <li>Max pillar candle height: 6"</li>
            <li>Clean with a soft cloth</li>
            <li>Made in Vietnam</li>
        </ul>`,
        price: 44.95
      },
      {
        id : '007',
        imgsources: [
          { image: 'images/ProductDetails/img60.jpeg' },
          { image: 'images/ProductDetails/img61.jpeg' },
          { image: 'images/ProductDetails/img62.jpeg' },
          { image: 'images/ProductDetails/img63.jpeg' },
          { image: 'images/ProductDetails/img64.jpeg' }
        ],
        name: 'Artemis Round Dining Table',
        sku: 'WD007',
        description: 'Image 60',
        summary: 'Feast Al Fresco. Designer Jannis Ellenberger explores the beauty of a spare, simple form. Defined by planes and angles, the architectural profile is elevated by a the rich tones of 100% acacia wood with a natural oiled finish that will naturally patina and lighten over time.',
        moresummary: `Unique angled legs support a slatted surface with built-in umbrella hole and room to seat 4. Makes the perfect dining companion with the Artemis Dining Chairs and Bench.
        <ul>
            <li>Acacia wood with galvanized steel hardware</li>
            <li>Wood will naturally patina and age with time</li>
            <li>Outdoor-safe; cover or store indoors during inclement weather and when not in use</li>
            <li>Clean with a soft damp cloth; no abrasive cleaners</li>
            <li>Made in Vietnam</li>
        </ul>`,
        price: 399
      },
      {
        id : '008',
        imgsources: [
          { image: 'images/ProductDetails/img70.jpeg' },
          { image: 'images/ProductDetails/img71.jpeg' },
          { image: 'images/ProductDetails/img72.jpeg' },
          { image: 'images/ProductDetails/img73.jpeg' },
          { image: 'images/ProductDetails/img74.jpeg' }
        ],
        name: 'Daphne Glass Appetizer Plate Set Of 8',
        sku: 'GD008',
        description: 'Image 70',
        summary: 'Fresh Start. Decorative pressed-glass appetizer plates dish small bites with vintage attitude.',
        moresummary: `Layer with your dinnerware for a fresh take on everyday. Pair with Daphne Low Glass Bowl.
        <ul>
            <li>7.5" dia. x 1"H</li>
            <li>Soda lime glass</li>
            <li>Dishwasher- and microwave-safe</li>
            <li>Made in Vietnam</li>
        </ul>`,
        price: 19.95
      },
  ];
  $scope.products = product;
  Array.prototype.getIndexOf = function(el) {
    var arr = this;
    for (var i=0; i<arr.length; i++){
       console.log(arr[i].id);
       if(arr[i].id==el){
         return i;
       }
    }
    return -1;
  };
  var getIndex = function(){
    var paramId = $stateParams.productId;
    return product.getIndexOf(paramId);
  };

  // function to show price * quantity
  $scope.qtyFunc = function(vals) {
    var basePrice = product.price;

    console.log(vals);
    $('#result').html('$' + (vals * basePrice).toFixed(2));
  };
  // end of function to show price * quantity

  $scope.limit = 1;
  $scope.lessText = "Read less";
  $scope.moreText = "Read more";
  $scope.dotsClass = "toggle-dots-grey";
  $scope.linkClass = "toggle-link-yellow";
}]);
