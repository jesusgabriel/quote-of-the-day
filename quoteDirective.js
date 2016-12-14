app.directive("quoteDirective",function(){
  return{
    restrict:'E',
    scope: {
      quoteObj: "="
    },
    templateUrl: 'quote-template.html',
    link: function(scope, elem, attrs){

    }
  };
})
