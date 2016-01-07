module.exports = (ngModule) => {
    ngModule.controller("HomeController", function($scope) {
        console.log("Hello");
        $scope.someVar = "variable";
    });
};