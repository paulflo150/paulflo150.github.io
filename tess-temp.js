(function () {

  'use strict';

  angular.module('material.layouts', ['material.core'])

      // Attribute directives with optional value(s)
      .directive('layout'              , attribute_withValue('layout'      , true)  )
      .directive('layout-sm'           , attribute_withValue('layout-sm'   , true)  )
      .directive('layout-gt-sm'        , attribute_withValue('layout-gt-sm', true)  )
      .directive('layout-md'           , attribute_withValue('layout-md'   , true)  )
      .directive('layout-gt-md'        , attribute_withValue('layout-gt-md', true)  )
      .directive('layout-lg'           , attribute_withValue('layout-lg'   , true)  )
      .directive('layout-gt-lg'        , attribute_withValue('layout-gt-lg', true)  )
      .directive('flex'                , attribute_withValue('flex'        , true)  )
      .directive('flex-sm'             , attribute_withValue('flex-sm'     , true)  )
      .directive('flex-gt-sm'          , attribute_withValue('flex-gt-sm'  , true)  )
      .directive('flex-md'             , attribute_withValue('flex-md'     , true)  )
      .directive('flex-gt-md'          , attribute_withValue('flex-gt-md'  , true)  )
      .directive('flex-lg'             , attribute_withValue('flex-lg'     , true)  )
      .directive('flex-gt-lg'          , attribute_withValue('flex-gt-md'  , true)  )
      .directive('layout-align'        , attribute_withValue('layout-align')        )
      .directive('layout-align-sm'     , attribute_withValue('layout-align-sm')     )
      .directive('layout-align-gt-sm'  , attribute_withValue('layout-align-gt-sm')  )
      .directive('layout-align-md'     , attribute_withValue('layout-align-md')     )
      .directive('layout-align-gt-md'  , attribute_withValue('layout-align-gt-md')  )
      .directive('layout-align-lg'     , attribute_withValue('layout-align-lg')     )
      .directive('layout-align-gt-lg'  , attribute_withValue('layout-align-gt-lg')  )
      .directive('flex-order'          , attribute_withValue('flex-order')          )
      .directive('flex-order-sm'       , attribute_withValue('flex-order-sm')       )
      .directive('flex-order-gt-sm'    , attribute_withValue('flex-order-gt-sm')    )
      .directive('flex-order-md'       , attribute_withValue('flex-order-md')       )
      .directive('flex-order-gt-md'    , attribute_withValue('flex-order-gt-md')    )
      .directive('flex-order-lg'       , attribute_withValue('flex-order-lg')       )
      .directive('flex-order-gt-lg'    , attribute_withValue('flex-order-gt-lg')    )
      .directive('offset'              , attribute_withValue('offset')              )
      .directive('offset-sm'           , attribute_withValue('offset-sm')           )
      .directive('offset-gt-sm'        , attribute_withValue('offset-gt-sm')        )
      .directive('offset-md'           , attribute_withValue('offset-md')           )
      .directive('offset-gt-md'        , attribute_withValue('offset-gt-md')        )
      .directive('offset-lg'           , attribute_withValue('offset-lg')           )
      .directive('offset-gt-lg'        , attribute_withValue('offset-gt-lg')        )

      // Attribute directives with no value(s )
      .directive('layout-padding'      , attribute_noValue('layout-padding')        )
      .directive('layout-wrap'         , attribute_noValue('layout-wrap')           )
      .directive('layout-fill'         , attribute_noValue('layout-fill')           );

  /**
   * To convert use of attribute selectors to class selectors,
   * use a directive to do the work.
   */
  function attribute_withValue( className, addDirectiveAsClass ) {
      return [function() {
          var directive = $normalize(className);
          return {
              /**
               * Creates a postLink function for ngMaterial Layout attribute directive
               * Note: This provides easy translation to switch ngMaterial
               * attribute selectors to CLASS selectors and directives.
               *
               * !! This is important for IE Browser performance
               *
               * @param directive String like flextGtMd
               * @param classname String like flex-gt-md
               */
              link: function(link, element, attrs) {
                  if ( addDirectiveAsClass )  element.addClass(directive);
                  if ( attrs[directive] )     element.addClass(directive + "-" + attrs[directive].replace(/ /g, "-"));
              }
          };
      }];
  }

    /**
     * To convert use of attribute selectors to class selectors,
     * use a directive to do the work.
     */
    function attribute_noValue( className ) {
        return [function() {
            var directive = $normalize(className);
            return {
                /**
                 * Creates a postLink function for ngMaterial Layout attribute directive
                 * Note: This provides easy translation to switch ngMaterial
                 * attribute selectors to CLASS selectors and directives.
                 *
                 * !! This is important for IE Browser performance
                 *
                 * @param directive String like flextGtMd
                 * @param classname String like flex-gt-md
                 */
                link: function(link, element, attrs) {
                    element.addClass(directive);
                }
            };
        }];
    }

  /**
   * Converts all accepted directives format into proper directive name.
   * @param name Name to normalize
   */
  function $normalize(name) {
      return camelCase(name.replace(PREFIX_REGEXP, ''));
  }

  var PREFIX_REGEXP = /^((?:x|data)[\:\-_])/i;

  /**
   * Converts snake_case to camelCase.
   * Also there is special case for Moz prefix starting with upper case letter.
   * @param name Name to normalize
   */
  function camelCase(name) {
      return name.
              replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
                  return offset ? letter.toUpperCase() : letter;
              }).
              replace(MOZ_HACK_REGEXP, 'Moz$1');
  }

})();
