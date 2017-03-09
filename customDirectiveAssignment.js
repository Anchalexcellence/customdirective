var app = angular.module('customDirectiveApp', []);
app.controller('customDirectiveController', function($scope) {


});
app.directive('dropdown', function($document) {
    console.log(">>>>>>>>>>>>>>>>>>>", $document)
    return {
        restrict: "C",
        link: function(scope, elem) {
            elem.bind('click', function() {
                elem.toggleClass('dropdown-active');

                elem.addClass('active');

            });

            $document.bind('click', function() {
                if (!elem.hasClass('active')) {
                    elem.removeClass('dropdown-active');

                }

                elem.removeClass('active');

            });

        }
    }
});
