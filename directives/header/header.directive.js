app.directive('header', [
function() {
	return {
		restrict: 'E',
		scope: {
            options: "="
		},
		replace: false,
		templateUrl: 'directives/header/header.directive.html',
		controller: function($scope){
            
		},
		link : function($scope, $element, $attrs) {
            
		}
	}
}]);