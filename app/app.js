angular.module('assessment', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('home', {
    templateUrl: './views/home.html',
    controller: 'homeCtrl',
    url: '/'
  })
  .state('about',{
    templateUrl: './views/about.html',
    controller: 'aboutCtrl',
    url:'/about'
  })
  .state('blog',{
    templateUrl: './views/blog.html',
    controller: 'blogCtrl',
    url:'/blog'
  })
  .state('shop',{
    templateUrl: './views/shop.html',
    controller: 'shopCtrl',
    url:'/shop'
  })
  .state('deets',{
    templateUrl: './views/product-details.html',
    controller: 'deetsCtrl',
    url:'/details/:id'
  })
})
