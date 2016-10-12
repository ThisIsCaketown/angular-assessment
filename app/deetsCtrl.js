angular.module('assessment')
.controller('deetsCtrl', function($scope, mainService, $stateParams){
  mainService.getProducts()
  .then(function(products){
    $scope.products = products.data;
  });
  mainService.getOneProduct($stateParams.id)
  .then(function(response){
    $scope.yourProduct = response.data;
  });
})
