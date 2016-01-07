module.exports = (ngModule) => {
    ngModule.directive("hello", () => {

        require("!style!css!stylus!./styles.styl");

        return {
            restrict: "E",
            scope: {},
            template: require("./template.html"),
            controllerAs: "ctrl",
            controller: function() {
                var ctrl = this;
                ctrl.greeting = "Hello webpack";
            }
        };
    });
};