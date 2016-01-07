const angular = require("angular");
const angularRoute = require("angular-route");
const ngModule = angular.module("application", ["ngRoute"]);

require("./components")(ngModule);
require("./home/controllers/home.js")(ngModule);

ngModule.config(["$routeProvider", ($routeProvider) => {
    $routeProvider
        .when("/home", {
            templateUrl: "./app/home/templates/index.html",
            controller: "HomeController"
        }).otherwise({
            redirectTo: "/home"
        });
}]);