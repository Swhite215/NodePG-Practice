var app = angular.module('todoModule');

// Need to inject something to make AJAX calls
app.factory('todoService', function($http) {

  var todos = [];

  return {
    // Establish our key/value pairs for our functions
    retrieveData: retrieveData,
    updateList: updateList
  }

  // Write out our functions, one for each CRUD command(GET, POST, PUT, DELETE)
  function retrieveData() {
    var promise = $http({
      method: 'GET',
      url: '/get-things'
    }).then(function successfulCallback(response) {
      console.log(response);
      todos = response.data;
    }, function(error) {
      console.log(error);
    });
    return promise;
  }

  function updateList() {
    return todos;
  }


});
