
app.factory("quoteService", ["$http", function($http){
  var quote = null;
  function loadQuote(){
    return $http.get("http://fvi-grad.com:4004/quote")
    .then(res=>{
      quote = res;
      return res;
      })
      .catch(err=>console.log(err));
    }
    function getQuote(){
      return quote;
    }
    return {
      loadQuote: loadQuote,
      getQuote: getQuote,
      quoteReady: function(){
        return quote != null;
      }
    };
  }]);
