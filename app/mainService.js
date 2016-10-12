angular.module('assessment')
.service('mainService', function($http){
  var myUrl = 'http://practiceapi.devmountain.com';

  this.getProducts = function(){
    return $http.get(myUrl + '/products')
  }

  this.getOneProduct = function(id){
    return $http.get(myUrl + '/products/' + id)
  }

})
