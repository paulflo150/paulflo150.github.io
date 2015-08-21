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

    module.directive('layoutSm', [function () {
        return {
            link: function (scope, element, attrs) {
                element.addClass('layout-sm');
                if (attrs.layoutSm)
                    element.addClass('layout-sm-' + attrs.layoutSm);
            }
        };
    }]);

    module.directive('layoutGtSm', [function () {
        return {
            link: function (scope, element, attrs) {
                element.addClass('layout-gt-sm');
                if (attrs.layoutGtSm)
                    element.addClass('layout-gt-sm-' + attrs.layoutGtSm);
            }
        };
    }]);

    module.directive('layoutMd', [function () {
        return {
            link: function (scope, element, attrs) {
                element.addClass('layout-md');
                if (attrs.layoutMd)
                    element.addClass('layout-md-' + attrs.layoutMd);
            }
        };
    }]);

    module.directive('layoutGtMd', [function () {
        return {
            link: function (scope, element, attrs) {
                element.addClass('layout-gt-md');
                if (attrs.layoutGtMd)
                    element.addClass('layout-gt-md-' + attrs.layoutGtMd);
            }
        };
    }]);

    module.directive('layoutLg', [function () {
        return {
            link: function (scope, element, attrs) {
                element.addClass('layout-lg');
                if (attrs.layoutLg)
                    element.addClass('layout-lg-' + attrs.layoutLg);
            }
        };
    }]);

    module.directive('layoutGtLg', [function () {
        return {
            link: function (scope, element, attrs) {
                element.addClass('layout-gt-lg');
                if (attrs.layoutGtLg)
                    element.addClass('layout-gt-lg-' + attrs.layoutGtLg);
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

    module.directive('flexSm', [function () {
        return {
            link: function (scope, element, attrs) {
                element.addClass('flex-sm');
                if (attrs.flexSm)
                    element.addClass('flex-sm-' + attrs.flexSm);
            }
        };
    }]);

    module.directive('flexGtSm', [function () {
        return {
            link: function (scope, element, attrs) {
                element.addClass('flex-gt-sm');
                if (attrs.flexGtSm)
                    element.addClass('flex-gt-sm-' + attrs.flexGtSm);
            }
        };
    }]);

    module.directive('flexMd', [function () {
        return {
            link: function (scope, element, attrs) {
                element.addClass('flex-md');
                if (attrs.flexMd)
                    element.addClass('flex-md-' + attrs.flexMd);
            }
        };
    }]);

    module.directive('flexGtMd', [function () {
        return {
            link: function (scope, element, attrs) {
                element.addClass('flex-gt-md');
                if (attrs.flexGtMd)
                    element.addClass('flex-gt-md-' + attrs.flexGtMd);
            }
        };
    }]);

    module.directive('flexLg', [function () {
        return {
            link: function (scope, element, attrs) {
                element.addClass('flex-lg');
                if (attrs.flex)
                    element.addClass('flex-lg-' + attrs.flex);
            }
        };
    }]);

    module.directive('flexGtLg', [function () {
        return {
            link: function (scope, element, attrs) {
                element.addClass('flex-gt-lg');
                if (attrs.flex)
                    element.addClass('flex-gt-lg-' + attrs.flex);
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

    module.directive('layoutAlignSm', [function () {
        return {
            link: function (scope, element, attrs) {
                if (attrs.layoutAlignSm)
                    element.addClass('layout-align-sm-' + attrs.layoutAlignSm.replace(/ /g, "-"));
            }
        };
    }]);

    module.directive('layoutAlignGtSm', [function () {
        return {
            link: function (scope, element, attrs) {
                if (attrs.layoutAlignGtSm)
                    element.addClass('layout-align-gt-sm' + attrs.layoutAlignGtSm.replace(/ /g, "-"));
            }
        };
    }]);

    module.directive('layoutAlignMd', [function () {
        return {
            link: function (scope, element, attrs) {
                if (attrs.layoutAlignMd)
                    element.addClass('layout-align-md-' + attrs.layoutAlignMd.replace(/ /g, "-"));
            }
        };
    }]);

    module.directive('layoutAlignGtMd', [function () {
        return {
            link: function (scope, element, attrs) {
                if (attrs.layoutAlignGtMd)
                    element.addClass('layout-align-gt-md-' + attrs.layoutAlignGtMd.replace(/ /g, "-"));
            }
        };
    }]);

    module.directive('layoutAlignLg', [function () {
        return {
            link: function (scope, element, attrs) {
                if (attrs.layoutAlignLg)
                    element.addClass('layout-align-lg-' + attrs.layoutAlignLg.replace(/ /g, "-"));
            }
        };
    }]);

    module.directive('layoutAlignGtLg', [function () {
        return {
            link: function (scope, element, attrs) {
                if (attrs.layoutAlignGtLg)
                    element.addClass('layout-align-gt-lg' + attrs.layoutAlignGtLg.replace(/ /g, "-"));
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

    module.directive('flexOrderSm', [function () {
        return {
            link: function (scope, element, attrs) {
                if (attrs.flexOrderSm)
                    element.addClass('flex-order-sm-' + attrs.flexOrderSm);
            }
        };
    }]);

    module.directive('flexOrderGtSm', [function () {
        return {
            link: function (scope, element, attrs) {
                if (attrs.flexOrderGtSm)
                    element.addClass('flex-order-gt-sm' + attrs.flexOrderGtSm);
            }
        };
    }]);

    module.directive('flexOrderMd', [function () {
        return {
            link: function (scope, element, attrs) {
                if (attrs.flexOrderMd)
                    element.addClass('flex-order-md-' + attrs.flexOrderMd);
            }
        };
    }]);

    module.directive('flexOrderGtMd', [function () {
        return {
            link: function (scope, element, attrs) {
                if (attrs.flexOrderGtMd)
                    element.addClass('flex-order-gt-md' + attrs.flexOrderGtMd);
            }
        };
    }]);

    module.directive('flexOrderLg', [function () {
        return {
            link: function (scope, element, attrs) {
                if (attrs.flexOrderLg)
                    element.addClass('flex-order-lg-' + attrs.flexOrderLg);
            }
        };
    }]);

    module.directive('flexOrderGtLg', [function () {
        return {
            link: function (scope, element, attrs) {
                if (attrs.flexOrderGtLg)
                    element.addClass('flex-order-gt-lg-' + attrs.flexOrderGtLg);
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

    module.directive('offsetSm', [function () {
        return {
            link: function (scope, element, attrs) {
                if (attrs.offsetSm)
                    element.addClass('offset-sm-' + attrs.offsetSm);
            }
        };
    }]);

    module.directive('offsetGtSm', [function () {
        return {
            link: function (scope, element, attrs) {
                if (attrs.offsetGtSm)
                    element.addClass('offset-gt-sm-' + attrs.offsetGtSm);
            }
        };
    }]);

    module.directive('offsetMd', [function () {
        return {
            link: function (scope, element, attrs) {
                if (attrs.offsetMd)
                    element.addClass('offset-md-' + attrs.offsetMd);
            }
        };
    }]);

    module.directive('offsetGtMd', [function () {
        return {
            link: function (scope, element, attrs) {
                if (attrs.offsetGtMd)
                    element.addClass('offset-gt-md-' + attrs.offsetGtMd);
            }
        };
    }]);

    module.directive('offsetLg', [function () {
        return {
            link: function (scope, element, attrs) {
                if (attrs.offsetLg)
                    element.addClass('offset-lg-' + attrs.offsetLg);
            }
        };
    }]);

    module.directive('offsetGtLg', [function () {
        return {
            link: function (scope, element, attrs) {
                if (attrs.offsetGtLg)
                    element.addClass('offset-gt-lg-' + attrs.offsetGtLg);
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