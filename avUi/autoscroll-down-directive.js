/**
 * This file is part of agora-gui-common.
 * Copyright (C) 2015-2016  Agora Voting SL <agora@agoravoting.com>

 * agora-gui-common is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License.

 * agora-gui-common  is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.

 * You should have received a copy of the GNU Affero General Public License
 * along with agora-gui-common.  If not, see <http://www.gnu.org/licenses/>.
**/

/**
 * Always scrolls to bottom the div to which the directive is attached when
 * the observed property is modified.
 *
 * Example:
 *
 *    <div av-autoscroll-down ng-bind-html="log"></div>
 */
angular.module('avUi')
  .directive('avScrollToBottom', function($timeout) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        scope.$watch(
          function () {
            return element.children().length;
          },
          function () {
            element.animate({ scrollTop: element.prop('scrollHeight') }, 300);
          }
        );
      }
    };
});