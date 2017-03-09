var app = angular.module('todoModule');

app.controller('todoController', function($scope, todoService) {

  todoService.retrieveData().then(function() {
    $scope.thingsToDo = todoService.updateList();
    console.log($scope.thingsToDo);
  });

  // Add a function for each CRUD command. One for GET, POST, PUT, DELETE

});
