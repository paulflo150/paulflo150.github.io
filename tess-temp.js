(function () {

    'use strict';

    var module = angular.module('tessTemp', []);

    module.directive('layout', [function () {
        return {
            link: function (scope, element, attrs) {                
                element.addClass('layout');
                if (attrs.layout)
                    element.addClass('layout-'+ attrs.layout);
            }
        };
    }]);

    module.directive('flex', [function () {
        return {
            link: function (scope, element, attrs) {
                element.addClass('flex');
                if (attrs.flex)
                    element.addClass('flex-' + attrs.flex);
            }
        };
    }]);

    module.directive('layoutAlign', [function () {
        return {
            link: function (scope, element, attrs) {
                if (attrs.layoutAlign)
                    element.addClass('layout-align-' + attrs.layoutAlign.replace(/ /g, "-"));
            }
        };
    }]);

    module.directive('flexOrder', [function () {
        return {
            link: function (scope, element, attrs) {
                if (attrs.flexOrder)
                    element.addClass('flex-order-' + attrs.flexOrder);
            }
        };
    }]);

    module.directive('offset', [function () {
        return {
            link: function (scope, element, attrs) {
                if (attrs.offset)
                    element.addClass('offset-' + attrs.offset);
            }
        };
    }]);

    module.directive('layoutPadding', [function () {
        return {
            link: function (scope, element, attrs) {
                element.addClass('layout-padding');                
            }
        };
    }]);  

    module.directive('layoutWrap', [function () {
        return {
            link: function (scope, element, attrs) {
                element.addClass('layout-wrap');
            }
        };
    }]);

    module.directive('layoutFill', [function () {
        return {
            link: function (scope, element, attrs) {
                element.addClass('layout-fill');
            }
        };
    }]);
})();