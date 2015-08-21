(function () {

  'use strict';

  angular.module('material.layouts', ['material.core'])
      .directive('layout'              , attributeDirective('layout'      , true)  )
      .directive('layout-sm'           , attributeDirective('layout-sm'   , true)  )
      .directive('layout-gt-sm'        , attributeDirective('layout-gt-sm', true)  )
      .directive('layout-md'           , attributeDirective('layout-md'   , true)  )
      .directive('layout-gt-md'        , attributeDirective('layout-gt-md', true)  )
      .directive('layout-lg'           , attributeDirective('layout-lg'   , true)  )
      .directive('layout-gt-lg'        , attributeDirective('layout-gt-lg', true)  )
      .directive('flex'                , attributeDirective('flex'        , true)  )
      .directive('flex-sm'             , attributeDirective('flex-sm'     , true)  )
      .directive('flex-gt-sm'          , attributeDirective('flex-gt-sm'  , true)  )
      .directive('flex-md'             , attributeDirective('flex-md'     , true)  )
      .directive('flex-gt-md'          , attributeDirective('flex-gt-md'  , true)  )
      .directive('flex-lg'             , attributeDirective('flex-lg'     , true)  )
      .directive('flex-gt-lg'          , attributeDirective('flex-gt-md'  , true)  )
      .directive('layout-align'        , attributeDirective('layout-align')        )
      .directive('layout-align-sm'     , attributeDirective('layout-align-sm')     )
      .directive('layout-align-gt-sm'  , attributeDirective('layout-align-gt-sm')  )
      .directive('layout-align-md'     , attributeDirective('layout-align-md')     )
      .directive('layout-align-gt-md'  , attributeDirective('layout-align-gt-md')  )
      .directive('layout-align-lg'     , attributeDirective('layout-align-lg')     )
      .directive('layout-align-gt-lg'  , attributeDirective('layout-align-gt-lg')  )
      .directive('flex-order'          , attributeDirective('flex-order')          )
      .directive('flex-order-sm'       , attributeDirective('flex-order-sm')       )
      .directive('flex-order-gt-sm'    , attributeDirective('flex-order-gt-sm')    )
      .directive('flex-order-md'       , attributeDirective('flex-order-md')       )
      .directive('flex-order-gt-md'    , attributeDirective('flex-order-gt-md')    )
      .directive('flex-order-lg'       , attributeDirective('flex-order-lg')       )
      .directive('flex-order-gt-lg'    , attributeDirective('flex-order-gt-lg')    )
      .directive('offset'              , attributeDirective('offset')              )
      .directive('offset-sm'           , attributeDirective('offset-sm')           )
      .directive('offset-gt-sm'        , attributeDirective('offset-gt-sm')        )
      .directive('offset-md'           , attributeDirective('offset-md')           )
      .directive('offset-gt-md'        , attributeDirective('offset-gt-md')        )
      .directive('offset-lg'           , attributeDirective('offset-lg')           )
      .directive('offset-gt-lg'        , attributeDirective('offset-gt-lg')        )
      .directive('layout-padding'      , attributeDirective('layout-padding')      )
      .directive('layout-wrap'         , attributeDirective('layout-wrap')         )
      .directive('layout-fill'         , attributeDirective('layout-fill')         );

  /**
   * To convert use of attribute selectors to class selectors,
   * use a directive to do the work.
   */
  function attributeDirective( className, addDirectiveAsClass ) {
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
