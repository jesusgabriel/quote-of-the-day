var app = angular.module("QuoteOfTheDay", [])

app.controller("MainController", ['$scope', 'quoteService', function ($scope, quoteService) {
$scope.quote ={};
quoteService.loadQuote().then(res=>{
  console.log(res)
  $scope.quote = res.data;
});
}]);
