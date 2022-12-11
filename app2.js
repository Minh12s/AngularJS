var validationApp = angular.module('validationApp',[]);
validationApp.controller('maincontroller',function ($scope){
    $scope.submitForm = function (isValid){
        if(isValid){
            alert('form is valid');
        }
    };
});