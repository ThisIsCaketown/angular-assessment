angular.module('assessment')
.directive('product', function(){
  return{
    restrict: 'E',
    templateUrl: './views/product-tmpl.html',
    controller: function($scope, mainService, $stateParams){
        mainService.getProducts()
        .then(function(products){
          $scope.products = products.data;
        });
        mainService.getOneProduct($stateParams.id)
        .then(function(response){
          $scope.yourProduct = response.data;
        });
    },
  scope: {
    product: '=',
    id: '='
  },
  link(scope, attrib, elem){

  }
}
})
