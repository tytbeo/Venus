var app = angular.module('myApp',['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "html/home.html"
  })
  .when("/gallery", {
    templateUrl : "html/gallery.html"
  })
  .when("/products", {
    templateUrl : "html/products.html"
  })
  .when("/aboutus", {
    templateUrl : "html/aboutus.html"
  })
  .when("/contactus", {
    templateUrl : "html/contactus.html"
  });
});
